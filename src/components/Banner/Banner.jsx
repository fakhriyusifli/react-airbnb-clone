import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Search from "../Search/Search";
import "./Banner.css";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      {/* banner date picker section */}
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          Search Dates
        </Button>
      </div>

      {/* banner info section */}
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
