import React, { Component } from "react";
import Footer from "../FOOTER/Footer";
import Header from "../HEADER/Header";
import OutreachContent from "./OutreachContent";
import OutreachHeader from "./OutreachHeader";

export default class Outreach extends Component {
  render() {
    return (
      <div>
        <Header />
        <OutreachHeader />
        <OutreachContent />
        <Footer />
      </div>
    );
  }
}
