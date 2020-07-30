import React, { useEffect } from "react";
import Header from "./header";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import ProductsCarousel from "./products-carousel";
import batir from "./../../assets/icons/batir.png";
import mezcla from "./../../assets/icons/mezcla.png";
import galleta from "./../../assets/icons/galleta.png";
import "./styles.css";

const Home = () => {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section>
        <div className="container-top">
          <Header />
          <Navbar />
        </div>
        <div className="jumbotron-home jumbotron jumbotron-fluid vertical-center">
          <div className="container">
            <div className="inner">
              <div className="innest">
                <div className="title">Hornear nunca fue tan fácil</div>
                <div id="shop-button">
                  <a className="shop-button" href="#/products">
                    COMPRAR
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="container-section" className="about-us-section">
        <h2 className="about-us-home-title">
          El balance perfecto entre practicidad y perfección.
        </h2>
        <p className="about-us-subtitle">
          Nuestra misión es preparar masa para galletas de la más alta calidad,
          para que nuestros clientes horneen galletas perfectas siempre.
        </p>
        <a className="about-us-button" href="#/about">
          CONÓCENOS
        </a>
      </section>
      <section id="container-section" className="mission-section">
        <p className="mission-title">Nuestra Misión</p>
        <h2 className="mission-subtitle">
          Brindar experiencias caseras horneando galletas de forma fácil y
          rápida.
        </h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col feature-box">
              <img src={batir} alt="Our Products" className="mission-icon" />
            </div>

            <div className="col feature-box">
              <img src={mezcla} alt="Our Products" className="mission-icon" />
            </div>

            <div className="col feature-box">
              <img src={galleta} alt="Our Products" className="mission-icon" />
            </div>
          </div>
        </div>
      </section>
      <section id="container-section" className="products-section">
        <p className="products-title">Nuestros Productos</p>
        <ProductsCarousel />
        <div id="shop-button">
          <a className="shop-button" href="#/products">
            COMPRAR
          </a>
        </div>
      </section>
      <div className="remove-space">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
