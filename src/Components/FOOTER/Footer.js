import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <footer class="bg-dark w-100 py-4 flex-shrink-0">
        <div class="container py-4">
          <div class="row gy-4 gx-5">
            <div class="col-lg-4 col-md-6">
              <h5 class="h1 text-white">Pandora</h5>
              <p class=" text-muted">
                We believe that each and every idea deserves a shot, and we will
                market your project real good.We believe that each and every
                idea deserves a shot, and we will.
              </p>
              <p class=" text-muted mb-0">
                &copy; Copyrights All Rights Reserved Agency Pandora
              </p>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Quick links</h5>
              <ul class="list-unstyled text-muted">
                <li>
                  <Link exact="true" to="/Seo">
                    SEO
                  </Link>
                </li>
                <li>
                  <Link exact="true" to="/Influencer">
                    Influencer
                  </Link>
                </li>
                <li>
                  <Link exact="true" to="/InfluencerMarketing">
                    Influencer Marketing
                  </Link>
                </li>
                <li>
                  <Link exact="true" to="/VideoAdvertising">
                    Video Advertising
                  </Link>
                </li>

                <li>
                  <Link exact="true" to="/ContentMarketing">
                    Content Marketing
                  </Link>
                </li>
                <li>
                  <Link exact="true" to="/Outreach">
                    Outreach
                  </Link>
                </li>
                <li>
                  <Link exact="true" to="/EmailMarketing">
                    Email Marketing
                  </Link>
                </li>
                <li>
                  <Link exact="true" to="/Social">
                    Social
                  </Link>
                </li>
                <li>
                  <Link exact="true" to="/Contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Social Media</h5>
              <div className="social row justify-content-center">
                <a
                  href="https://www.facebook.com/AgencyPandora/"
                  rel="noreferrer"
                  target="_blank"
                  className="facebook"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="https://instagram.com"
                  rel="noreferrer"
                  target="_blank"
                  className="instagram"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/AgencyPandora"
                  rel="noreferrer"
                  target="_blank"
                  className="twitter"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  rel="noreferrer"
                  target="_blank"
                  className="linkedin"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  href="https://www.reddit.com/user/Agencypandora"
                  rel="noreferrer"
                  target="_blank"
                  className="reddit"
                >
                  <i className="fa ti-reddit"></i>
                </a>
                <a
                  href="https://t.me/AgencyPandora"
                  rel="noreferrer"
                  target="_blank"
                  className="telegram"
                >
                  <i className="fa fa-telegram"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <h5 class="text-white mb-3">Newsletter</h5>
              <p class=" text-muted">
                Sign up for our social media newsletter to be informed about the
                innovations.
              </p>
              <form action="#">
                <div class="input-group mb-3">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter email address"
                  />
                  <button class="btn rounded-right btn-primary" type="button">
                    <i class="fa fa-envelope"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
