import React from "react";
import AboutSection from "../ABOUT/AboutSection";
import PressRelease from "./PressRelease";
import Footer from "../FOOTER/Footer";
import Header from "../HEADER/Header";
import HeroSection from "./HeroSection";
import WhyUs from "./WhyUs";
import CoreValues from "./CoreValues";
import ContactForm from "../CONTACT/ContactForm";
import OurMarketing from "./OurMarketing";

export default function Index() {
  return (
    <div className="App">
      <div className="w-full h-full">
        <Header />
        <HeroSection />
      </div>
      <AboutSection />
      <OurMarketing />
      <CoreValues />
      <PressRelease />
      <WhyUs />
      <h2>Contact Us</h2>
      <ContactForm />
      <Footer />
    </div>
  );
}
