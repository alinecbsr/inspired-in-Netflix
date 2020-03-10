import React, { Component } from "react";

import Header from "../components/Header";
import NetflixOriginals from "../components/NetflixOriginals";

export default class MainContent extends Component {
  render() {
    return (
      <>
        <Header />
        <NetflixOriginals />
      </>
    );
  }
}
