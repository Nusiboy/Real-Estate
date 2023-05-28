import React from "react";
import { Link } from "react-router-dom";
import "./Tablet.css";


function FavoriteHouse({ result }) {
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
    </div>
  );
}
export default FavoriteHouse