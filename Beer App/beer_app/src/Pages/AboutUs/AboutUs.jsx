import React from "react";
import "./AboutUs.css";
import { Fade } from "react-awesome-reveal";
const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <h2>About Us</h2>

        <div className="pDiv">
          <p className="p1">
            Welcome to Beer World, where our passion for beer is as deep as the
            flavors we offer.
          </p>
          <p className="p2">
            At Beer World, we believe that beer is more than just a beverage;
            it's a culture, a craft, and a source of unending inspiration.
          </p>
          <p className="p3">
            Our mission is to share our enthusiasm for beer and to help you
            discover the amazing range of flavors, aromas, and traditions that
            make beer a timeless and beloved beverage.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
