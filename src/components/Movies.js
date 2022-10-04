import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    <div>
      {movies.map((movie, i)=>(
        <div key={i} >
          <span>{movie.title}</span>
          <span>{movie.time}</span>
          {movie.genres.map((genre, index)=>(
            <ul key={index} >
              <li>{genre}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  </div>;
}

export default Movies;
