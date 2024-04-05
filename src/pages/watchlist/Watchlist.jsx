
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

import React, {useContext} from "react";
import { useSelector } from "react-redux";
import {GlobalContext} from "../../context/GlobalState";
import Img from "../../components/lazyLoadImage/Img";


import "./style.scss";

const Watchlist = () => {

    const {watchlist} = useContext(GlobalContext);

    const { url } = useSelector((state) => state.home);

    return (
        <div className="watchlistpage">
        <ContentWrapper>
            <div className="pageHeader">
                 <div className="pageTitle">
                        Watchlist
                    </div>
             </div>  
                <div className="movie-grid">
                            {watchlist.length > 0 ? (
                    <div className="movie-grid">
                        {watchlist.map((data, idx) => (
                            data.poster_path ? (
                            <Img className="posterImg" key={data.id}  src={url.backdrop + data.poster_path }/>
                        ) : (
                            <Img className="posterImg" key={data.id} src={PosterFallback} />
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

 

