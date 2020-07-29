import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import ProductsInformation from "../Product/products-information";
import "./styles.css";

const Products = () => {
  return (
    <div className=".container-xl">
      <Navbar />
      <section>
        <div className="jumbotron-prod jumbotron"></div>
      </section>
      <section id="container-section">
        <div className="row">
          {ProductsInformation.map((p) => {
            return (
              <div key={p.id} className="col-md-4 col-sm-6 col-6">
                <div className="card">
                  <div className="card-header">
                    <Link to={`/products/${p.id}`}>
                      <img
                        className="d-block w-100"
                        /* eslint-disable */
                        src={require(`./../../assets/products/${p.src}`)}
                        alt="Second slide"
                      />
                    </Link>
                  </div>
                  <div className="card-body">
                    <p className="card-title">{p.title}</p>
                    <p>Desde {p.cost[0]}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;
