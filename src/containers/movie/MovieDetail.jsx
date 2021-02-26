import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieData, getMovieCast } from "../../service/MovieService";
import { URL_IMG } from "../../data/apiUrl";

const MovieDetail = props => {
  const params = useParams();
  const [data, setData] = useState();
  const [cast, setCast] = useState();

  useEffect(async () => {
    setData(await getMovieData(Number(params.movieID)));
    const movieCast = await getMovieCast(Number(params.movieID));
    setCast(movieCast.cast);
  }, []);

  return (
    <div className={"container"}>
      <nav
        aria-label="breadcrumb"
        className="bg-light border-1 rounded p-3 my-2"
      >
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            {" "}
            <Link to="/movies">Movies </Link>
          </li>
          <li className="breadcrumb-item active">
            {" "}
            {data && data.original_title}
          </li>
        </ol>
      </nav>

      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-sm-3"}>
            {data && (
              <div className="single_ads_card mt-30">
                <div className="ads_card_image">
                  <img src={`${URL_IMG}${data.poster_path}`} alt="" />
                </div>
                <div className="ads_card_content p-0">
                  <div className="meta d-flex justify-content-between">
                    <p>
                      Release Date :
                      <span className="date">{data.release_date}</span>
                    </p>
                  </div>
                  <div>
                    <h3 className="title mt-3">{data.original_title}</h3>
                  </div>
                  <div className="ads_price_date d-flex justify-content-between">
                    <span className="price">Imdb : {data.vote_average}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={"col-sm-9  mt-30"}>
            <strong>Overview:</strong> {data && data.overview}
            <h4 className={"mt-30"}>Cast</h4>
            <div className="row">
              {cast &&
                cast.map(item => (
                  <div className="col-lg-6 col-sm-6 my-4" key={item.id}>
                    <div className="card">
                      <div className="row">
                        <div className="col-sm-4">
                          <img
                            className="card-img-top"
                            src={
                              item.profile_path
                                ? `${URL_IMG}${item.profile_path}`
                                : "https://cdn.pixabay.com/photo/2018/02/27/05/52/one-3184765_960_720.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="card-body col-sm-8">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text">
                            Character: {item.character}
                            <br />
                            Popularity: {item.popularity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
