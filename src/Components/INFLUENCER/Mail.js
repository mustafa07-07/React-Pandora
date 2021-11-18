import axios from 'axios';
import React, { Component } from 'react'
import swal from 'sweetalert';

export default class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
          to: 'mustafaaliyildirim95@gmail.com',
          name: '',
          lastName: '',
          account: '',
          eMail: '',
          telegram: '',
          range:'',
          reference: '',
          analyse: '',
        };
      }
   
      onSubmit = (e) => {
        e.preventDefault();
        const { to,name, lastName, account,range,eMail,telegram,reference,analyse } = this.state;
        let datas = JSON.stringify({
          "to":to,
          "name":name,
          "lastName":lastName,
          "account":account,
          "eMail":eMail,
          "range":range,
          "telegram":telegram,
          "reference":reference,
          "analyse":analyse
        });

const config = {
  method: 'post',
  url: 'https://nodejsemailsender.herokuapp.com/inf',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : datas
};
axios(config)
.then(function (response) {
    swal("Success", "Your Message Has Been Successfully Sent. We Will Contact You As Soon As Possible", "success");
   
})
.catch(function (error) {
    swal("Error", "The message sending is incorrect. Please try again.", "error")

});
      }
      onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
        
      }
    render() {
      const { name, lastName, range,account,eMail,telegram,reference,analyse } = this.state;
     
        return (
            <div>
             
                  <section className="contact-page spad">
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
                                        placeholder="First Name *:"/>
                                        <span><i className="ti-check"></i></span>
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
                                        placeholder="Last Name *:"/>
                                        <span><i className="ti-check"></i></span>
                                    </div>
                                </div>
                           
                               
                                <div className="col-md-6">

                                    <div className="form-group">

                                        <input 
                                        className="check-form" 
                                        type="text" 
                                        name="telegram" 
                                        value={telegram}
                                        onChange={this.onChange}
                                        placeholder="Telegram Username*"/>
                                        
                                        <span><i className="ti-check"></i></span>
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
                                        placeholder="Email Adress*:"/>
                                        <span><i className="ti-check"></i></span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input 
                                        required 
                                        className="check-form" 
                                        type="text" 
                                        name="reference" 
                                        value={reference}
                                        onChange={this.onChange}
                                        placeholder="If you have a reference, please specify it.:"/>
                                        <span><i className="ti-check"></i></span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input 
                                        required 
                                        className="check-form" 
                                        type="text" 
                                        name="range" 
                                        value={range}
                                        onChange={this.onChange}
                                        placeholder="Enter your Social Media Follower Range."/>
                                        <span><i className="ti-check"></i></span>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input 
                                        required 
                                        className="check-form" 
                                        type="text" 
                                        name="account" 
                                        value={account}
                                        onChange={this.onChange} 
                                        placeholder="Enter the link to your Social Media Account."/>
                                        <span><i className="ti-check"></i></span>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                  </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input 
                                        required 
                                        className="check-form" 
                                        type="text" 
                                        name="analyse" 
                                        value={analyse}
                                        onChange={this.onChange} 
                                        placeholder="Enter the link where your analysis data is located."/>
                                        <span><i className="ti-check"></i></span>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                
                                    <input type="submit"  className="mt-4 site-btn sb-gradients" value="Send" />
                                    
                                </div>
                            </div>
   </form>
 
   </div>
   </div>
   </section>
   </div>
        )}}