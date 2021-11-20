import React from "react";
import { Link } from "react-router-dom";


export default function ContactHeader() {
  return (
    <div className="App">
     <section class="page-info-section text-white">
		<div class="container">
			<h2>CONTACT US</h2>
			<div class="site-beradcamb">
				<Link exact="true" to="/">Home</Link>
				<span><i class="fa fa-angle-right "></i> Contact Us</span>
			</div>
		</div>
	</section>
    </div>
  );
}
