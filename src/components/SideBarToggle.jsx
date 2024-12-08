import React, { useContext } from "react";
import { AppContext } from "../store/store";
import { IoIosArrowForward, IoIosMenu, IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import {
  MdOndemandVideo,
  MdOutlineLocalFireDepartment,
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
  MdPlaylistPlay,
  MdSubscriptions,
} from "react-icons/md";
import { LuHistory, LuMusic } from "react-icons/lu";
import { GoLightBulb } from "react-icons/go";
import { AiOutlineLike, AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/1.png";
import logo2 from "../assets/2.png";
import { IoGameControllerOutline, IoHomeOutline, IoNewspaperOutline, IoTrophyOutline } from "react-icons/io5";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";

const SideBarToggle = () => {
  const { SideBarToggleFunction, SidebarToggle, DarkMode } =
    useContext(AppContext);
  return (
    <>
      {SidebarToggle ? (
        <div
          className={`d - flex  flex-column flex-shrink-0 p-3 ${
            DarkMode ? "bg-light" : "bg-dark"
          } SidebarToggle`}
        >
          <div className="d-flex align-items-center gap-2 px-3 py-2 ">
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
          <hr />
          <ul className="nav nav-pills flex-column mb-auto gap-3">
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link link-body-emphasis d-flex align-items-center gap-2 ${
                  DarkMode ? "text-dark" : "text-white"
                }`}
                aria-current="page"
              >
                <IoHomeOutline
                  className={DarkMode ? "text-black" : "text-white"}
                  size={26}
                />
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link link-body-emphasis d-flex align-items-center gap-2 ${
                  DarkMode ? "text-dark" : "text-white"
                }`}
              >
                <SiYoutubeshorts
                  className={DarkMode ? "text-black" : "text-white"}
                  size={26}
                />
                Shorts
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link link-body-emphasis d-flex align-items-center gap-2 ${
                  DarkMode ? "text-dark" : "text-white"
                }`}
              >
                <MdOutlineSubscriptions
                  className={DarkMode ? "text-black" : "text-white"}
                  size={26}
                />
                Subscription
              </a>
            </li>
          </ul>
          <hr />
          <h5 className="mx-3 my-2">
            You <IoIosArrowForward />
          </h5>
          <ul className="nav nav-pills flex-column mb-auto gap-2">
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link link-body-emphasis d-flex align-items-center gap-2 ${
                  DarkMode ? "text-dark" : "text-white"
                }`}
                aria-current="page"
              >
                <LuHistory
                  className={DarkMode ? "text-black" : "text-white"}
                  size={26}
                />
                History
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link link-body-emphasis d-flex align-items-center gap-2 ${
                  DarkMode ? "text-dark" : "text-white"
                }`}
              >
                <MdPlaylistPlay
                  className={DarkMode ? "text-black" : "text-white"}
                  size={26}
                />
                Playlist
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link link-body-emphasis d-flex align-items-center gap-2 ${
                  DarkMode ? "text-dark" : "text-white"
                }`}
              >
                <MdOndemandVideo
                  className={DarkMode ? "text-black" : "text-white"}
                  size={26}
                />
                Your Videos
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link link-body-emphasis d-flex align-items-center gap-2 ${
                  DarkMode ? "text-dark" : "text-white"
                }`}
              >
                <GoLightBulb
                  className={DarkMode ? "text-black" : "text-white"}
                  size={26}
                />
                Your Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link link-body-emphasis d-flex align-items-center gap-2 ${
                  DarkMode ? "text-dark" : "text-white"
                }`}
              >
                <MdOutlineWatchLater
                  className={DarkMode ? "text-black" : "text-white"}
                  size={26}
                />
                Watch Later
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className={`nav-link link-body-emphasis d-flex align-items-center gap-2 ${
                  DarkMode ? "text-dark" : "text-white"
                }`}
              >
                <AiOutlineLike
                  className={DarkMode ? "text-black" : "text-white"}
                  size={26}
                />
                Your Videos
              </a>
            </li>{" "}
          </ul>
          <hr />
          <h5 className="mx-3 my-2">
            Explore <IoIosArrowForward />
          </h5>
          <ul className="nav nav-pills flex-column mb-auto gap-2">
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link link-body-emphasis d-flex align-items-center gap-2 ${
                  DarkMode ? "text-dark" : "text-white"
                }`}
                aria-current="page"
              >
                <MdOutlineLocalFireDepartment
                  className={DarkMode ? "text-black" : "text-white"}
                  size={26}
                />
                Trending
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link link-body-emphasis d-flex align-items-center gap-2 ${
                  DarkMode ? "text-dark" : "text-white"
                }`}
              >
                <AiOutlineShopping
                  className={DarkMode ? "text-black" : "text-white"}
                  size={26}
                />
                Shopping
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link link-body-emphasis d-flex align-items-center gap-2 ${
                  DarkMode ? "text-dark" : "text-white"
                }`}
              >
                <LuMusic
                  className={DarkMode ? "text-black" : "text-white"}
                  size={26}
                />
                Music
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link link-body-emphasis d-flex align-items-center gap-2 ${
                  DarkMode ? "text-dark" : "text-white"
                }`}
              >
                <PiFilmSlateDuotone
                  className={DarkMode ? "text-black" : "text-white"}
                  size={26}
                />
                Film
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link link-body-emphasis d-flex align-items-center gap-2 ${
                  DarkMode ? "text-dark" : "text-white"
                }`}
              >
                <CgMediaLive
                  className={DarkMode ? "text-black" : "text-white"}
                  size={26}
                />
                Live
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className={`nav-link link-body-emphasis d-flex align-items-center gap-2 ${
                  DarkMode ? "text-dark" : "text-white"
                }`}
              >
                <IoGameControllerOutline
                  className={DarkMode ? "text-black" : "text-white"}
                  size={26}
                />
                Gamming
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link link-body-emphasis d-flex align-items-center gap-2 ${
                  DarkMode ? "text-dark" : "text-white"
                }`}
              >
                <IoNewspaperOutline
                  className={DarkMode ? "text-black" : "text-white"}
                  size={26}
                />
                News
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link link-body-emphasis d-flex align-items-center gap-2 ${
                  DarkMode ? "text-dark" : "text-white"
                }`}
              >
                <IoTrophyOutline
                  className={DarkMode ? "text-black" : "text-white"}
                  size={26}
                />
                Sport
              </a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SideBarToggle;
