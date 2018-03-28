import React, { Component } from 'react';

class Freequote extends Component {
    state = {
      
    }

  
    render() { 
        return ( 
            <div className={"container mx-auto " + " " + this.props.show} id="h_formBox">
                
              <form id="freequote_form" className="">
              <span onClick={this.props.closeForm}>Close</span>
                <div className="form-group ml-auto">
                    <input type="text" className="form-control  mx-auto"  placeholder="First Name"/>
                </div> 
                <div className="form-group">
                    <input type="text" className="form-control  mx-auto"  placeholder="Last Name"/>
                </div> 
                <div className="form-group">
                    <input type="email" className="form-control  mx-auto"  aria-describedby="emailHelp" placeholder="Enter email"/>
      
                 </div>
                 <div className="form-group">
                    <input type="text" className="form-control mx-auto"  placeholder="Phone Number"/>
                </div> 
                    <button type="submit" className="btn btn-primary text-center">Submit</button>
                </form>
            </div>
         )
    }
}
 
export default Freequote;