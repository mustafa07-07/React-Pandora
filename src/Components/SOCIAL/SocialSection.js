import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SocialSection extends Component {
  render() {
    return (
      <div>
        <section class="page-info-section text-white">
          <div class="container">
            <h2>SOCIAL</h2>
            <div class="site-beradcamb">
              <Link exact="true" to="/">
                Home
              </Link>
              <span>
                <i class="fa fa-angle-right "></i> Social
              </span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
