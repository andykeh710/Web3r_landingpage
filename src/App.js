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
          <h1>Revolutionizing the Future with Web3 and A.I.</h1>
          <div className="text-overlay">
            <p className="Mission-statement">
            Since 2022, we’ve been pioneers in transforming industries through the power of Web3 and A.I. Our mission is to redefine possibilities by blending advanced artificial intelligence with decentralized technology, delivering intuitive, enterprise-grade solutions. From empowering businesses to enhancing consumer experiences, we build future-ready applications that seamlessly integrate with existing ecosystems—making the complex simple and the innovative accessible.            </p>
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