import React, { Component } from "react";

import Navbar from "./NavBar";
import MainContent from "./MainContent";

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainContent />
      </div>
    );
  }
}

export default Layout;
