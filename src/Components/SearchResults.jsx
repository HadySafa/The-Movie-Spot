import { useContext } from "react"
import { MyContext } from "../Context"
import MovieHeading from "./MovieHeading"
import MovieList from "./MovieList"
import {PropagateLoader} from 'react-spinners'
import {useEffect,useRef} from "react"

function SearchResults(){

    const {movies,pending,searchValue} = useContext(MyContext)
    const component = useRef()

    useEffect( () => {

        if(component.current){
            component.current.scrollIntoView({
                behavior:"smooth",
                block: 'center'
            })
        }

    },[movies])

    return(
        <>  
            {
                movies && movies.length && movies.length > 0
                ? <div ref={component}>
                    <MovieHeading title={`Search Results for ${searchValue}`} />
                    <MovieList movies={movies} />
                  </div>
                : null
            }
            {
                pending
                    ? <div className="w-[100vw] min-h-[30vh] laptop:min-h-[40vh] flex justify-center items-center">
                        <PropagateLoader color="#e5e7eb" />
                      </div>
                    : null
            }
        </>
    )

}

export default SearchResults