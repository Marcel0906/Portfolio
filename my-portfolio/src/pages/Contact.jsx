import { React, useRef } from "react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

const Contact = () => {
  const [language, setLanguage] = useState("de");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "de" ? "en" : "de"));
  };

  useEffect(() => {}, [language]);
  const refForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vez96hp",
        "template_qrp9dck",
        refForm.current,
        "GWqENTqPmUmtpZKUX"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send message! Please try again.");
        }
      );
  };
  return (
    <div>
      <div className="language-btn-container">
        <button className="language-btn" onClick={toggleLanguage}>
          {language === "de" ? "Switch to English" : "Wechsel zu Deutsch"}
        </button>
      </div>
      <h1>{language === "de" ? "Kontakt" : "Contact"}</h1>
      <div className="contact-page">
        <div className="text">
          <h2>
            {language === "de" ? (
              <>
                Wenn Sie weitere Fragen zu meiner Person oder zu meiner Arbeit
                haben, können Sie mich gerne über das Kontaktformular
                anschreiben. Ich freue mich auf Ihre Nachricht!
              </>
            ) : (
              <>
                If you have any further questions about my person or my work you
                can contact me via the contact form. I look forward to your
                message!
              </>
            )}
          </h2>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="user_subject"
                    id="user_subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    id="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="btn" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>

      <div className="icon-list">
        <div className="icon1">
          <a
            href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />{" "}
          </a>
        </div>
        <div className="icon2">
          <a
            href="https://github.com/Marcel0906"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />{" "}
          </a>
        </div>
        <div className="phone">
          <div className="icon3">
            <a
              href="https://wa.me/4915141277858"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
        <div className="icon4">
          <a
            href="https://join.skype.com/invite/KK4DdcF44fq4"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faSkype} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
