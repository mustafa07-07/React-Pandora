import React, { Component } from 'react'

export default class FactSection extends Component {
    render() {
        return (
            <section className="fact-section gradient-bg">
            <div className="container">
            <div className="section-title text-center text-white">
				<h2>Çözümlerimiz</h2>
			</div>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="fact">
                            <h2>60</h2>
                            <p>Ülkeye <br/> Destek</p>
                            <i className="ti-basketball"></i>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="fact">
                            <h2>12K</h2>
                            <p>Saatteki  <br/>Dönüşüm</p>
                            <i className="ti-panel"></i>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="fact">
                            <h2>5B</h2>
                            <p>Büyük <br/> Dönüşüm</p>
                            <i className="ti-stats-up"></i>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="fact">
                            <h2>8</h2>
                            <p>Yıllık <br/> Tecrübe</p>
                            <i className="ti-user"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
