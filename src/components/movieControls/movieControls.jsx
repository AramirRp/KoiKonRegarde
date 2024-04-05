import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export const MovieControls = ( data ) => {
  const {
    removeMovieFromWatchlist,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {"watchlist" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(data.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      
    </div>
  );
};
