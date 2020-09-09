import React, { useEffect, useState } from "react";

import requests from "./requests";
import tmbdAxios from "./axios";

const tmbdBaseUrl = "https://image.tmdb.org/t/p/original";

export default function Banner() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    async function getBanner() {
      const res = await tmbdAxios.get(requests.fetchNetflixOriginals);
      const randIndex = Math.floor(Math.random() * res.data.results.length - 1);
      //   console.log(randMovie);
      const randMovie = randIndex >= 1 ? randIndex : 1;
      setBanner(res.data.results[randMovie]);
    }

    getBanner();
  }, []);

  console.log(banner);

  console.log(`url("${tmbdBaseUrl}${banner.poster_path}")`);
  return (
    <div className="row">
      <div
        className="banner__poster"
        style={{
          backgroundImage: `url("${tmbdBaseUrl}${banner.poster_path}")`,
          backgroundSize: "cover",
          backgroundPosition: `center center`,
          height: `500px`,
        }}
      >
        <div className="banner__content">
          <h1
            style={{ color: `#fff`, backgroundColor: `#000`, opacity: `0.5` }}
          >
            {/* IF banner title doesnot exists then banner name, If banner name not then banner original name */}
            {banner?.title || banner?.name || banner?.original_name}
          </h1>
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
      </div>
    </div>
  );
}
