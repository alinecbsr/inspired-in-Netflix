import React from "react";

import Play from "../assets/images/playButton.svg";
import Add from "../assets/images/add.svg";
/* import Witcher from "../assets/images/witcher.jpg"; */

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__container-heading">Título</h1>
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
        <p className="header__container-overview">
          Overview Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus lobortis posuere urna, id consequat ante. Cras venenatis
          erat sem, a tempus neque fermentum mattis.
        </p>
      </div>
      {/* <img src={Witcher} className="poster" alt="Witcher" /> */}
      <div className="header--fadeBottom"></div>
    </header>
  );
}
