import React from 'react'
import Main from './Main';
import SideBar from './SideBar.jsx';

const MiddleContainer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 p-0 d-flex">
          <SideBar/>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default MiddleContainer