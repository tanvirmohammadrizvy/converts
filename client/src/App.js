import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Png from "./Pages/ImageTools/Png";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/png-convert' element={<Png />} ></Route>
      <Route path='/jpeg-convert' ></Route>
    </Routes>
  );
}

export default App;
