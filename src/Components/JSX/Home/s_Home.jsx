
import React, { Component } from 'react';
import '../../../App.css';
// Components
import Nav from '../Nav';
import ProductPanel from './ProductPanel';
import Carousel  from './Carousel';
import Freequote from '../Freequote';

//firebase 
import firebase from 'firebase/app';
import {auth} from '../../../Config/Firebase'
import firestore from 'firebase/firestore'

let db = firebase.firestore();
let homeRef = db.collection("Homepage").doc("Carousel");


class Home extends Component {
    state = {
        freequote: "displayNone",
        captions: ["","",""]
    }


    handleClickShowFQ = () => {
        this.setState({
            freequote: "displayBlock"
        }) 
    }

    handleClickCloseFQ = () => {
        this.setState({
            freequote: "displayNone"
        })
    }

    handleClickFOM = () => {
        this.setState({
            freequote: "displayNone"
        })
    }

    componentWillMount(){

        let caption1;
        let caption2;
        let caption3;
        
        let getDoc = homeRef.get().then(doc => {
            if(!doc.exists){
                console.log('No doc');
            } else{
                caption1 = doc.data().Caption_1;
                caption2 = doc.data().Caption_2;
                caption3 = doc.data().Caption_3;
                console.log(caption1);
                this.setState({
                    captions:[caption1, caption2, caption3]
                });
            }
        })
      
    }

  

    render() { 
        return ( 
                
            <div>
                <div className="main">
                    <Nav />               
                    <Carousel                    
                        showFreeQuoteClick={this.handleClickShowFQ} 
                        hideFreeQuoteClick={this.handleClickCloseFQ} 
                        showFreeQuote={this.state.freequote} 
                        findOutMoreClick = {this.handleClickFOM}

                        firebaseCaption1= {this.state.captions[0]}
                        firebaseCaption2= {this.state.captions[1]}
                        firebaseCaption3= {this.state.captions[2]}

                    />                   
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <ProductPanel title ="Solar Testing"/>
                            
                        </div>
                        <div className="col-xl-4">
                            <ProductPanel title = "Roofing Testing"/>
                        </div>
                        <div className="col-xl-4">
                            <ProductPanel title = "HVAC Testing" />
                        </div>
                    </div>
                 </div>
            </div>
            
         )
    }
}
 
export default Home;