
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

import React, {useContext, useState, useEffect} from "react";
import { useSelector } from "react-redux";
import {GlobalContext} from "../../context/GlobalState";
import Img from "../../components/lazyLoadImage/Img";
import { MovieControls } from "../../components/movieControls/movieControls";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./style.scss";

const Watchlist = () => {
    const navigate = useNavigate();
    const {watchlist} = useContext(GlobalContext);
    const { data } = useFetch("");

    const { url } = useSelector((state) => state.home);

   const  handleClick = () => {
            console.log(data)
            details(
                navigate(`/movie/${data.id}`)
            )};

    return (
        <div className="watchlistpage">
        <ContentWrapper>
            <div className="pageHeader">
                 <div className="pageTitle">
                        Watchlist
                    </div>
                    <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
             </div>  
                <div className="movie-grid">
                            {watchlist.length > 0 ? (
                    <div className="movie-grid">
                        {watchlist.map((data) => (
                            data.poster_path ? (
                                <>
                            <Img className="posterImg" key={data.id}  src={url.backdrop + data.poster_path }/>
                            
                            <MovieControls  movie={data}/>
                            </>
                        ) : (
                            <>
                            <Img className="posterImg" key={data.id} src={PosterFallback} />
                            </>
                        )
                        
                        ))}
                    
                    </div>
                    ) : (
                    <h2 className="no-movies">No movies in your list! Add some!</h2>
                    )}
                            
                </div>
                </ContentWrapper>
                </div>
)};
   


export default Watchlist

 

