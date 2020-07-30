import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import QuantityCounter from "./quantity-counter";
import GiftPopUP from "../PopUps/gift-popup";
import ProductsInformation from "../Product/products-information";
import "./styles.css";

// eslint-disable-next-line
const ProductDetails = ({ match }) => {
  const {
    // eslint-disable-next-line
    params: { productId },
  } = match;
  const p = ProductsInformation[productId - 1];
  const [price, setPrice] = useState(p.cost[0]);
  const [giftStatus, setGiftStatus] = useState(false);

  const setPriceLabel = (event) => {
    if (event.target.value === "SM" && price !== p.cost[0]) {
      setPrice(p.cost[0]);
    } else {
      setPrice(p.cost[1]);
    }
  };

  const handlePopUp = () => {
    setGiftStatus(!giftStatus);
  };

  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);

  return (
    <div className=".container-xl">
      <Navbar />
      <div
        className={
          giftStatus ? "blur row product-detail-row" : "row product-detail-row"
        }
      >
        <section
          id="product-description-container-section"
          className="col-xl-6 col-lg-12 col-md-12 col-12"
        >
          <div className="photo-section">
            <img
              className="product-img"
              /* eslint-disable */
              src={require(`./../../assets/products/${p.src}`)}
              alt="Product img"
            />
          </div>
        </section>
        <div className="col-xl-6 col-lg-12 col-md-12 col-12">
          <section
            id="product-description-container-section"
            className="description-section"
          >
            <p className="product-description-title">{p.title}</p>
            <label className="product-description-price">{price}</label>
            <p className="product-description-subtitle">{p.description}</p>
          </section>
          <section id="product-description-container-section">
            <div className="form-group size-qty-selection">
              <label htmlFor="productSize" className="form-label">
                TAMAÑO
              </label>
              <select
                id="exampleFormControlSelect1"
                className="form-control product-options custom-select"
                onChange={setPriceLabel}
              >
                <option value="SM">400g/10 bolitas</option>
                <option value="LG">800g/20 bolitas</option>
              </select>
            </div>
            <div className="form-group size-qty-selection">
              <label htmlFor="productQty" className="form-label">
                CANTIDAD
              </label>
              <QuantityCounter />
            </div>
          </section>
          <section
            id="product-description-container-section"
            className="buy-for-gift-section"
          >
            <button className="gift-link" onClick={handlePopUp}>
              COMPRAR PARA REGALO
            </button>
          </section>
        </div>
      </div>
      <section>
        {giftStatus ? <GiftPopUP closePopUp={handlePopUp} /> : null}
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetails;
