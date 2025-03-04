import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <div className="projects-container">
          <div className="projects-grid">
            <Link to="/json-formatter" className="project-button">
              JSON Formatter
            </Link>
            <Link to="/removeUnwantedCharacters" className="project-button">
              Project 2
            </Link>
            <Link to="/project3" className="project-button">
              Project 3
            </Link>
          </div>
          <div className="projects-grid">
            <div className="project-button disabled">
              Project 4
              <span className="coming-soon">Coming Soon</span>
            </div>
            <div className="project-button disabled">
              Project 5
              <span className="coming-soon">Coming Soon</span>
            </div>
            <div className="project-button disabled">
              Project 6
              <span className="coming-soon">Coming Soon</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home; 
