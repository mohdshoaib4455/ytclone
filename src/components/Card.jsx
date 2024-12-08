import React, { useContext, useState } from "react";
import { AppContext } from "../store/store";
import { Link } from "react-router-dom";
import  { abbreviateNumber } from "js-abbreviation-number";
import { format } from "timeago.js";

const VideoCard = () => {
  const {f2, DarkMode, thumbnail } = useContext(AppContext);
  



  return (
    <div className="container-fluid py-4">
      <div className="row">
        {thumbnail?.map((items) => (
          <Link key={items.id} to={`/video/${items.id}`}
            onClick={()=>{f2(items)}}
            className="col-lg-4 col-md-4 col-sm-6 mb-3 d-flex"
            style={{ textDecoration: "none" }}
          >
            <div
              className={`card border-none ${
                DarkMode ? "bg-white" : "bg-black"
              } w-100`}
            >
              <img
                src={items?.snippet?.thumbnails?.maxres?.url}
                className="card-img-top rounded"
                alt="Video Thumbnail"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body py-2 d-flex justify-content-start  p-0 flex-column">
                <h5
                  className={`card-title m-0 my-2 h5 ${
                    DarkMode ? "text-dark" : "text-white"
                  }`}
                  title=""
                >
                  {items?.snippet?.title}
                </h5>

                <p
                  className={`card-text mb-1 ${
                    DarkMode ? "text-dark" : "text-white"
                  }`}
                >
                  {items?.snippet?.channelTitle}
                </p>
                <p
                  className={`card-text mb-0 ${
                    DarkMode ? "text-dark" : "text-white"
                  }`}
                >
                  {abbreviateNumber(items?.statistics?.viewCount, 2)} Views{" "}
                  <span>.</span>{" "}
                  <span>{format(items?.snippet?.publishedAt)}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoCard;
