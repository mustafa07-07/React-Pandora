import React, { Component } from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default class HeroSection extends Component {
    render() {
        return (
            <section className="hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 hero-text">
                        <h2><span>Pandora </span></h2>
                        <h4>We believe that each and every idea deserves a shot, and we will market your project real good.</h4>
                    </div>
                    <div className="col-md-6">
                 <Player
                    autoplay
                    loop
                    style={{  }}
                    // src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
                   //  src="https://assets9.lottiefiles.com/packages/lf20_hytsx9gs.json"
                  src="https://assets7.lottiefiles.com/packages/lf20_lm7s4qvw.json"

                     ></Player>
                       
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
