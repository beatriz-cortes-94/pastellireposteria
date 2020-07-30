import React, { useEffect } from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Image from "./../../assets/backgrounds/about-us.jpg";
import "./styles.css";

const About = () => {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <section className="about-us-header">
        <h1 className="about-us-title">Conócenos</h1>
      </section>
      <section className="about-us-body">
        <div className="center-img">
          <img src={Image} alt="Our Products" className="about-us-img" />
        </div>
        <p className="about-us-txt">
          Todo empezó como una pequeña idea entre dos hermanas, cuando nos dimos
          cuenta que había un hueco en el mercado no explotado todavía. Cuando
          ves una oportunidad como esa, tienes tres opciones.
        </p>
        <ul>
          <li className="about-us-txt">
            Tener una conversación sobre porqué nadie ha cubierto ese hueco y
            esperar a que alguien lo haga algún día.
          </li>
          <li className="about-us-txt">
            Tener una conversación sobre cómo tal vez tú podrías llenar el hueco
            algún día - y después hacer algo diferente.
          </li>
          <li className="about-us-txt">
            Detener lo que estás haciendo y llenar ese espacio.
          </li>
        </ul>
        <p className="about-us-txt">
          Nosotros escogimos la tercera opción. Manejamos nuestro negocio desde
          nuestro hogar, en Guadalajara. Estamos extremadamente enfocados en la
          satisfacción de nuestros clientes y usamos únicamente materiales de la
          más alta calidad. Nos enorgullecemos de nuestros productos, siendo la
          calidad insuperable. Tener increíbles colaboradores durante este viaje
          a permitido que nuestra marca crezca. Esperamos que disfrutes mientras
          navegas por nuestro catálogo de productos. Si tienes alguna pregunta,
          no dudes en contactarnos.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default About;
