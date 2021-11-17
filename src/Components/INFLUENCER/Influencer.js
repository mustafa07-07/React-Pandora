import React, { Component } from 'react'
import Footer from '../FOOTER/Footer'
import Header from '../HEADER/Header'
import InfluencerSection from './InfluencerSection'
import Mail from './Mail'
export default class Influencer extends Component {
  render() {
    return (
     <div className="App">
        <Header />
        <InfluencerSection/>
        <Mail />
        <Footer />   
     </div>
    )
  }
}
