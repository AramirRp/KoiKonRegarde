import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/movie/top_rated`);

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Le meilleur du meilleur</span>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
        </div>
    );
};

export default TopRated;