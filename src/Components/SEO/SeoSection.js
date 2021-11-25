import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SeoSection extends Component {
  render() {
    return (
      <div>
        <section class="page-info-section text-white">
          <div class="container">
            <h2>SEO</h2>
            <div class="site-beradcamb">
              <Link exact="true" to="/">
                Home
              </Link>
              <span>
                <i class="fa fa-angle-right "></i> Seo
              </span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
