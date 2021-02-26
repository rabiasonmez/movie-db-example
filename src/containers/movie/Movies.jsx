import React from "react";
import MovieCard from "./MovieCard";
import Search from "../Search";
import { getMovies } from "../../service/MovieService";

const Movies = props => {
  const [data, setData] = React.useState();

  React.useEffect(async () => {
    const movies = await getMovies("en-US", "popularity.desc", 2);
    console.log(movies);
    setData(movies.results.filter(item => item.poster_path));
  }, []);

  const movieItems =
    data &&
    data.map(item => (
      <div className="col-lg-3 col-sm-6" key={item.id}>
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
  return (
    <>
      <div className="container">
        <div className="row">
          <Search />
          <hr />
        </div>

        <div className="row">{movieItems}</div>
      </div>
    </>
  );
};
export default Movies;
