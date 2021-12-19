import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Partners extends Component {
  render() {
    return (
      <section class="logo-list">
        <div class="container">
          <div class="row">
            <div class="row">
              <div class="col-lg-2 col-md-4 col-6">
                <a href="#">
                  <img
                    src="./img/partners/logolar/big-news-network.png"
                    rel="noreferrer"
                    class="img-fluid"
                    alt="big-news-network"
                  />
                </a>
              </div>
              <div class="col-lg-2 col-md-4 col-6">
                <a href="#">
                  <img
                    src="./img/partners/logolar/Bitcoin_Magazine_Logo_2017.png"
                    rel="noreferrer"
                    class="img-fluid"
                    alt="Bitcoin_Magazine_Logo_2017"
                  />
                </a>
              </div>
              <div class="col-lg-2 col-md-4 col-6">
                <a href="#">
                  <img
                    src="./img/partners/logolar/bitcoin-com.png"
                    rel="noreferrer"
                    class="img-fluid"
                    alt="bitcoin-com"
                  />
                </a>
              </div>
              <div class="col-lg-2 col-md-4 col-6">
                <a href="#">
                  <img
                    src="./img/partners/logolar/bitcoinexchangeguide.png"
                    rel="noreferrer"
                    class="img-fluid"
                    alt="bitcoinexchangeguide"
                  />
                </a>
              </div>
              <div class="col-lg-2 col-md-4 col-6">
                <a href="#">
                  <img
                    src="./img/partners/logolar/bitcoingarden.logo_.270.090.1.png"
                    rel="noreferrer"
                    class="img-fluid"
                    alt="bitcoingarden.logo_.270.090.1"
                  />
                </a>
              </div>
              <div class="col-lg-2 col-md-4 col-6">
                <a href="#">
                  <img
                    src="./img/partners/logolar/bitcoinist.png"
                    rel="noreferrer"
                    class="img-fluid"
                    alt="bitcoinist"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Link exact="true" to="/Partners">
              <h2>See All Partners</h2>
            </Link>

      </section>
    );
  }
}
