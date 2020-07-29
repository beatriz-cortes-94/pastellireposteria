import React from "react";
import regalo from "./../../assets/icons/regalo.png";
import "./styles.css";

const GiftPopUP = (pageId) => {
  const message =
    "Escribe un breve mensaje y nosotros lo agregaremos a tu envío.";

  return (
    <div className=".container-xl popup-container">
      <section className="popup-section-height">
        <div className="popup-header">
          <img src={regalo} alt="Our Products" className="popup-img img-gift" />
          <h2 className="popup-title">Regala PASTELLI</h2>
        </div>
        <div className="popup-subtitle">
          <p>{message}</p>
        </div>
        <a className="close-button" href={`/products/${pageId.productId}`}>
          <i className="fas fa-times fa-2x"></i>
        </a>
      </section>
    </div>
  );
};

export default GiftPopUP;
