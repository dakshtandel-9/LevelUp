'use client';
import React from 'react';

const WhatIsInsideWorkshop = () => {
  const modules = [
    {
      id: 1,
      title: "Entrepreneurship Fundamentals",
      duration: "4 hours",
      lessons: 12,
      description: "Master the basics of starting and scaling a business from idea to execution.",
      topics: ["Business Model Canvas", "Market Research", "MVP Development", "Funding Strategies"]
    },
    {
      id: 2,
      title: "Career Acceleration",
      duration: "3.5 hours",
      lessons: 10,
      description: "Unlock your career potential with proven strategies for professional growth.",
      topics: ["Personal Branding", "Networking Mastery", "Salary Negotiation", "Leadership Skills"]
    },
    {
      id: 3,
      title: "Personal Development",
      duration: "5 hours",
      lessons: 15,
      description: "Transform your mindset and build habits that lead to lasting success.",
      topics: ["Goal Setting", "Time Management", "Emotional Intelligence", "Productivity Hacks"]
    },
    {
      id: 4,
      title: "Digital Marketing Mastery",
      duration: "6 hours",
      lessons: 18,
      description: "Learn to build and grow your online presence across all digital platforms.",
      topics: ["Content Strategy", "Social Media Growth", "SEO Basics", "Analytics & Optimization"]
    },
    {
      id: 5,
      title: "Financial Literacy",
      duration: "4.5 hours",
      lessons: 14,
      description: "Master personal finance, investments, and wealth-building strategies.",
      topics: ["Budgeting Mastery", "Investment Basics", "Tax Planning", "Wealth Building"]
    },
    {
      id: 6,
      title: "Communication Excellence",
      duration: "3 hours",
      lessons: 8,
      description: "Develop powerful communication skills for personal and professional success.",
      topics: ["Public Speaking", "Persuasion Techniques", "Conflict Resolution", "Presentation Skills"]
    }
  ];

  return (
    <section id="workshop" className="workshop section">
      <div className="container">
        <h2 className="section-title">What's Inside Our Workshop</h2>
        <p className="section-subtitle">
          Comprehensive curriculum designed by industry experts to accelerate your growth 
          across multiple dimensions of success.
        </p>
        
        <div className="modules-grid">
          {modules.map((module) => (
            <div key={module.id} className="module-card">
              <div className="module-header">
                <h3 className="module-title">{module.title}</h3>
                <div className="module-meta">
                  <span className="duration">{module.duration}</span>
                  <span className="lessons">{module.lessons} lessons</span>
                </div>
              </div>
              
              <p className="module-description">{module.description}</p>
              
              <div className="topics-list">
                <h4>Key Topics:</h4>
                <ul>
                  {module.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
              
              <div className="module-footer">
                <button className="btn btn-secondary">Preview Module</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="workshop-benefits">
          <h3>What You'll Get:</h3>
          <div className="benefits-grid">
            <div className="benefit">
              <div className="benefit-icon">📚</div>
              <h4>Lifetime Access</h4>
              <p>Access all course materials forever with free updates</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🎓</div>
              <h4>Certificates</h4>
              <p>Industry-recognized certificates upon completion</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">👥</div>
              <h4>Community Access</h4>
              <p>Join our exclusive community of successful learners</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">💬</div>
              <h4>Expert Support</h4>
              <p>Direct access to instructors and mentors</p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .workshop {
          padding: 100px 20px;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }
        
        .modules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2.5rem;
          margin-bottom: 5rem;
        }
        
        .module-card {
          background: white;
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
        }
        
        .module-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-color));
        }
        
        .module-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }
        
        .module-header {
          margin-bottom: 1rem;
        }
        
        .module-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          letter-spacing: -0.3px;
        }
        
        .module-meta {
          display: flex;
          gap: 1rem;
        }
        
        .duration, .lessons {
          background: rgba(99, 102, 241, 0.1);
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          color: var(--primary-color);
          font-weight: 600;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        
        .module-description {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1.05rem;
        }
        
        .topics-list h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        
        .topics-list ul {
          list-style: none;
          margin-bottom: 1.5rem;
        }
        
        .topics-list li {
          padding: 0.75rem 0;
          color: var(--text-secondary);
          border-bottom: 1px solid rgba(226, 232, 240, 0.5);
          position: relative;
          padding-left: 2rem;
          font-size: 1rem;
        }
        
        .topics-list li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
          font-size: 1.1rem;
        }
        
        .topics-list li:last-child {
          border-bottom: none;
        }
        
        .module-footer {
          text-align: center;
        }
        
        .workshop-benefits {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          padding: 4rem;
          border-radius: 20px;
          text-align: center;
          color: white;
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .workshop-benefits::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .workshop-benefits h3 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 3rem;
          position: relative;
          z-index: 1;
          letter-spacing: -0.5px;
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          position: relative;
          z-index: 1;
        }
        
        .benefit {
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .benefit:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
        }
        
        .benefit-icon {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        }
        
        .benefit h4 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          letter-spacing: -0.2px;
        }
        
        .benefit p {
          opacity: 0.9;
          line-height: 1.7;
          font-size: 1.05rem;
        }
        
        @media (max-width: 768px) {
          .modules-grid {
            grid-template-columns: 1fr;
          }
          
          .module-card {
            padding: 1.5rem;
          }
          
          .workshop-benefits {
            padding: 2rem;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatIsInsideWorkshop;