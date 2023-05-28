import React from "react";
import { useState, useEffect } from "react";
import Tablet from "./Tablet";
import "./HouseInfo.css";


function favoriteEstates() {
    const [favorite, setFavorite] = useState([]);
  
    useEffect(() => {
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        setFavorite(JSON.parse(storedFavorites));
      }
    }, []);
  
    return (
      <div>
        {favorite.map((value, index) => (
          <Tablet key={index} result={value} />
        ))}
      </div>
    );
  }
export default favoriteEstates;
  