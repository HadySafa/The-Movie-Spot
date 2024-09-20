import { useState, useEffect } from "react";
import MovieHeading from "./MovieHeading";
import MovieList from "./MovieList";
import { PropagateLoader } from 'react-spinners'

function Type() {

    const [movies, setMovies] = useState([])
    const [type, setType] = useState("Movie")
    const [pending, setPending] = useState(false)


    async function fetchApi() {
        if (type) {
            try {
                setPending(true)
                const response = await fetch(`https://www.omdbapi.com/?s=Game&type=${type}&apikey=51dc81ec`);
                if (!response.ok) throw new Error("Error fetching data!")
                const data = await response.json();
                if (data) {
                    setPending(false)
                    setMovies(data.Search)
                }
            }
            catch (error) {
                setPending(false)
                console.log(error);
            }
        }

    }

    useEffect(() => {
        fetchApi();
    }, [type])

    return (
        <>
            <MovieHeading title="By Type" />
            {
                pending
                    ? <div className="w-[100vw] min-h-[30vh] laptop:min-h-[40vh] flex justify-center items-center">
                        <PropagateLoader color="#e5e7eb" />
                    </div>
                    :
                    <>
                        <select className="ml-4 mb-4 bg-gray-200 text-dark-gray font-bold outline-none" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="Movie">Movie</option>
                            <option value="Series">Series</option>
                        </select>
                        <MovieList movies={movies} />
                    </>
            }
        </>
    )

}

export default Type