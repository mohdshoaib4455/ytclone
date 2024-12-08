import React, { useContext } from "react";
import { AppContext } from "../store/store";
import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";
import { format } from "timeago.js";

const SearchResult = () => {
  const { Searchvideo, DarkMode, f2 } = useContext(AppContext);
  console.log(Searchvideo);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {Searchvideo.map((item) => {
            return (
              <Link
                to={`/video/${item?.id?.videoId}`}
                className="col-lg-4 col-md-4 col-sm-6 mb-3 d-flex"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  f2(item);
                }}
                key={item?.id?.videoId} // Always add a unique key when using map
              >
                <div
                  className={`card border-none ${
                    DarkMode ? "bg-white" : "bg-black"
                  } w-100`}
                >
                  <img
                    src={item?.snippet?.thumbnails?.high?.url}
                    className="card-img-top rounded"
                    alt="Video Thumbnail"
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  <div className="card-body py-2 d-flex justify-content-start p-0 flex-column">
                    <h5
                      className={`card-title m-0 my-2 h5 ${
                        DarkMode ? "text-dark" : "text-white"
                      }`}
                      title={item?.snippet?.title}
                    >
                      {item?.snippet?.title}
                    </h5>

                    <p
                      className={`card-text mb-1 ${
                        DarkMode ? "text-dark" : "text-white"
                      }`}
                    >
                      {item?.snippet?.channelTitle}
                    </p>
                    <p
                      className={`card-text mb-0 ${
                        DarkMode ? "text-dark" : "text-white"
                      }`}
                    >
                      {abbreviateNumber(item?.statistics?.viewCount, 2)} Views{" "}
                      <span>.</span>{" "}
                      <span>{format(item?.snippet?.publishedAt)}</span>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchResult;
