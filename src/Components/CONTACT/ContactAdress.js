import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ContactAdress extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-lg-4">
              <div class="box">
                <div class="icon">
                  <div class="image">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div class="info">
                    <h3 class="title">MAIL & WEBSITE</h3>
                    <p>
                    
                      <a href="mailto:info@agencypandora.com">
					  <i class="fa fa-envelope" aria-hidden="true"></i>
                        info@agencypandora.com
						
                      </a>
                      <br />
                     
                      <Link exact="true" to="/">
					  <i class="fa fa-globe" aria-hidden="true"></i>
                        agencypandora.com
                      </Link>
                    
					<br/>
					
					  </p>
                  </div>
                </div>
                <div class="space"></div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-lg-4">
              <div class="box">
                <div class="icon">
                  <div class="image">
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                  </div>
                  <div class="info">
                    <h3 class="title">CONTACT</h3>
                    <p>
                      <a
                        target="_blank"
                        rel="noreferrer"
						
                        href="https://api.whatsapp.com/send?phone=31685289793&text=Hi Pandora"
                      >
						                        <i class="fa fa-mobile" aria-hidden="true"></i>

                        (+31) 6 85289793
                        
                      </a>
                 
                    </p>
                  </div>
                </div>
                <div class="space"></div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-lg-4">
              <div class="box">
                <div class="icon">
                  <div class="image">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div class="info">
                    <h3 class="title">ADDRESS</h3>	
                    <p>
						<a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Wilhelminakade+173,+3072+AP+Rotterdam,+Hollanda/data=!4m2!3m1!1s0x47c433657def0f47:0x7777299dea944681?sa=X&ved=2ahUKEwj-4JnZ2bb0AhVoh_0HHSE4BlsQ8gF6BAgWEAE">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      Wilhelminakade 173, 3072 AP Rotterdam, Netherlands
					  </a>
                    </p>
                  </div>
                </div>
                <div class="space"></div>
              </div>
            </div>
			
          </div>
        </div>
      </div>
    );
  }
}
