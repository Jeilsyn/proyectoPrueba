import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./pages/Home";
import Subpage1 from "./pages/Subpage1";
import Subpage2 from "./pages/Subpage2";
import Subpage3 from "./pages/Subpage3";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/subpage1" element={<Subpage1 />} />
        <Route path="/subpage2" element={<Subpage2 />} />
        <Route path="/subpage3" element={<Subpage3 />} />
      </Routes>
    </Router>
  );
};

export default App;
