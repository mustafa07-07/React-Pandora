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
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      <a href="mailto:info@agencypandora.com">
                        info@agencypandora.com
                      </a>
                      <br />
                      <br />
                      <i class="fa fa-globe" aria-hidden="true"></i>{" "}
                      <Link exact="true" to="/">
                        agencypandora.com
                      </Link>
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
                      <i class="fa fa-mobile" aria-hidden="true"></i>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://api.whatsapp.com/send?phone=905555555555&text=deneme"
                      >
                        {" "}
                        (+91)-9624XXXXX
                      </a>
                      <br />
                      <br />
                      <i class="fa fa-mobile" aria-hidden="true"></i>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://api.whatsapp.com/send?phone=905555555555&text=deneme"
                      >
                        {" "}
                        (+91)-9624XXXXX
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
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      15/3 Junction Plot "Shree Krishna Krupa", Rajkot - 360001.
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
