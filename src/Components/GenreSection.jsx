import { useState, useEffect } from "react";
import MovieHeading from "./MovieHeading";
import MovieList from "./MovieList";
import {PropagateLoader} from 'react-spinners'

function GenreSection() {

    const [movies, setMovies] = useState([])
    const [genre, setGenre] = useState("Action")
    const [pending, setPending] = useState(false)


    async function fetchApi() {
        if (genre) {
            try {
                setPending(true)
                const response = await fetch(`http://www.omdbapi.com/?s=${genre}&apikey=51dc81ec`);
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
        console.log(genre)
        fetchApi();
    }, [genre])

    return (
        <>
            <MovieHeading title="By Genre" />
            {
                pending
                    ? <div className="w-[100vw] min-h-[30vh] laptop:min-h-[40vh] flex justify-center items-center">
                        <PropagateLoader color="#e5e7eb" />
                      </div>
                :
                    <>
                        <select className="ml-4 mb-4 bg-gray-200 text-dark-gray font-bold outline-none" value={genre} onChange={(e) => setGenre(e.target.value)}>
                            <option value="Action">Action</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Romance">Romance</option>
                            <option value="Drama">Drama</option>
                            <option value="Horror">Horror</option>
                        </select>
                        <MovieList movies={movies} />
                    </>
            }
        </>
    )

}

export default GenreSection