import React, { useRef, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import MovieCard from "./movie/MovieCard";
import { getSearchedMovies } from "../service/MovieService";

const Search = props => {
  const location = useLocation();
  const history = useHistory();

  const params = new URLSearchParams(location.search);
  const q = params.get("q");

  //const [inputValue, steInputValue] = useState(q ? q : "");
  const inputValue = useRef();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(async () => {
    if (q) {
      inputValue.current.value = q;
      const movies = await getSearchedMovies(q);
      console.log(movies.results);
      const searchedProducts = movies.results.map(item => (
        <div className={"col-sm-3"} key={item.id}>
          <MovieCard
            id={item.id}
            title={item.original_title}
            detail={item.overview}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            release_date={item.release_date}
          />
        </div>
      ));
      setSearchResult(searchedProducts);
    }
  }, [q]);

  const handleForm = event => {
    event.preventDefault();
    history.push(`/search?q=${inputValue.current.value}`);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="header_search col-sm-12">
          <form className="row" onSubmit={handleForm}>
            <div className="search_form mt-15 col-sm-10">
              <input
                name="q"
                type="text"
                className="form-control"
                id="search"
                ref={inputValue}
                placeholder="Type Your Keyword"
              />
            </div>
            <div className="search_btn mt-15 col-sm-2">
              <button type="submit" onClick={handleForm} className="main-btn">
                Search
              </button>
            </div>
          </form>
          <div className="header_keyword d-sm-flex">
            <span className="title">For Example:</span>
            <ul className="tags media-body">
              <li>
                <a>The Matrix</a>
              </li>
              <li>
                <a>Transformers: Age of Extinction.</a>
              </li>
              <li>
                <a>Avengers: End Game</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">{searchResult}</div>
    </div>
  );
};
export default Search;
