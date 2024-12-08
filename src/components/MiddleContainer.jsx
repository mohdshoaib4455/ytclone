import React from 'react'
import SideBar from './Sidebar';
import Main from './Main';

const MiddleContainer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 p-0 d-flex">
          <SideBar />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default MiddleContainer