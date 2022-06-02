import React, { Component } from "react";
import FilmRow from "./FilmRow";

class FilmListing extends Component {
  state = {
    filter: "all"
  };

  // onClick={() => this.handleFilterClick("faves")}
  handleFilterClick = filter => {
    console.log(`setting filter to ${filter}`);
    this.setState(prevState => ({
      filter
    }));
  };

  render() {
   const films = (this.state.filter === 'faves') ? 
    this.props.faves : this.props.films

    const allFilms = films.map((d, i) => {
      return <FilmRow 
        film={d} 
        key={d.id} 
        isFave={this.props.faves.includes(d)}
        onFaveToggle={ () => this.props.onFaveToggle(d) }
        onDetailsClick={() => this.props.onDetailsClick(d)}
        />;
    });

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${this.state.filter === "all" ? "is-active" : ""}`}
            onClick={ () => this.handleFilterClick("all") }
          >
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div
            className={`film-list-filter ${
              this.state.filter === "faves" ? "is-active" : ""
            }`}
            onClick={() => this.handleFilterClick("faves")}
          >
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>

        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
