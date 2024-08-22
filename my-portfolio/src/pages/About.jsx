import React, { useState, useEffect } from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [language, setLanguage] = useState("de");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "de" ? "en" : "de"));
  };

  useEffect(() => {}, [language]);
  return (
    <div className="about-page">
      <div className="language-btn-container">
        <button className="language-btn" onClick={toggleLanguage}>
          {language === "de" ? "Switch to English" : "Wechsel zu Deutsch"}
        </button>
      </div>
      <h1>{language === "de" ? "Über mich" : "About me"}</h1>

      <div className="text-zone">
        {language === "de" ? (
          <>
            <p>
              Die Informatik fasziniert mich seit Jahren. Privat habe ich mich
              u.a. gerne über Entwicklungen in der KI, Sicherheitstechnologien
              und den Mobilfunk- und Festnetzausbau in Deutschland informiert.
              Das hat sich zum Beispiel darin niedergeschlagen, dass ich
              Freunden und Familienmitgliedern bei der Zusammenstellung und dem
              Kauf von PCs, Laptops und Smartphones mit Rat und Tat zur Seite
              gestanden habe. Gerade in einer so schnell wachsenden Branche wie
              der IT ist es wichtig, auf dem Laufenden zu bleiben und sich über
              neue Technologien und Entwicklungen zu informieren. Daher ist es
              für mich eine Herausforderung, als Full-Stack Web/Software
              Developer die Chance zu nutzen, in einem IT-Unternehmen zu
              arbeiten, das mit innovativen und neuen Technologien spannende
              Projekte entwickelt.
            </p>
            <p>
              Zuverlässigkeit, autodidaktischen Lernen, lösungsorientiertes,
              selbstständiges Arbeiten zeichneten mein bisheriges
              Arbeitsverhalten aus. Die termingerechte Fertigstellung und Abgabe
              meiner Hausarbeiten im Studium sowie die Teamarbeit mit anderen
              DCI-Studierenden in meiner Weiterbildung beim DCI festigten meine
              Erfahrungen im agilen Projektmanagement und in
              Teamleitungsaufgaben mit Projektpräsentationen.
            </p>
            <p>
              Zu meinen persönlichen Interessen zählen Wandern in der Natur mit
              Freunden und Familie, Radfahren, Campen, Joggen und Schwimmen.
              Diese Interessen dienen meinem gesundheitlichen Ausgleich zur
              Bildschirmarbeit. Außerdem helfe ich in der Familie bei der
              Kinder- und Hundebetreuung.
            </p>
          </>
        ) : (
          <>
            <p>
              I have been fascinated by computer science for years. Privately, I
              have enjoyed learning about developments in AI, security
              technologies, and the expansion of mobile and fixed networks in
              Germany. This has, for example, resulted in me advising friends
              and family members on the assembly and purchase of PCs, laptops,
              and smartphones. In such a rapidly growing industry as IT, it is
              important to stay up to date and learn about new technologies and
              developments. Therefore, it is a challenge for me to take the
              opportunity to work as a Full-Stack Web/Software Developer in an
              IT company that develops exciting projects with innovative and new
              technologies.
            </p>
            <p>
              Reliability, self-taught learning, solution-oriented, independent
              work have characterized my previous work behavior. The timely
              completion and submission of my term papers during my studies, as
              well as teamwork with other DCI students in my further education
              at DCI, have solidified my experience in agile project management
              and team leadership tasks with project presentations.
            </p>
            <p>
              My personal interests include hiking in nature with friends and
              family, cycling, camping, jogging, and swimming. These interests
              serve as a health balance to screen work. I also help with
              childcare and dog care in the family.
            </p>
          </>
        )}
        <div className="stage-cube-cont">
          <h2>Skillset</h2>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#46b34c" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
