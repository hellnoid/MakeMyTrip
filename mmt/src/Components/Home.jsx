import React from "react";
import { Routes, Route } from "react-router-dom";
import { Flight } from "./Flight";
import { Hotel } from "./Hotel";
import { Home } from "./Home";
import { NavBar } from "./NavBar";
export const Index = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/flight" element={<Flight />}></Route>
        <Route path="/Hotel" element={<Hotel />}></Route>
      </Routes>
    </div>
  );
};
