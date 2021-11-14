import React, { Component } from 'react'
import Footer from '../FOOTER/Footer'
import Header from '../HEADER/Header'
import SeoContent from './SeoContent'
import SeoSection from './SeoSection'

export default class Seo extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SeoSection/>
        <SeoContent/>
        <Footer/>
      </div>
    )
  }
}
