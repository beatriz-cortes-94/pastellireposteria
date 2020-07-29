import React, { useState } from "react";
import mas from "./../../assets/icons/mas.png";
import menos from "./../../assets/icons/menos.png";

const QuantityCounter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div>
        <input
          className=" product-options quantity-input"
          type="text"
          value={count}
          readOnly
        />
        <a onClick={decrement}>
          <img src={menos} alt="less" className="img-counter" />
        </a>
        <a onClick={increment}>
          <img src={mas} alt="less" className="img-counter" />
        </a>
      </div>
    </div>
  );
};

export default QuantityCounter;
