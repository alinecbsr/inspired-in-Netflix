import React, { Component } from "react";
import NavbarItem from "../components/NavbarItem";
import NetflixLogo from "../assets/images/NetflixLogoRGB.png";
import Research from "../assets/images/research.svg";
import Gift from "../assets/images/gift.svg";
import Bell from "../assets/images/belll.svg";

class NavBar extends Component {
  state = {
    scrolling: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    if (window.scrollY === 0) {
      this.setState({ scrolling: false });
    } else if (window.scrollY > 20) {
      this.setState({ scrolling: true });
    }
  };

  render() {
    const { scrolling } = this.state;
    const { showMovies } = this.props;

    return (
      <nav className={"navbar" + (scrolling ? "black" : "")}>
        <ul className="navbar__list">
          <NavbarItem link="/" exact>
            <img
              className="navbar__list--logo"
              src={NetflixLogo}
              alt="NetflixLogo"
            />
          </NavbarItem>
          <div className="navbar__list-link pseudo-link">Home</div>
          <div className="navbar__list-link pseudo-link">TV Shows</div>
          <div className="navbar__list-link pseudo-link">Movies</div>
          <div className="navbar__list-link pseudo-link">Recently Added</div>
          <div className="navbar__list-link pseudo-link">My List</div>
        </ul>
        <div className="navbar__list--left">
          <img src={Research} className="research" alt="research" />
          <input
            onChange={showMovies}
            className="navbar__list--left__input"
            type="text"
            placeholder="Title, genres, people"
          />
          <ul className="navbar__list">
            <div className="navbar__list-link pseudo-link">KIDS</div>
            <div className="navbar__list-link pseudo-link">DVD</div>
          </ul>
          <img className="navbar__list--gift" src={Gift} alt="Gift" />
          <img className="navbar__list--bell" src={Bell} alt="Bell" />
        </div>
      </nav>
    );
  }
}

export default NavBar;
