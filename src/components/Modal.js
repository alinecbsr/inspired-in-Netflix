import React, { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {
  render() {
    console.log(this.props.movie, "movie");
    const { movie } = this.props;

    return (
      <div className="movie">
        <div key={movie.id} className="movie__container">
          <h1 className="movie__title">{movie.original_name}</h1>
          <h2 className="movie__rating">{movie.vote_average}</h2>
          <h3 className="movie__release">{movie.first_air_date}</h3>
          <p className="movie__overview">{movie.overview}</p>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      original_name: PropTypes.string,
      vote_average: PropTypes.number,
      first_air_date: PropTypes.number,
      overview: PropTypes.string
    })
  ).isRequired
};

export default Modal;
