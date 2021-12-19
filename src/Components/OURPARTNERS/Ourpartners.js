import React, { Component } from "react";
import Footer from "../FOOTER/Footer";
import Header from "../HEADER/Header";
import OPHeader from "./OPHeader";
import OPContent from "./OPContent";

export default class Ourpartners extends Component {
  render() {
    return (
      <div>
        <Header />
        <OPHeader />
        <OPContent/>
        <Footer />
      </div>
    );
  }
}
