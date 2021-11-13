import React from 'react'
import AboutSection from '../ABOUT/AboutSection'
import PressRelease from './PressRelease'
import FeauturedSection from './FeauturedSection'
import Footer from '../FOOTER/Footer'
import Header from '../HEADER/Header'
import HeroSection from './HeroSection'
import NewsletterSection from './NewsletterSection'
import WhyUs from './WhyUs'
import CoreValues from './CoreValues'
import ContactForm from '../CONTACT/ContactForm'
  
export default function Index() {
    return (
        <div className="App">
        <Header />
        <HeroSection />
        <AboutSection />
        <WhyUs/>
        <CoreValues/>
        <FeauturedSection />
        <NewsletterSection />
        <PressRelease />
        <ContactForm/>
        <Footer />   
        </div>
 )
}
