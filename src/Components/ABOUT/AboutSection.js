import React, { Component } from "react";

export default class AboutSection extends Component {
  render() {
    return (
    <div>
      <section className="about-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6 about-text">
              <h2>ABOUT</h2>
              <h5>
              We believe that each and every idea deserves a shot, and we will market your project real good.
              </h5>
              <h5>
                We Are a Dedicated Team of Professionals in Fintech Digital
                Marketing
              </h5>
              <p>
                During 2019-2021 we have seen a large volume of leads and
                interest in our services off the back of developing some major
                Crypto-related websites and marketing strategies; thus, we
                launched the Pandora brand to better service our Crypto unique
                clientele
              </p>
            </div>
          </div>
          <div className="about-img">
            <img src="../img/about-img.png" alt="" />
          </div>
        </div>
      </section>
       <section className="newsletter-section gradient-bg">
       <div className="container text-white">
           <div className="row">
               <div className="col-lg-7 newsletter-text">
                   <h4>WHY IS PANDORA THE BEST CRYPTO MARKETING AGENCY?</h4>
                   <h5>The most experienced Digital Marketing team in the space</h5>
               </div>
               <div className="col-lg-5 offset-lg-0">
                  <img alt="Why Us" height="150" src="../img/why_us2.png" />
               </div>
           </div>
       </div>
   </section>
   <section className="newsletter-section">
       <div className="container">
           <div className="row">
           <div className="col-lg-5 offset-lg-0">
                  <img alt="Intro" height="250" src="../img/intro.png"/>
               </div>
               <div className="col-lg-7 newsletter-text">
                   <h2>Introduction</h2>
                   <p>We breathe and consume the digital world, so we have all the right tools to hack your success and guide you to it.
As your partner, we will be honest with you and tell you it is never easy to reach the top. We cannot give it on a silver plate, but we can support you thoroughly until the end
</p>
               </div>
              
           </div>
       </div>
   </section>
   <section className="newsletter-section gradient-bg text-white">
       <div className="container">
           <div className="row">
          
               <div className="col-lg-7 newsletter-text">
                   <h2>Vision </h2>
                   <h5>Success is never achieved overnight.</h5>
                   <p>
                   Web stacks partnerships are formed over quarters and years, not weeks or one-off projects.
Our most outstanding achievements will be a result of continuous feedback, clear goals, and a shared vision. That’s why we aim to support the world's most innovative projects.

                   </p>
               </div>
               <div className="col-lg-5 offset-lg-0">
                  <img alt="Vision" height="250" src="../img/vision.png"/>
               </div>
           </div>
       </div>
   </section>
   </div>
    );
  }
}
