import React, { Component } from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

const FilmRow = props => {
  const release_date = new Date(props.film.release_date);
  return (
    <div className="film-row" onClick={props.onDetailsClick}>
      <FilmPoster poster_path={props.film.poster_path} />
      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{release_date.getFullYear()}</p>
      </div>
      <Fave 
       onFaveToggle={props.onFaveToggle}
       isFave={props.isFave}
      />
    </div>
  );
};

export default FilmRow;
