import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import info from "./data.json";
import "./HouseInfo.css";

function HouseInfo() {
  let { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {setData(info.results.find(value => value.zpid == id))}, [info]);
  return (
    <div id="container-info">
      <div id="house-container">
        <div id="image-container">
          <div id= "location">
            location: {`${data?.country}`}, {`${data?.state}`}, {`${data?.city}`}
          </div>
          <img id="image-info" src={`${data?.imgSrc}`} />
          <div id="information"> 
          <h1 id="info-header">Estate Details:</h1>
            Price: {`${data?.price}`}$ <br />
            Bedrooms: {`${data?.bedrooms}`}
            <br />
            Bathrooms: {`${data?.bathrooms}`} <br />
            Hometype: {`${data?.homeType}`}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseInfo;
