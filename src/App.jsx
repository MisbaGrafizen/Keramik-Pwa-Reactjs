import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Route, Routes, useLocation } from "react-router-dom";

import ScrollToTop from "./Component/Scrooltop";

import Home from "./pages/Home";
import ImagePage from "./pages/ImagePage";

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="w-100 ease-soft-spring relative h-[100%]  !bg-[#000000]  duration-1000 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image" element={<ImagePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
