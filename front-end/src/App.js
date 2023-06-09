import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("model");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="app-container">
      <div className="left-container">
        <div className="tab-container">
          <button
            className={`tab-button ${selectedTab === "model" ? "active" : ""}`}
            onClick={() => handleTabClick("model")}
          >
            Model
          </button>
          <button
            className={`tab-button ${selectedTab === "analysis" ? "active" : ""}`}
            onClick={() => handleTabClick("analysis")}
          >
            Analysis
          </button>
          <button
            className={`tab-button ${selectedTab === "check" ? "active" : ""}`}
            onClick={() => handleTabClick("check")}
          >
            Check
          </button>
        </div>
        {selectedTab === "model" && (
          <div className="input-container">
            <div className="input-row">
              <label htmlFor="x-dimension">X-Dimension (mm)</label>
              <input type="number" id="x-dimension" min="0" />
            </div>
            <div className="input-row">
              <label htmlFor="y-dimension">Y-Dimension (mm)</label>
              <input type="number" id="y-dimension" min="0" />
            </div>
            <div className="input-row">
              <label htmlFor="thickness">Thickness (mm)</label>
              <input type="number" id="thickness" min="0" />
            </div>
          </div>
        )}
      </div>
      <div className="right-container">
        <canvas id="canvas"></canvas>
      </div>
    </div>
  );
}

export default App;
