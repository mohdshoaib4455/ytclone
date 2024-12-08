import React from "react";
import loader from "../assets/ghost.gif";
const PreLoad = () => {
  return (
    <>
      <div className="container-fluid h-100  w-100 d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col-lg-12">
            <img src={loader} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreLoad;
