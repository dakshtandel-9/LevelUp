'use client';
import React from 'react';

const Hero2 = () => {
  return (
    <section className="hero2">
      <div className="hero2-container">
        <div className="hero2-content">
          <div className="hero2-badge">
            <span>🚀 New Course Available</span>
          </div>
          
          <h1 className="hero2-title">
            Master <span className="hero2-highlight">Digital Skills</span> 
            <br />That Actually Matter
          </h1>
          
          <p className="hero2-description">
            Join thousands of learners who've transformed their careers with our 
            practical, industry-focused courses designed by experts.
          </p>
          
          <div className="hero2-stats">
            <div className="hero2-stat">
              <div className="hero2-stat-number">50K+</div>
              <div className="hero2-stat-label">Students</div>
            </div>
            <div className="hero2-stat">
              <div className="hero2-stat-number">4.9</div>
              <div className="hero2-stat-label">Rating</div>
            </div>
            <div className="hero2-stat">
              <div className="hero2-stat-number">100+</div>
              <div className="hero2-stat-label">Courses</div>
            </div>
          </div>
          
          <div className="hero2-actions">
            <button className="hero2-btn hero2-btn-primary">
              Start Learning Today
            </button>
            <button className="hero2-btn hero2-btn-secondary">
              <span className="hero2-play-icon">▶</span>
              Watch Demo
            </button>
          </div>
        </div>
        
        <div className="hero2-visual">
          <div className="hero2-image-container">
            <img 
              src="https://framerusercontent.com/images/lSHGuRrPALnsNPFyY1JslN8so.png?scale-down-to=2048&width=2300&height=1432" 
              alt="Learning Platform" 
              className="hero2-image"
            />
            <div className="hero2-floating-card hero2-card-1">
              <div className="hero2-card-icon">📊</div>
              <div className="hero2-card-text">Analytics</div>
            </div>
            <div className="hero2-floating-card hero2-card-2">
              <div className="hero2-card-icon">🎯</div>
              <div className="hero2-card-text">Goal Tracking</div>
            </div>
            <div className="hero2-floating-card hero2-card-3">
              <div className="hero2-card-icon">⚡</div>
              <div className="hero2-card-text">Fast Learning</div>
            </div>
          </div>
        </div>
      </div>
      

      
      <style jsx>{`
        .hero2 {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero2::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .hero2-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        
        .hero2-content {
          color: white;
        }
        
        .hero2-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 2rem;
          animation: float 3s ease-in-out infinite;
        }
        
        .hero2-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        
        .hero2-highlight {
          background: linear-gradient(45deg, #ffd700, #ffed4e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero2-description {
          font-size: 1.25rem;
          line-height: 1.6;
          opacity: 0.9;
          margin-bottom: 2rem;
          max-width: 500px;
        }
        
        .hero2-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }
        
        .hero2-stat {
          text-align: center;
        }
        
        .hero2-stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent-color);
          margin-bottom: 0.25rem;
        }
        
        .hero2-stat-label {
          font-size: 0.875rem;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .hero2-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .hero2-btn {
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .hero2-btn-primary {
          background: var(--primary-color);
          color: white;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }
        
        .hero2-btn-primary:hover {
          background: #4f46e5;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.6);
        }
        
        .hero2-btn-secondary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }
        
        .hero2-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }
        
        .hero2-play-icon {
          font-size: 0.875rem;
        }
        
        .hero2-visual {
          position: relative;
        }
        
        .hero2-image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
          transition: transform 0.3s ease;
        }
        
        .hero2-image-container:hover {
          transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
        }
        
        .hero2-image {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .hero2-floating-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          animation: float 4s ease-in-out infinite;
        }
        
        .hero2-card-1 {
          top: 20%;
          left: -10%;
          animation-delay: 0s;
        }
        
        .hero2-card-2 {
          top: 60%;
          right: -10%;
          animation-delay: 1s;
        }
        
        .hero2-card-3 {
          bottom: 20%;
          left: -5%;
          animation-delay: 2s;
        }
        
        .hero2-card-icon {
          font-size: 1.5rem;
        }
        
        .hero2-card-text {
          font-weight: 600;
          color: #333;
          font-size: 0.875rem;
        }
        

        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero2-container {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
            padding: 2rem 1rem;
          }
          
          .hero2-title {
            font-size: 2.5rem;
          }
          
          .hero2-description {
            font-size: 1.125rem;
          }
          
          .hero2-stats {
            justify-content: center;
          }
          
          .hero2-actions {
            justify-content: center;
          }
          
          .hero2-btn {
            padding: 0.875rem 1.5rem;
            font-size: 0.9rem;
          }
          
          .hero2-image-container {
            transform: none;
          }
          
          .hero2-floating-card {
            display: none;
          }
        }
        
        @media (max-width: 480px) {
          .hero2-title {
            font-size: 2rem;
          }
          
          .hero2-stats {
            gap: 1rem;
          }
          
          .hero2-stat-number {
            font-size: 1.5rem;
          }
          
          .hero2-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .hero2-btn {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero2;