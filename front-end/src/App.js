import React, { useState, useEffect } from 'react';
import './App.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AxesHelper } from 'three';

function App() {
  const [selectedTab, setSelectedTab] = useState('model');
  const [cubeDimensions, setCubeDimensions] = useState({
    x: 1,
    y: 1,
    z: 1,
  });

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleInputChange = (e, dimension) => {
    const value = parseFloat(e.target.value);
    setCubeDimensions((prevDimensions) => ({
      ...prevDimensions,
      [dimension]: value,
    }));
  };

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
    renderer.setSize(window.innerWidth * 0.75, window.innerHeight);

    const geometry = new THREE.BoxGeometry(cubeDimensions.x, cubeDimensions.y, cubeDimensions.z);
    const material = new THREE.MeshBasicMaterial({ color: 0x808080 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    const edgesMesh = new THREE.LineSegments(edges, lineMaterial);
    scene.add(edgesMesh);

    const axesHelper = new AxesHelper(2);
    scene.add(axesHelper);

    camera.position.z = 5;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableRotate = true;
    controls.enableZoom = false;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }, [cubeDimensions]);

  return (
    <div className="app-container">
      <div className="left-container">
        <div className="tab-container">
          <button
            className={`tab-button ${selectedTab === 'model' ? 'active' : ''}`}
            onClick={() => handleTabClick('model')}
          >
            Model
          </button>
          <button
            className={`tab-button ${selectedTab === 'analysis' ? 'active' : ''}`}
            onClick={() => handleTabClick('analysis')}
          >
            Analysis
          </button>
          <button
            className={`tab-button ${selectedTab === 'check' ? 'active' : ''}`}
            onClick={() => handleTabClick('check')}
          >
            Check
          </button>
        </div>
        {selectedTab === 'model' && (
          <div className="input-container">
            <div className="input-row">
              <label htmlFor="x-dimension">X-Dimension (mm)</label>
              <input
                type="number"
                id="x-dimension"
                min="0"
                value={cubeDimensions.x}
                onChange={(e) => handleInputChange(e, 'x')}
              />
            </div>
            <div className="input-row">
              <label htmlFor="y-dimension">Y-Dimension (mm)</label>
              <input
                type="number"
                id="y-dimension"
                min="0"
                value={cubeDimensions.y}
                onChange={(e) => handleInputChange(e, 'y')}
              />
            </div>
            <div className="input-row">
              <label htmlFor="z-dimension">Z-Dimension (mm)</label>
              <input
                type="number"
                id="z-dimension"
                min="0"
                value={cubeDimensions.z}
                onChange={(e) => handleInputChange(e, 'z')}
              />
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
