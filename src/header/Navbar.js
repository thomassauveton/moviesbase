import React from "react";
import { Link, withRouter } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">MOVIES BASE </Link>
       
      </div>
      <h4 className="subtitle">Find your movie and look his teaser</h4>
      <div className="search-bar">
        <Search />
      </div>
      <div style={{ clear: "both" }} />
    </nav>
  );
};

export default withRouter(Navbar);
