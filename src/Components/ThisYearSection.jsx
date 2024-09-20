import { useState, useEffect } from "react";
import MovieHeading from "./MovieHeading";
import MovieList from "./MovieList";

function ThisYearSection() {

    const [movies, setMovies] = useState([])
    const year = new Date().getFullYear()
    const genres = ["action", "comedy", "romance","horror"]

    async function fetchApi(genre) { 

        try {
            const response = await fetch(`https://www.omdbapi.com/?s=${genre}&y=${year}&apikey=51dc81ec`);
            if (!response.ok) throw new Error("Error fetching data!")
            const data = await response.json();
            if (data) {
                const newMovies = data.Search;
                setMovies((prev) => prev.concat(newMovies))
            }
        }  
        catch (error) {
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
            <MovieList movies={movies} />
        </>
    )

}

export default ThisYearSection