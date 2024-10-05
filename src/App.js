import React from 'react';
import './App.css';
import logo from './logo.png'; // Ensure your logo file is in the src folder
import SplineViewer from './SplineViewer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Company Logo" className="App-logo" />
      </header>
      <SplineViewer />
      <div className="content-wrapper">
        <main className="glass-effect">
          <h1>We solve problems with Web3 and A.I.</h1>
          <div className="text-overlay">
            <p className="Mission-statement">
              Since 2022, we have been at the forefront of crafting the next generation of A.I. technology solutions. Our focus transcends traditional boundaries, merging cutting-edge tools with familiar environments to create user-friendly, enterprise-grade applications for both businesses and consumers.
            </p>
          </div>
          <a
            className="Cta-button"
            href="https://forms.gle/KKQMKXUSDw8z8Rfo7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </main>
      </div>
      <footer>
        <p>© Powered and secured by Web3 Research Ltd. 2024</p>
      </footer>
    </div>
  );
}

export default App;