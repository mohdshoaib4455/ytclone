import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MiddleContainer from "./components/MiddleContainer.jsx";
import PlayVideo from "./components/PlayVideo.jsx";
import SearchResult from "./components/SearchResult.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MiddleContainer />,
      },
      {
        path: "/video/:id",
        element: <PlayVideo />,
      },
      {
        path: "/search",
        element: <SearchResult/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
