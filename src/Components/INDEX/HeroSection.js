import React, { Component } from "react";
import Typing from 'react-typing-animation';
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

export default class HeroSection extends Component {
  render() {
    
    return (
     <section className="hero-section">
    
    <div className="container-md">
          <div className="row">
            <div className="col-sm-6 hero-text">
              <h2>
                <span className="mb-2">Pandora </span>
              </h2>
              <div style={{"height":150}} className="col-sm-12">
            
              <Typing
              speed="100ms">
              <h3 className="text-white">
                We believe that each and every idea deserves a shot, and we will
                market your project real good.
              </h3>
             
              </Typing>
              </div>
              <div className="float-left pl-5">
        
                <div className="flex">
                <Link to="/Contact" >
                  <button className="ml-4 btn btn-lg btn-outline-success">
                   <i className="fa fa-envelope"></i>   Contact Us
                  </button>
                  </Link>
                  <Link to="/Influencer" >
                  <button
                  className="ml-4 btn btn-lg btn-outline-warning"
                    
                  >
                   <i className="fa fa-play"></i>   Influencer Application 
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <Player
                autoplay
                loop
                style={{ height: 550 }}
                src="https://assets7.lottiefiles.com/packages/lf20_lm7s4qvw.json"
              ></Player>
            </div>
          </div>
        </div>
      </section>
     
    );
  }
}
