import React from "react";
import { useState, useEffect } from "react";
import "./HouseInfo.css";

import FavoriteHouse from "./FavoriteHouse";

function FavoriteEstates() {
    const [favorite, setFavorite] = useState([]);
  
    useEffect(() => {
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        setFavorite(JSON.parse(storedFavorites));
      }
    }, []);
    return (
      <div id="house-tablet-container">
        {favorite.map((value, index) => (
          <FavoriteHouse key={index} result={value} />
        ))}
      </div>
    );
  }
export default FavoriteEstates;
  