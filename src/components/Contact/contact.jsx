import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import EmailPopUP from "../PopUps/email-popup";
import "./styles.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [emailStatus, setEmailStatus] = useState(false);
  const [popUpWindow, setPopUpWindow] = useState(false);

  const handleFeedback = (event) => {
    setFeedback(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //This templateId is created in EmailJS.com
    const templateId = "template_6QJiwG2o";

    //This is a custom method from EmailJS that takes the information
    //from the form and sends the email with the information gathered
    //and formats the email based on the templateID provided.
    if (name !== "" && email !== "") {
      sendFeedback(templateId, {
        message_html: feedback,
        from_name: name,
        from_email: email,
      });
      setEmailStatus(true);
      setPopUpWindow(true);
    }
  };

  const sendFeedback = (templateId, variables) => {
    emailjs
      .send("gmail", templateId, variables, "user_lQhM2S4IqBdEQ01Ued9OY")
      // eslint-disable-next-line
      .then((res) => {
        setEmailStatus(true);
        setPopUpWindow(true);
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) => {
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        );
        setEmailStatus(false);
        setPopUpWindow(true);
      });
  };

  return (
    <div className=".container-xl">
      <Navbar />
      <div>
        <div className={popUpWindow ? "blur" : ""}>
          <section className="contact-header">
            <h1 className="contact-title">Contacto</h1>
          </section>
          <section id="contact-container-section">
            <div>
              ¡Estamos para servirte! <br /> <br />
              Deja tus datos abajo y haz tu pedido de forma rápida y sencilla.
              <br /> <br />
              Nuestra misión es tener la mejor calidad en nuestros productos y
              brindar el mejor servicio así que no dudes en contactarnos y dejar
              tus comentarios.
            </div>
          </section>
          <section className="contact-email-form">
            <form
              action="mailto:pastelli.reposteria.mx@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="contact-form">
                <label className="contact-form-label" htmlFor="contact-name">
                  NOMBRE:
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="contact-name"
                  className="contact-form-text"
                  required
                  onChange={handleName}
                />{" "}
                <br />
              </div>
              <div className="contact-form">
                <label className="contact-form-label" htmlFor="contact-email">
                  CORREO:
                </label>{" "}
                <br />
                <input
                  type="email"
                  name="contact-email"
                  className="contact-form-text"
                  required
                  onChange={handleEmail}
                />{" "}
                <br />
              </div>
              <div className="contact-form">
                <label className="contact-form-label" htmlFor="contact-message">
                  MENSAJE:
                </label>{" "}
                <br />
                <textarea
                  className="contact-form-text"
                  name="contact-message"
                  cols="30"
                  rows="10"
                  required
                  onChange={handleFeedback}
                ></textarea>
                <br />
              </div>
              <div className="action-button">
                <a
                  className="send-button"
                  type="submit"
                  value="Submit"
                  onClick={handleSubmit}
                >
                  ENVIAR
                </a>
              </div>
            </form>
          </section>
        </div>
        <section>
          {popUpWindow ? <EmailPopUP status={emailStatus} /> : null}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
