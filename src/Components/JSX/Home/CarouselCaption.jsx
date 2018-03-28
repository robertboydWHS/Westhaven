import React, { Component } from 'react';

import ActionButton from '../ActionButton';

const CarouselCaption = (props) => {
    return ( 
        <div className="carousel-caption">
            <h1>{props.title}</h1>
            <p>{props.subtext}</p>
            <ActionButton 
                showFQ={props.showFQ} 
                label={props.passLabel} 
                findOutMore={props.findOutMore}
            />
        </div>
     )
}

 
export default CarouselCaption;

