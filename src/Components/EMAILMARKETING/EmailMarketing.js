import React, { Component } from "react";
import Footer from "../FOOTER/Footer";
import Header from "../HEADER/Header";
import EMContent from "./EMContent";
import EMHeader from "./EMHeader";

export default class s extends Component {
  render() {
    return (
      <div>
        <Header />
        <EMHeader />
        <EMContent />
        <Footer />
      </div>
    );
  }
}
