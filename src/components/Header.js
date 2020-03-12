import React, { Component } from "react";
/* import PropTypes from "prop-types"; */
import instance from "../services/movies";

import Play from "../assets/images/playButton.svg";
import Add from "../assets/images/add.svg";

class Header extends Component {
  state = {
    poster: undefined
  };

  async componentDidMount() {
    const response = await instance.get(
      "/tv/71446?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0"
    );

    console.log("teste", response.data);

    this.setState({ poster: response.data });
  }

  render() {
    const { poster } = this.state;

    const backgroundStyle = {
      backgroundSize: "cover",
      backgroundImage: `url(https://image.tmdb.org/t/p/original//aTRzFS0E6KJGns1WsH5IUsuiUbq.jpg)`,
      backgroundPosition: "center"
    };

    return (
      <>
        <header style={backgroundStyle} className="header">
          {poster !== undefined && (
            <div className="header__container">
              <h1 className="header__container-heading">
                {poster.original_name}
              </h1>
              <button className="header__container-btnPlay">
                <img
                  src={Play}
                  className="header__container-btnMyList-play"
                  alt="Play"
                />
                Play
              </button>

              <button className="header__container-btnMyList">
                <img
                  src={Add}
                  className="header__container-btnMyList-add"
                  alt="Add"
                />
                My List
              </button>
              <p className="header__container-overview">{poster.overview}</p>
            </div>
          )}
          <div className="header--fadeBottom"></div>
        </header>
      </>
    );
  }
}

export default Header;
