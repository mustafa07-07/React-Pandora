
import React, {useRef } from 'react'

import swalert from '@sweetalert/with-react';
import emailjs from 'emailjs-com';
import ContactForm from './ContactForm';


    const ContactFormSection = () => {
        const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2wjd6pt', 'template_iw7qw0h', form.current, 'user_86LZRAlrRSXlKJInion4i')
      .then((result) => {
          console.log(result.text);
          swalert("Success", "Your Message Has Been Successfully Sent. We Will Contact You As Soon As Possible", "success")
      }, (error) => {
          console.log(error.text);
          swalert("Error", "The message sending is incorrect. Please try again.", "error")
      });
  };
    return (
        <section className="contact-page spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                      <ContactForm/>
                    </div>
                   <div className="col-lg-5">
                   <div>
                        <h4>Address</h4>
                        <div>
                        2217 Washington Blvd<br />
                        Washington DC<br />
                        #(703) 1234 1234<br />
                        service@company.com<br />
                        </div>
                        <hr />   
                    </div>
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571289.733943155!2d76.08560099999998!3d29.058775699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e4a4b98404f57%3A0x75ffae70833e8448!2sShahbad%2C%20Haryana%20136135!5e0!3m2!1sen!2sin!4v1594195370933!5m2!1sen!2sin" width="100%" height="350" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                
                   </div>
                </div>
            </div>
        </section>
    )}
    export default ContactFormSection;
    