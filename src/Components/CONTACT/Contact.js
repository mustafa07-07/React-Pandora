import React from 'react'
import Footer from '../FOOTER/Footer'
import Header from '../HEADER/Header'

import ContactFormSection from './ContactFormSection'

import ContactHeader from './ContactHeader'
  

export default function About() {
    return (
        <div className="App">
         <Header/>
         <ContactHeader/>
         <ContactFormSection/>
       
        <Footer />   
        </div>
 )
}
