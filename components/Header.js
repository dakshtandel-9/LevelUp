'use client';
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <span className="logo-level">Level</span>
            <span className="logo-up">Up</span>
          </div>
          
          {/* Navigation */}
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="#courses" className="nav-link">Courses</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#students" className="nav-link">Students</a></li>
            </ul>
          </nav>
          
          {/* Right side - Contact Us */}
          <div className="header-actions">
            <button className="contact-btn">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .header {
          background: var(--primary-color);
          padding: 1rem 0;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .logo {
          font-size: 24px;
          font-weight: 700;
          display: flex;
          align-items: center;
          letter-spacing: -0.5px;
        }
        
        .logo-level {
          color: white;
          font-weight: 800;
        }
        
        .logo-up {
          color: white;
          font-weight: 800;
        }
        
        .nav-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 2rem;
        }
        
        .nav-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: var(--accent-color);
        }
        
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .contact-btn {
          background: white;
          color: var(--primary-color);
          border: 2px solid white;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .contact-btn:hover {
          background: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
          transform: translateY(-1px);
        }
        
        @media (max-width: 768px) {
          .nav {
            display: none;
          }
          
          .header-content {
            justify-content: space-between;
          }
          
          .contact-btn {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;