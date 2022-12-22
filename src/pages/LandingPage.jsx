import React from "react";
import SearchBar from "../components/SearchBar";

const LandingPage = () => {
  return (
    <>
      <div className="website-banner">
        <div className="searchBar-wrapper">
          <SearchBar />
        </div>
        <div className="intro-wrapper">
          <p>Hey there!!!</p>
          <p>I am Moumita Das, a dota noob</p>
          <p>
            Have been playing since 2020 and this page showcases come of my
            plays ever since.
          </p>
          <p>Feel free to browse throgh and leave your comments if you like</p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
