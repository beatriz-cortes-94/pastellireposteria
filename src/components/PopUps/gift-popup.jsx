import React from "react";
import regalo from "./../../assets/icons/regalo.png";
import "./styles.css";

const GiftPopUP = (closePopUp) => {
  const handleClick = () => {
    closePopUp.closePopUp();
  };

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
        <button className="close-button" onClick={handleClick}>
          <i className="fas fa-times fa-2x"></i>
        </button>
      </section>
    </div>
  );
};

export default GiftPopUP;
