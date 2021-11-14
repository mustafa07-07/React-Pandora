import React, { Component } from 'react'
import Footer from '../FOOTER/Footer'
import Header from '../HEADER/Header'
import SocialContent from './SocialContent'
import SocialSection from './SocialSection'

export default class Social extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SocialSection/>
        <SocialContent/>
        <Footer/>
        
      </div>
    )
  }
}
