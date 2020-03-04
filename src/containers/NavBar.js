import React, { Component } from "react";


class navigation extends Component {
  render() {
    return (
      <nav className="nav_menu">
        <ul className="nav_menu_list"></ul>
        <div className="nav_menu_list-link pseudo-link">Home</div>
        <div className="nav_menu_list-link pseudo-link">TV Shows</div>
        <div className="nav_menu_list-link pseudo-link">Movies</div>
        <div className="nav_menu_list-link pseudo-link">Recently Added</div>
        <div className="nav_menu_list-link pseudo-link">My List</div>
        <div>
          <input
            className="menu_container-left-input"
            type="text"
            placeholder="Search" />
        </div>
        <div className="menu_list-link pseudo-link">KIDS</div>
        <div className="menu_list-link pseudo-link">DVD</div>
      </nav>
    )
  }
}

export default navigation; 