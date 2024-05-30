import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "tippy.js/dist/tippy.css";

import styles from "./App.module.scss";

import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { SandwichPhilosophy } from "./components/SandwichPhilosophy";
import { HowToGuide } from "./components/HowToGuide";

export default function App() {
  return (
    <div className={styles.main}>
      <div className={styles.app}>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/philosophy" element={<SandwichPhilosophy />} />
            <Route path="/how-to" element={<HowToGuide />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
