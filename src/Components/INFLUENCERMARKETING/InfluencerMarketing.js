import React, { Component } from "react";
import Footer from "../FOOTER/Footer";
import Header from "../HEADER/Header";
import IFMContent from "./IFMContent";
import IFMHeader from "./IFMHeader";

export default class InfluencerMarketing extends Component {
  render() {
    return (
      <div>
        <Header />
        <IFMHeader />
        <IFMContent />
        <Footer />
      </div>
    );
  }
}
