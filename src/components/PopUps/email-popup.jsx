import React from "react";
import batir from "./../../assets/icons/batir.png";
import "./styles.css";

const EmailPopUP = (status) => {
  const message = status.status
    ? "Estamos trabajando en contestarte. Si hiciste un pedido, recibiras un correo de confirmación en las proximas 24 horas."
    : "Parece que hubo un error. Por favor intentalo mas tarde.";

  return (
    <div className=".container-xl popup-container">
      <div className="popup-header">
        <img src={batir} alt="Our Products" className="popup-img" />
        <h2 className="popup-title">Gracias por contactarnos</h2>
      </div>
      <div className="popup-subtitle">
        <p>{message}</p>
      </div>
      <div className="popup-header">
        <a className="back-home-button" href="#/">
          VOLVER A INICIO
        </a>
      </div>
    </div>
  );
};

export default EmailPopUP;
