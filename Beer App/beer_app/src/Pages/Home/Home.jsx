import React from "react";
import beerImage1 from "../../assets/Img/829f0d8c974b3dea751e9e87836988ed.jpg";
import beerImage2 from "../../assets/Img/43afcdbf683e95d8a4f2553b131d6bc9.jpg";
import "./Home.css";
import AboutUs from "../AboutUs/AboutUs";
import { useContext, useEffect } from "react";
import { BeersContext } from "../../BeersContext";
import { makeApiCall } from "../../utils/fetchBeers";
import Swipe from "../../Components/Swiper/Swiper";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const { beers, handleAddBeers } = useContext(BeersContext);
  const URL = `https://api.punkapi.com/v2/beers`;

  useEffect(() => {
    if (beers.length === 0) {
      makeApiCall(URL)
        .then((results) => {
          handleAddBeers(results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [beers]);

  const welcomeMessageText = "Hello, this is beer world!";
  const descriptionText =
    "This is a simple beer page. You can get all the information for beers here.";

  return (
    <>
      <div className="frDiv">
        <div className="firstDiv">
          <h2>{welcomeMessageText}</h2>
          <p>{descriptionText}</p>
        </div>
        <div className="imageContainer">
          <Fade direction="left" triggerOnce="true">
            <img className="imgHome1" src={beerImage1} alt="home" />
          </Fade>
          <Fade direction="right" triggerOnce="true">
            <img className="imgHome2" src={beerImage2} alt="home" />
          </Fade>
        </div>
      </div>
      <Fade direction="left">
        <AboutUs />
      </Fade>
      <div className="swipeComponent">
        <h2>Some of our Beer's</h2>
        <Swipe beers={beers} />
      </div>
    </>
  );
};
export default Home;
