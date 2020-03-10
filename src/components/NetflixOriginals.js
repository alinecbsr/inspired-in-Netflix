import React, { Component } from "react";
import instance from "../services/movies";

class NetflixOriginals extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    const API_KEY = "ab84133dc7803f14df71b1679b4e5515";

    const response = await instance.get(
      `/discover/tv?api_key=${API_KEY}&with_networks=213`
    );

    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;
    const pathUrl = "https://image.tmdb.org/t/p/original/";
    console.log(movies);
    return (
      <div className="movieList">
        <h1 className="movieList__heading">NETFLIX ORIGINALS</h1>
        <div className="movieList__container">
          <div className="movieList__container--movie__netflix">
            {movies.map(movie => (
              <img
                className="movieList__container--movie-image"
                src={`${pathUrl}${movie.poster_path}`}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default NetflixOriginals;
