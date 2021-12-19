import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class OPHeader extends Component {
    render() {
        return (
            <section class="page-info-section text-white">
            <div class="container">
                <h2>OUR PARTNERS</h2>
                <div class="site-beradcamb">
                    <Link exact="true" to="/">Home</Link>
                    <span><i class="fa fa-angle-right "></i> Our Partners</span>
                </div>
            </div>
        </section>
        )
    }
}
