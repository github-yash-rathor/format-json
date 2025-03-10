import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';

const Project3 = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="project-content">
        <h1>Project 3</h1>
        <div className="project-details">
          <section className="project-section">
            <h2>Overview</h2>
            <p>Welcome to Project 3. This is where you can add your project's main content.</p>
          </section>
          
          <section className="project-section">
            <h2>Features</h2>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Project3; 
