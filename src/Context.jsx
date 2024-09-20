import { createContext, useEffect, useState } from "react";


export const MyContext = createContext();

function GlobalState({ children }) {


    const savedList = localStorage.getItem("FavList")
    const [favList, setFavList] = useState(() => {
        if (savedList) {
            return JSON.parse(savedList)
        }
        return []
    })
    useEffect(() => {
        const stringArray = JSON.stringify(favList)
        localStorage.setItem("FavList", stringArray)
    }, [favList])


    const [searchValue,setSearchValue] = useState("")
    const [movies, setMovies] = useState([])
    const [pending, setPending] = useState(false)
    async function fetchApi() {
            try {
                setPending(true)
                const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=51dc81ec`);
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
    useEffect( () => {
        fetchApi();
    },[searchValue])


    return (
        <MyContext.Provider value={{ favList, setFavList,searchValue,setSearchValue,movies,pending }}>
            {children}
        </MyContext.Provider>
    )
}

export default GlobalState;