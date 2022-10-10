import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/login/login";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
  
      <Sidebar />
      <Login />
    </>
  );
};

export default App;
