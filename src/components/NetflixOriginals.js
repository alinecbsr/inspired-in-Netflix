import React, { Component } from "react";
import instance from "../services/movies";

import Modal from "../components/Modal";

class NetflixOriginals extends Component {
  state = {
    movies: [],
    stateHandle: null
  };

  async componentDidMount() {
    const API_KEY = "ab84133dc7803f14df71b1679b4e5515";

    const response = await instance.get(
      `/discover/tv?api_key=${API_KEY}&with_networks=213`
    );

    this.setState({ movies: response.data.results });
  }

  fuctionTest = movie => {
    this.setState({ stateHandle: movie });
  };

  render() {
    const { movies } = this.state;
    const pathUrl = "https://image.tmdb.org/t/p/original/";
    console.log(movies);
    if (this.state.stateHandle) return <Modal movie={this.state.stateHandle} />;
    return (
      <>
        <h1 className="movieList__heading">NETFLIX ORIGINALS</h1>
        <div className="movieList__container">
          {movies.map(movie => (
            <img
              key={movie.id}
              className="movieList__container--movie-image"
              src={`${pathUrl}${movie.poster_path}`}
              alt=""
              onClick={() => this.fuctionTest(movie)}
            />
          ))}
        </div>
      </>
    );
  }
}

export default NetflixOriginals;
