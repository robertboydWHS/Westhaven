import React, { Component } from 'react';
import MainLogo from '../../MainLogo.png';
import { NavLink } from 'react-router-dom';


class Nav extends Component {
   constructor(props) {
       super(props)
       this.state ={
            scroll: "clear"
       };
   }



    componentDidMount() {
        const scrollDown = () => {
            this.setState({
                scroll: "dark"
            })
        }
      
         const scrollUp = () => {
            this.setState({
                scroll: "clear"
            })
        }
        
        window.onscroll = function() {
            if(window.pageYOffset > 10) {
               scrollDown();
            } else{
                scrollUp();         
            }
        }
    }


    render() { 
        return ( 
            <div className="container-fluid">
                <nav className={"navbar fixed-top navbar-expand-lg navbar-dark" + " " + this.state.scroll}>
                    <NavLink className="navbar-brand" to="/"><img src={MainLogo} alt="" id="navLogo"/></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                     <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/WhyWesthaven'>Why Westhaven <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to='/Referrals' onClick ={this.updateNavReferrals}>Referrals</NavLink>
                        </li>
                        <li className="nav-item ml-auto">
                           <NavLink className="nav-link" to='/MyHaven'>MyHaven Login</NavLink>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Contact Us 888.555.1123
                    </span>
                </div>
                </nav>
            </div>

         )
    }
}
 
export default Nav;