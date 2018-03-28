import React from 'react';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import Nav from '../Nav';

const WhyWesthaven = (props) => {
    return (
       
     <div>
          <Nav />
         <h1>{props.logged}</h1>
    </div>
    )
}

export default WhyWesthaven;