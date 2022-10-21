import React, { useState } from "react";
import img1 from "./icons/search-Icon.png";
import img2 from "./icons/home-icon.png";
import img3 from "./icons/video-player-icon.png";
import img4 from "./icons/list-icon.png";
import img5 from "./icons/mask-icon.png";
import img6 from "./icons/history-icon.png";
import profilePhoto from "./images/profile-photo.png";

let mini = true;
function toggleSidebar(showSetting, setShowSetting) {
  if (mini && !showSetting) {
    console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "18%";
    document.getElementById("mySidebar").style.boxShadow =
      "black 176px 0px 276px 172px";
    document.getElementById("mySidebar").style.backgroundImage =
      "linear-gradient(to right, black, 100%, rgba(0,0,0,0))";
    document.getElementById("mySidebar").style.paddingTop = "0%";
    mini = false;
    setShowSetting(true);
    console.log(showSetting);

    document.getElementById("mySidebar").style.boxShadow =
      "200px 40% 200px black";
  } else {
    console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "5%";
    document.getElementById("mySidebar").style.paddingTop = "5%";
    document.getElementById("mySidebar").style.backgroundColor =
      "rgba(0,0,0,0)";
    document.getElementById("mySidebar").style.boxShadow = "none";
    mini = true;
    setShowSetting(false);
  }
}

function Sidebar() {
  const [showSetting, setShowSetting] = useState(false);
  return (
    <>
      <div
        id="mySidebar"
        className="sidebar"
        onPointerEnter={() => toggleSidebar(showSetting, setShowSetting)}
        onPointerLeave={() => toggleSidebar(showSetting, setShowSetting)}
      >
        {showSetting && (
          <a href="/search" className="listItem">
            <img
              src={profilePhoto}
              alt="searchImg"
              style={{ width: "68px", borderRadius: "30px", height: "60px" }}
            ></img>
            <span className="iconTitle">Daniel</span>
          </a>
        )}
        <ul>
          <a href="/search" className="listItem">
            <img src={img1} alt="searchImg"></img>
            <span className="iconTitle">Search</span>
          </a>
          <a href="/home" className="listItem">
            <img src={img2} alt="homepageImg"></img>
            <span className="iconTitle">Home</span>
          </a>
          <a href="/tvShows" className="listItem">
            <img src={img3} alt="tvshowsImg"></img>
            <span className="iconTitle">TV Shows</span>
          </a>
          <a href="/movies" className="listItem">
            <img src={img4} alt="moviesImg"></img>
            <span className="iconTitle">Movies</span>
          </a>
          <a href="/genres" className="listItem">
            <img src={img5} alt="genreImg"></img>
            <span className="iconTitle">Genres</span>
          </a>
          <a href="/wathLater" className="listItem">
            <img src={img6} alt="watchLaterImg"></img>
            <span className="iconTitle">Watch Later</span>
          </a>
        </ul>
        {showSetting && (
          <ul className="settingsDiv">
            <span className="settings">LANGUAGE</span>
            <span className="settings">GET HELP</span>
            <span className="settings">EXIT</span>
          </ul>
        )}
      </div>
    </>
  );
}

export default Sidebar;
