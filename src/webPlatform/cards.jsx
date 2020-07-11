import React, { Component } from 'react';

import './webSeries.css';

import Card from './card';

import SData from './sData';



// function ncard(val){
//    return(
//    <Card
//     imgsrc = {val.imgsrc}
//     title = {val.title}
//     name = {val.name}
//     link = {val.link}
//     />
//    );
// }

function Cards(){
    return(
        <div>
        {SData.map((val) => {
           return(
                <Card
                 imgsrc = {val.imgsrc}
                 title = {val.title}
                 name = {val.name}
                 link = {val.link}
                 />
                );    
                
        })}
        </div>
       
    );
}

export default Cards;