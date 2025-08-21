import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

// pages
import FindMyJet from "./pages/FindMyJet";
import ExploreJets from "./pages/ExploreJets";
import WhyAeromatcher from "./pages/WhyAeromatcher";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* default to why aeromatcher for the root path */}
        <Route path="/" element={<Navigate to="/why-aeromatcher" replace />} />
        <Route path="/match" element={<FindMyJet />} />
        <Route path="/explore" element={<ExploreJets />} />
        <Route path="/why-aeromatcher" element={<WhyAeromatcher />} />
        <Route path="/about" element={<About />} />
        {/* optional 404 can go here later */}
      </Routes>
    </>
  );
}

export default App;
