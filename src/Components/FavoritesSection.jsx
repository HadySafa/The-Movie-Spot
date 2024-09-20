import { useContext } from "react";
import { MyContext } from "../Context.jsx";
import MovieHeading from "./MovieHeading";
import MovieList from "./MovieList";

function FavoritesSection() {

  const { favList } = useContext(MyContext)

  return (
    <>
      <MovieHeading title="Favorites" />
      <div className="min-h-[30vh]">
        {
          favList && favList.length && favList.length > 0
            ?
            <>
              <MovieList movies={favList} />
            </>
            : null
        }
      </div>
    </>
  )

}

export default FavoritesSection