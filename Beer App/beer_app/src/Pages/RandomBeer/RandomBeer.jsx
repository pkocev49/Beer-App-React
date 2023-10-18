import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import "./RandomBeer.css";
import { Fade } from "react-awesome-reveal";

const RandomBeer = () => {
  const [RandomBeer, setRandomBeer] = useState([]);

  const fetchRandomBeer = async () => {
    const response = await fetch(`https://api.punkapi.com/v2/beers/random`);
    const results = await response.json();
    // console.log(results, "res");
    setRandomBeer(results);
  };
  useEffect(() => {
    fetchRandomBeer();
  }, []);
  return (
    <>
      <Fade direction="left">
        <div className="container">
          <div className="inner-container">
            {RandomBeer.map((oneBeer) => (
              <div key={oneBeer.id} className="containerOne">
                <img
                  className="randomBeerImg"
                  src={oneBeer.image_url}
                  alt="beer-img"
                />
                <div className="containerTwo">
                  <div
                    style={{
                      marginBottom: "30px",
                      borderBottom: "1px solid grey",
                      padding: "10px",
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <b>{oneBeer.name}</b>
                    {oneBeer.tagline}
                  </div>

                  <div>{oneBeer.description}</div>
                  <div className="containerThree">
                    <div>Brewed:{oneBeer.first_brewed}</div>
                    <div>Alcohol:{oneBeer.abv}%</div>
                    <div>Bitterness:{oneBeer.ibu}</div>
                  </div>

                  <div className="containerFour">
                    {" "}
                    <b>Food paring</b>
                    <ul>
                      <li> "{oneBeer.food_pairing[0]}"</li>
                      <li> "{oneBeer.food_pairing[1]}"</li>
                      <li>"{oneBeer.food_pairing[2]}"</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </>
  );
};

export default RandomBeer;
