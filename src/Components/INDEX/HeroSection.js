import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typing from 'react-typing-animation';
import AnimatedButton from "react-animated-buttons";

import { Player } from "@lottiefiles/react-lottie-player";

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
              <div style={{"height":200}} className="col-sm-12">
            
              <Typing
              speed="100ms">
              <p className="mb-4 text-white lead ">
                We believe that each and every idea deserves a shot, and we will
                market your project real good.
              </p>
              <p className="mb-4 text-white lead">
              WE ARE LEADERS IN CRYPTO INVESTOR MARKETING

              </p>
              </Typing>
              </div>
              <div className="float-left p-5">
        
                <div  style={{ margin:1, display:'block'}}>
                  <AnimatedButton
                    color="success"
                    animationDuration={0.5}
                    animationType="pulse"
                  >
                   <i className="fa fa-envelope"></i>   Contact Us
                  </AnimatedButton>
                 
                  <AnimatedButton
                  className="btn btn-lg btn-outline-secondary"
                    color="warning"
                    animationDuration={0.5}
                    animationType="pulse"
                  >
                   <i className="fa fa-play"></i>   Influencer
                  </AnimatedButton>
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
