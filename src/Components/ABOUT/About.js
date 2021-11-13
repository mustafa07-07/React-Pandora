import React, { Component } from 'react'
import Footer from '../FOOTER/Footer'
import Header from '../HEADER/Header'
import AboutSection from './AboutSection'
import AboutUsSection from './AboutUsSection'

export default class About extends Component {
  render() {
    return (
     <div className="App">
        <Header />
        <AboutUsSection/>
        <AboutSection />
        <Footer />   
     </div>
    )
  }
}
