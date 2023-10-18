import React from "react";
import Carousel from "react-elastic-carousel";
import BeerCard from "../BeerCard/BeerCard";

function Swipe({ beers }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <div>
        <div></div>
        <div className="productSwipe">
          <Carousel breakPoints={breakPoints}>
            {beers.map((beer) => (
              <BeerCard key={beer.id} beer={beer} />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Swipe;
