import React from "react";
import bg from "../../assets/img/hero.png";
import whatch from "../../assets/img/whatch.png";
const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div
          className="hero"
          style={{
            background: `url(${bg}) no-repeat center/cover`,
            minHeight: "80vh",
            borderRadius: "51px",
          }}
        >
          <div className="hero--text">
            <h3>Sale up to 20% off</h3>
            <h1>Apple Watch Ultra 2</h1>
            <p>
              The most rugged and capable Apple Watch pushes <br /> the limits
              again. Featuring the all-new S9 SiP.
            </p>
            <div className="hero--text__btns">
              <button className="hero--text__btns--left">Shop Now</button>
              <button className="hero--text__btns--right">Learn More</button>
            </div>
          </div>
          <img src={whatch} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
