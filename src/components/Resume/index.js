import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Sue Banasihan</h2>
          <ul>
            <li>
              Competencies in full-stack web
              development.
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/sue-banasihan-004b43241/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href="https://github.com/sBanasihan_Portfolio/react-portfolio/raw/main/docs/SuzanneBanasihan-Resume.docx"
            class="link"
          >
            Download My Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Skills Acquiresd</h2>
          <ul>
            <li>
            HTML, CSS including Bootstrap and HandleBars, JavaScript, jQuery, React.js,<br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs, Templating.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;