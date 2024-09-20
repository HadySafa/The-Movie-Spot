import { useContext } from "react";
import { MyContext } from "../Context.jsx";

import MovieHeading from "./MovieHeading";
import MovieList from "./MovieList";

function FavoritesSection() {

  const { favList } = useContext(MyContext)

  return (
    <>
      {
        favList && favList.length && favList.length > 0
          ?
          <>
            <MovieHeading title="Favorites" />
            <MovieList movies={favList} />
          </>
          : null
      }
    </>
  )

}

export default FavoritesSection