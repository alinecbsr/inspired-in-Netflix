import React, { Component, Fragment } from "react";
import GlobalStyle from "../assets/styles/global";

import Layout from "./Layout";

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Layout />
      </Fragment>
    );
  }
}

export default App;
