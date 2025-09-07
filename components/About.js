'use client';
import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <div className="about-badge">
            <span>✨ About Us</span>
          </div>
          <h2 className="about-title">
            Transforming Lives Through 
            <span className="about-highlight"> Expert Education</span>
          </h2>
          <p className="about-subtitle">
            We're on a mission to make world-class education accessible to everyone, 
            empowering learners to achieve their dreams and unlock their potential.
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          <div className="about-text">
            <div className="about-story">
              <h3>Our Story</h3>
              <p>
                Founded by visionary entrepreneurs and educators, our platform brings together 
                industry experts who have built successful companies and transformed countless lives. 
                We believe that quality education should be accessible to everyone, regardless of 
                their background or location.
              </p>
              
              <p>
                Our founder, a dynamic content creator and entrepreneur, has built a massive online 
                presence with over 15.5 million followers across social platforms. With experience 
                as a founder since 2009, our leadership brings real-world expertise to every course.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">15.5M+</div>
                <div className="stat-label">Followers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.47L+</div>
                <div className="stat-label">Learners</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2009</div>
                <div className="stat-label">Since</div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-container">
              <div className="floating-card card-1">
                <div className="card-icon">🎯</div>
                <div className="card-text">Expert-Led</div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">🚀</div>
                <div className="card-text">Practical</div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">🌟</div>
                <div className="card-text">Community</div>
              </div>
              <div className="main-visual">
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                  <defs>
                    <linearGradient id="aboutGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#667eea" />
                      <stop offset="100%" stopColor="#764ba2" />
                    </linearGradient>
                    <linearGradient id="aboutGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f093fb" />
                      <stop offset="100%" stopColor="#f5576c" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="400" rx="20" fill="url(#aboutGrad1)" />
                  <circle cx="200" cy="150" r="60" fill="white" fillOpacity="0.2" />
                  <rect x="80" y="250" width="240" height="12" rx="6" fill="white" fillOpacity="0.3" />
                  <rect x="100" y="280" width="200" height="8" rx="4" fill="white" fillOpacity="0.2" />
                  <rect x="120" y="310" width="160" height="8" rx="4" fill="white" fillOpacity="0.2" />
                  <circle cx="120" cy="350" r="20" fill="url(#aboutGrad2)" fillOpacity="0.8" />
                  <circle cx="280" cy="360" r="15" fill="url(#aboutGrad2)" fillOpacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="about-features">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </div>
            <h3>Expert-Led Content</h3>
            <p>Learn from industry leaders with proven track records and real-world experience.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
              </svg>
            </div>
            <h3>Practical Approach</h3>
            <p>Real-world strategies and actionable insights you can implement immediately.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 21V19H7V21H5V19H3V17H5V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7V17H21V19H19V21H17ZM7 7V17H17V7H7Z" fill="currentColor"/>
              </svg>
            </div>
            <h3>Community Support</h3>
            <p>Connect with like-minded learners and get support from our vibrant community.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          padding: 120px 0;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%);
          position: relative;
          overflow: hidden;
        }

        .about::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .about-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .about-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 50px;
          padding: 0.5rem 1.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 1.5rem;
        }

        .about-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .about-highlight {
          background: linear-gradient(45deg, var(--secondary-color), var(--primary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-subtitle {
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          margin-bottom: 100px;
        }

        .about-story h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .about-story p {
          font-size: 1.125rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .about-stats {
          display: flex;
          gap: 2rem;
          margin-top: 3rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--secondary-color);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .about-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .visual-container {
          position: relative;
        }

        .main-visual {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
          transition: transform 0.3s ease;
        }

        .main-visual:hover {
          transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
        }

        .floating-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          animation: float 4s ease-in-out infinite;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .card-1 {
          top: 10%;
          left: -15%;
          animation-delay: 0s;
        }

        .card-2 {
          top: 50%;
          right: -15%;
          animation-delay: 1.5s;
        }

        .card-3 {
          bottom: 15%;
          left: -10%;
          animation-delay: 3s;
        }

        .card-icon {
          font-size: 1.25rem;
        }

        .card-text {
          font-weight: 600;
          color: #1e293b;
          font-size: 0.875rem;
        }

        .about-features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .feature-card {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(226, 232, 240, 0.8);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #8b5cf6, #3b82f6);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        .feature-card:hover::before {
          transform: scaleX(1);
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin: 0 auto 1.5rem;
          box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
        }

        .feature-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .feature-card p {
          color: #64748b;
          line-height: 1.6;
          margin: 0;
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
          .about {
            padding: 80px 0;
          }

          .about-container {
            padding: 0 1rem;
          }

          .about-title {
            font-size: 2.5rem;
          }

          .about-subtitle {
            font-size: 1.125rem;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 50px;
            margin-bottom: 60px;
          }

          .about-visual {
            order: -1;
          }

          .about-stats {
            justify-content: center;
            gap: 1.5rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .main-visual {
            transform: none;
          }

          .main-visual svg {
            width: 300px;
            height: 300px;
          }

          .floating-card {
            display: none;
          }

          .about-features {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .feature-card {
            padding: 2rem;
          }
        }

        @media (max-width: 480px) {
          .about-title {
            font-size: 2rem;
          }

          .about-stats {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .stat-number {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;