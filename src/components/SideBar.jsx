import React, { useContext } from "react";
import { SiYoutubeshorts } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { AppContext } from "../store/store";
const SideBar = () => {
  const { DarkMode } = useContext(AppContext);
  return (
    <div
      className={`d - flex d-none d-md-flex flex-column flex-shrink-0 ${
        DarkMode ? "bg-white" : "bg-black"
      } h-20`}
    >
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <a
            href="#"
            className="nav-link py-3 border-0 border-secondary rounded-0"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Home"
          >
            <IoMdHome
              className={DarkMode ? "text-black" : "text-white"}
              size={26}
            />
          </a>
        </li>
        <li className="mt-3">
          <a
            href="#"
            className="nav-link py-3 border-0 border-secondary rounded-0"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Dashboard"
          >
            <SiYoutubeshorts
              className={DarkMode ? "text-black" : "text-white"}
              size={26}
            />
          </a>
        </li>
        <li className="mt-3">
          <a
            href="#"
            className="nav-link py-3 border-0 border-secondary rounded-0"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Orders"
          >
            <MdSubscriptions
              className={DarkMode ? "text-black" : "text-white"}
              size={26}
            />
          </a>
        </li>

        <li className="mt-3">
          <a
            href="#"
            className="nav-link py-3 border-0 border-secondary rounded-0"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Customers"
          >
            <RiAccountCircleLine
              className={DarkMode ? "text-black" : "text-white"}
              size={26}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
