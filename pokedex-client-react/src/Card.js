import React from 'react';
import Artwork from "./Artwork";

function Card({id, name}) {
    return (
        <a href={"/pokemon/" + id} className="card p-2 text-center">
            <span className="text-capitalize">{name}</span>
            <Artwork id={id}></Artwork>
        </a>
    );
}

export default Card;