import React from "react";
import Navbar from "./components/Drawer/Navbar";
import Router from "./components/Router/index";
import SideBarActiveProvider from "./components/context/SidebarContext";
import AppBar from "./components/AppBar";
const App = () => {
  return (
    <>
      <SideBarActiveProvider>
        <AppBar />
        <Router chilldren={<Navbar />}></Router>
      </SideBarActiveProvider>
    </>
  );
};

export default App;
