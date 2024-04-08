import React from "react";

import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated"
import KoiKonRegarde from "./koiKonRegarde/KoiKonRegarde";


HeroBanner;

const Home = () => {
    return (

        <div className="homePage">
            <KoiKonRegarde />
            <HeroBanner />
            <Trending />
            <Popular />
            <TopRated />
            <div style={{height: 1000}}></div>
        </div>
    )

}

export default Home;