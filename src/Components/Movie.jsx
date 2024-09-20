import { useState } from "react"
import MovieModal from "./MovieModal"


function Movie({ movie }) {

    const [viewModal,setViewModal] = useState(false)


    function handleViewModal(){
        setViewModal(true)
    }



    return (
        <>
            {
                movie && movie.Poster && movie.Poster !== "N/A"
                    ?
                    <div onClick={handleViewModal} className="hover:scale-110 transition-transform
                                    min-w-[45vw] max-w-[45vw]
                                    tablet:min-w-[25vw] tablet:max-w-[25vw]
                                    laptop:min-w-[15vw] laptop:max-w-[15vw]
                                    ">
                        <img className="h-[100%] w-[100%]" src={movie.Poster} alt="Movie's Poster" />
                    </div>
                    : null
            }
            {
                viewModal 
                ? <MovieModal setViewModal={setViewModal} movie={movie} />
                : null  
            }
        </>
    )

}

export default Movie

