import React, { Component } from "react";
import Typing from 'react-typing-animation';
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

export default class HeroSection extends Component {
  render() {
    
    return (
     
  
     <section className="hero-section resbg">
    
    <div className="mt-5 container-md">
          <div className="row">
            <div className="col-lg-6 col-sm-12 hero-text">
              <h2>
                <span className="mb-2">Pandora</span>
              </h2>
              <div className="col-sm-10">
            
              <Typing
              speed="100ms">
              <h4 className="text-white">
                We believe that each and every idea deserves a shot, and we will
                market your project real good.We believe that each and every idea deserves a shot, and we will.
                
              </h4>
             
              </Typing>
              </div>
              <div className="mt-3">
        
                <div className="flex">
                <Link to="/Contact" >
                  <button className="m-2 btn btn-lg btn-outline-success">
                   <i className="fa fa-envelope"></i>   Contact Us
                  </button>
                  </Link>
                  <Link to="/Influencer" >
                  <button
                  className="m-2 btn btn-lg btn-outline-warning"
                    
                  >
                   <i className="fa fa-play"></i>   Influencer Application 
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="animation-bg col-sm-12 col-lg-6">
              <img alt="animation" src="../img/animation_bg.png"/>
              <Player
             
                autoplay
                loop
                style={{ height: 300 }}
                src="https://assets7.lottiefiles.com/packages/lf20_lm7s4qvw.json"
              ></Player>
            </div>
          </div>
        </div>
      </section>
        
    );
  }
}
