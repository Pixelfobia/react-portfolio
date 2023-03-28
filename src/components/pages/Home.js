import React from "react";
import mecover from '../../assets/images/me_cover.png';
import Footer from "../Footer";

function Home() {
  return (
    <>
      <section className="container port-hero">
        <div className="row g-3">
          <div className="col">
            <h1 className="hero-title">Oh hey! My name is
              <span className="nowrap">Sergio Utrera</span>.
              <br />I make things that make <span className="nowrap">people happy</span>.
            </h1>
            <div className="port-hero--btn">
              <a className="button-cv" href="./assets/SergioUtrera_CV_23.pdf" target="_blank"><i className="fa-solid fa-download"></i> Download CV</a>
            </div>
          </div>
          <div className="col">
            <div className="port-hero--img">
              <img src={mecover}
              alt={mecover} />

            </div>
          </div>
        </div>
      </section>
      <section className="container port-content">
        <div className="row">
          <h3 className="text-center my-5">Summary</h3>
          <div className="col-12">
            <p className="text-center my-4">Multi-skilled digital & Web designer with competence in print and digital design. A quick learner who can absorb
              new ideas. Currently looking for an opportunity to join a dynamic and growing company to forge a career in IT.</p>
          </div>
          <div className="col-12">
            <ul className="port-content--ul">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>React.js</li>
              <li>Git/GitHub</li>
              <li>Adobe Suite</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
    
  );
  

}

export default Home;
