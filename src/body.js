import React from "react";
import movieTitle from "./images/FeaturedTitleImage.png";
import { FaPlay } from "react-icons/fa";

import Slider from "./slider";
function Body() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div style={{ height: "inherit", display: "flex" }}>
        <div className="midDiv">
          <div className="irishmanTitleContainer">
            <span className="mov">MOVIE</span>
            <img
              src={movieTitle}
              style={{ width: "37vw" }}
              alt="movieTitle"
            ></img>
            <span
              style={{ color: "#fff", fontSize: "30px", paddingTop: "2vh" }}
            >
              2021 18+ 1h 48m
            </span>
            <span className="loremText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standart dummy text
              ever since the 1500s
            </span>
            <div className="playDiv">
              <button className="playBtn">
                <FaPlay />
                <h3 className="playText">Play</h3>
              </button>
              <button className="moreInfoBtn">
                <h3 className="moreInfoText">More Info</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
}

export default Body;
