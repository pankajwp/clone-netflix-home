import axios from "axios";

/* base url to make A REQUEST   to the movie database */
const tmbd = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default tmbd;
