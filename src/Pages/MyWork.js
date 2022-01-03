import React from "react";
import Tarot from "./tarot.png";

const MyWork = () => {
  return (
    <div className="content-container container">
      <div className="content">
        <h1 className="mb-5 text-center">My Projects</h1>
        <div className="row mt-5">
          <div className="col-md-6">
            <img
              src={Tarot}
              class="img-fluid mb-4 rounded"
              alt="Tarot page Preview"
            />
          </div>
          <div className="col-md-6 mb-4">
            <h2 className="card-title mt-5">Tarot Landing page</h2>
            <p>
              My very first coding project! I built this as a final project for
              the SheCodes Basic workshop. Although it's just a basic landing
              page built with HTML, JavaScript and CSS, I have tried to improve
              on it with the new things that I've learned since I first built
              it.
            </p>
            <p>
              <a
                href="https://peaceful-fermat-d644e2.netlify.app/"
                target="_blank"
                className="btn btn-branding"
                title="Tarot page landing page"
              >
                View Project
              </a>
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h2 className="card-title mt-5">Weather App</h2>
            <p cclassName="card-text">
              I built this weather app as my SheCodes Plus final project. When I
              built it, it was not responsive, but I have worked on it a bit
              more using the responsive skills that I recently acquired. It was
              built using HTML, CSS, and JavaScript. It is fully functional and
              can be used to check the weather forecast of any city in the
              world.
            </p>
            <p>
              <a
                href="https://jovial-ptolemy-036e1f.netlify.app/"
                target="_blank"
                className="btn btn-branding"
                title="Weather App Preview"
              >
                View Project
              </a>
            </p>
          </div>
          <br />
          <div className="col-md-6 mb-5 justify-content-end">
            <img
              src="images/weather.png"
              className="img-fluid mb-4 rounded"
              alt="Tarot page Preview"
            />
          </div>
          <div className="col-md-6 mb-4">
            <img
              src="images/dictionary app.png"
              className="img-fluid rounded mb-3"
              alt="Dictionary App Preview"
            />
          </div>
          <div className="col-md-6 mb-4">
            <h3 className="text-center m-0">Dictionary App</h3>
            <p className="card-text">
              I had so much fun building this dictionary app with React JSX.
              Styled with CSS and integrated a dictionary API which it uses to
              call the definitions, phonectics (audio and text) and so on. It is
              fully functional, just like any dictionary out there-only just a
              bit more stylish 😄. It goes a notch higher by providing visuals
              via another API. Please check it out.
            </p>
            <p>
              <a
                href="https://dictionary-project-bylola.netlify.app/"
                target="_blank"
                className="btn btn-branding"
                title="Dictionar App Site"
              >
                View Project
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
