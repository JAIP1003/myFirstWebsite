import React, { Component } from 'react';

import './webSeries.css';

function Card(props){
    return(
        <>
        <div className="cards">
            <div className="card">
            <img src={props.imgsrc} alt="poster"></img>
            <div className="card_info">
            <span className="card_category"> {props.title}</span>
            <h3 className="card_title">{props.name}  </h3>
            <a href={props.link} target="jai">
            <button> Watch Now </button>
            </a>
            </div>
            </div>
        </div>
        </>
    );
}

export default Card;