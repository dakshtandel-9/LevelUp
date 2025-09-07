'use client';
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Online courses for <span className="highlight">Personal Growth</span>
          </h1>
          <p className="hero-subtitle">
            Courses by Ankur Warikoo
          </p>
          <p className="hero-description">
            4.47 Lakh+ Learners
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">HOURS OF CONTENT</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">LIVE</div>
              <div className="stat-label">Q&A SESSIONS</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">LIFETIME</div>
              <div className="stat-label">ACCESS</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">14-DAY</div>
              <div className="stat-label">REFUND POLICY</div>
            </div>
          </div>
          
          <div className="hero-buttons">
            <a href="#courses" className="btn btn-primary">
              ENROLL NOW
            </a>
          </div>
        </div>
        
        <div className="hero-video">
          <div className="video-container">
            <img 
              src="https://framerusercontent.com/images/lSHGuRrPALnsNPFyY1JslN8so.png?scale-down-to=2048&width=2300&height=1432" 
              alt="Course Preview" 
              className="video-thumbnail"
            />
            <div className="play-button">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.95)" />
                <path d="M32 25L55 40L32 55V25Z" fill="#1e293b" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 50%, #8b5cf6 100%);
          color: white;
          padding: 120px 0 80px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 150%;
          height: 200px;
          background: white;
          border-radius: 50% 50% 0 0;
          z-index: 1;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 4rem;
          position: relative;
          z-index: 2;
        }
        
        .hero-content {
          max-width: 800px;
          margin-bottom: 2rem;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
          letter-spacing: -1px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .highlight {
          color: var(--accent-color);
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #e2e8f0;
        }
        
        .hero-description {
          font-size: 1.2rem;
          line-height: 1.4;
          margin-bottom: 3rem;
          opacity: 0.8;
          font-weight: 500;
          color: #cbd5e1;
        }
        
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
          padding: 2rem 0;
        }
        
        .stat-item {
          text-align: center;
          padding: 1rem;
        }
        
        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-color);
          margin-bottom: 0.5rem;
          line-height: 1;
        }
        
        .stat-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #94a3b8;
          letter-spacing: 1px;
          text-transform: uppercase;
          line-height: 1.2;
        }
        
        .hero-buttons {
          margin-bottom: 2rem;
        }
        
        .btn {
          display: inline-block;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          text-transform: uppercase;
        }
        
        .btn-primary {
          background: var(--primary-color);
          color: white;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }
        
        .btn-primary:hover {
          background: #4f46e5;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
        }
        
        .hero-video {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 3;
        }
        
        .video-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
          max-width: 700px;
          width: 100%;
          background: #000;
        }
        
        .video-container:hover {
          transform: scale(1.02);
        }
        
        .video-thumbnail {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .play-button:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }
        
        .play-button svg {
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero {
            padding: 80px 0 60px;
            min-height: auto;
          }
          
          .container {
            padding: 0 1rem;
            gap: 3rem;
          }
          
          .hero-content {
            margin-bottom: 1rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .hero-description {
            font-size: 1rem;
            margin-bottom: 2rem;
          }
          
          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            padding: 1.5rem 0;
          }
          
          .stat-number {
            font-size: 1.3rem;
          }
          
          .stat-label {
            font-size: 0.7rem;
          }
          
          .btn {
            padding: 0.875rem 2rem;
            font-size: 0.9rem;
          }
          
          .video-container {
            max-width: 100%;
            border-radius: 16px;
          }
          
          .play-button svg {
            width: 60px;
            height: 60px;
          }
        }
        
        @media (max-width: 480px) {
          .hero {
            padding: 60px 0 40px;
          }
          
          .container {
            gap: 2rem;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .hero-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 1rem 0;
          }
          
          .stat-item {
            padding: 0.5rem;
          }
          
          .btn {
            padding: 0.75rem 1.5rem;
            font-size: 0.85rem;
          }
          
          .play-button svg {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;