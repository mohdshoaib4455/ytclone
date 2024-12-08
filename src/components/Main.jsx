import React, { useContext } from "react";
import VideoCard from "./Card";
import { AppContext } from "../store/store";
import PreLoad from "./PreLoad";

const Main = () => {

  const { Loading } = useContext(AppContext);
 
  return (
    <>
      <div
        className="main overflow-auto w-100 "
        style={{
          height: "calc(100vh - 7rem)",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        {Loading ? <PreLoad /> : <VideoCard />}
      
      </div>
    </>
  );
};

export default Main;
