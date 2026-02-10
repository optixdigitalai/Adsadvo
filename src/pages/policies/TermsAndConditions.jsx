import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge">
              <span>LEGAL DOCUMENT</span>
            </div>
            <h1 className="hero-title">Terms & Conditions</h1>
            <p className="hero-subtitle">
              Please read these terms carefully before using our services
            </p>
            <div className="last-updated">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#FF6B35"/>
                <path d="M11 7H13V12L16.5 15.5L15.08 16.92L11 12.83V7Z" fill="#FF6B35"/>
              </svg>
              <span>Last Updated: January 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="terms-content">
        <div className="container">
          <div className="content-wrapper">
            {/* Table of Contents */}
            <div className="toc-sidebar">
              <div className="toc-header">
                <h3>Quick Navigation</h3>
              </div>
              <nav className="toc-nav">
                <a href="#acceptance" className="toc-link">1. Acceptance of Terms</a>
                <a href="#services" className="toc-link">2. Services Overview</a>
                <a href="#registration" className="toc-link">3. Registration & Accounts</a>
                <a href="#user-responsibilities" className="toc-link">4. User Responsibilities</a>
                <a href="#payments" className="toc-link">5. Payments & Billing</a>
                <a href="#intellectual-property" className="toc-link">6. Intellectual Property</a>
                <a href="#privacy" className="toc-link">7. Privacy & Data</a>
                <a href="#liability" className="toc-link">8. Limitation of Liability</a>
                <a href="#termination" className="toc-link">9. Termination</a>
                <a href="#governing-law" className="toc-link">10. Governing Law</a>
                <a href="#changes" className="toc-link">11. Changes to Terms</a>
                <a href="#contact" className="toc-link">12. Contact Information</a>
              </nav>
              
              <div className="toc-note">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#3B82F6"/>
                  <path d="M11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="#3B82F6"/>
                </svg>
                <p>By using our services, you agree to these terms</p>
              </div>
            </div>

            {/* Terms Content */}
            <div className="terms-main">
              {/* Introduction */}
              <div className="terms-intro">
                <p>
                  Welcome to Adsadvo. These Terms and Conditions ("Terms") govern your access to and use of 
                  our website, services, and products. By accessing or using Adsadvo, you agree to be bound 
                  by these Terms. If you disagree with any part of these Terms, you may not access our services.
                </p>
              </div>

              {/* Section 1: Acceptance of Terms */}
              <section id="acceptance" className="terms-section">
                <div className="section-header">
                  <div className="section-number">1</div>
                  <h2>Acceptance of Terms</h2>
                </div>
                <div className="section-content">
                  <p>
                    By accessing, browsing, or using Adsadvo's website and services, you acknowledge that 
                    you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
                  </p>
                  <div className="terms-list">
                    <div className="term-item">
                      <div className="term-icon">✅</div>
                      <div>
                        <h4>Binding Agreement</h4>
                        <p>These Terms constitute a legally binding agreement between you and Adsadvo.</p>
                      </div>
                    </div>
                    <div className="term-item">
                      <div className="term-icon">📋</div>
                      <div>
                        <h4>Additional Policies</h4>
                        <p>Our Privacy Policy, Cookie Policy, and other policies are incorporated herein.</p>
                      </div>
                    </div>
                    <div className="term-item">
                      <div className="term-icon">👤</div>
                      <div>
                        <h4>Eligibility</h4>
                        <p>You must be at least 18 years old to use our services.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Services Overview */}
              <section id="services" className="terms-section">
                <div className="section-header">
                  <div className="section-number">2</div>
                  <h2>Services Overview</h2>
                </div>
                <div className="section-content">
                  <p>
                    Adsadvo provides comprehensive e-commerce and digital marketing solutions including:
                  </p>
                  
                  <div className="services-grid">
                    <div className="service-card">
                      <div className="service-icon">🛍️</div>
                      <div className="service-content">
                        <h3>Amazon Services</h3>
                        <ul>
                          <li>Amazon store setup and optimization</li>
                          <li>Product listing and catalog management</li>
                          <li>Amazon PPC campaign management</li>
                          <li>Review and feedback management</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="service-card">
                      <div className="service-icon">🚚</div>
                      <div className="service-content">
                        <h3>Dropshipping Solutions</h3>
                        <ul>
                          <li>Complete dropshipping store setup</li>
                          <li>Product research and sourcing</li>
                          <li>Supplier management and coordination</li>
                          <li>Order fulfillment automation</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="service-card">
                      <div className="service-icon">💡</div>
                      <div className="service-content">
                        <h3>Digital Consulting</h3>
                        <ul>
                          <li>E-commerce strategy development</li>
                          <li>Digital marketing consultation</li>
                          <li>Business scaling strategies</li>
                          <li>Performance analysis and optimization</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="service-note">
                    <div className="note-icon">ℹ️</div>
                    <div>
                      <h4>Service Limitations</h4>
                      <p>
                        Our services are provided "as is" and we reserve the right to modify, suspend, 
                        or discontinue any service at any time without prior notice.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Registration & Accounts */}
              <section id="registration" className="terms-section">
                <div className="section-header">
                  <div className="section-number">3</div>
                  <h2>Registration & Accounts</h2>
                </div>
                <div className="section-content">
                  <p>To access certain features of our services, you may be required to create an account.</p>
                  
                  <div className="account-requirements">
                    <h3>Account Requirements</h3>
                    <div className="requirements-grid">
                      <div className="requirement">
                        <div className="req-icon">🔐</div>
                        <div>
                          <h4>Accurate Information</h4>
                          <p>Provide complete, accurate, and current information</p>
                        </div>
                      </div>
                      <div className="requirement">
                        <div className="req-icon">🛡️</div>
                        <div>
                          <h4>Security Responsibility</h4>
                          <p>Maintain confidentiality of your login credentials</p>
                        </div>
                      </div>
                      <div className="requirement">
                        <div className="req-icon">👁️</div>
                        <div>
                          <h4>Account Activity</h4>
                          <p>You are responsible for all activities under your account</p>
                        </div>
                      </div>
                      <div className="requirement">
                        <div className="req-icon">🚫</div>
                        <div>
                          <h4>No Sharing</h4>
                          <p>Do not share account access with unauthorized parties</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="account-termination">
                    <h3>Account Termination Rights</h3>
                    <p>We reserve the right to:</p>
                    <ul className="termination-list">
                      <li>Refuse service to anyone for any reason at any time</li>
                      <li>Terminate accounts for violations of these Terms</li>
                      <li>Remove or edit content that violates our policies</li>
                      <li>Suspend accounts during investigation of potential violations</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 4: User Responsibilities */}
              <section id="user-responsibilities" className="terms-section">
                <div className="section-header">
                  <div className="section-number">4</div>
                  <h2>User Responsibilities</h2>
                </div>
                <div className="section-content">
                  <p>As a user of our services, you agree to:</p>
                  
                  <div className="responsibilities-grid">
                    <div className="responsibility-card">
                      <div className="resp-icon">✅</div>
                      <div className="resp-content">
                        <h3>Compliance with Laws</h3>
                        <p>Comply with all applicable local, state, national, and international laws and regulations</p>
                      </div>
                    </div>
                    
                    <div className="responsibility-card">
                      <div className="resp-icon">🎯</div>
                      <div className="resp-content">
                        <h3>Proper Use</h3>
                        <p>Use our services only for lawful purposes and in accordance with these Terms</p>
                      </div>
                    </div>
                    
                    <div className="responsibility-card">
                      <div className="resp-icon">🚫</div>
                      <div className="resp-content">
                        <h3>Prohibited Activities</h3>
                        <p>Not engage in fraudulent, deceptive, or harmful activities</p>
                      </div>
                    </div>
                    
                    <div className="responsibility-card">
                      <div className="resp-icon">📝</div>
                      <div className="resp-content">
                        <h3>Accurate Information</h3>
                        <p>Provide accurate and complete information when required</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="prohibited-activities">
                    <h3>Specifically Prohibited Activities Include:</h3>
                    <div className="prohibited-grid">
                      <div className="prohibited-item">
                        <div className="prohibited-icon">⚖️</div>
                        <span>Violating intellectual property rights</span>
                      </div>
                      <div className="prohibited-item">
                        <div className="prohibited-icon">💻</div>
                        <span>Hacking or attempting unauthorized access</span>
                      </div>
                      <div className="prohibited-item">
                        <div className="prohibited-icon">📧</div>
                        <span>Spamming or sending unsolicited communications</span>
                      </div>
                      <div className="prohibited-item">
                        <div className="prohibited-icon">💰</div>
                        <span>Engaging in fraudulent financial activities</span>
                      </div>
                      <div className="prohibited-item">
                        <div className="prohibited-icon">🌐</div>
                        <span>Distributing malware or harmful code</span>
                      </div>
                      <div className="prohibited-item">
                        <div className="prohibited-icon">📊</div>
                        <span>Misrepresenting affiliation with any entity</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Payments & Billing */}
              <section id="payments" className="terms-section">
                <div className="section-header">
                  <div className="section-number">5</div>
                  <h2>Payments & Billing</h2>
                </div>
                <div className="section-content">
                  <div className="payment-info">
                    <h3>Payment Terms</h3>
                    <div className="payment-details">
                      <div className="payment-item">
                        <div className="payment-icon">💰</div>
                        <div>
                          <h4>Service Fees</h4>
                          <p>Fees are specified in your service agreement or on our pricing page</p>
                        </div>
                      </div>
                      <div className="payment-item">
                        <div className="payment-icon">📅</div>
                        <div>
                          <h4>Billing Cycles</h4>
                          <p>Services may be billed monthly, quarterly, or annually as agreed</p>
                        </div>
                      </div>
                      <div className="payment-item">
                        <div className="payment-icon">💳</div>
                        <div>
                          <h4>Payment Methods</h4>
                          <p>We accept major credit cards, bank transfers, and online payment methods</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="refund-policy">
                    <h3>Refund Policy</h3>
                    <div className="refund-details">
                      <div className="refund-note">
                        <div className="refund-icon">⚠️</div>
                        <div>
                          <h4>General Policy</h4>
                          <p>Service fees are generally non-refundable unless otherwise specified in your agreement</p>
                        </div>
                      </div>
                      <div className="refund-note">
                        <div className="refund-icon">🔄</div>
                        <div>
                          <h4>Cancellations</h4>
                          <p>You may cancel services according to the terms of your specific service agreement</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="late-payment">
                    <h3>Late Payments</h3>
                    <ul className="late-payment-list">
                      <li>Late payments may incur additional fees</li>
                      <li>Services may be suspended for non-payment</li>
                      <li>We reserve the right to use collection agencies for unpaid balances</li>
                      <li>Interest may be charged on overdue amounts as permitted by law</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 6: Intellectual Property */}
              <section id="intellectual-property" className="terms-section">
                <div className="section-header">
                  <div className="section-number">6</div>
                  <h2>Intellectual Property</h2>
                </div>
                <div className="section-content">
                  <div className="ip-ownership">
                    <h3>Ownership Rights</h3>
                    <div className="ip-grid">
                      <div className="ip-item">
                        <div className="ip-icon">©️</div>
                        <div>
                          <h4>Our Content</h4>
                          <p>All content on our platform is owned by Adsadvo or licensed to us</p>
                        </div>
                      </div>
                      <div className="ip-item">
                        <div className="ip-icon">™️</div>
                        <div>
                          <h4>Trademarks</h4>
                          <p>Our logos and brand names are trademarks of Adsadvo</p>
                        </div>
                      </div>
                      <div className="ip-item">
                        <div className="ip-icon">🔒</div>
                        <div>
                          <h4>Proprietary Information</h4>
                          <p>Our methodologies and processes are proprietary</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="license-terms">
                    <h3>License to Use</h3>
                    <p>
                      We grant you a limited, non-exclusive, non-transferable license to access and use 
                      our services for your business purposes, subject to these Terms.
                    </p>
                    
                    <div className="restrictions">
                      <h4>Restrictions:</h4>
                      <ul>
                        <li>Do not copy, modify, or distribute our content without permission</li>
                        <li>Do not reverse engineer or attempt to extract source code</li>
                        <li>Do not use our intellectual property for competitive purposes</li>
                        <li>Do not remove copyright or proprietary notices</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="user-content">
                    <h3>User-Generated Content</h3>
                    <p>
                      By submitting content to our platform, you grant us a worldwide license to use, 
                      display, and distribute that content in connection with our services.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: Privacy & Data */}
              <section id="privacy" className="terms-section">
                <div className="section-header">
                  <div className="section-number">7</div>
                  <h2>Privacy & Data Protection</h2>
                </div>
                <div className="section-content">
                  <div className="privacy-overview">
                    <h3>Data Handling</h3>
                    <p>
                      We are committed to protecting your privacy and handling your data responsibly. 
                      Our data practices are governed by our Privacy Policy.
                    </p>
                  </div>
                  
                  <div className="data-agreements">
                    <div className="data-agreement">
                      <div className="agreement-icon">🛡️</div>
                      <div>
                        <h4>Data Security</h4>
                        <p>We implement industry-standard security measures to protect your data</p>
                      </div>
                    </div>
                    <div className="data-agreement">
                      <div className="agreement-icon">📊</div>
                      <div>
                        <h4>Data Usage</h4>
                        <p>We use your data to provide and improve our services, as detailed in our Privacy Policy</p>
                      </div>
                    </div>
                    <div className="data-agreement">
                      <div className="agreement-icon">🤝</div>
                      <div>
                        <h4>Third-Party Sharing</h4>
                        <p>We only share data with third parties as necessary for service delivery</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="compliance-notice">
                    <h3>Compliance Requirements</h3>
                    <p>
                      Users are responsible for ensuring their use of our services complies with applicable 
                      data protection laws, including GDPR, CCPA, and other regional regulations.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Limitation of Liability */}
              <section id="liability" className="terms-section">
                <div className="section-header">
                  <div className="section-number">8</div>
                  <h2>Limitation of Liability</h2>
                </div>
                <div className="section-content">
                  <div className="liability-disclaimer">
                    <h3>Disclaimer of Warranties</h3>
                    <p>
                      Our services are provided "as is" and "as available" without warranties of any kind, 
                      either express or implied, including but not limited to warranties of merchantability, 
                      fitness for a particular purpose, or non-infringement.
                    </p>
                  </div>
                  
                  <div className="liability-limits">
                    <h3>Limitation of Liability</h3>
                    <div className="limits-grid">
                      <div className="limit-item">
                        <div className="limit-icon">💰</div>
                        <div>
                          <h4>Direct Damages</h4>
                          <p>Our liability for direct damages is limited to the amount you paid for services</p>
                        </div>
                      </div>
                      <div className="limit-item">
                        <div className="limit-icon">🚫</div>
                        <div>
                          <h4>Indirect Damages</h4>
                          <p>We are not liable for indirect, incidental, or consequential damages</p>
                        </div>
                      </div>
                      <div className="limit-item">
                        <div className="limit-icon">⚖️</div>
                        <div>
                          <h4>Force Majeure</h4>
                          <p>We are not liable for events beyond our reasonable control</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="liability-exclusions">
                    <h3>Exclusions</h3>
                    <p>These limitations do not apply to:</p>
                    <ul>
                      <li>Death or personal injury caused by our negligence</li>
                      <li>Fraud or fraudulent misrepresentation</li>
                      <li>Any liability that cannot be excluded by law</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 9: Termination */}
              <section id="termination" className="terms-section">
                <div className="section-header">
                  <div className="section-number">9</div>
                  <h2>Termination</h2>
                </div>
                <div className="section-content">
                  <div className="termination-rights">
                    <h3>Termination Rights</h3>
                    <div className="termination-options">
                      <div className="option">
                        <div className="option-icon">👤</div>
                        <div>
                          <h4>User Termination</h4>
                          <p>You may terminate your account at any time by contacting us</p>
                        </div>
                      </div>
                      <div className="option">
                        <div className="option-icon">🏢</div>
                        <div>
                          <h4>Company Termination</h4>
                          <p>We may terminate or suspend your access for violations of these Terms</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="termination-effects">
                    <h3>Effects of Termination</h3>
                    <ul>
                      <li>Your right to use our services will immediately cease</li>
                      <li>You must cease all use of our intellectual property</li>
                      <li>Outstanding payments will become due immediately</li>
                      <li>We may delete your account information according to our data retention policy</li>
                    </ul>
                  </div>
                  
                  <div className="survival-clause">
                    <h3>Survival</h3>
                    <p>
                      Provisions that by their nature should survive termination will survive, including 
                      ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: Governing Law */}
              <section id="governing-law" className="terms-section">
                <div className="section-header">
                  <div className="section-number">10</div>
                  <h2>Governing Law & Dispute Resolution</h2>
                </div>
                <div className="section-content">
                  <div className="governing-law">
                    <h3>Applicable Law</h3>
                    <p>
                      These Terms shall be governed by and construed in accordance with the laws of 
                      India, without regard to its conflict of law provisions.
                    </p>
                  </div>
                  
                  <div className="dispute-resolution">
                    <h3>Dispute Resolution</h3>
                    <div className="resolution-steps">
                      <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                          <h4>Negotiation</h4>
                          <p>Parties agree to attempt to resolve disputes through good faith negotiation</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>Mediation</h4>
                          <p>If negotiation fails, parties agree to mediation before pursuing legal action</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>Jurisdiction</h4>
                          <p>Any legal action shall be brought in the courts of New Delhi, India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="class-action-waiver">
                    <h3>Class Action Waiver</h3>
                    <p>
                      You agree to resolve disputes on an individual basis and waive any right to 
                      participate in class actions or class-wide arbitrations.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 11: Changes to Terms */}
              <section id="changes" className="terms-section">
                <div className="section-header">
                  <div className="section-number">11</div>
                  <h2>Changes to Terms</h2>
                </div>
                <div className="section-content">
                  <div className="changes-policy">
                    <h3>Modification Rights</h3>
                    <p>
                      We reserve the right to modify these Terms at any time. We will notify you of 
                      significant changes through:
                    </p>
                    
                    <div className="notification-methods">
                      <div className="method">
                        <div className="method-icon">📧</div>
                        <div>
                          <h4>Email Notification</h4>
                          <p>For registered users, we'll email about significant changes</p>
                        </div>
                      </div>
                      <div className="method">
                        <div className="method-icon">🔔</div>
                        <div>
                          <h4>Website Notice</h4>
                          <p>We'll post prominent notices on our website for major changes</p>
                        </div>
                      </div>
                      <div className="method">
                        <div className="method-icon">📱</div>
                        <div>
                          <h4>Updated Date</h4>
                          <p>The "Last Updated" date at the top will indicate recent changes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="acceptance-of-changes">
                    <h3>Continued Use</h3>
                    <p>
                      Your continued use of our services after any changes to these Terms constitutes 
                      your acceptance of the new Terms. If you do not agree to the changes, you must 
                      stop using our services.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 12: Contact Information */}
              <section id="contact" className="terms-section">
                <div className="section-header">
                  <div className="section-number">12</div>
                  <h2>Contact Information</h2>
                </div>
                <div className="section-content">
                  <div className="contact-details">
                    <h3>Get in Touch</h3>
                    <p>If you have any questions about these Terms, please contact us:</p>
                    
                    <div className="contact-grid">
                      <div className="contact-card">
                        <div className="contact-icon">📧</div>
                        <div className="contact-info">
                          <h4>Email</h4>
                          <p>legal@adsadvo.com</p>
                          <p className="contact-sub">For legal inquiries</p>
                        </div>
                      </div>
                      
                      <div className="contact-card">
                        <div className="contact-icon">🏢</div>
                        <div className="contact-info">
                          <h4>Address</h4>
                          <p>Adsadvo Legal Department</p>
                          <p>123 Business Street</p>
                          <p>New Delhi, India 110001</p>
                        </div>
                      </div>
                      
                      <div className="contact-card">
                        <div className="contact-icon">📞</div>
                        <div className="contact-info">
                          <h4>Phone</h4>
                          <p>+91 98765 43210</p>
                          <p className="contact-sub">Mon-Fri, 9 AM - 6 PM IST</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="acknowledgment">
                    <div className="ack-icon">🤝</div>
                    <div className="ack-content">
                      <h3>Acknowledgment</h3>
                      <p>
                        By using Adsadvo's services, you acknowledge that you have read, understood, 
                        and agree to be bound by these Terms and Conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="terms-footer">
        <div className="container">
          <div className="footer-content">
            <p>© {new Date().getFullYear()} Adsadvo. All rights reserved.</p>
            <div className="footer-links">
              <a href="/terms" className="active">Terms & Conditions</a>
              <span className="separator">•</span>
              <a href="/privacy">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="/cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .terms-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          color: #1a202c;
          background: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .terms-hero {
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
          font-size: 56px;
          font-weight: 800;
          margin-bottom: 16px;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 20px;
          color: #cbd5e1;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .last-updated {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 500;
        }

        /* Main Content Layout */
        .content-wrapper {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 40px;
          padding: 60px 0;
        }

        /* Table of Contents */
        .toc-sidebar {
          position: sticky;
          top: 100px;
          height: fit-content;
        }

        .toc-header {
          padding: 20px;
          background: white;
          border-radius: 12px 12px 0 0;
          border-bottom: 2px solid #e2e8f0;
        }

        .toc-header h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .toc-nav {
          background: white;
          border-radius: 0 0 12px 12px;
          padding: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .toc-link {
          display: block;
          padding: 12px 16px;
          color: #64748b;
          text-decoration: none;
          border-radius: 8px;
          margin-bottom: 8px;
          transition: all 0.2s ease;
          font-weight: 500;
          font-size: 14px;
        }

        .toc-link:hover {
          background: #f1f5f9;
          color: #3B82F6;
          transform: translateX(4px);
        }

        .toc-link:last-child {
          margin-bottom: 0;
        }

        .toc-note {
          margin-top: 20px;
          padding: 16px;
          background: #eff6ff;
          border-radius: 8px;
          border-left: 4px solid #3B82F6;
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .toc-note p {
          font-size: 14px;
          color: #1e40af;
          margin: 0;
          font-weight: 500;
        }

        /* Terms Main Content */
        .terms-main {
          background: white;
          border-radius: 20px;
          padding: 50px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
        }

        .terms-intro {
          padding: 20px;
          background: #f8fafc;
          border-radius: 12px;
          margin-bottom: 40px;
          border-left: 4px solid #FF6B35;
        }

        .terms-intro p {
          font-size: 18px;
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }

        /* Terms Sections */
        .terms-section {
          margin-bottom: 60px;
          scroll-margin-top: 100px;
        }

        .terms-section:last-child {
          margin-bottom: 0;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #e2e8f0;
        }

        .section-number {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .section-header h2 {
          font-size: 32px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .section-content {
          font-size: 16px;
          line-height: 1.7;
          color: #475569;
        }

        .section-content p {
          margin-bottom: 20px;
        }

        .section-content h3 {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 30px 0 16px 0;
        }

        .section-content h4 {
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .section-content ul {
          padding-left: 24px;
          margin: 16px 0;
        }

        .section-content li {
          margin-bottom: 8px;
          color: #475569;
        }

        /* Section 1: Acceptance of Terms */
        .terms-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 24px 0;
        }

        .term-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: #f8fafc;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .term-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        /* Section 2: Services Overview */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin: 24px 0;
        }

        .service-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          border: 2px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border-color: #FF6B35;
        }

        .service-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .service-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 12px 0;
        }

        .service-card ul {
          padding-left: 20px;
          margin: 0;
        }

        .service-card li {
          font-size: 14px;
          margin-bottom: 6px;
        }

        .service-note {
          background: #eff6ff;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          margin: 24px 0;
          border-left: 4px solid #3B82F6;
        }

        .note-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        /* Section 3: Registration & Accounts */
        .requirements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }

        .requirement {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: white;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .req-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .termination-list {
          padding-left: 24px;
          margin: 16px 0;
        }

        .termination-list li {
          margin-bottom: 8px;
          padding-left: 8px;
        }

        /* Section 4: User Responsibilities */
        .responsibilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 24px 0;
        }

        .responsibility-card {
          background: #f8fafc;
          border-radius: 12px;
          padding: 24px;
          border: 2px solid #e2e8f0;
        }

        .resp-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .prohibited-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 16px;
          margin: 20px 0;
        }

        .prohibited-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: #fef2f2;
          border-radius: 8px;
          border: 1px solid #fecaca;
        }

        .prohibited-icon {
          font-size: 16px;
          flex-shrink: 0;
        }

        /* Section 5: Payments & Billing */
        .payment-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }

        .payment-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: #f0f9ff;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #bae6fd;
        }

        .payment-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .refund-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }

        .refund-note {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: #fffbeb;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #fde68a;
        }

        .refund-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .late-payment-list {
          padding-left: 24px;
          margin: 16px 0;
          background: #fef2f2;
          padding: 20px;
          border-radius: 12px;
          border-left: 4px solid #ef4444;
        }

        /* Section 6: Intellectual Property */
        .ip-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }

        .ip-item {
          display: flex;
          gap: 16px;
          align-items: center;
          background: #f8fafc;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .ip-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        .restrictions {
          background: #fef2f2;
          border-radius: 12px;
          padding: 20px;
          margin: 20px 0;
          border-left: 4px solid #ef4444;
        }

        /* Section 7: Privacy & Data */
        .data-agreements {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 24px 0;
        }

        .data-agreement {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: #f0f9ff;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #bae6fd;
        }

        .agreement-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .compliance-notice {
          background: #ecfdf5;
          border-radius: 12px;
          padding: 20px;
          margin: 24px 0;
          border-left: 4px solid #10b981;
        }

        /* Section 8: Limitation of Liability */
        .liability-disclaimer {
          background: #fffbeb;
          border-radius: 12px;
          padding: 24px;
          margin: 20px 0;
          border-left: 4px solid #f59e0b;
        }

        .limits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 24px 0;
        }

        .limit-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: #f8fafc;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .limit-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .liability-exclusions {
          background: #fef2f2;
          border-radius: 12px;
          padding: 20px;
          margin: 24px 0;
        }

        /* Section 9: Termination */
        .termination-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }

        .option {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: #f8fafc;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .option-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .termination-effects {
          background: #fef2f2;
          border-radius: 12px;
          padding: 20px;
          margin: 20px 0;
        }

        .survival-clause {
          background: #eff6ff;
          border-radius: 12px;
          padding: 20px;
          margin: 20px 0;
        }

        /* Section 10: Governing Law */
        .governing-law {
          background: #f0f9ff;
          border-radius: 12px;
          padding: 20px;
          margin: 20px 0;
        }

        .resolution-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 24px 0;
        }

        .step {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: white;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .step-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          flex-shrink: 0;
        }

        .class-action-waiver {
          background: #fef2f2;
          border-radius: 12px;
          padding: 20px;
          margin: 24px 0;
        }

        /* Section 11: Changes to Terms */
        .notification-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 24px 0;
        }

        .method {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: #f8fafc;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .method-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .acceptance-of-changes {
          background: #ecfdf5;
          border-radius: 12px;
          padding: 20px;
          margin: 24px 0;
        }

        /* Section 12: Contact Information */
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin: 24px 0;
        }

        .contact-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          border: 2px solid #e2e8f0;
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .contact-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .contact-info h4 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 0;
        }

        .contact-info p {
          font-size: 15px;
          color: #475569;
          margin: 0 0 4px 0;
        }

        .contact-sub {
          font-size: 13px !important;
          color: #64748b !important;
        }

        .acknowledgment {
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          color: white;
          border-radius: 16px;
          padding: 30px;
          margin-top: 40px;
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .ack-icon {
          font-size: 40px;
          flex-shrink: 0;
        }

        .ack-content h3 {
          color: white;
          margin: 0 0 12px 0;
        }

        .ack-content p {
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        /* Footer */
        .terms-footer {
          background: #1e293b;
          color: white;
          padding: 40px 0;
          text-align: center;
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
          .content-wrapper {
            grid-template-columns: 1fr;
          }
          
          .toc-sidebar {
            position: static;
            margin-bottom: 40px;
          }
          
          .terms-main {
            padding: 40px;
          }
          
          .hero-title {
            font-size: 48px;
          }
        }

        @media (max-width: 768px) {
          .terms-hero {
            padding: 60px 0;
          }
          
          .hero-title {
            font-size: 40px;
          }
          
          .hero-subtitle {
            font-size: 18px;
          }
          
          .terms-main {
            padding: 30px;
          }
          
          .section-header h2 {
            font-size: 28px;
          }
          
          .content-wrapper {
            padding: 40px 0;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 32px;
          }
          
          .terms-main {
            padding: 20px;
          }
          
          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          
          .section-header h2 {
            font-size: 24px;
          }
          
          .section-number {
            width: 50px;
            height: 50px;
            font-size: 20px;
          }
          
          .services-grid,
          .terms-list,
          .requirements-grid,
          .responsibilities-grid,
          .payment-details,
          .refund-details,
          .ip-grid,
          .data-agreements,
          .limits-grid,
          .termination-options,
          .resolution-steps,
          .notification-methods,
          .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .prohibited-grid {
            grid-template-columns: 1fr;
          }
          
          .acknowledgment {
            flex-direction: column;
            text-align: center;
            gap: 16px;
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

export default TermsAndConditions;