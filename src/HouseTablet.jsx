import data from "./data.json";
import Tablet from "./Tablet";
import { useState,useEffect } from "react";

function HouseTablet() {
  const [detail, setDetail] = useState(data.results);
  const [fakeDetail, setFakeDetail] = useState(data.results);

  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorite(JSON.parse(storedFavorites || []));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify([]));
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);

  const addToFavorite = (item) => {
    console.log("favorite", favorite);
    console.log("item", item);
    const existingFavorite = favorite.some((favItem)=>favItem?.zpid===item?.zpid);
    console.log("existingFavorite", existingFavorite);
    console.log([...favorite, item]);
    if (!existingFavorite) {
      setFavorite([...favorite, item]);
    } else {
      console.log("filtered",favorite.filter((favItem) => favItem.zpid !== item.zpid));
      setFavorite(favorite.filter((favItem) => favItem.zpid !== item.zpid));
    }
  };

  function filterRooms(e) {
    const selectedRooms = e.target.value;
    if (selectedRooms === "None") {
      setDetail(fakeDetail);
    } else {
      setDetail(() => {
        return fakeDetail.filter((item) => item.bedrooms == selectedRooms);
      });
    }
  }
  function sortDetailes(e) {
    switch (e.target.value) {
      case "All":
        setDetail(data.results);
        break;
      case "lowest price":
        setDetail((prev) => [...prev].sort((a, b) => a.price - b.price));
        break;
      case "highest price":
        setDetail((prev) => [...prev].sort((a, b) => b.price - a.price));
        break;
      case "min bathrooms":
        setDetail((prev) =>
          [...prev].sort((a, b) => a.bathrooms - b.bathrooms)
        );
        break;
      case "max bathrooms":
        setDetail((prev) =>
          [...prev].sort((a, b) => b.bathrooms - a.bathrooms)
        );
        break;
      case "minimum bedrooms":
        setDetail((prev) => [...prev].sort((a, b) => b.bedrooms - a.bedrooms));
        break;
      case "max bedrooms":
        setDetail((prev) => [...prev].sort((a, b) => b.bedrooms - a.bedrooms));
        break;
      default:
        return;
    }
  }

  return (
    <div id="full-tablet-container">
      <div id="selector-container">
        <h1 id="option-header">Search by options:</h1>
        <h2>Pick your preference</h2>
        <select name="options" id="selector" onChange={(e) => sortDetailes(e)}>
          <option disabled={true} value="">
            --Choose an option--
          </option>
          <option value="All">All</option>
          <option value="lowest price">Lowest Price</option>
          <option value="highest price">highest Price</option>
          <option value="min bathrooms">Min Bathrooms</option>
          <option value="max bathrooms">Max Bathrooms</option>
          <option value="minimum bedrooms">Minimum Bedrooms</option>
          <option value="max bedrooms">Max Bedrooms</option>
        </select>
        <h2>Pick number of rooms</h2>
        <select id="filter-city" onChange={(e) => filterRooms(e)}>
          <option disabled={true} value="">
            --Choose number of rooms--
          </option>
          <option value="None">None</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div id="house-tablet-container">
        {detail &&  
          detail.map((value, index) => (
            <Tablet
              key={index}
              result={value}
              favorite={favorite}
              setFavorite={setFavorite}
              addToFavorite={addToFavorite}
            />
          ))}
      </div>
    </div>
  );
}
export default HouseTablet;
