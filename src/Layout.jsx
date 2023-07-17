import "./NavBar.css";
import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className="container-navbar">
       <div><h1 id="header">
         Home Finder
        </h1>
        <img id="logo" src="../photos/house_icon.png" alt="" />
        </div>
          <h4 id="secondery-header">Find your perfect home</h4>
        <div id="navbar">
          <nav className="topnav">
            <div id="nav-slection">
              <Link id="home" to="/">
                Home
              </Link>
              <Link id="estates" to="HouseTablet">
                Estates
              </Link>
              <Link id="favorites" to="FavoriteEstates">
                Favorites
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <div id="outlet">
        <Outlet />
      </div>

      <div id="container-footer">
        <div id="top-footer">
          <h3>Connect with us on social media:</h3>
          <a href="https://www.instagram.com/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
              width="50px"
              height="50px"
            />
          </a>
          <a href="https://www.facebook.com/">
            <img
              src="https://www.facebook.com/images/fb_icon_325x325.png"
              width="50px"
              height="50px"
            />
          </a>
          <a href="https://www.linkedin.com/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png"
              width="50px"
              height="50px"
            />
          </a>
          <a href="https://www.youtube.com/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
              width="50px"
              height="50px"
            />
          </a>
        </div>
        <div id="low-footer">
          <h3>Comunication options:</h3>
          <h3>Email: HouseFinder@gmail.com</h3>
          <h3>Number: (+972) 52 684 2050</h3>
        </div>
      </div>
    </div>
  );
}
export default Layout;
