import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map((director, i)=>(
      <div key={i} >
        <span >{director.name}</span>
        {director.movies.map((movie, index)=>(
          <ul key={index}>
            <li  >{movie}</li>
          </ul>
        ))}
      </div>
    ))}
  </div>;
}

export default Directors;
