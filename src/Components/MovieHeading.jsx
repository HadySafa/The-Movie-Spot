

function MovieHeading({title}){

    return(
        <div>
            <p className="font-mono text-gray-100 font-normal tracking-normal p-4 text-xl
                          tablet:text-2xl   
                          laptop:text-3xl
                        "
            >
                {title}
            </p>
        </div>
    )

}

export default MovieHeading