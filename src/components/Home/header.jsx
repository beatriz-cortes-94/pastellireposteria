import React from "react";
import "./styles.css";

const Header = () => {
  const HEADER_MESAGE = "CODIGO DE DESCUENTO: CHOCOCHIP30";
  return (
    <div className="header">
      <div>{HEADER_MESAGE}</div>
    </div>
  );
};

export default Header;
