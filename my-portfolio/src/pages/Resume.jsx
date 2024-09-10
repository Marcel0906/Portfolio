import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Resume = () => {
  const [language, setLanguage] = useState("de");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "de" ? "en" : "de"));
  };

  useEffect(() => {}, [language]);
  return (
    <div className="Resume">
      <div className="language-btn-container">
        <button className="language-btn" onClick={toggleLanguage}>
          {language === "de" ? "Switch to English" : "Wechsel zu Deutsch"}
        </button>
      </div>
      <h1>{language === "de" ? "Lebenslauf" : "Resume"}</h1>

      <table className="resume-table">
        <thead>
          <tr>
            <th scope="col">
              {language === "de" ? "Erfahrung" : "Experience"}
            </th>
            <th scope="col">{language === "de" ? "Bildung" : "Education"}</th>
            <th scope="col">{language === "de" ? "Skills" : "Skills"}</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>
              07/2024 - 09/2024 Web Developer bei RFS Mediagroup in der Web-Kon Internetagentur, Stadtlohn, DE
            </td>
            <td>
            In Microsoft Teams Meetings mit dem Team Lead Web Developer wurde ich mit dem praktischen Arbeiten in Typo3 vertraut gemacht und habe erfolgreich ein Projekt in Typo3 umgesetzt. Mein Praktikumszeugnis erhalte ich nächster Zeit.
            </td>
            <td rowSpan="1" align="right" valign="bottom">
              HTML5, CSS3, Javascript, PHP, TYPO3, CMS, Trello
            </td>
          </tr>
          <tr>
            <td>
              07/2023 - 09/2024 Full Stack Web Developer bei DCI - Digital
              Career Institute, Berlin, DE
            </td>
            <td>
              Linkedin Learning (incl. Zertifikate): PHP Grundkurs 1 und 2, PHP
              Datenbankentwicklung, SQL, CMS, TYPO3, Shopware, Typescript,
              WordPress, GraphQL, Figma, Generative AI Coding with ChatGPT and Building
              an AI-First Mindset
            </td>
            <td rowSpan="1" align="right" valign="bottom">
              HTML5, CSS3, Javascript, Node.js, React, Vite, MongoDB, MySQL,
              Express, Mongoose, Lingoda English C1.1
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              2019 Mekobus Seminar mit dem Website-Projekt "Kosmetik Cel"
              Abschluss mit Zertifikat
            </td>
            <td rowSpan="1" align="right" valign="bottom">
              Bild-, Audio- und Videobearbeitung, Web-Tools, Medien & Recht,
              Datenschutz & DSGVO
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              10/2011- 09/2019 Kombi-B.A. Abschluss in Politik- und
              Rechtswissenschaft an der Universität Bielefeld. Als Ergänzung zum
              Bachelor of Arts Schwerpunkt Data Science in der
              Wirtschaftswissenschaft.
            </td>
            <td rowSpan="1" align="right" valign="bottom">
              EDV Kurse in Word und Excel, Sprachkurs in Spanisch (A2),
              Teamprojekte, Hausarbeiten, Bachelorarbeit
            </td>
          </tr>

          <tr>
            <td>
              02/2019 selbständiges Gewerbe "Import und Export von
              Kosmetikartikeln"
            </td>
            <td></td>
            <td rowSpan="1" align="right" valign="bottom">
              Verhandlungen, Verkauf, Buchhaltung und Rechnungswesen
            </td>
          </tr>

          <tr>
            <td>
              10/2010 - 06/2011 Zivildienst im Seniorenzentrum "Haus Ubbedissen"
            </td>
            <td></td>
            <td rowSpan="1" align="right" valign="bottom">
              Soziale Interaktion mit Menschen mit körperlicher und/oder
              geistiger Behinderung, seelsorgerische Betreuung
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              06/2010 Allgemeine Hochschulreife am Ceciliengymnasium Bielefeld
            </td>
            <td rowSpan="1" align="right" valign="bottom">
              Klassenarbeiten, Präsentation, Abitur-Klausuren, mündliche Prüfung
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        {language === "de" ? (
          <>
            Zu den beschriebenen Skills schicke ich gerne auf Anfrage über das <br></br>
            <Link to="/contact">
              <button className="btn">Kontaktformular</button>
            </Link>{" "}
            die entsprechenden Zertifikate und sonstigen Dokumente.
          </>
        ) : (
          <>
            I am happy to send the corresponding certificates and other
            documents upon request via the 
            <Link to="/contact">
              <button className="btn">contact form</button>
            </Link>
            .
          </>
        )}
      </p>
    </div>
  );
};

export default Resume;
