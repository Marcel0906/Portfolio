import { Link } from "react-router-dom";
const Resume = () => {
  return (
    <div className="Resume">
      <br></br>
      <h1>Lebenslauf</h1>
      <table className="resume-table">
        <thead>
          <tr>
            <th scope="col">Erfahrung</th>
            <th scope="col">Bildung</th>
            <th scope="col">Skills</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              07/2023 - 09/2024 Full Stack Web Developer bei DCI - Digital
              Career Institute, Berlin, DE
            </td>
            <td></td>
            <td rowSpan="1" align="right" valign="bottom">
              HTML5, CSS3, Javascript, Node.js, React, Vite, MongoDB, MySQL, Express, Mongoose, Lingoda English B2
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
        Zu den beschriebenen Skills schicke ich gerne auf Anfrage über das{" "}
        <Link to="/contact">
          <button className="btn">Kontaktformular</button>
        </Link>{" "}
        die entsprechenden Zertifikate und sonstigen Dokumente.
      </p>
    </div>
  );
};

export default Resume;
