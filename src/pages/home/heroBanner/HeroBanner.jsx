import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

import {fetchRandomMovie} from '../../../utils/apiRandom';

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const RandomMovieId = useState("");
    // const { url } = useSelector((state) => state.home);
    // console.log(url.poster);
    
    
    
    
    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg =
        "https://image.tmdb.org/t/p/original" +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data]);

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };

    const RandomQueryHandler = () => {

        RandomMovieId(
            fetchRandomMovie().then((result) => {
                console.log(result);
                navigate(`/movie/${result}`);
            }));            
    };

    return (
        <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}
            {console.log(RandomMovieId)}
            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Hello.</span>
                    <span className="subTitle">
                        Tout plein de films partout, maintenant
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button onClick={searchQueryHandler}>Recherche</button>
                    </div>
                    <button onClick={RandomQueryHandler} >KoiKonRegarde?</button>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;