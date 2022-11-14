import "./App.css";
import {
  Main,
  Business,
  Introduce,
  Movein,
  Notice,
  Open,
  Promotion,
} from "./page";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Header, Toplink } from "./components";

function App() {
  return (
    <div className="App">
      <Toplink></Toplink>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/business" element={<Business />}></Route>
        <Route path="/introduce" element={<Introduce />}></Route>
        <Route path="/movein" element={<Movein />}></Route>
        <Route path="/notice" element={<Notice />}></Route>
        <Route path="/open" element={<Open />}></Route>
        <Route path="/promotion" element={<Promotion />}></Route>
      </Routes>
    </div>
  );
}

export default App;
