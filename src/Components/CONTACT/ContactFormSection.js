import React from "react";

import ContactForm from "./ContactForm";

const ContactFormSection = () => {
  return (
    <section className="contact-page ">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <ContactForm />
          </div>
          <div className="col-lg-5 contact-form">
            <iframe
              title="title"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.497796629322!2d4.486061315784667!3d51.90662837970265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c433657def0f47%3A0x7777299dea944681!2sWilhelminakade%20173%2C%203072%20AP%20Rotterdam%2C%20Hollanda!5e0!3m2!1str!2str!4v1637953010838!5m2!1str!2str"
              width="100%"
              height="350"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactFormSection;
