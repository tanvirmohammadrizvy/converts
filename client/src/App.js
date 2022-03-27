import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} ></Route>
    </Routes>
  );
}

export default App;
