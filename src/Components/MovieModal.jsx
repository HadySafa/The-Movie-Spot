import { useContext, useEffect } from "react";
import { MyContext } from "../Context";

function MovieModal({ setViewModal, movie }) {

    const { favList, setFavList } = useContext(MyContext)

    function handleClose() {
        setViewModal(false)
    }

    function handleButtonClick(e) {
        if(e.target.innerText === "Remove from Favorites"){
            handleRemoveFromFavorites();
        }
        else{
            handleAddToFavorites();
        }
    }

    function handleAddToFavorites() {
        setFavList([...favList, movie])
        handleClose()
    }

    function handleRemoveFromFavorites() {
        setFavList(favList.filter((element) => element.imdbID !== movie.imdbID))
        handleClose()
    }

    function inFavorites(movie) {
        if (favList && favList.length && favList.length > 0) {
            let present = false;
            favList.map((element) => {
                if (element.imdbID === movie.imdbID) {
                    present = true;
                }
            })
            return present
        }
    }

    useEffect( () => {

        function eventHandler(e){
            if(e.target.id === "overlay"){
                handleClose();
            }
        }

        window.addEventListener("click",eventHandler)

        return () => window.removeEventListener("click",eventHandler)

    },[])

    return (

        <div id="overlay" className=" fixed top-0 w-[100vw] h-[100vh] bg-black bg-opacity-80 flex justify-center items-center">

            <div className="bg-gray-200  tablet:flex-row w-[80vw] tablet:w-[50vw]  p-4 flex flex-col gap-4 items-center font-serif">

                <img className="w-[90%] tablet:w-[50%] object-contain block" src={movie.Poster} alt="Movie's Poster" />

                <div className="flex flex-col gap-4 text-lg tablet:text-xl laptop:text-2xl font-bold w-[90%] laptop:w-[50%]">

                    <h4 className="text-red uppercase text-center tablet:text-start">{movie.Title}</h4>
                    <p>
                        <span className="text-red">
                            {movie.Type === 'series' ? "Years: " : "Year: "}</span>
                        {movie.Year}
                    </p>
                    <p className="capitalize">
                        <span className="text-red mr-1">Type:</span>
                        {movie.Type}
                    </p>
                    <button onClick={handleButtonClick} className="w-[100%] bg-dark-gray text-gray-100 py-1 laptop:w-[80%] text-[50%] hover:rounded-md transition-all">
                        {inFavorites(movie) ? "Remove from Favorites" : "Add to Favorites"}
                    </button>
                </div>

            </div>

        </div>

    )

}

export default MovieModal