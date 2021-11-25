import axios from "axios";
import React, { Component } from "react";
import swal from "sweetalert";

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      to: "info@agencypandora.com",
      name: "",
      lastName: "",
      company: "",
      webSite: "",
      phone: "",
      eMail: "",
      message: "",
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { to, name, lastName, company, webSite, phone, eMail, message } =
      this.state;
    let datas = JSON.stringify({
      to: to,
      name: name,
      lastName: lastName,
      eMail: eMail,
      phone: phone,
      company: company,
      webSite: webSite,
      message: message,
    });

    const config = {
      method: "post",
      url: "https://nodejsemailsender.herokuapp.com/mail/",
      headers: {
        "Content-Type": "application/json",
      },
      data: datas,
    };
    axios(config)
      .then(function (response) {
        swal(
          "Success",
          "Your Message Has Been Successfully Sent. We Will Contact You As Soon As Possible",
          "success"
        );
      })
      .catch(function (error) {
        swal(
          "Error",
          "The message sending is incorrect. Please try again.",
          "error"
        );
      });
  };
  onChange = (e) => {
    /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, lastName, company, webSite, phone, eMail, message } =
      this.state;

    return (
      <div>
        <section className="contact-page ">
          <div className="container">
            <div className="row">
              <div className="col-lg-7"></div>
              <form onSubmit={this.onSubmit} className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        className="check-form"
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.onChange}
                        placeholder="First Name *:"
                      />
                      <span>
                        <i className="ti-check"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        className="check-form"
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={this.onChange}
                        placeholder="Last Name *:"
                      />
                      <span>
                        <i className="ti-check"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        className="check-form"
                        type="text"
                        name="company"
                        value={company}
                        onChange={this.onChange}
                        placeholder="Company Name*:"
                      />
                      <span>
                        <i className="ti-check"></i>
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        className="check-form"
                        type="text"
                        name="webSite"
                        value={webSite}
                        onChange={this.onChange}
                        placeholder="Web Site: *"
                      />
                      <span>
                        <i className="ti-check"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        className="check-form"
                        type="text"
                        name="eMail"
                        value={eMail}
                        onChange={this.onChange}
                        placeholder="Email Adress*:"
                      />
                      <span>
                        <i className="ti-check"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        className="check-form"
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={this.onChange}
                        placeholder="Phone Number*:"
                      />
                      <span>
                        <i className="ti-check"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        value={message}
                        onChange={this.onChange}
                        placeholder="Tell us about your question!"
                      ></textarea>
                    </div>

                    <input
                      type="submit"
                      className="mt-4 site-btn sb-gradients"
                      value="Send"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
