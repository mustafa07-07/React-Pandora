import React, { Component } from 'react'
import {  Link } from "react-router-dom";
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer-section" style={{background: "currentColor",paddingTop:80}}>
		<div className="text-white mb-5">
			<div className="row container-fluid ">
		
				<div className="col-lg-4 sm-1 footer-widget">
					<h5 className="widget-title">Sources</h5>
					<ul>
					<li><Link exact="true" to="/">Home</Link></li>
						<li><Link exact="true" to="/Seo">SEO</Link></li>
						<li><Link exact="true" to="/Influencer">Influencer</Link></li>
						<li><Link exact="true" to="/Social">Social</Link></li>
						<li><Link exact="true" to="/About">About Us</Link></li>
						<li><Link exact="true" to="/Contact">Contact</Link></li>
					</ul>
				</div>
				<div className="col-lg-4 sm-1 footer-widget">
					<h5 className="widget-title">Follow us on social media</h5>
					<div className="social d-flex justify-content-center">
						<a href="https://facebook.com"  rel="noreferrer" target="_blank" className="facebook"><i className="fa fa-facebook"></i></a>
						<a href="https://instagram.com" rel="noreferrer" target="_blank" className="instagram"><i className="fa fa-instagram"></i></a>
						<a href="https://twitter.com"   rel="noreferrer" target="_blank" className="twitter"><i className="fa fa-twitter"></i></a>
						<a href="https://linkedin.com"   rel="noreferrer" target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a>
					</div>
				</div>
				<div className="col-lg-4 sm-1 footer-widget">
					<h5 className="widget-title">Subscribe to our Newsletter</h5>
					
				<div className="justify-content-center">
					<div className="form-group">
					<form class="d-block newsletter-form">
						<input type="text "   placeholder="Enter your email"/>
						<button>Get Started</button>
					</form>
					</div>
			</div>			
						
				
				</div>
			
			</div>
			<div className="footer-bottom">
				<div className="container row">
					<div className="float-right">
					
					</div>
					<div className="d-inline float-right p-2  text-white">
						<ul className="footer-nav">
							<li>Pandora 2021 </li>
							<li><a href="mailto:support@pandora.com">support@pandora.com</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
        )
    }
}
