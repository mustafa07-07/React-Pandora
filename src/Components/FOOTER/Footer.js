import React, { Component } from 'react'
import {  Link } from "react-router-dom";
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer-section">
				<hr/>
		<div className="container">
			<div className="row spad">
				<div className="col-md-6 col-lg-3 footer-widget">
					<img src="../img/logo2.png" className="mb-4" alt=""/>
					<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum.</p>
				</div>
				<div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
					<h5 className="widget-title">Sources</h5>
					<ul>
					<li><Link exact="true" to="/">Home</Link></li>
						<li><Link exact="true" to="/Seo">SEO</Link></li>
						<li><Link exact="true" to="/Social">Social</Link></li>
						<li><Link exact="true" to="/About">About Us</Link></li>
						<li><Link exact="true" to="/Contact">Contact</Link></li>
					</ul>
				</div>
				<div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
					<h5 className="widget-title">Permalinks</h5>
					<ul>
						<li><Link exact="true" to="/">Home</Link></li>
						<li><Link exact="true" to="/Seo">SEO</Link></li>
						<li><Link exact="true" to="/Social">Social</Link></li>
						<li><Link exact="true" to="/About">About Us</Link></li>
						<li><Link exact="true" to="/Contact">Contact</Link></li>
						
						
					</ul>
				</div>
				<div className="pl-3 col-md-6 col-lg-3 footer-widget pl-lg-5">
					<h5 className="widget-title">Follow us on social media</h5>
					<div className="social">
						<a href="https://facebook.com"  target="_blank" className="facebook"><i className="fa fa-facebook"></i></a>
						<a href="https://instagram.com" target="_blank" className="instagram"><i className="fa fa-instagram"></i></a>
						<a href="https://twitter.com"   target="_blank" className="twitter"><i className="fa fa-twitter"></i></a>
						<a href="https://linkedin.com"   target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="row">
					<div className="pb-3 text-center col-lg-4 store-links text-lg-left pb-lg-0">
					
					</div>
					<div className="text-center col-lg-8 text-lg-right">
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
