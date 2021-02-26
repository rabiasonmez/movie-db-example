import {
  URL_LIST,
  URL_SEARCH,
  API_KEY,
  URL_DETAIL,
  URL_CREDITS
} from "../data/apiUrl";

export const getMovies = async (lang, sortBy, pageNo) => {
  const params = [`lang=${lang}`, `sort_by=${sortBy}`, `page=${pageNo}`];
  const url = URL_LIST + API_KEY + "&" + params.join("&");
  return await fetch(url)
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err));
};

export const getSearchedMovies = async query => {
  const params = [`query=${query}`];
  const url = URL_SEARCH + API_KEY + "&" + params.join("&");
  return await fetch(url)
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err));
};

export const getMovieData = async id => {
  if (id) {
    const url = URL_DETAIL + id + API_KEY;
    const response = await fetch(url)
      .then(response => response.json())
      .then(response => response)
      .catch(err => console.error(err));
    return response;
  }
};

export const getMovieCast = async id => {
  if (id) {
    const url = URL_DETAIL + id + URL_CREDITS + API_KEY;
    const response = await fetch(url)
      .then(response => response.json())
      .then(response => response)
      .catch(err => console.error(err));
    return response;
  }
};
