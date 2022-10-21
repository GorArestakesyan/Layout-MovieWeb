import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import data from "./data.json";
import HoverVideoPlayer from "react-hover-video-player";
function Slider() {
  const sortFunction = (a, b) => {
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateA < dateB ? 1 : -1;
  };
  const sortedDAta = data.TendingNow.map((elem) => {
    return {
      ...elem,
      Date: elem.Date.substr(0, 10),
    };
  }).sort(sortFunction);
  return (
    <>
      <div style={{ overflow: "hidden", paddingBottom: "6vh" }}>
        <span className="trendingText">Tending Now</span>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 10,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 10,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
          dots={false}
          swipe={true}
          showSides={true}
          arrows={true}
          slidesToScroll={1}
          slidesToShow={6.7}
          scrollOnDevice={true}
        >
          {sortedDAta.map((elem, index) => {
            return (
              <div
                key={index}
                style={{ cursor: "pointer", height: "35vh", padding: "10px" }}
              >
                <HoverVideoPlayer
                  volume={1}
                  muted={false}
                  style={{
                    width: "100%",
                    display: "flex",
                    paddingTop: "50%",
                    objectFit: "cover",
                    alignItems: "center",
                  }}
                  videoSrc={elem.VideoUrl}
                  pausedOverlay={
                    <img
                      src={require(`${elem.CoverImage}`)}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              </div>
              // <div  key={index}  style={{cursor:"pointer"}}>
              // <img  src={require(`${elem.CoverImage}`)} key={index}  style={{width:"80%"}} alt="moviePic"/>
              // </div>
            );
          })}
        </InfiniteCarousel>
      </div>
    </>
  );
}

export default Slider;
