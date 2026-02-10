import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">Contact Us</h3>
              <p className="footer-text">Pan card club road, Ambrosia Galaxy</p>
              <p className="footer-text">Pune, Maharashtra 411045</p>
              <p className="footer-text">📞 +91 7769803579</p>
              <p className="footer-text">✉️ support@adsadvo.com</p>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <a href="#home" className="footer-link">Home</a>
              <a href="#why" className="footer-link">Why Adsadvo</a>
              <a href="#pricing" className="footer-link">Pricing</a>
              <a href="#partners" className="footer-link">Partners</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Our Services</h3>
              <a href="#amazon-setup" className="footer-link">Amazon Store Setup</a>
              <a href="#product-research" className="footer-link">Product Research</a>
              <a href="#seller-support" className="footer-link">Seller Account Support</a>
              <a href="#listing" className="footer-link">Listing Optimization</a>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Dropshipping</h3>
              <a href="#usa" className="footer-link">USA Dropshipping</a>
              <a href="#india" className="footer-link">India Dropshipping</a>
              <a href="#suppliers" className="footer-link">Verified Suppliers</a>
              <a href="#automation" className="footer-link">Automation Tools</a>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Our Centers</h3>
              <a href="#delhi" className="footer-link">Delhi</a>
              <a href="#mumbai" className="footer-link">Mumbai</a>
              <a href="#bangalore" className="footer-link">Bangalore</a>
              <a href="#hyderabad" className="footer-link">Hyderabad</a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="footer-logo">
                <div className="logo-icon">S</div>
                <span className="logo-text">Adsadvo</span>
              </div>

              <div className="footer-social">
                <a href="#facebook" className="social-icon">📘</a>
                <a href="#instagram" className="social-icon">📷</a>
                <a href="#pinterest" className="social-icon">📌</a>
                <a href="#linkedin" className="social-icon">💼</a>
              </div>

              <div className="footer-apps">
                <a href="#playstore" className="app-badge">Get it on Google Play</a>
                <a href="#appstore" className="app-badge">Download on the App Store</a>
              </div>
            </div>

            <div className="footer-copyright">
              <p>© 2024 Adsadvo. All rights reserved.</p>
              <div className="footer-links">
                <Link to="/privacy-policy" className="footer-link-small">
                  Privacy Policy
                </Link>
                <Link to="/terms-and-conditions" className="footer-link-small">
                  Terms & Conditions
                </Link>
                <Link to="/refund-policy" className="footer-link-small">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="footer-link-small">
                  Shipping Policy
                </Link>
                <Link to="/support" className="footer-link-small">
                  Support
                </Link>
              </div>

            </div>
          </div>
        </div>
      </footer>

      {/* ================= STYLES ================= */}
      <style>{`
        .footer {
          background: #1a1a1a;
          color: white;
          padding: 4rem 2rem 2rem;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid #333;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #ff6b35;
        }

        .footer-text {
          font-size: 0.95rem;
          color: #ccc;
          line-height: 1.8;
        }

        .footer-link {
          color: #ccc;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s;
        }

        .footer-link:hover {
          color: #ff6b35;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #ff6b35, #ffa500);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          text-decoration: none;
          transition: background 0.3s, transform 0.2s;
        }

        .social-icon:hover {
          background: #ff6b35;
          transform: translateY(-2px);
        }

        .footer-apps {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .app-badge {
          background: rgba(255,255,255,0.1);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .app-badge:hover {
          background: rgba(255,255,255,0.2);
        }

        .footer-copyright {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid #333;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .footer-link-small {
          color: #999;
          text-decoration: none;
          font-size: 0.85rem;
        }

        .footer-link-small:hover {
          color: #ff6b35;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-links {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
