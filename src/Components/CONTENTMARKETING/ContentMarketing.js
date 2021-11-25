import React, { Component } from "react";
import Footer from "../FOOTER/Footer";
import Header from "../HEADER/Header";
import CMContent from "./CMContent";
import CMHeader from "./CMHeader";

export default class ContentMarketing extends Component {
  render() {
    return (
      <div>
        <Header />
        <CMHeader />
        <CMContent />
        <Footer />
      </div>
    );
  }
}
