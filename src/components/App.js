import React, { Component } from "react";
import "./App.css";
import FilmDetails from "./FilmDetails";
import FilmListing from "./FilmListing";
import TMDB from "../TMDB.js";

class App extends Component {
  state = {
    films: TMDB.films,
    faves: [],
    current:{}
  };

  componentDidMount() {
    const url =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=267c6591f7b1a9dd8995574036a6b143&language=en-US&page=1";
    fetch(url)
      .then(res => res.json())
      .then(films => {
        console.log("this is fetch: films.results", films.results);
        this.setState({
          films: films.results
        });
      })
      .catch(err => console.log("this is err", err));
  }

  handleFaveToggle = film => {
    const faves = this.state.faves.slice();
    // const faves = this.state.faves.map(e => e)
    const filmIndex = faves.indexOf(film);
    console.log("this is faves, filmIndex", faves, filmIndex);

    filmIndex > -1 ? faves.splice(filmIndex, 1) : faves.push(film);

    this.setState({ faves });
  };

  handleDetailsClick = film => {
    console.log("handleDetailsClick has been clicked", film);
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${
      TMDB.api_key  
    }&append_to_response=videos,images&language=en`;
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        this.setState({ current: data });
      }).catch(err => {
        this.setState({
          
        })
      })
  };

  render() {
    console.log("this is App:state", this.state);
    return (
      <div className="film-library">
        <FilmListing
          films={this.state.films}
          faves={this.state.faves}
          onFaveToggle={this.handleFaveToggle}
          onDetailsClick={this.handleDetailsClick}
        />
        <FilmDetails film={this.state.current} />
      </div>
    );
  }
}

export default App;
