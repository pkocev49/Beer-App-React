import { useNavigate } from "react-router-dom";
import "./BeerCard.css";
import { Fade } from "react-reveal";

const BeerCard = (props) => {
  const { beer } = props;
  const navigate = useNavigate();
  return (
    <>
      <Fade top>
        <div className="beerCard">
          <div className="imgDiv">
            <img className="beerImg" src={beer.image_url} alt="" />
          </div>
          <div>
            <b>{beer.name}</b>
          </div>
          <div className="tagline">{beer.tagline}</div>
          <div className="moreDetailsBtn">
            <button
              className="moreInfo"
              onClick={() => navigate("/beers/" + beer.id)}
            >
              More details
            </button>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default BeerCard;
