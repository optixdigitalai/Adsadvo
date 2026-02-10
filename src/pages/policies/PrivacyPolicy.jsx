import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Privacy Policy</h1>
            <p className="hero-subtitle">
              Your privacy matters to us. Learn how we protect and handle your information.
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
      <section className="privacy-content">
        <div className="container">
          <div className="content-wrapper">
            {/* Table of Contents */}
            <div className="toc-sidebar">
              <div className="toc-header">
                <h3>Contents</h3>
              </div>
              <nav className="toc-nav">
                <a href="#introduction" className="toc-link">Introduction</a>
                <a href="#information-collection" className="toc-link">Information We Collect</a>
                <a href="#information-use" className="toc-link">How We Use Information</a>
                <a href="#data-sharing" className="toc-link">Data Sharing</a>
                <a href="#data-security" className="toc-link">Data Security</a>
                <a href="#your-rights" className="toc-link">Your Rights</a>
                <a href="#cookies" className="toc-link">Cookies</a>
                <a href="#policy-changes" className="toc-link">Policy Changes</a>
                <a href="#contact-us" className="toc-link">Contact Us</a>
              </nav>
            </div>

            {/* Policy Content */}
            <div className="policy-main">
              {/* Introduction */}
              <section id="introduction" className="policy-section">
                <div className="section-header">
                  <div className="section-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#3B82F6"/>
                      <path d="M12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM11 9H13V7H11V9Z" fill="#3B82F6"/>
                    </svg>
                  </div>
                  <h2>Introduction</h2>
                </div>
                <div className="section-content">
                  <p>
                    At Adsadvo ("we," "our," or "us"), we are committed to protecting your privacy and 
                    ensuring the security of your personal information. This Privacy Policy explains how 
                    we collect, use, disclose, and safeguard your information when you use our website 
                    (adsadvo.com) and our services.
                  </p>
                  <p>
                    By accessing or using our services, you agree to the terms of this Privacy Policy. 
                    If you do not agree with our policies and practices, please do not use our services.
                  </p>
                  <div className="policy-note">
                    <div className="note-icon">ℹ️</div>
                    <p>
                      <strong>Note:</strong> This policy applies to all information collected through our 
                      website and any related services, sales, marketing, or events.
                    </p>
                  </div>
                </div>
              </section>

              {/* Information Collection */}
              <section id="information-collection" className="policy-section">
                <div className="section-header">
                  <div className="section-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 12H9V17H7V12ZM11 7H13V17H11V7ZM15 10H17V17H15V10Z" fill="#8B5CF6"/>
                    </svg>
                  </div>
                  <h2>Information We Collect</h2>
                </div>
                <div className="section-content">
                  <p>We collect several types of information for various purposes to provide and improve our services:</p>
                  
                  <div className="info-category">
                    <h3>Personal Information</h3>
                    <p>Information that can be used to identify you personally:</p>
                    <div className="info-grid">
                      <div className="info-item">
                        <div className="item-icon">👤</div>
                        <div>
                          <h4>Contact Details</h4>
                          <p>Name, email address, phone number</p>
                        </div>
                      </div>
                      <div className="info-item">
                        <div className="item-icon">🏢</div>
                        <div>
                          <h4>Business Information</h4>
                          <p>Company name, job title, business type</p>
                        </div>
                      </div>
                      <div className="info-item">
                        <div className="item-icon">📍</div>
                        <div>
                          <h4>Location Data</h4>
                          <p>Country, city, time zone (if provided)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="info-category">
                    <h3>Automatically Collected Information</h3>
                    <p>Information collected automatically when you visit our website:</p>
                    <div className="info-grid">
                      <div className="info-item">
                        <div className="item-icon">💻</div>
                        <div>
                          <h4>Device Information</h4>
                          <p>IP address, browser type, operating system</p>
                        </div>
                      </div>
                      <div className="info-item">
                        <div className="item-icon">📊</div>
                        <div>
                          <h4>Usage Data</h4>
                          <p>Pages visited, time spent, click patterns</p>
                        </div>
                      </div>
                      <div className="info-item">
                        <div className="item-icon">🍪</div>
                        <div>
                          <h4>Cookies & Tracking</h4>
                          <p>Session data, preferences, analytics</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="info-category">
                    <h3>Information from Third Parties</h3>
                    <p>We may receive information about you from:</p>
                    <ul className="info-list">
                      <li>Social media platforms (when you connect with us)</li>
                      <li>Business partners and affiliates</li>
                      <li>Publicly available sources</li>
                      <li>Marketing and analytics providers</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Information Use */}
              <section id="information-use" className="policy-section">
                <div className="section-header">
                  <div className="section-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z" fill="#10B981"/>
                    </svg>
                  </div>
                  <h2>How We Use Your Information</h2>
                </div>
                <div className="section-content">
                  <p>We use the information we collect for various business purposes:</p>
                  
                  <div className="use-cards">
                    <div className="use-card">
                      <div className="use-icon">🚀</div>
                      <h3>Service Delivery</h3>
                      <ul>
                        <li>Provide and maintain our services</li>
                        <li>Process transactions and payments</li>
                        <li>Send service-related communications</li>
                        <li>Respond to inquiries and support requests</li>
                      </ul>
                    </div>
                    
                    <div className="use-card">
                      <div className="use-icon">📈</div>
                      <h3>Business Operations</h3>
                      <ul>
                        <li>Improve and optimize our services</li>
                        <li>Conduct research and analysis</li>
                        <li>Develop new features and products</li>
                        <li>Monitor usage patterns and trends</li>
                      </ul>
                    </div>
                    
                    <div className="use-card">
                      <div className="use-icon">📣</div>
                      <h3>Marketing & Communication</h3>
                      <ul>
                        <li>Send promotional materials and updates</li>
                        <li>Personalize marketing communications</li>
                        <li>Conduct surveys and gather feedback</li>
                        <li>Inform about new services and features</li>
                      </ul>
                    </div>
                    
                    <div className="use-card">
                      <div className="use-icon">🛡️</div>
                      <h3>Security & Compliance</h3>
                      <ul>
                        <li>Protect against fraud and abuse</li>
                        <li>Enforce our terms and policies</li>
                        <li>Comply with legal obligations</li>
                        <li>Ensure network and data security</li>
                      </ul>
                    </div>
                  </div>

                  <div className="legal-basis">
                    <h3>Legal Basis for Processing</h3>
                    <p>We process your personal information based on:</p>
                    <div className="basis-grid">
                      <div className="basis-item">
                        <div className="basis-icon">🤝</div>
                        <div>
                          <h4>Consent</h4>
                          <p>When you've given clear consent</p>
                        </div>
                      </div>
                      <div className="basis-item">
                        <div className="basis-icon">📋</div>
                        <div>
                          <h4>Contract</h4>
                          <p>To fulfill our contractual obligations</p>
                        </div>
                      </div>
                      <div className="basis-item">
                        <div className="basis-icon">⚖️</div>
                        <div>
                          <h4>Legal Obligation</h4>
                          <p>To comply with legal requirements</p>
                        </div>
                      </div>
                      <div className="basis-item">
                        <div className="basis-icon">🎯</div>
                        <div>
                          <h4>Legitimate Interests</h4>
                          <p>For our legitimate business interests</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Sharing */}
              <section id="data-sharing" className="policy-section">
                <div className="section-header">
                  <div className="section-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="#F59E0B"/>
                    </svg>
                  </div>
                  <h2>Data Sharing and Disclosure</h2>
                </div>
                <div className="section-content">
                  <p>We may share your information in the following circumstances:</p>
                  
                  <div className="sharing-cards">
                    <div className="sharing-card">
                      <h3>Service Providers</h3>
                      <p>We may share information with third-party vendors who perform services on our behalf:</p>
                      <ul>
                        <li>Hosting and infrastructure providers</li>
                        <li>Payment processors</li>
                        <li>Email service providers</li>
                        <li>Analytics and marketing tools</li>
                      </ul>
                    </div>
                    
                    <div className="sharing-card">
                      <h3>Business Transfers</h3>
                      <p>In connection with any merger, sale of company assets, financing, or acquisition:</p>
                      <ul>
                        <li>During due diligence processes</li>
                        <li>As part of asset transfers</li>
                        <li>To successor entities</li>
                      </ul>
                    </div>
                    
                    <div className="sharing-card">
                      <h3>Legal Requirements</h3>
                      <p>We may disclose your information if required by law:</p>
                      <ul>
                        <li>To comply with legal obligations</li>
                        <li>To protect our rights and property</li>
                        <li>In connection with legal proceedings</li>
                        <li>To prevent harm or illegal activities</li>
                      </ul>
                    </div>
                    
                    <div className="sharing-card">
                      <h3>With Your Consent</h3>
                      <p>We may share information with third parties when you give us explicit consent:</p>
                      <ul>
                        <li>Integration with other services</li>
                        <li>Partnership arrangements</li>
                        <li>Joint marketing initiatives</li>
                      </ul>
                    </div>
                  </div>

                  <div className="data-retention">
                    <h3>Data Retention</h3>
                    <p>We retain your personal information only for as long as necessary:</p>
                    <div className="retention-info">
                      <div className="retention-item">
                        <div className="retention-icon">📅</div>
                        <div>
                          <h4>Active Customers</h4>
                          <p>Retained while you use our services and for 3 years after</p>
                        </div>
                      </div>
                      <div className="retention-item">
                        <div className="retention-icon">🗑️</div>
                        <div>
                          <h4>Inactive Accounts</h4>
                          <p>Retained for 2 years after account inactivity</p>
                        </div>
                      </div>
                      <div className="retention-item">
                        <div className="retention-icon">⚖️</div>
                        <div>
                          <h4>Legal Requirements</h4>
                          <p>Retained as required by applicable laws</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section id="data-security" className="policy-section">
                <div className="section-header">
                  <div className="section-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11H19C18.47 15.11 15.72 18.78 12 19.93V11H5V6.3L12 3.19V11Z" fill="#EF4444"/>
                    </svg>
                  </div>
                  <h2>Data Security</h2>
                </div>
                <div className="section-content">
                  <p>We implement comprehensive security measures to protect your information:</p>
                  
                  <div className="security-grid">
                    <div className="security-item">
                      <div className="security-icon">🔒</div>
                      <div>
                        <h3>Encryption</h3>
                        <p>All data transmitted is encrypted using TLS/SSL protocols</p>
                      </div>
                    </div>
                    
                    <div className="security-item">
                      <div className="security-icon">🛡️</div>
                      <div>
                        <h3>Access Controls</h3>
                        <p>Strict access controls and authentication mechanisms</p>
                      </div>
                    </div>
                    
                    <div className="security-item">
                      <div className="security-icon">📊</div>
                      <div>
                        <h3>Regular Audits</h3>
                        <p>Continuous security monitoring and vulnerability assessments</p>
                      </div>
                    </div>
                    
                    <div className="security-item">
                      <div className="security-icon">🏢</div>
                      <div>
                        <h3>Physical Security</h3>
                        <p>Secure data centers with 24/7 monitoring</p>
                      </div>
                    </div>
                    
                    <div className="security-item">
                      <div className="security-icon">👥</div>
                      <div>
                        <h3>Employee Training</h3>
                        <p>Regular security awareness training for all staff</p>
                      </div>
                    </div>
                    
                    <div className="security-item">
                      <div className="security-icon">🔄</div>
                      <div>
                        <h3>Backup Systems</h3>
                        <p>Regular backups and disaster recovery procedures</p>
                      </div>
                    </div>
                  </div>

                  <div className="security-notice">
                    <div className="notice-header">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#F59E0B"/>
                        <path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#F59E0B"/>
                      </svg>
                      <h4>Important Security Notice</h4>
                    </div>
                    <p>
                      While we implement industry-standard security measures, no method of transmission 
                      over the Internet or electronic storage is 100% secure. We cannot guarantee absolute 
                      security but we continuously work to maintain and improve our security protocols.
                    </p>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section id="your-rights" className="policy-section">
                <div className="section-header">
                  <div className="section-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12L11 14L15 10M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#3B82F6"/>
                    </svg>
                  </div>
                  <h2>Your Privacy Rights</h2>
                </div>
                <div className="section-content">
                  <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                  
                  <div className="rights-grid">
                    <div className="right-card">
                      <div className="right-icon">👁️</div>
                      <h3>Right to Access</h3>
                      <p>Request access to your personal information we hold</p>
                    </div>
                    
                    <div className="right-card">
                      <div className="right-icon">✏️</div>
                      <h3>Right to Rectification</h3>
                      <p>Request correction of inaccurate or incomplete data</p>
                    </div>
                    
                    <div className="right-card">
                      <div className="right-icon">🗑️</div>
                      <h3>Right to Erasure</h3>
                      <p>Request deletion of your personal information</p>
                    </div>
                    
                    <div className="right-card">
                      <div className="right-icon">⏸️</div>
                      <h3>Right to Restrict</h3>
                      <p>Request restriction of processing your data</p>
                    </div>
                    
                    <div className="right-card">
                      <div className="right-icon">📥</div>
                      <h3>Right to Portability</h3>
                      <p>Request transfer of your data to another service</p>
                    </div>
                    
                    <div className="right-card">
                      <div className="right-icon">🚫</div>
                      <h3>Right to Object</h3>
                      <p>Object to processing of your personal information</p>
                    </div>
                  </div>

                  <div className="rights-exercise">
                    <h3>How to Exercise Your Rights</h3>
                    <p>To exercise any of these rights, please contact us at:</p>
                    <div className="contact-methods">
                      <div className="contact-method">
                        <div className="method-icon">📧</div>
                        <div>
                          <h4>Email</h4>
                          <p>privacy@adsadvo.com</p>
                        </div>
                      </div>
                      <div className="contact-method">
                        <div className="method-icon">📄</div>
                        <div>
                          <h4>Online Form</h4>
                          <p>Submit a request through our website</p>
                        </div>
                      </div>
                      <div className="contact-method">
                        <div className="method-icon">📞</div>
                        <div>
                          <h4>Phone</h4>
                          <p>+1 (555) 123-4567</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="verification-note">
                      <p>
                        <strong>Note:</strong> We may need to verify your identity before processing 
                        your request. We will respond to your request within 30 days.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section id="cookies" className="policy-section">
                <div className="section-header">
                  <div className="section-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#8B5CF6"/>
                      <path d="M10 9.5C10 10.33 9.33 11 8.5 11C7.67 11 7 10.33 7 9.5C7 8.67 7.67 8 8.5 8C9.33 8 10 8.67 10 9.5ZM15.5 11C16.33 11 17 10.33 17 9.5C17 8.67 16.33 8 15.5 8C14.67 8 14 8.67 14 9.5C14 10.33 14.67 11 15.5 11ZM12 17C13.66 17 15 15.66 15 14H9C9 15.66 10.34 17 12 17Z" fill="#8B5CF6"/>
                    </svg>
                  </div>
                  <h2>Cookies and Tracking Technologies</h2>
                </div>
                <div className="section-content">
                  <p>We use cookies and similar tracking technologies to enhance your experience:</p>
                  
                  <div className="cookies-table">
                    <div className="table-header">
                      <div className="table-col">Cookie Type</div>
                      <div className="table-col">Purpose</div>
                      <div className="table-col">Duration</div>
                    </div>
                    
                    <div className="table-row">
                      <div className="table-col">
                        <strong>Essential Cookies</strong>
                      </div>
                      <div className="table-col">
                        Necessary for website functionality and security
                      </div>
                      <div className="table-col">
                        Session
                      </div>
                    </div>
                    
                    <div className="table-row">
                      <div className="table-col">
                        <strong>Analytics Cookies</strong>
                      </div>
                      <div className="table-col">
                        Help us understand how visitors use our website
                      </div>
                      <div className="table-col">
                        2 years
                      </div>
                    </div>
                    
                    <div className="table-row">
                      <div className="table-col">
                        <strong>Marketing Cookies</strong>
                      </div>
                      <div className="table-col">
                        Track effectiveness of marketing campaigns
                      </div>
                      <div className="table-col">
                        1 year
                      </div>
                    </div>
                    
                    <div className="table-row">
                      <div className="table-col">
                        <strong>Preference Cookies</strong>
                      </div>
                      <div className="table-col">
                        Remember your settings and preferences
                      </div>
                      <div className="table-col">
                        1 year
                      </div>
                    </div>
                  </div>

                  <div className="cookie-control">
                    <h3>Cookie Control</h3>
                    <p>You can control cookies through your browser settings:</p>
                    <div className="control-options">
                      <div className="control-option">
                        <h4>Browser Settings</h4>
                        <p>Most browsers allow you to refuse or accept cookies</p>
                      </div>
                      <div className="control-option">
                        <h4>Cookie Consent</h4>
                        <p>We provide cookie consent options on our website</p>
                      </div>
                      <div className="control-option">
                        <h4>Opt-Out Tools</h4>
                        <p>Use industry opt-out tools for advertising cookies</p>
                      </div>
                    </div>
                    
                    <div className="cookie-notice">
                      <p>
                        <strong>Note:</strong> Disabling cookies may affect the functionality 
                        of our website and services.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Policy Changes */}
              <section id="policy-changes" className="policy-section">
                <div className="section-header">
                  <div className="section-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z" fill="#10B981"/>
                    </svg>
                  </div>
                  <h2>Changes to This Policy</h2>
                </div>
                <div className="section-content">
                  <p>We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
                  
                  <div className="update-methods">
                    <div className="update-method">
                      <div className="method-icon">📧</div>
                      <div>
                        <h4>Email Notification</h4>
                        <p>For significant changes, we'll email registered users</p>
                      </div>
                    </div>
                    
                    <div className="update-method">
                      <div className="method-icon">🔔</div>
                      <div>
                        <h4>Website Notice</h4>
                        <p>Posting a prominent notice on our website</p>
                      </div>
                    </div>
                    
                    <div className="update-method">
                      <div className="method-icon">📱</div>
                      <div>
                        <h4>Updated Date</h4>
                        <p>Updating the "Last Updated" date at the top</p>
                      </div>
                    </div>
                  </div>

                  <div className="update-notice">
                    <h3>Your Continued Use</h3>
                    <p>
                      Your continued use of our services after any changes to this Privacy Policy 
                      constitutes your acceptance of the changes. We encourage you to review this 
                      policy periodically.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact Us */}
              <section id="contact-us" className="policy-section">
                <div className="section-header">
                  <div className="section-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#FF6B35"/>
                    </svg>
                  </div>
                  <h2>Contact Us</h2>
                </div>
                <div className="section-content">
                  <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
                  
                  <div className="contact-info-cards">
                    <div className="contact-card">
                      <div className="contact-icon">📧</div>
                      <div className="contact-details">
                        <h3>Email</h3>
                        <p>privacy@adsadvo.com</p>
                        <p className="contact-sub">For privacy-related inquiries</p>
                      </div>
                    </div>
                    
                    <div className="contact-card">
                      <div className="contact-icon">🏢</div>
                      <div className="contact-details">
                        <h3>Mailing Address</h3>
                        <p>Adsadvo Privacy Team</p>
                        <p>123 Business Street</p>
                        <p>New Delhi, India 110001</p>
                      </div>
                    </div>
                    
                    <div className="contact-card">
                      <div className="contact-icon">📞</div>
                      <div className="contact-details">
                        <h3>Phone</h3>
                        <p>+91 77698 03579</p>
                        <p className="contact-sub">Mon-Fri, 9 AM - 6 PM IST</p>
                      </div>
                    </div>
                    
                    <div className="contact-card">
                      <div className="contact-icon">🕒</div>
                      <div className="contact-details">
                        <h3>Response Time</h3>
                        <p>We aim to respond within 48 hours</p>
                        <p className="contact-sub">For urgent matters, please call</p>
                      </div>
                    </div>
                  </div>

                  <div className="data-protection">
                    <h3>Data Protection Officer</h3>
                    <div className="dpo-info">
                      <div className="dpo-icon">👤</div>
                      <div>
                        <h4>John Doe</h4>
                        <p>Data Protection Officer</p>
                        <p>dpo@adsadvo.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="privacy-footer">
        <div className="container">
          <div className="footer-content">
            <p>© {new Date().getFullYear()} Adsadvo. All rights reserved.</p>
            <div className="footer-links">
              <a href="/terms">Terms of Service</a>
              <span className="separator">•</span>
              <a href="/privacy" className="active">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="/cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .privacy-policy-page {
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
        .privacy-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 80px 0;
          color: white;
          text-align: center;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
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
        }

        .toc-link:hover {
          background: #f1f5f9;
          color: #3B82F6;
          transform: translateX(4px);
        }

        .toc-link:last-child {
          margin-bottom: 0;
        }

        /* Policy Sections */
        .policy-main {
          background: white;
          border-radius: 20px;
          padding: 50px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
        }

        .policy-section {
          margin-bottom: 60px;
          scroll-margin-top: 100px;
        }

        .policy-section:last-child {
          margin-bottom: 0;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 2px solid #e2e8f0;
        }

        .section-header h2 {
          font-size: 32px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .section-icon {
          width: 48px;
          height: 48px;
          background: #f1f5f9;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .section-content {
          font-size: 16px;
          line-height: 1.7;
          color: #475569;
        }

        .section-content p {
          margin-bottom: 20px;
        }

        .section-content p:last-child {
          margin-bottom: 0;
        }

        /* Information Collection Styles */
        .info-category {
          margin: 30px 0;
        }

        .info-category h3 {
          font-size: 20px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 16px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }

        .info-item {
          background: #f8fafc;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          border: 1px solid #e2e8f0;
        }

        .item-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        .info-item h4 {
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .info-item p {
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }

        .info-list {
          padding-left: 24px;
          margin: 16px 0;
        }

        .info-list li {
          margin-bottom: 8px;
          color: #475569;
        }

        .policy-note {
          background: #eff6ff;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          margin: 20px 0;
          border-left: 4px solid #3B82F6;
        }

        .note-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .policy-note p {
          margin: 0;
        }

        /* Information Use Styles */
        .use-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin: 30px 0;
        }

        .use-card {
          background: #f8fafc;
          border-radius: 16px;
          padding: 24px;
          border: 2px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .use-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }

        .use-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .use-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 12px 0;
        }

        .use-card ul {
          padding-left: 20px;
          margin: 0;
        }

        .use-card li {
          margin-bottom: 6px;
          font-size: 14px;
          color: #475569;
        }

        .legal-basis {
          margin-top: 40px;
        }

        .basis-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .basis-item {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .basis-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .basis-item h4 {
          font-size: 15px;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 2px 0;
        }

        .basis-item p {
          font-size: 13px;
          color: #64748b;
          margin: 0;
        }

        /* Data Sharing Styles */
        .sharing-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin: 30px 0;
        }

        .sharing-card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          border: 2px solid #e2e8f0;
        }

        .sharing-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 12px 0;
        }

        .sharing-card ul {
          padding-left: 20px;
          margin: 12px 0 0 0;
        }

        .sharing-card li {
          margin-bottom: 6px;
          font-size: 14px;
          color: #475569;
        }

        .data-retention {
          margin-top: 40px;
          padding: 24px;
          background: #f8fafc;
          border-radius: 16px;
        }

        .retention-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .retention-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .retention-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        /* Data Security Styles */
        .security-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }

        .security-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: #f8fafc;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .security-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        .security-item h3 {
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .security-item p {
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }

        .security-notice {
          background: #fffbeb;
          border-radius: 12px;
          padding: 24px;
          margin-top: 40px;
          border-left: 4px solid #F59E0B;
        }

        .notice-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .notice-header h4 {
          font-size: 18px;
          font-weight: 600;
          color: #92400e;
          margin: 0;
        }

        /* Your Rights Styles */
        .rights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }

        .right-card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          border: 2px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .right-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border-color: #3B82F6;
        }

        .right-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .right-card h3 {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 0;
        }

        .right-card p {
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }

        .rights-exercise {
          margin-top: 40px;
          padding: 30px;
          background: #f0f9ff;
          border-radius: 16px;
        }

        .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }

        .contact-method {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .method-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .contact-method h4 {
          font-size: 15px;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 2px 0;
        }

        .contact-method p {
          font-size: 14px;
          color: #475569;
          margin: 0;
        }

        .verification-note {
          margin-top: 20px;
          padding: 16px;
          background: white;
          border-radius: 8px;
          border-left: 4px solid #3B82F6;
        }

        /* Cookies Styles */
        .cookies-table {
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          margin: 30px 0;
        }

        .table-header {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          background: #f1f5f9;
          padding: 16px 20px;
          font-weight: 600;
          color: #0f172a;
        }

        .table-row {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          padding: 16px 20px;
          border-top: 1px solid #e2e8f0;
        }

        .table-col {
          padding: 4px 0;
        }

        .cookie-control {
          margin-top: 40px;
          padding: 24px;
          background: #f8fafc;
          border-radius: 16px;
        }

        .control-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }

        .control-option h4 {
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .cookie-notice {
          margin-top: 20px;
          padding: 16px;
          background: white;
          border-radius: 8px;
          border-left: 4px solid #8B5CF6;
        }

        /* Changes Styles */
        .update-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }

        .update-notice {
          margin-top: 30px;
          padding: 20px;
          background: #f0fdf4;
          border-radius: 12px;
          border-left: 4px solid #10B981;
        }

        /* Contact Us Styles */
        .contact-info-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin: 30px 0;
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

        .contact-details h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 0;
        }

        .contact-details p {
          font-size: 15px;
          color: #475569;
          margin: 0 0 4px 0;
        }

        .contact-sub {
          font-size: 13px !important;
          color: #64748b !important;
        }

        .data-protection {
          margin-top: 40px;
          padding: 24px;
          background: #f8fafc;
          border-radius: 16px;
        }

        .dpo-info {
          display: flex;
          gap: 20px;
          align-items: center;
          margin-top: 16px;
        }

        .dpo-icon {
          font-size: 40px;
          flex-shrink: 0;
        }

        /* Footer */
        .privacy-footer {
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
          
          .policy-main {
            padding: 40px;
          }
          
          .hero-title {
            font-size: 48px;
          }
        }

        @media (max-width: 768px) {
          .privacy-hero {
            padding: 60px 0;
          }
          
          .hero-title {
            font-size: 40px;
          }
          
          .hero-subtitle {
            font-size: 18px;
          }
          
          .policy-main {
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
          
          .policy-main {
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
          
          .use-cards,
          .sharing-cards,
          .contact-info-cards {
            grid-template-columns: 1fr;
          }
          
          .info-grid,
          .basis-grid,
          .security-grid,
          .rights-grid,
          .contact-methods,
          .update-methods,
          .control-options {
            grid-template-columns: 1fr;
          }
          
          .table-header,
          .table-row {
            grid-template-columns: 1fr;
            gap: 8px;
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

export default PrivacyPolicy;