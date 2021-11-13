import React, { Component } from 'react'

export default class ProcessSection extends Component {
    render() {
        return (
            <section className="process-section spad">
		<div className="container">
			<div className="section-title text-center">
				<h2>Bitcoin'e Başlangıç</h2>
				<p>Etkileşimli öğreticilerle Bitcoin hakkında bilgi edinmeye başlayın. Eğlenceli, kolay ve sadece birkaç dakika sürüyor!</p>
			</div>
			<div className="row">
				<div className="col-md-4 process">
					<div className="process-step">
						<figure className="process-icon">
							<img src="../img/process-icons/1.png" alt="#"/>
						</figure>
						<h4>Cüzdanını Oluştur</h4>
					</div>
				</div>
				<div className="col-md-4 process">
					<div className="process-step">
						<figure className="process-icon">
							<img src="../img/process-icons/2.png" alt="#"/>
						</figure>
						<h4>Ekibimiz İle İletişime Geç</h4>
					</div>
				</div>
				<div className="col-md-4 process">
					<div className="process-step">
						<figure className="process-icon">
							<img src="../img/process-icons/3.png" alt="#"/>
						</figure>
						<h4>Kazanmaya Başla </h4>
					</div>
				</div>
                
			</div>
		</div>
	</section>
        )
    }
}
