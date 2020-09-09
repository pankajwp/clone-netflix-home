import React from "react";
import "./App.css";

import Row from "./Row";
import Banner from "./Banner";
import request from "./requests";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row title="Netflix Original" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
    </div>
  );
}

export default App;
