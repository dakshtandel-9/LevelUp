'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="logo-level">Level</span>
            <span className="logo-up">Up</span>
          </div>
          <p className="footer-description">
            Super practical courses, with a no-nonsense approach, that are designed to
            help you take life decisions from a point of awareness, and not ignorance.
          </p>
        </div>
        
        <div className="footer-right">
          <div className="social-section">
            <p className="follow-text">Follow us on</p>
            <div className="social-links">
              <a href="#" className="social-link linkedin">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="social-link youtube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="social-link instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="support-section">
            <p className="support-text">For support</p>
            <a href="#" className="whatsapp-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">© Copyright 2025</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact us</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background: var(--primary-color);
          color: white;
          padding: 60px 0 0;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 60px;
        }
        
        .footer-left {
          flex: 1;
          max-width: 500px;
        }
        
        .footer-logo {
          margin-bottom: 24px;
        }
        
        .logo-level {
          color: var(--accent-color);
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }
        
        .logo-up {
          color: white;
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }
        

        
        .footer-description {
          color: #cbd5e1;
          line-height: 1.7;
          font-size: 15px;
          margin: 0;
          font-weight: 400;
        }
        
        .footer-right {
          display: flex;
          flex-direction: column;
          gap: 30px;
          align-items: flex-end;
        }
        
        .social-section {
          text-align: right;
        }
        
        .follow-text {
          color: #cbd5e1;
          font-size: 14px;
          margin: 0 0 12px 0;
        }
        
        .social-links {
          display: flex;
          gap: 12px;
        }
        
        .social-link {
          width: 40px;
          height: 40px;
          background: #334155;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #cbd5e1;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .social-link:hover {
          background: #475569;
          color: white;
          transform: translateY(-2px);
        }
        
        .linkedin:hover {
          background: #0077b5;
        }
        
        .youtube:hover {
          background: #ff0000;
        }
        
        .instagram:hover {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
        }
        
        .support-section {
          text-align: right;
        }
        
        .support-text {
          color: #cbd5e1;
          font-size: 14px;
          margin: 0 0 12px 0;
        }
        
        .whatsapp-link {
          width: 40px;
          height: 40px;
          background: #25d366;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .whatsapp-link:hover {
          background: #128c7e;
          transform: translateY(-2px);
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          margin-top: 40px;
          padding: 20px 0;
        }
        
        .footer-bottom-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .copyright {
          color: #94a3b8;
          font-size: 14px;
          margin: 0;
        }
        
        .footer-links {
          display: flex;
          gap: 30px;
        }
        
        .footer-links a {
          color: #3b82f6;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s ease;
        }
        
        .footer-links a:hover {
          color: #60a5fa;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 40px;
            text-align: center;
          }
          
          .footer-right {
            align-items: center;
          }
          
          .social-section,
          .support-section {
            text-align: center;
          }
          
          .footer-bottom-content {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          
          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }
        }
      `}</style>
    </footer>
  );
}