import React, { Component } from 'react';
import Products from './Products';
import Freequote from '../Freequote';
import ActionButton from '../ActionButton';
import CarouselCaption from './CarouselCaption';

const Carousel = (props) => {
    return ( 
        <div className="h-100">
        <div  className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="overlay"></div>
                    <div className="bg1"></div>
                    <CarouselCaption showFQ={props.showFreeQuoteClick} passLabel = "Free Quote" title ={props.firebaseCaption1}/>
            </div>
            <div className="carousel-item">
                <div className="overlay"></div>
                    <div className="bg2"></div>
                    <CarouselCaption showFQ={props.showFreeQuoteClick} passLabel ="Free Quote" title= {props.firebaseCaption2}  subtext="Get a Free Roof Quote Today"/>
            </div>
            <div className="carousel-item">
                <div className="overlay"></div>
                <div className="bg3"></div>
                <CarouselCaption findOutMore= {props.findOutMoreClick} passLabel="Find Out More" title={props.firebaseCaption3} subtext="Your Power Production Guarantee"/>
            </div>
            </div>

        </div>
        <Freequote show={props.showFreeQuote} closeForm={props.hideFreeQuoteClick}/>
        <Products />
     </div>
     )
}


 
export default Carousel;

