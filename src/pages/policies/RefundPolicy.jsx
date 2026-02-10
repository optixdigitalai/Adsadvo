import React from "react";

const RefundPolicy = () => {
  return (
    <div className="refund-policy-page">
      {/* Hero Section */}
      <section className="refund-hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge">
              <span>REFUND POLICY</span>
            </div>
            <h1 className="hero-title">Refund Policy</h1>
            <p className="hero-subtitle">
              Clear and transparent refund guidelines for all our services
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="refund-content">
        <div className="container">
          <div className="policy-cards">
            {/* General Policy Card */}
            <div className="policy-card">
              <div className="card-header">
                <div className="card-icon">📋</div>
                <h2>General Policy</h2>
              </div>
              <div className="card-content">
                <p>
                  All service fees are generally non-refundable. However, we review refund requests 
                  on a case-by-case basis and aim to be fair and reasonable.
                </p>
                <div className="policy-note">
                  <div className="note-icon">ℹ️</div>
                  <p>
                    <strong>Note:</strong> Refund eligibility depends on the specific service agreement 
                    and circumstances.
                  </p>
                </div>
              </div>
            </div>

            {/* Service-Specific Policies */}
            <div className="policy-card">
              <div className="card-header">
                <div className="card-icon">🛍️</div>
                <h2>Amazon Services</h2>
              </div>
              <div className="card-content">
                <div className="service-refund">
                  <h3>Setup Services</h3>
                  <div className="refund-status">
                    <span className="status-badge no-refund">No Refund</span>
                    <p>Once setup work has begun</p>
                  </div>
                </div>
                <div className="service-refund">
                  <h3>Monthly Management</h3>
                  <div className="refund-status">
                    <span className="status-badge partial-refund">Partial Refund</span>
                    <p>Pro-rated for unused service period</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="policy-card">
              <div className="card-header">
                <div className="card-icon">🚚</div>
                <h2>Dropshipping Services</h2>
              </div>
              <div className="card-content">
                <div className="service-refund">
                  <h3>Store Setup</h3>
                  <div className="refund-status">
                    <span className="status-badge no-refund">No Refund</span>
                    <p>After initial setup completion</p>
                  </div>
                </div>
                <div className="service-refund">
                  <h3>Ongoing Management</h3>
                  <div className="refund-status">
                    <span className="status-badge partial-refund">Partial Refund</span>
                    <p>For prepaid unused months</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="policy-card">
              <div className="card-header">
                <div className="card-icon">💡</div>
                <h2>Consulting Services</h2>
              </div>
              <div className="card-content">
                <div className="service-refund">
                  <h3>One-time Consultation</h3>
                  <div className="refund-status">
                    <span className="status-badge no-refund">No Refund</span>
                    <p>Once service is delivered</p>
                  </div>
                </div>
                <div className="service-refund">
                  <h3>Retainer Packages</h3>
                  <div className="refund-status">
                    <span className="status-badge partial-refund">Partial Refund</span>
                    <p>For unused retainer hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Process */}
            <div className="policy-card wide">
              <div className="card-header">
                <div className="card-icon">🔄</div>
                <h2>Refund Process</h2>
              </div>
              <div className="card-content">
                <div className="process-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h3>Submit Request</h3>
                      <p>Email refund request to support@adsadvo.com</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h3>Review Period</h3>
                      <p>We review within 3-5 business days</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h3>Decision & Processing</h3>
                      <p>If approved, refund processed within 7-10 business days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="policy-card">
              <div className="card-header">
                <div className="card-icon">⚠️</div>
                <h2>Important Notes</h2>
              </div>
              <div className="card-content">
                <ul className="notes-list">
                  <li>All refunds are issued to the original payment method</li>
                  <li>Processing fees may not be refundable</li>
                  <li>No refunds for services already rendered</li>
                  <li>Digital products are non-refundable</li>
                  <li>Refunds may take 10-14 days to reflect in your account</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="policy-card">
              <div className="card-header">
                <div className="card-icon">📞</div>
                <h2>Contact for Refunds</h2>
              </div>
              <div className="card-content">
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div>
                      <h3>Email</h3>
                      <p>support@adsadvo.com</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">🕒</div>
                    <div>
                      <h3>Response Time</h3>
                      <p>Within 48 hours</p>
                    </div>
                  </div>
                </div>
                <div className="contact-note">
                  <p>
                    <strong>Tip:</strong> Include your service details and reason for refund request 
                    for faster processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="refund-footer">
        <div className="container">
          <div className="footer-content">
            <p>© {new Date().getFullYear()} Adsadvo. All rights reserved.</p>
            <div className="footer-links">
              <a href="/terms">Terms</a>
              <span className="separator">•</span>
              <a href="/privacy">Privacy</a>
              <span className="separator">•</span>
              <a href="/refund" className="active">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .refund-policy-page {
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
        .refund-hero {
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
          line-height: 1.6;
        }

        /* Main Content */
        .refund-content {
          padding: 60px 0;
        }

        .policy-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .policy-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .policy-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .policy-card.wide {
          grid-column: span 2;
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

        .card-content p {
          color: #475569;
          line-height: 1.6;
          margin: 0 0 16px 0;
        }

        .policy-note {
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

        .policy-note p {
          margin: 0;
          color: #1e40af;
        }

        /* Service Refund */
        .service-refund {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e2e8f0;
        }

        .service-refund:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .service-refund h3 {
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 12px 0;
        }

        .refund-status {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .status-badge {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .status-badge.no-refund {
          background: #fef2f2;
          color: #dc2626;
          border: 1px solid #fecaca;
        }

        .status-badge.partial-refund {
          background: #fffbeb;
          color: #d97706;
          border: 1px solid #fde68a;
        }

        .refund-status p {
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }

        /* Process Steps */
        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
        }

        .step {
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
          margin-bottom: 16px;
        }

        .step-content h3 {
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 8px 0;
        }

        .step-content p {
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }

        /* Notes List */
        .notes-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .notes-list li {
          padding: 8px 0;
          color: #475569;
          position: relative;
          padding-left: 24px;
        }

        .notes-list li:before {
          content: "•";
          color: #FF6B35;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        /* Contact Information */
        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }

        .contact-item {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .contact-icon {
          font-size: 24px;
          color: #FF6B35;
          flex-shrink: 0;
        }

        .contact-item h3 {
          font-size: 14px;
          font-weight: 600;
          color: #64748b;
          margin: 0 0 4px 0;
        }

        .contact-item p {
          font-size: 16px;
          color: #0f172a;
          font-weight: 500;
          margin: 0;
        }

        .contact-note {
          background: #f0f9ff;
          border-radius: 8px;
          padding: 16px;
          border-left: 4px solid #0ea5e9;
        }

        .contact-note p {
          margin: 0;
          color: #0369a1;
        }

        /* Footer */
        .refund-footer {
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
        @media (max-width: 1024px) {
          .policy-card.wide {
            grid-column: span 1;
          }
        }

        @media (max-width: 768px) {
          .refund-hero {
            padding: 60px 0;
          }
          
          .hero-title {
            font-size: 36px;
          }
          
          .hero-subtitle {
            font-size: 16px;
          }
          
          .refund-content {
            padding: 40px 0;
          }
          
          .policy-cards {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          .process-steps {
            grid-template-columns: 1fr;
            gap: 20px;
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
          
          .contact-info {
            grid-template-columns: 1fr;
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

export default RefundPolicy;