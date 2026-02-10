import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="shipping-policy-page">
      {/* Hero Section */}
      <section className="shipping-hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge">
              <span>SHIPPING POLICY</span>
            </div>
            <h1 className="hero-title">Shipping & Delivery</h1>
            <p className="hero-subtitle">
              Fast, reliable shipping with transparent timelines
            </p>
            <div className="delivery-highlight">
              <div className="highlight-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#FF6B35"/>
                  <path d="M11 7H13V12L16.5 15.5L15.08 16.92L11 12.83V7Z" fill="#FF6B35"/>
                </svg>
                <span>Average Delivery: <strong>5 Days</strong></span>
              </div>
              <div className="highlight-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H23V12L20 8ZM19.5 9.5L21.46 12H17V9.5H19.5ZM6 18C5.45 18 5 17.55 5 17C5 16.45 5.45 16 6 16C6.55 16 7 16.45 7 17C7 17.55 6.55 18 6 18ZM18 18C17.45 18 17 17.55 17 17C17 16.45 17.45 16 18 16C18.55 16 19 16.45 19 17C19 17.55 18.55 18 18 18Z" fill="#3B82F6"/>
                </svg>
                <span>Maximum Delivery: <strong>7 Days</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="shipping-content">
        <div className="container">
          <div className="content-grid">
            {/* Delivery Timeline */}
            <div className="timeline-card">
              <div className="card-header">
                <div className="card-icon">📅</div>
                <h2>Delivery Timeline</h2>
              </div>
              <div className="card-content">
                <div className="timeline-visual">
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h3>Order Processing</h3>
                        <p>Within 24 hours</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h3>Shipping</h3>
                        <p>Within 1-2 business days</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h3>Transit Time</h3>
                        <p>2-5 business days</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h3>Delivery</h3>
                        <p>By day 7 at the latest</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="delivery-summary">
                    <div className="summary-item fast">
                      <div className="summary-icon">🚀</div>
                      <div className="summary-content">
                        <h3>Fast Delivery</h3>
                        <p className="summary-time">5 Days Average</p>
                        <p className="summary-desc">Most orders arrive within 5 days</p>
                      </div>
                    </div>
                    <div className="summary-item max">
                      <div className="summary-icon">⏱️</div>
                      <div className="summary-content">
                        <h3>Maximum Time</h3>
                        <p className="summary-time">7 Days Maximum</p>
                        <p className="summary-desc">Guaranteed delivery within 7 days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Methods */}
            <div className="methods-card">
              <div className="card-header">
                <div className="card-icon">🚚</div>
                <h2>Shipping Methods</h2>
              </div>
              <div className="card-content">
                <div className="method-item">
                  <div className="method-icon">📦</div>
                  <div className="method-content">
                    <h3>Standard Shipping</h3>
                    <p className="method-time">5-7 Business Days</p>
                    <p className="method-desc">Free shipping on all orders</p>
                  </div>
                </div>
                
                <div className="method-item">
                  <div className="method-icon">⚡</div>
                  <div className="method-content">
                    <h3>Express Shipping</h3>
                    <p className="method-time">2-3 Business Days</p>
                    <p className="method-desc">Available at checkout</p>
                  </div>
                </div>
                
                <div className="method-note">
                  <div className="note-icon">ℹ️</div>
                  <p>
                    <strong>Note:</strong> Business days exclude weekends and public holidays. 
                    Delivery times start from when your order ships.
                  </p>
                </div>
              </div>
            </div>

            {/* Shipping Coverage */}
            <div className="coverage-card">
              <div className="card-header">
                <div className="card-icon">🌍</div>
                <h2>Shipping Coverage</h2>
              </div>
              <div className="card-content">
                <div className="coverage-list">
                  <div className="coverage-item">
                    <div className="coverage-check">✓</div>
                    <span>India (All States)</span>
                  </div>
                  <div className="coverage-item">
                    <div className="coverage-check">✓</div>
                    <span>Major Indian Cities</span>
                  </div>
                  <div className="coverage-item">
                    <div className="coverage-check">✓</div>
                    <span>Tier 1 & Tier 2 Cities</span>
                  </div>
                  <div className="coverage-item">
                    <div className="coverage-check">✓</div>
                    <span>Metropolitan Areas</span>
                  </div>
                </div>
                
                <div className="coverage-note">
                  <p>
                    We ship to all major cities and towns across India. Some remote locations 
                    may have slightly longer delivery times.
                  </p>
                </div>
              </div>
            </div>

            {/* Order Tracking */}
            <div className="tracking-card">
              <div className="card-header">
                <div className="card-icon">📱</div>
                <h2>Order Tracking</h2>
              </div>
              <div className="card-content">
                <div className="tracking-steps">
                  <div className="tracking-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h3>Order Confirmation</h3>
                      <p>You'll receive an email with your order details</p>
                    </div>
                  </div>
                  <div className="tracking-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h3>Shipping Notification</h3>
                      <p>Get tracking information when your order ships</p>
                    </div>
                  </div>
                  <div className="tracking-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h3>Real-time Updates</h3>
                      <p>Track your package with live updates</p>
                    </div>
                  </div>
                  <div className="tracking-step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h3>Delivery Confirmation</h3>
                      <p>Receive notification when delivered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Exceptions */}
            <div className="exceptions-card">
              <div className="card-header">
                <div className="card-icon">⚠️</div>
                <h2>Delivery Exceptions</h2>
              </div>
              <div className="card-content">
                <div className="exceptions-list">
                  <div className="exception-item">
                    <div className="exception-icon">🎯</div>
                    <div>
                      <h3>Address Issues</h3>
                      <p>Incorrect addresses may delay delivery</p>
                    </div>
                  </div>
                  <div className="exception-item">
                    <div className="exception-icon">🌧️</div>
                    <div>
                      <h3>Weather Conditions</h3>
                      <p>Extreme weather may affect delivery times</p>
                    </div>
                  </div>
                  <div className="exception-item">
                    <div className="exception-icon">🏢</div>
                    <div>
                      <h3>Remote Locations</h3>
                      <p>Some areas may have extended delivery times</p>
                    </div>
                  </div>
                  <div className="exception-item">
                    <div className="exception-icon">📋</div>
                    <div>
                      <h3>Customs Clearance</h3>
                      <p>International orders may face customs delays</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="support-card">
              <div className="card-header">
                <div className="card-icon">📞</div>
                <h2>Shipping Support</h2>
              </div>
              <div className="card-content">
                <div className="support-info">
                  <div className="support-item">
                    <div className="support-icon">📧</div>
                    <div>
                      <h3>Email Support</h3>
                      <p>shipping@adsadvo.com</p>
                    </div>
                  </div>
                  <div className="support-item">
                    <div className="support-icon">🕒</div>
                    <div>
                      <h3>Response Time</h3>
                      <p>Within 24 hours</p>
                    </div>
                  </div>
                </div>
                
                <div className="support-note">
                  <p>
                    <strong>Need Help?</strong> Contact our shipping team for delivery updates, 
                    address changes, or shipping inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="shipping-footer">
        <div className="container">
          <div className="footer-content">
            <p>© {new Date().getFullYear()} Adsadvo. All rights reserved.</p>
            <div className="footer-links">
              <a href="/terms">Terms</a>
              <span className="separator">•</span>
              <a href="/privacy">Privacy</a>
              <span className="separator">•</span>
              <a href="/shipping" className="active">Shipping Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .shipping-policy-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          color: #1a202c;
          background: #f8fafc;
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .shipping-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 80px 0;
          color: white;
          text-align: center;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 10px 20px;
          margin-bottom: 24px;
        }

        .badge span {
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 1px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 16px;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 18px;
          color: #cbd5e1;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .delivery-highlight {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 12px 24px;
        }

        .highlight-item strong {
          color: #FF6B35;
          font-size: 18px;
        }

        /* Main Content */
        .shipping-content {
          padding: 60px 0;
        }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        /* Cards */
        .timeline-card,
        .methods-card,
        .coverage-card,
        .tracking-card,
        .exceptions-card,
        .support-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .timeline-card:hover,
        .methods-card:hover,
        .coverage-card:hover,
        .tracking-card:hover,
        .exceptions-card:hover,
        .support-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .card-header {
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          color: white;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .card-icon {
          font-size: 32px;
        }

        .card-header h2 {
          font-size: 24px;
          font-weight: 700;
          margin: 0;
        }

        .card-content {
          padding: 24px;
        }

        /* Timeline */
        .timeline {
          position: relative;
          margin: 24px 0;
          padding-left: 24px;
        }

        .timeline:before {
          content: '';
          position: absolute;
          left: 7px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #FF6B35, #3B82F6);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 32px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: -30px;
          top: 4px;
          width: 16px;
          height: 16px;
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 3px #e2e8f0;
        }

        .timeline-content h3 {
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .timeline-content p {
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }

        /* Delivery Summary */
        .delivery-summary {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 32px;
        }

        .summary-item {
          padding: 20px;
          border-radius: 12px;
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .summary-item.fast {
          background: linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%);
          border: 2px solid #93c5fd;
        }

        .summary-item.max {
          background: linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%);
          border: 2px solid #fcd34d;
        }

        .summary-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .summary-content h3 {
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .summary-time {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .summary-item.fast .summary-time {
          color: #1d4ed8;
        }

        .summary-item.max .summary-time {
          color: #b45309;
        }

        .summary-desc {
          font-size: 13px;
          color: #64748b;
          margin: 0;
        }

        /* Shipping Methods */
        .method-item {
          display: flex;
          gap: 16px;
          align-items: center;
          padding: 20px;
          background: #f8fafc;
          border-radius: 12px;
          margin-bottom: 16px;
        }

        .method-item:last-child {
          margin-bottom: 0;
        }

        .method-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .method-content h3 {
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .method-time {
          font-size: 18px;
          font-weight: 700;
          color: #FF6B35;
          margin: 0 0 4px 0;
        }

        .method-desc {
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }

        .method-note {
          margin-top: 20px;
          background: #eff6ff;
          border-radius: 8px;
          padding: 16px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
          border-left: 4px solid #3B82F6;
        }

        .note-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .method-note p {
          margin: 0;
          color: #1e40af;
        }

        /* Shipping Coverage */
        .coverage-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }

        .coverage-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .coverage-check {
          width: 24px;
          height: 24px;
          background: #10b981;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }

        .coverage-item span {
          font-size: 16px;
          color: #0f172a;
          font-weight: 500;
        }

        .coverage-note {
          background: #f0fdf4;
          border-radius: 8px;
          padding: 16px;
          border-left: 4px solid #10b981;
        }

        .coverage-note p {
          margin: 0;
          color: #065f46;
        }

        /* Order Tracking */
        .tracking-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .tracking-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .step-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .tracking-step h3 {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 8px 0;
        }

        .tracking-step p {
          font-size: 13px;
          color: #64748b;
          margin: 0;
        }

        /* Delivery Exceptions */
        .exceptions-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .exception-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 16px;
          background: #fef2f2;
          border-radius: 8px;
          border: 1px solid #fecaca;
        }

        .exception-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .exception-item h3 {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .exception-item p {
          font-size: 13px;
          color: #64748b;
          margin: 0;
        }

        /* Shipping Support */
        .support-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }

        .support-item {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .support-icon {
          font-size: 24px;
          color: #FF6B35;
          flex-shrink: 0;
        }

        .support-item h3 {
          font-size: 14px;
          font-weight: 600;
          color: #64748b;
          margin: 0 0 4px 0;
        }

        .support-item p {
          font-size: 16px;
          color: #0f172a;
          font-weight: 500;
          margin: 0;
        }

        .support-note {
          background: #f0f9ff;
          border-radius: 8px;
          padding: 16px;
          border-left: 4px solid #0ea5e9;
        }

        .support-note p {
          margin: 0;
          color: #0369a1;
        }

        /* Footer */
        .shipping-footer {
          background: #1e293b;
          color: white;
          padding: 40px 0;
          text-align: center;
          margin-top: 60px;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }

        .footer-links {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .footer-links a {
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: white;
        }

        .footer-links .active {
          color: #FF6B35;
          font-weight: 600;
        }

        .separator {
          color: #64748b;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .shipping-hero {
            padding: 60px 0;
          }
          
          .hero-title {
            font-size: 36px;
          }
          
          .hero-subtitle {
            font-size: 16px;
          }
          
          .delivery-highlight {
            flex-direction: column;
            gap: 16px;
          }
          
          .highlight-item {
            justify-content: center;
          }
          
          .shipping-content {
            padding: 40px 0;
          }
          
          .content-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          .delivery-summary,
          .tracking-steps,
          .exceptions-list,
          .support-info {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 32px;
          }
          
          .badge {
            padding: 8px 16px;
          }
          
          .card-header {
            padding: 20px;
          }
          
          .card-header h2 {
            font-size: 20px;
          }
          
          .footer-links {
            flex-direction: column;
            gap: 8px;
          }
          
          .separator {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ShippingPolicy;