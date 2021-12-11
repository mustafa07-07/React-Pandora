import React, { Component } from "react";
import Slider from "react-slick";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(0 0 0 / 15%)",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(0 0 0 / 15%)",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
export default class SliderArea extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplayspeed: 2000,
      slidesToShow: 4,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      slidesToScroll: 4,
    };
    return (
      <div className="container spad">
        <h2>İş Birliklerimiz</h2>
        <Slider {...settings}>
          <div>
            <a href="https://anyswap.net/" target="_blank">
              <img
                height={150}
                width={"auto"}
                alt="AnySwap"
                rel="noreferrer"
                src="../img/partners/AnySwap.png"
              />
            </a>
          </div>
          <div>
            <a href="https://www.bancor.network/" target="_blank">
              <img
                height={150}
                width={"auto"}
                alt="Bancor"
                rel="noreferrer"
                src="../img/partners/Bancor.png"
              />
            </a>
          </div>
          <div>
            <a href="https://binemon.io/" target="_blank">
              <img
                height={150}
                width={"auto"}
                alt="Binemon"
                rel="noreferrer"
                src="../img/partners/binemon.png"
              />
            </a>
          </div>
          <div>
            <a href="https://bonfida.org/" target="_blank">
              <img
                height={150}
                width={"auto"}
                alt="Bonfida"
                rel="noreferrer"
                src="../img/partners/bonfida.png"
              />
            </a>
          </div>
          <div>
            <a href="https://metagame-arena.io/" target="_blank">
              <img
                height={150}
                width={"auto"}
                alt="Meta-game"
                rel="noreferrer"
                src="../img/partners/metagame.png"
              />
            </a>
          </div>
          <div>
            <a href="https://minaprotocol.com/" target="_blank">
              <img
                height={150}
                width={"auto"}
                alt="Mina"
                rel="noreferrer"
                src="../img/partners/mina.png"
              />
            </a>
          </div>
          <div>
            <a href="https://mobius.network/" target="_blank">
              <img
                height={150}
                width={"auto"}
                alt="Mobius"
                rel="noreferrer"
                src="../img/partners/mobius.png"
              />
            </a>
          </div>
          <div>
            <a href="https://neo.org/" target="_blank">
              <img
                height={150}
                width={"auto"}
                alt="Neo"
                rel="noreferrer"
                src="../img/partners/neo.png"
              />
            </a>
          </div>
          <div>
            <a href="https://qtum.org/" target="_blank">
              <img
                height={150}
                width={"auto"}
                alt="Qtum"
                rel="noreferrer"
                src="../img/partners/Qtum.png"
              />
            </a>
          </div>
          <div>
            <a href="https://www.runonflux.io/" target="_blank">
              <img
                height={150}
                width={"auto"}
                alt="Runonflux"
                rel="noreferrer"
                src="../img/partners/runonflux.png"
              />
            </a>
          </div>
          <div>
            <a href="https://shibatoken.com/" target="_blank">
              <img
                height={150}
                width={"auto"}
                alt="Shiba"
                rel="noreferrer"
                src="../img/partners/shiba.png"
              />
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}
