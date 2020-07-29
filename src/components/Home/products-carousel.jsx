import React from "react";
import { Link } from "react-router-dom";
import ProductsInformation from "../Product/products-information";
import "./styles.css";

const ProductsCarousel = () => {
  return (
    <div className="c-wrapper">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
        data-interval="3000"
      >
        <div className="carousel-inner">
          {ProductsInformation.map((p) => {
            const itemClass =
              p.id === 1 ? "carousel-item active" : "carousel-item";

            return (
              <div key={p.id} className={itemClass}>
                <Link to={`/products/${p.id}`}>
                  <img
                    className="d-block w-100"
                    /* eslint-disable */
                    src={require(`./../../assets/products/${p.src}`)}
                    alt="Second slide"
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default ProductsCarousel;
