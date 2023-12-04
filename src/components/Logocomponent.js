import React, { Component } from 'react';
import Navcompnent from './Navcompnent';
import LOGO from './img/logo.png';
class Logocomponent extends Component {
   

    render() {
        return (
            <div> <img src={LOGO}></img>
                <Navcompnent></Navcompnent>
               
                </div>
    
        );
    }
}

export default Logocomponent;