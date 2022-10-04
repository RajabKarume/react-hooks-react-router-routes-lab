import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map((actor, i)=>(
      <div key={i} >
        <span >{actor.name}</span>
        {actor.movies.map((movie, index)=>(
          <ul key={index}>
            <li  >{movie}</li>
          </ul>
        ))}
      </div>
    ))}
  </div>;
}

export default Actors;
