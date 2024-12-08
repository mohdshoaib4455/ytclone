import "./App.css";
import { AppProvider } from "./store/store";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import SideBarToggle from "./components/SideBarToggle";

function App() {
  return (
    <>
      <AppProvider>
        <Header />
        <Outlet />
        <SideBarToggle/>
      </AppProvider>
    </>
  );
}

export default App;
