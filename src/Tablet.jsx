import React from "react";
import "./Tablet.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Tablet({ result,favorite,
  setFavorite,
  addToFavorite }) {
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);

  return (
    <div id="container">
      <Link to={`/HouseInfo/${result.zpid}`}>
        <div id="tablet-container">
          <div id="top-info">
            location: {`${result?.country}`}, {`${result?.state}`},
            {`${result?.city}`}
          </div>
          <img id="image" src={`${result?.imgSrc}`} />
          <div id="info">
            Price: {`${result?.price}`}$ <br />
            Bedrooms: {`${result?.bedrooms}`}
            <br />
            Bathrooms: {`${result?.bathrooms}`} <br />
            Hometype: {`${result?.homeType}`}
            <br />
          </div>
        </div>
      </Link>
      <button
        id="favorite-btn"
        onClick={() => {
          addToFavorite(result);
          setIsActivated(!isActivated);
        }}
      >
        {isActivated ? "remove from Favorite's" : "Add to Favorite's"}
      </button>
    </div>
  );
}

export default Tablet;
