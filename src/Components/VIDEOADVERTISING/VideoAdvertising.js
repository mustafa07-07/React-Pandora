import React, { Component } from "react";
import Footer from "../FOOTER/Footer";
import Header from "../HEADER/Header";
import VAContent from "./VAContent";
import VAHeader from "./VAHeader";

export default class VideoAdvertising extends Component {
  render() {
    return (
      <div>
        <Header />
        <VAHeader />
        <VAContent />
        <Footer />
      </div>
    );
  }
}
