import React, { Component } from "react";

import Header from "../components/Header";
import NetflixOriginals from "../components/NetflixOriginals";

export default class MainContent extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="movieList">
          <NetflixOriginals />
        </div>
      </div>
    );
  }
}
