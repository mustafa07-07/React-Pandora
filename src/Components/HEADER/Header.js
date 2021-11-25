import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export default class Header extends Component {
  handleClick() {
    $(".main-menu").slideToggle(400);
  }
  render() {
    return (
      <header className="clearfix header-section">
        <div className="d-flex justify-content-between">
          <Link to="/">
            <img
              className="animated fadeInDown"
              style={{
                float: "left",
                width: 267,
                position: "relative",
                top: 0,
              }}
              src="../img/logo2.png"
              alt=""
            />
          </Link>
          <span onClick={() => this.handleClick()}>
            <div className="responsive-bar">
              <i className="fa fa-bars"></i>
            </div>
          </span>

          <nav className="main-menu">
            <ul className="menu-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Seo">SEO</Link>
              </li>
              <li>
                <Link to="/Social">Social</Link>
              </li>
              <li>
                <Link to="/Outreach">Outreach</Link>
              </li>
              <li>
                <Link to="/VideoAdvertising">Video Advertising</Link>
              </li>
              <li>
                <Link to="/EmailMarketing">Email Marketing</Link>
              </li>
              <li>
                <Link to="/ContentMarketing">Content Marketing</Link>
              </li>
              <li>
                <Link to="/InfluencerMarketing">Influencer Marketing</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>

              <li>
                <Link to="/Influencer" className="site-btn bg-gradient">
                  Application
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="site-btn bg-gradient">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
