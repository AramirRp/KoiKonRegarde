

import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalState";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import PosterFallback from "../../../assets/no-poster.png";



import "./style.scss";

import MovieCard from "../movieCard/MovieCard";

const Watchlist = () => {
    
    const {watchlist} = useContext(GlobalContext);

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">
                        Ma wachlist
                    </h1>
                </div>
                <div className="movie-grid">
                            {watchlist.length > 0 ? (
                    <div className="movie-grid">
                        {watchlist.map((data) => (
                        <MovieCard2 movie={data} key={id} type="watchlist" />
                        ))}
                    </div>
                    ) : (
                    <h2 className="no-movies">No movies in your list! Add some!</h2>
                    )}
                            
                </div>
            </div>
        </div>
 
 
    
);
};
   


export default Watchlist

 

