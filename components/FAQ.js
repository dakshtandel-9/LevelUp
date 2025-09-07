'use client';
import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How long do I have access to the courses?",
      answer: "You get lifetime access to all course materials, including any future updates. Once you enroll, the content is yours forever, and you can learn at your own pace without any time restrictions."
    },
    {
      id: 2,
      question: "Are there any prerequisites for joining the courses?",
      answer: "No specific prerequisites are required! Our courses are designed for learners at all levels. Whether you're a complete beginner or looking to advance your existing skills, our content is structured to meet you where you are."
    },
    {
      id: 3,
      question: "Do I get a certificate upon completion?",
      answer: "Yes! Upon successful completion of each course, you'll receive an industry-recognized certificate that you can add to your LinkedIn profile, resume, or portfolio to showcase your new skills to employers and clients."
    },
    {
      id: 4,
      question: "Can I interact with instructors and other students?",
      answer: "Absolutely! You'll get access to our exclusive community platform where you can ask questions, share insights, network with fellow learners, and get direct support from our expert instructors and mentors."
    },
    {
      id: 5,
      question: "What if I'm not satisfied with the course?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your learning experience within the first 30 days, we'll provide a full refund, no questions asked."
    },
    {
      id: 6,
      question: "Are the courses updated regularly?",
      answer: "Yes! We continuously update our course content to reflect the latest industry trends, tools, and best practices. All updates are included in your lifetime access at no additional cost."
    },
    {
      id: 7,
      question: "Can I download the course materials?",
      answer: "Yes, most course materials including videos, PDFs, and resources can be downloaded for offline viewing. This allows you to learn even when you don't have an internet connection."
    },
    {
      id: 8,
      question: "Is there a mobile app available?",
      answer: "Yes! Our mobile app is available for both iOS and Android devices, allowing you to learn on-the-go. You can download lessons, track your progress, and access community features from anywhere."
    },
    {
      id: 9,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, PayPal, and various local payment methods depending on your region. We also offer installment plans for certain courses to make learning more accessible."
    },
    {
      id: 10,
      question: "How much time should I dedicate to learning?",
      answer: "The beauty of our self-paced courses is that you can learn according to your schedule. Most students dedicate 2-5 hours per week and complete courses within 4-8 weeks, but you can go faster or slower based on your availability."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Got questions? We've got answers! Here are the most common questions 
          our learners ask before starting their transformation journey.
        </p>
        
        <div className="faq-container">
          {faqs.map((faq) => (
            <div key={faq.id} className={`faq-item ${openFAQ === faq.id ? 'active' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={openFAQ === faq.id}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {openFAQ === faq.id ? '−' : '+'}
                </span>
              </button>
              
              <div className="faq-answer">
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-cta">
          <h3>Still have questions?</h3>
          <p>Our support team is here to help you succeed</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Contact Support</a>
            <a href="#demo" className="btn btn-secondary">Book a Demo</a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .faq {
          padding: 100px 20px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        }
        
        .faq-container {
          max-width: 900px;
          margin: 0 auto 4rem;
        }
        
        .faq-item {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .faq-item:hover {
          border-color: var(--primary-color);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }
        
        .faq-item.active {
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.1);
        }
        
        .faq-question {
          width: 100%;
          padding: 2rem;
          background: var(--background-light);
          border: none;
          text-align: left;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
          letter-spacing: -0.2px;
        }
        
        .faq-question:hover {
          background: #e2e8f0;
        }
        
        .faq-item.active .faq-question {
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary-color);
        }
        
        .faq-icon {
          font-size: 1.4rem;
          font-weight: bold;
          color: var(--primary-color);
          transition: transform 0.3s ease;
        }
        
        .faq-item.active .faq-icon {
          transform: rotate(45deg);
        }
        
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        
        .faq-item.active .faq-answer {
          max-height: 200px;
        }
        
        .faq-answer-content {
          padding: 2rem;
          border-top: 1px solid #e2e8f0;
          background: white;
        }
        
        .faq-answer p {
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 0;
          font-size: 1.05rem;
        }
        
        .faq-cta {
          text-align: center;
          margin-top: 5rem;
          padding: 4rem;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          border-radius: 16px;
          color: white;
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .faq-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .faq-cta h3 {
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
          letter-spacing: -0.3px;
        }
        
        .faq-cta p {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          opacity: 0.95;
          position: relative;
          z-index: 1;
          line-height: 1.6;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .cta-buttons .btn {
          padding: 16px 32px;
          font-size: 1.1rem;
          font-weight: 700;
          border-radius: 12px;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          position: relative;
          z-index: 1;
          letter-spacing: 0.3px;
        }
        
        .cta-buttons .btn-primary {
          background: white;
          color: var(--primary-color);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
        }
        
        .cta-buttons .btn-primary:hover {
          background: #f1f5f9;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(255, 255, 255, 0.3);
        }
        
        @media (max-width: 768px) {
          .faq-question {
            padding: 1.25rem 1.5rem;
            font-size: 1rem;
          }
          
          .faq-answer-content {
            padding: 0 1.5rem 1.25rem;
          }
          
          .faq-cta {
            padding: 2rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-buttons .btn {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;