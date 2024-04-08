import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { useNavigate } from "react-router-dom";

export const MovieControls = ({ movie }) => {
  const {
    removeMovieFromWatchlist,
  } = useContext(GlobalContext);

  const details = useState("");
    const navigate = useNavigate();


  const  handleClick = () => {
    details(
        navigate(`/movie/${movie.id}`)
    )};


  return (
    <div className="inner-card-controls">
      {"watchlist" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            Enlever de la watchlist
          </button>
          <button
            className="ctrl-btn"
            onClick={handleClick}
          >
            Détails
          </button>


        </>
      )}

      
    </div>
  );
};
