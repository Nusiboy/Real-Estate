import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./NoMatchSite.css"

function NoMatch(){
    return(

<div id="no-match">
    <h1>sorry, page not found</h1>
    <h2><Link to="/">Back to Home Page</Link></h2>
</div>

    )
}

export default NoMatch