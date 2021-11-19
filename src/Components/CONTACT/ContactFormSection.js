
import React from 'react'

import ContactForm from './ContactForm';


    const ContactFormSection = () => {
    return (
        <section className="contact-page ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                      <ContactForm/>
                    </div>
                   <div className="col-lg-5">
                   <iframe title="title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571289.733943155!2d76.08560099999998!3d29.058775699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e4a4b98404f57%3A0x75ffae70833e8448!2sShahbad%2C%20Haryana%20136135!5e0!3m2!1sen!2sin!4v1594195370933!5m2!1sen!2sin" width="100%" height="350" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                
                   </div>
                </div>
            </div>
        </section>
    )}
    export default ContactFormSection;
        