import { useContext } from "react"
import { MyContext } from "../Context"

function Header() {

    const {searchValue,setSearchValue} = useContext(MyContext);
    
    return (
        <header className="sticky w-[100vw] z-50 top-0 bg-black bg-opacity-90 flex justify-evenly items-center min-h-[10vh]">

            <div className="w-2/5 flex justify-center">
                <p className="font-mono text-red font-normal tracking-normal text-lg
                              tablet:text-2xl   
                              laptop:text-3xl">THE MOVIE SPOT</p>
            </div>

            <div className="w-3/5 flex justify-center laptop:justify-end laptop:pr-6">
                <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                 className="w-[90%] laptop:w-[50%] px-2 py-1 outline-none border-red border-2  text-gray-200 bg-dark-gray" placeholder="Search for a movie.."/>
            </div>

        </header>
    )

}

export default Header