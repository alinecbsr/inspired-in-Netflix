import React, { Component } from "react";
import instance from "../services/movies";

export default class MainContent extends Component {
  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = async () => {
    const API_KEY = "ab84133dc7803f14df71b1679b4e5515";

    const fetchTrending = await instance.get(
      `/trending/all/week?api_key=${API_KEY}&language=en-US`
    );

    const fetchNetflixOriginals = await instance.get(
      `/discover/tv?api_key=${API_KEY}&with_networks=213`
    );

    const fetchTopRated = await instance.get(
      `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    );

    const fetchActionMovies = await instance.get(
      `/discover/movie?api_key=${API_KEY}&with_genres=28`
    );

    const fetchComedyMovies = await instance.get(
      `/discover/movie?api_key=${API_KEY}&with_genres=35`
    );

    const fetchHorrorMovies = await instance.get(
      `/discover/movie?api_key=${API_KEY}&with_genres=27`
    );

    const fetchRomanceMovies = await instance.get(
      `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    );

    const fetchDocumentaries = await instance.get(
      `/discover/movie?api_key=${API_KEY}&with_genres=99`
    );

    console.log(fetchRomanceMovies);
  };

  render() {
    return <h1>TESTE</h1>;
  }
}
