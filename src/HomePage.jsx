import React from "react";
import "./HomePage.css";
function HomePage() {
  return (
    <div id="homepage-container">
      <div id="first-container">
        <div id="first-header">
          <br /> 
          <h1 id="welcome">Welcome to Home Finder!</h1>
          <h3>A new place to find your new home</h3>
          <h4>
            help yourself and browse through our many different kinds of Estates
          </h4>
          <h4>any type of home you are imagining is waiting for you...</h4>
        </div>
      </div>
      <div id="agent-container">
        <h1 id="agent-header">
          Our agents will help you out seeking your new home!
        </h1>
        <h4 id="second-line">
          Each agent is qualified and experiesed and will gladly <br /> provide
          the best assistance you can get
        </h4>
        <br />
        <br />
        <h3 id="third-line">Check our agents:</h3>
        <div id="agents">
          <div id="agent1">
            <img className="img"
              src="https://www.compass.com/m/13/0de6b610-c3db-4e66-9c09-6dfbd01bef83/origin.jpg"
              alt=""
              width="350px"  
              height="350px"
            />
            <h2>Omri Madmoni</h2>
            <h4 className="agent-info">
              Experience: 10 years <br />
              Age: 32 <br />
            </h4>
          </div>
          <div id="agent2">
            <img className="img"
              src="https://www.compass.com/m/13/c964a8e7-671d-4a29-bf57-ca2f6c2b7a69/origin.jpg"
              alt=""
              width="350px"
              height="350px"
            />
            <h2>Elad Levi</h2>
            <h4 className="agent-info">
              Experience: 6 years <br />
              Age: 28 <br />
            </h4>
          </div>
          <div id="agent3">
            <img className="img"
             src="photos\agent3.png" alt="" width="350px" height="350px" />
            <h2>Gila Ashkenazi</h2>
            <h4 className="agent-info">
              Experience: 9 years <br />
              Age: 41 <br />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
