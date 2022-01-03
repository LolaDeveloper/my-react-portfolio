import React from "react";
import ProfilePhoto from "./ProfilePhoto1.png";

const Home = () => {
  return (
    <div className="container">
      <div className="hero container">
        <p className="mt-4 mb-4">👋🏽 Hello, I am</p>
        <div className="container text-center col-lg-6">
          <img
            src={ProfilePhoto}
            alt="A picture of Funmilola"
            class="img-fluid profile-photo-homepage"
          />
        </div>

        <h1>Funmilola Adeniran</h1>
        <h2>Front-end developer based in Japan</h2>
        <hr />
      </div>

      <div className="container text-center">
        <p className="homepage-description">
          When I decided to give web development a go, I knew that I'd bumped
          into the world of digital magic! Web design gives me the opportunity
          to use my creative side to the fullest. I enjoy building websites. My
          goal is make the web better, one code at a time.
          <br />
          <br />
          Check out more below:
        </p>
      </div>
      <div className="container">
        <div className="d-flex justify-content-center">
          <a href="/about.html" class="btn btn-branding" title="About button">
            About me
          </a>
          <a href="/work.html" class="btn btn-branding" title="Go to Projects">
            My Work
          </a>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Home;
