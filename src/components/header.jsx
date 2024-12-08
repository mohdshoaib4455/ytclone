import React, { useContext } from "react";
import "../App.css";
import { FaVideo } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import logo from "../images/1.png";
import { FaArrowLeft } from "react-icons/fa";
import logo2 from "../images/2.png";
import { AppContext } from "../store/store";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const {
    open,
    OpneFun,
    SideBarToggleFunction,
    Search,
    DarkMode,
    HndlDarkMode,
    SetValue,
    InputValue,
  } = useContext(AppContext);

  const navigate = useNavigate();
  const HandlClick = (e) => {
    e.preventDefault();
    Search(InputValue);
    navigate("/search");
    SetValue(" ");
  };

  return (
    <>
      <div className="HeaderWrap position-sticky w-100 top-0 z-2">
        <header
          className={` ${DarkMode ? "bg-white" : "bg-black"}   py-3 px-1 `}
        >
          <div className="container-fluid d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2 ">
              <span onClick={SideBarToggleFunction}>
                <IoIosMenu className="ToggleIcon" size={32} />
              </span>
              <Link to={"/"}>
                <img
                  src={DarkMode ? logo2 : logo}
                  className="logo"
                  alt="YouTube Logo"
                  width="70px"
                />
              </Link>
            </div>

            <div className="d-flex d-none d-md-flex    flex-grow-1 justify-content-center px-4">
              <form
                className="input-group"
                onSubmit={HandlClick}
                style={{ maxWidth: "600px", width: "100%" }}
              >
                <input
                  type="text"
                  value={InputValue}
                  onChange={(e) => SetValue(e.target.value)}
                  className="form-control  text-black  SearchIn"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className=" S-btn bg-dark" type="submit">
                  <IoIosSearch size={30} className="text-white" />
                </button>
              </form>
              <button className=" btn btn-white" type="button">
                {DarkMode ? (
                  <FaMicrophone size={25} />
                ) : (
                  <FaMicrophone className="text-white" size={25} />
                )}
              </button>
            </div>

            <div className="d-flex align-items-center">
              <button className="SearchIconMobile d-lg-none" onClick={OpneFun}>
                {DarkMode ? (
                  <IoIosSearch size={30} className="text-dark" />
                ) : (
                  <IoIosSearch size={30} className="text-white" />
                )}
              </button>
              <button
                type="button"
                onClick={HndlDarkMode}
                className="btn btn-white d-flex  justify-content-center  me-2"
              >
                {DarkMode ? (
                  <FaMoon size={25} />
                ) : (
                  <FaSun size={25} className="text-white" />
                )}
              </button>
              <button className="btn btn-white me-2">
                {DarkMode ? (
                  <FaVideo size={25} />
                ) : (
                  <FaVideo className="text-white" size={25} />
                )}
              </button>
              <button className="btn btn-white me-2">
                {DarkMode ? (
                  <FaBell size={25} />
                ) : (
                  <FaBell className="text-white" size={25} />
                )}
              </button>
              <img
                src="https://yt3.ggpht.com/yti/ANjgQV8EkVB8l0yZyCkLxrVWXq5qvgRGbr9IJqfpy6-BEmd56r0=s88-c-k-c0x00ffffff-no-rj"
                className="rounded-circle"
                alt="User Avatar"
                height="40"
              />
            </div>
          </div>
        </header>

        {/* For Mobile Screen */}
        {open ? (
          <div className="d-flex d-md-none gap-3  MobileSeacrhBar    flex-grow-1 justify-content-center align-items-center px-4">
            {DarkMode ? (
              <FaArrowLeft
                onClick={OpneFun}
                className="Arrow text-dark"
                size={25}
              />
            ) : (
              <FaArrowLeft
                onClick={OpneFun}
                className="Arrow text-dark"
                size={25}
              />
            )}
            <form
              className="input-group"
              onSubmit={HandlClick}
              style={{ maxWidth: "600px", width: "100%" }}
            >
              <input
                type="text"
                value={InputValue}
                onChange={(e) => SetValue(e.target.value)}
                className="form-control  text-black  SearchIn"
                placeholder="Search"
                aria-label="Search"
              />
              <button className=" S-btn bg-dark" type="submit">
                <IoIosSearch size={30} className="text-white" />
              </button>
            </form>
            <button className=" btn btn-white" type="button">
              {DarkMode ? (
                <FaMicrophone size={25} />
              ) : (
                <FaMicrophone className="text-white" size={25} />
              )}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Header;
