import React, { useEffect, useState } from "react";
/* tmbdAxios as it is a default export from aixos file, if it is not a default export then we have to use the same name as present on the file */
import tmbdAxios from "./axios";

import "./Row.css";
import YouTube from "react-youtube";
import movietrailer from "movie-trailer";

const tmbdBaseUrl = "https://image.tmdb.org/t/p/w300";

const opts = {
  height: `390`,
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};

export default function Row({ title, fetchUrl }) {
  console.count("rows");
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState(false);

  useEffect(() => {
    async function getMovies() {
      const res = await tmbdAxios.get(fetchUrl);
      // console.log(res);
      setMovies(res.data.results);
      return res;
    }
    getMovies();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      settrailerUrl(false);
    } else {
      movietrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  // console.table(movies);
  // const trailerUrl = "Zv6H4GF3JR4";
  return (
    <div className="row">
      <h3>Row {title}</h3>
      <div className="row__posters">
        {/* Several row posters */}
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            className="row__poster"
            key={movie.id}
            src={tmbdBaseUrl + "" + movie.poster_path}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
