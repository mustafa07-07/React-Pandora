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
        <div className="container-fluid">
          <Link to="/">
            <img style={{float:'left',height:225,width:225,position:'relative',top:-80}}  src="../img/logo2.png" alt="" />
          </Link>
          <span onClick={() => this.handleClick()}>
            <div className="responsive-bar">
              <i className="fa fa-bars"></i>
            </div>
          </span>

          <nav className="main-menu">
            <ul className="menu-list">
              <Link to="/Contact" className="site-btn sb-gradients">
              Contact Us
              </Link>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Seo">Seo</Link>
              </li>
              <li>
                <Link to="/Social">Social</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
