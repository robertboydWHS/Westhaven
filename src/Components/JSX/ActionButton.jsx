import React, { Component } from 'react';


class ActionButton extends Component {
    
    state= {
      
    }

 freequoteshow = () =>  {

    if(this.props.findOutMore != undefined) {
        this.props.findOutMore();
    } else{

        this.props.showFQ();         //this is the prop passed down from the carousel component, it calls the funcion when the button is clicked.
    }
    
 }

    render() { 

        return ( 

        <button type="button" className="btn btn-primary" onClick={this.freequoteshow}>{this.props.label}</button>

         )

    }

}
 
export default ActionButton;


