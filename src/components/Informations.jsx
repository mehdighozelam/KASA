import React from "react";
import Host from "../components/Host";
import Title from "../components/Title";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import './Informations.scss';

export default function Informations({ logement }) {
    return (
        <div className="informations-container">
            <div className="informations-left">
                <Title logement={logement} />
                <Tags tags={logement.tags} />
            </div>
            <div className="informations-right">
                <Host hostName={logement.host.name} hostPic={logement.host.picture} />
                <Rating rating={logement.rating} />
            </div>
        </div>
    );
}