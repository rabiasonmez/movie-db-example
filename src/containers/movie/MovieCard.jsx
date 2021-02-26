import React from "react";
import { Link } from "react-router-dom";
import { URL_IMG } from "../../data/apiUrl";

const MovieCard = props => {
  const { id, title, detail, poster_path, vote_average, release_date } = props;
  return (
    <div className="single_ads_card mt-30" key={id}>
      <div className="ads_card_image">
        <img
          src={
            poster_path
              ? `${URL_IMG}${poster_path}`
              : "https://cdn.pixabay.com/photo/2018/02/27/05/52/one-3184765_960_720.jpg"
          }
          alt="ads"
        />
      </div>
      <div className="ads_card_content p-0">
        <div className="meta d-flex justify-content-between">
          <p>
            Release Date : <span className="date">{release_date}</span>
          </p>
        </div>
        <div>
          <Link to={`/movies/${id}`}>
            <h5 className="title my-3">{title}</h5>
          </Link>
        </div>
        <p>{detail.substring(0, 125)}</p>
        <div className="ads_price_date d-flex justify-content-between">
          <span className="price">Imdb : {vote_average}</span>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
