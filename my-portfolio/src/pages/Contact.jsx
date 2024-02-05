import { React, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
  faSkype,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

const Contact = () => {
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
      <br></br>
      <h1>Kontakt</h1>
      <div className="contact-page">
        <div className="text">
          <h2>
            Wenn Sie weitere Fragen zu meiner Person oder zu meiner Arbeit
            haben, können Sie mich gerne über das Kontaktformular anschreiben.
            Ich freue mich auf Ihre Nachricht!
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
              {/* <span>015141277858</span> */}
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
        <div className="icon5">
          <a
            href="https://join.slack.com/t/webdevcel/shared_invite/zt-2b2k4pyee-1eUzqwoDGS8sfwTCgSAh1g"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faSlack} />
          </a>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default Contact;
