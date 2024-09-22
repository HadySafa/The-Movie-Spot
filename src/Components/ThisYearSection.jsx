import { useState, useEffect } from "react";
import MovieHeading from "./MovieHeading";
import MovieList from "./MovieList";
import {PropagateLoader} from 'react-spinners'

function ThisYearSection() {

    const [movies, setMovies] = useState([])
    const [pending, setPending] = useState(false)
    const year = new Date().getFullYear()
    const genres = ["action", "comedy", "romance","horror"]

    async function fetchApi(genre) { 

        try {
            setPending(true)
            const response = await fetch(`https://www.omdbapi.com/?s=${genre}&y=${year}&apikey=51dc81ec`);
            if (!response.ok) throw new Error("Error fetching data!")
            const data = await response.json();
            if (data) {
                setPending(false)
                const newMovies = data.Search;
                setMovies((prev) => prev.concat(newMovies))
            }
        }  
        catch (error) {
            setPending(false)
            console.log(error);
        }

    }

    useEffect(() => {
        genres.map( (genre) => {
            fetchApi(genre)
        })
    }, [])

    return (
        <>
        <MovieHeading title="This Year" />
        {
            pending
                ? <div className="w-[100vw] min-h-[30vh] laptop:min-h-[40vh] flex justify-center items-center">
                    <PropagateLoader color="#e5e7eb" />
                </div>
                :
                <>
                    <MovieList movies={movies} />
                </>
        }
    </>
    )

}

export default ThisYearSection