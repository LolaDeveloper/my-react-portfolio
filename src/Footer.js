import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="container text-center" id="contact">
        <div>
          <p className="text-muted">Interested in doing a project together?</p>
          <h3>Get in touch</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <FaEnvelope />
              <br />

              <a
                href="mailto:techheadlola@gmail.com"
                className="email-link"
                title="Email Funmilola"
              >
                techheadlola@gmail.com
              </a>
            </div>
            <div className="col-lg-6">
              <p>You can also find me here:</p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/funmilola-alice-adeniran-0a16291b/"
                  title="LinkedIn Profile"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.github.com/LolaDeveloper"
                  title="GitHub Profile"
                  target="_blank"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://twitter.com/TechheadLola"
                  title="Twitter Profile"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5">
          😎Coded by Funmilola|
          <a
            href="https://github.com/LolaDeveloper/portfolio-project"
            title="View source code"
            target="_blank"
          >
            Project Open-source
          </a>
        </p>
      </footer>
    </div>
  );
}
