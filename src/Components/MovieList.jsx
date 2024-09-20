import Movie from "./Movie"
import {  useEffect, useRef } from 'react'

function MovieList({ movies }) {

    const list = useRef(null)

    function hasOverflow(element) {
        return element.scrollWidth > element.clientWidth;
    }


    useEffect(() => {
        function eventHandler(e) {
            if (hasOverflow(list.current)) {
                e.preventDefault();
                list.current.scrollBy(e.deltaY, 0)
            }
        }

        if(list.current){
            list.current.addEventListener('wheel', eventHandler, { passive: false })
        }

        return () => {
            if(list.current){
                list.current.removeEventListener('wheel', eventHandler)
            }
        }

    }, [list.current])

    return (
        <div id="list" ref={list} className="w-[100vw] min-h-[30vh] max-h-[40vh] tablet:max-h-[45vh] laptop:max-h-[50vh] overflow-x-auto flex flex-nowrap gap-2 laptop:gap-4 laptop:py-4">
            {
                movies && movies.length && movies.length > 0
                    ?
                    movies.map((movie, index) => {
                        return <Movie movie={movie} key={index} />
                    })
                    : null
            }
        </div>
    )

}

export default MovieList
