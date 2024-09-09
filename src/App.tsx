import React from "react";
import "./App.css";
import FeatureFlagManager from "./components/FeatureFlagManager/FeatureFlagManager";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AddFeatureFlag from "./components/AddFeatureFlag/AddFeatureFlag";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<FeatureFlagManager />} />
          <Route path="/new-feature-flag" element={<AddFeatureFlag />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
