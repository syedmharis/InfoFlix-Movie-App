import React from "react";
import noInfo from './No data-rafiki.png'

const MovieCard = ({movie}) => {
    return (
        <div className="movie">
        <div>
            <p>{movie.Year}</p>
        </div>
        <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : noInfo } alt={movie.Title} />
        </div>
        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
            <span>Imdb Id : {movie.imdbID}</span>
        </div>
    </div>
    );
}
export default MovieCard