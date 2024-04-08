import React, {useContext} from "react";
import {Global}
import Watchlist from '../../../components/watchlist/Watchlist'
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const WatchlistCarou = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    const watchlist2 = useContext(GlobalContext);


    return (
        <Carousel
            title="Votre watchlist"
            data={watchlist2.map(data)}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default WatchlistCarou;