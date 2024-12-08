import { createContext, useEffect, useState } from "react";
import { FetchDataBySearch } from "../utils/SearchData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [Loading, SetLoading] = useState(false);
  let [DarkMode, SetDarkmodeOn] = useState(true);
  let [SinleData, SetSingleData] = useState();
  const [SidebarToggle, SetSidebarToggleOn] = useState(false);
  let [thumbnail, setthumbnail] = useState([]);
  const [Searchvideo, SetSeacrhVideo] = useState([]);
  const [open, Setopen] = useState(false);
    const [InputValue, SetValue] = useState("");
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  // Menu for Seacrh
   const OpneFun = () => {
     Setopen(!open);
   };
  // SideBar toggle
  const SideBarToggleFunction = () => {
    SetSidebarToggleOn(!SidebarToggle);
  };
  // HOME PAGE DATA FERCHING
  useEffect(() => {
    SetLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=10&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setthumbnail(result.items);
        SetLoading(false);
      });
  }, []);
// Dark mode functionality
  let HndlDarkMode = () => {
    SetDarkmodeOn(!DarkMode);
  };
  useEffect(() => {
    document.body.style.backgroundColor = DarkMode ? "#ffffff" : "#000000";
    document.body.style.color = DarkMode ? "#000000" : "#ffffff";
  }, [DarkMode]);

  // SINGLE DATA COLLECTING FOR PLAYING COMPONENTST

  const f2 = (vidoe) => {
    SetSingleData(vidoe);
  };

  // SEARCH DATA COLLECTING FOR PLAYING
  const Search = async (query) => {
    const Data = await FetchDataBySearch(query);
    SetSeacrhVideo(Data);
  };

  return (
    <AppContext.Provider
      value={{
        f2,
        Search,
        SinleData,
        DarkMode,
        HndlDarkMode,
        thumbnail,
        Loading,
        Searchvideo,
        SideBarToggleFunction,
        SidebarToggle,
        OpneFun,
        open,
        SetValue,
        InputValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
