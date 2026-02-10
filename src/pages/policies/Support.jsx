import React, { useState, useEffect } from "react";

const Support = () => {
  const [activeTab, setActiveTab] = useState("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general",
    priority: "normal"
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [trackingEmail, setTrackingEmail] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");

  useEffect(() => {
    // Simulate live chat connection
    const welcomeMessage = {
      id: 1,
      text: "Hello! I'm your support assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChatMessages([welcomeMessage]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newTicketId = `TKT-${Date.now().toString().slice(-6)}`;
    console.log("Form submitted:", { ...formData, ticketId: newTicketId });
    
    alert(`Thank you! Your support request has been submitted. Your ticket ID is: ${newTicketId}`);
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      category: "general",
      priority: "normal"
    });
    setIsSubmitting(false);
    setActiveTab("status");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckStatus = () => {
    if (!ticketId.trim() || !trackingEmail.trim()) {
      alert("Please enter both ticket number and email address");
      return;
    }
    alert(`Checking status for ticket: ${ticketId}\nA status update has been sent to ${trackingEmail}`);
    setTicketId("");
    setTrackingEmail("");
  };

  const handleSendChatMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = {
      id: chatMessages.length + 1,
      text: chatInput,
      isBot: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, userMessage]);
    setChatInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I understand your concern. Let me check that for you.",
        "Thanks for sharing that information. Our team will review your request shortly.",
        "I can help you with that! Is there anything specific you'd like to know?",
        "For immediate assistance, you can also call our support line at +91 98765 43210."
      ];
      
      const botMessage = {
        id: chatMessages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        isBot: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setChatMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleCategoryClick = (categoryId) => {
    setFormData(prev => ({ ...prev, category: categoryId }));
    document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Average delivery is 5 days, with maximum delivery time of 7 days for all orders. You'll receive tracking information as soon as your order ships.",
      category: "shipping"
    },
    {
      question: "What is your refund policy?",
      answer: "Refunds are reviewed case-by-case within 30 days of purchase. Service fees are generally non-refundable once work has begun. Digital products may have different refund terms.",
      category: "refund"
    },
    {
      question: "How do I track my order?",
      answer: "You'll receive tracking information via email once your order ships. You can also track from your account dashboard or use the 'Check Status' tab above.",
      category: "order"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), UPI, net banking, PayPal, and Google Pay. All transactions are secured with 256-bit SSL encryption.",
      category: "payment"
    },
    {
      question: "How can I contact customer support?",
      answer: "Use the contact form, email support@adsadvo.com, call +91 98765 43210 (9 AM - 9 PM IST), or use our 24/7 live chat. Response time is typically under 2 hours.",
      category: "contact"
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we primarily serve India with free shipping on orders over ₹2000. International shipping is available for select products with additional charges.",
      category: "shipping"
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "Orders can be modified or cancelled within 1 hour of placement. After that, please contact support immediately. Once shipped, cancellations may not be possible.",
      category: "order"
    },
    {
      question: "Are my payment details secure?",
      answer: "Yes! We use industry-standard encryption and never store your full payment details on our servers. We're PCI-DSS compliant and use secure payment gateways.",
      category: "payment"
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const supportCategories = [
    { id: "general", label: "General Support", icon: "💬", color: "#3B82F6" },
    { id: "technical", label: "Technical Issues", icon: "🔧", color: "#EF4444" },
    { id: "billing", label: "Billing & Payments", icon: "💰", color: "#10B981" },
    { id: "shipping", label: "Shipping & Delivery", icon: "🚚", color: "#F59E0B" },
    { id: "account", label: "Account Issues", icon: "👤", color: "#8B5CF6" },
    { id: "returns", label: "Returns & Refunds", icon: "🔄", color: "#EC4899" }
  ];

  const priorityOptions = [
    { id: "low", label: "Low", color: "#10B981" },
    { id: "normal", label: "Normal", color: "#3B82F6" },
    { id: "high", label: "High", color: "#F59E0B" },
    { id: "urgent", label: "Urgent", color: "#EF4444" }
  ];

  const resources = [
    {
      title: "Getting Started Guide",
      description: "Learn how to make the most of our services",
      icon: "📖",
      link: "#",
      color: "#3B82F6"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for all features",
      icon: "🎥",
      link: "#",
      color: "#EF4444"
    },
    {
      title: "Technical Documentation",
      description: "Complete API and technical documentation",
      icon: "📋",
      link: "#",
      color: "#10B981"
    },
    {
      title: "Release Notes",
      description: "Latest updates and service announcements",
      icon: "📢",
      link: "#",
      color: "#F59E0B"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and experts",
      icon: "👥",
      link: "#",
      color: "#8B5CF6"
    },
    {
      title: "Mobile App Guide",
      description: "Guide for using our mobile application",
      icon: "📱",
      link: "#",
      color: "#EC4899"
    },
    {
      title: "Troubleshooting Guide",
      description: "Common issues and their solutions",
      icon: "🔍",
      link: "#",
      color: "#6366F1"
    },
    {
      title: "Security & Privacy",
      description: "Learn about our security measures",
      icon: "🔒",
      link: "#",
      color: "#14B8A6"
    }
  ];

  return (
    <div className="support-page">
      {/* Hero Section */}
      <section className="support-hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge">
              <span>24/7 SUPPORT CENTER</span>
            </div>
            <h1 className="hero-title">How Can We Help You Today?</h1>
            <p className="hero-subtitle">
              Get instant answers, submit support tickets, or connect with our team directly. 
              We're here to help you succeed.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
              <div className="stat">
                <div className="stat-number">2h</div>
                <div className="stat-label">Avg. Response Time</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfaction Rate</div>
              </div>
              <div className="stat">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Issues Resolved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Navigation */}
      <section className="support-nav">
        <div className="container">
          <div className="nav-tabs">
            <button
              className={`nav-tab ${activeTab === "contact" ? "active" : ""}`}
              onClick={() => setActiveTab("contact")}
              id="contact"
            >
              <span className="tab-icon">📧</span>
              Contact Support
              <span className="tab-badge">Quick Response</span>
            </button>
            <button
              className={`nav-tab ${activeTab === "faq" ? "active" : ""}`}
              onClick={() => setActiveTab("faq")}
            >
              <span className="tab-icon">❓</span>
              FAQ
              <span className="tab-badge">Instant Answers</span>
            </button>
            <button
              className={`nav-tab ${activeTab === "resources" ? "active" : ""}`}
              onClick={() => setActiveTab("resources")}
            >
              <span className="tab-icon">📚</span>
              Resources
              <span className="tab-badge">Self-Help</span>
            </button>
            <button
              className={`nav-tab ${activeTab === "status" ? "active" : ""}`}
              onClick={() => setActiveTab("status")}
            >
              <span className="tab-icon">📊</span>
              Check Status
              <span className="tab-badge">Track Tickets</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="support-content">
        <div className="container">
          {/* Contact Support Tab */}
          {activeTab === "contact" && (
            <div className="tab-content">
              <div className="contact-grid">
                {/* Contact Form */}
                <div className="contact-form-card">
                  <div className="card-header">
                    <div className="header-icon">✉️</div>
                    <div>
                      <h2>Send us a Message</h2>
                      <p>We'll get back to you within 2 hours • Average response time: 47 min</p>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit} className="support-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">
                          Full Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="email">
                          Email Address <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="category">
                          Support Category <span className="required">*</span>
                        </label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          required
                        >
                          {supportCategories.map(category => (
                            <option key={category.id} value={category.id}>
                              {category.icon} {category.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="priority">
                          Priority Level <span className="required">*</span>
                        </label>
                        <select
                          id="priority"
                          name="priority"
                          value={formData.priority}
                          onChange={handleChange}
                          required
                        >
                          {priorityOptions.map(option => (
                            <option key={option.id} value={option.id}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="subject">
                        Subject <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Brief description of your issue"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">
                        Message <span className="required">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your issue in detail. Include relevant order numbers, screenshots, or error messages if applicable..."
                        rows="6"
                        required
                      ></textarea>
                      <div className="char-count">
                        {formData.message.length}/2000 characters
                      </div>
                    </div>

                    <div className="form-attachments">
                      <label className="attachment-label">
                        <span className="attachment-icon">📎</span>
                        Attach Files (Optional)
                        <input type="file" multiple className="attachment-input" />
                      </label>
                      <span className="attachment-hint">Max 10MB • Images, PDF, DOC</span>
                    </div>
                    
                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                      <span className="btn-icon">{isSubmitting ? "⏳" : "✉️"}</span>
                      {isSubmitting ? "Submitting..." : "Send Message"}
                      <span className="btn-badge">2h response</span>
                    </button>
                  </form>
                </div>

                {/* Contact Methods */}
                <div className="contact-methods-card">
                  <div className="card-header">
                    <div className="header-icon">📞</div>
                    <div>
                      <h2>Other Ways to Reach Us</h2>
                      <p>Choose the method that works best for you</p>
                    </div>
                  </div>
                  
                  <div className="contact-methods">
                    <div className="contact-method">
                      <div className="method-icon" style={{ background: '#3B82F6' }}>📧</div>
                      <div className="method-content">
                        <h3>Email Support</h3>
                        <p className="method-detail">support@adsadvo.com</p>
                        <div className="method-meta">
                          <span className="method-badge">Response within 2h</span>
                          <span className="method-badge">24/7 Available</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="contact-method">
                      <div className="method-icon" style={{ background: '#10B981' }}>📞</div>
                      <div className="method-content">
                        <h3>Phone Support</h3>
                        <p className="method-detail">+91 98765 43210</p>
                        <div className="method-meta">
                          <span className="method-badge">Mon-Sun, 9 AM - 9 PM IST</span>
                          <span className="method-badge">Direct Assistance</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="contact-method">
                      <div className="method-icon" style={{ background: '#8B5CF6' }}>💬</div>
                      <div className="method-content">
                        <h3>Live Chat</h3>
                        <p className="method-detail">Available 24/7</p>
                        <div className="method-meta">
                          <span className="method-badge">Instant Response</span>
                          <span className="method-badge">Click chat icon</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="contact-method">
                      <div className="method-icon" style={{ background: '#F59E0B' }}>📍</div>
                      <div className="method-content">
                        <h3>Office Address</h3>
                        <p className="method-detail">123 Business Street</p>
                        <p className="method-detail">New Delhi, India 110001</p>
                        <div className="method-meta">
                          <span className="method-badge">By Appointment Only</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="emergency-note">
                    <div className="note-icon">🚨</div>
                    <div>
                      <h4>Urgent Issues?</h4>
                      <p>For critical issues affecting your business, please call or use live chat for immediate assistance.</p>
                    </div>
                  </div>
                </div>

                {/* Support Categories */}
                <div className="categories-card">
                  <div className="card-header">
                    <div className="header-icon">🏷️</div>
                    <div>
                      <h2>Support Categories</h2>
                      <p>Select the category that best fits your issue</p>
                    </div>
                  </div>
                  
                  <div className="categories-grid">
                    {supportCategories.map(category => (
                      <div 
                        key={category.id} 
                        className={`category-item ${formData.category === category.id ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(category.id)}
                      >
                        <div className="category-icon" style={{ background: category.color }}>
                          {category.icon}
                        </div>
                        <h3>{category.label}</h3>
                        <p className="category-desc">Get help with {category.label.toLowerCase()} issues</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FAQ Tab */}
          {activeTab === "faq" && (
            <div className="tab-content">
              <div className="faq-header">
                <div className="faq-header-icon">❓</div>
                <h2>Frequently Asked Questions</h2>
                <p>Find quick answers to common questions. Can't find what you need? <button onClick={() => setActiveTab("contact")}>Contact Support</button></p>
              </div>
              
              <div className="faq-search">
                <div className="search-wrapper">
                  <span className="search-icon">🔍</span>
                  <input
                    type="text"
                    placeholder="Search for questions or issues..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button className="clear-search" onClick={() => setSearchQuery("")}>
                      ✕
                    </button>
                  )}
                </div>
                <div className="search-stats">
                  {searchQuery ? (
                    <span>Found {filteredFaqs.length} results for "{searchQuery}"</span>
                  ) : (
                    <span>{faqs.length} frequently asked questions</span>
                  )}
                </div>
              </div>

              {searchQuery && filteredFaqs.length === 0 ? (
                <div className="no-results">
                  <div className="no-results-icon">🔍</div>
                  <h3>No results found</h3>
                  <p>Try different keywords or contact our support team for help.</p>
                  <button 
                    className="contact-faq-btn"
                    onClick={() => setActiveTab("contact")}
                  >
                    Contact Support
                  </button>
                </div>
              ) : (
                <>
                  <div className="faq-grid">
                    {(searchQuery ? filteredFaqs : faqs).map((faq, index) => (
                      <div 
                        key={index} 
                        className={`faq-item ${expandedFaq === index ? 'expanded' : ''}`}
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      >
                        <div className="faq-question">
                          <div className="question-icon">❓</div>
                          <div className="question-content">
                            <h3>{faq.question}</h3>
                            <div className="question-meta">
                              <span className={`faq-category ${faq.category}`}>{faq.category}</span>
                              <span className="faq-time">1 min read</span>
                            </div>
                          </div>
                          <div className="expand-icon">
                            {expandedFaq === index ? '▲' : '▼'}
                          </div>
                        </div>
                        {expandedFaq === index && (
                          <div className="faq-answer">
                            <p>{faq.answer}</p>
                            <div className="answer-actions">
                              <button className="action-btn">
                                <span>👍</span> Helpful
                              </button>
                              <button className="action-btn">
                                <span>👎</span> Not Helpful
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="faq-footer">
                    <div className="faq-stats">
                      <div className="stat">
                        <span className="stat-number">98%</span>
                        <span className="stat-label">Found their answer</span>
                      </div>
                      <div className="stat">
                        <span className="stat-number">2 min</span>
                        <span className="stat-label">Avg. read time</span>
                      </div>
                      <div className="stat">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Questions answered</span>
                      </div>
                    </div>
                    <p>Still need help? Our support team is ready to assist you.</p>
                    <button 
                      className="contact-faq-btn"
                      onClick={() => setActiveTab("contact")}
                    >
                      Contact Support
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Resources Tab */}
          {activeTab === "resources" && (
            <div className="tab-content">
              <div className="resources-header">
                <div className="resources-header-icon">📚</div>
                <h2>Helpful Resources & Guides</h2>
                <p>Everything you need to get the most out of our services</p>
              </div>
              
              <div className="resources-grid">
                {resources.map((resource, index) => (
                  <div key={index} className="resource-card">
                    <div className="resource-icon" style={{ background: resource.color }}>
                      {resource.icon}
                    </div>
                    <div className="resource-content">
                      <h3>{resource.title}</h3>
                      <p>{resource.description}</p>
                      <div className="resource-meta">
                        <span className="resource-type">Guide</span>
                        <span className="resource-time">5 min read</span>
                      </div>
                    </div>
                    <a href={resource.link} className="resource-link">
                      View →
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="resources-footer">
                <div className="resource-categories">
                  <h3>Browse by Category</h3>
                  <div className="categories-list">
                    <button className="category-tag">Getting Started</button>
                    <button className="category-tag">Tutorials</button>
                    <button className="category-tag">Troubleshooting</button>
                    <button className="category-tag">Best Practices</button>
                    <button className="category-tag">API Documentation</button>
                    <button className="category-tag">Security</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Check Status Tab */}
          {activeTab === "status" && (
            <div className="tab-content">
              <div className="status-header">
                <div className="status-header-icon">📊</div>
                <h2>Track Your Support Requests</h2>
                <p>Check the status of your tickets and get updates</p>
              </div>
              
              <div className="status-check">
                <div className="check-card">
                  <div className="check-header">
                    <div className="check-icon">🔍</div>
                    <div>
                      <h3>Track Support Ticket</h3>
                      <p>Enter your ticket number and email to check status</p>
                    </div>
                  </div>
                  
                  <div className="check-form">
                    <div className="form-group">
                      <label htmlFor="ticketId">
                        Ticket Number <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="ticketId"
                        placeholder="e.g., TKT-123456"
                        value={ticketId}
                        onChange={(e) => setTicketId(e.target.value)}
                      />
                      <div className="input-hint">Found in your confirmation email</div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="emailStatus">
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="emailStatus"
                        placeholder="Enter your email address"
                        value={trackingEmail}
                        onChange={(e) => setTrackingEmail(e.target.value)}
                      />
                      <div className="input-hint">The email used to submit the ticket</div>
                    </div>
                    
                    <button className="check-btn" onClick={handleCheckStatus}>
                      <span className="btn-icon">🔍</span>
                      Check Status
                    </button>
                  </div>
                </div>
                
                <div className="status-info">
                  <div className="info-card">
                    <div className="info-icon">📋</div>
                    <div className="info-content">
                      <h3>No Ticket Number?</h3>
                      <p>Check your email for the ticket confirmation or contact support to retrieve your ticket details.</p>
                      <button 
                        className="info-btn"
                        onClick={() => setActiveTab("contact")}
                      >
                        Contact Support
                      </button>
                    </div>
                  </div>
                  
                  <div className="status-stats">
                    <div className="stat-card">
                      <div className="stat-icon">⏳</div>
                      <div className="stat-value">47</div>
                      <div className="stat-label">Tickets in Progress</div>
                    </div>
                    
                    <div className="stat-card">
                      <div className="stat-icon">✅</div>
                      <div className="stat-value">128</div>
                      <div className="stat-label">Resolved Today</div>
                    </div>
                    
                    <div className="stat-card">
                      <div className="stat-icon">⏱️</div>
                      <div className="stat-value">2h</div>
                      <div className="stat-label">Avg. Resolution Time</div>
                    </div>
                  </div>

                  <div className="status-tips">
                    <h4>Quick Tips</h4>
                    <ul>
                      <li>📧 Check your spam folder for ticket confirmations</li>
                      <li>📱 Save your ticket number for future reference</li>
                      <li>💬 Use live chat for real-time updates</li>
                      <li>📊 Most tickets are resolved within 24 hours</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Chat Widget */}
      <div className={`chat-widget ${isChatOpen ? 'open' : ''}`}>
        <div className="chat-header" onClick={() => setIsChatOpen(!isChatOpen)}>
          <div className="chat-status">
            <span className="status-dot"></span>
            Live Chat
          </div>
          <div className="chat-close">{isChatOpen ? '×' : '💬'}</div>
        </div>
        
        {isChatOpen && (
          <div className="chat-body">
            <div className="chat-messages">
              {chatMessages.map(msg => (
                <div key={msg.id} className={`chat-message ${msg.isBot ? 'bot' : 'user'}`}>
                  <div className="message-content">
                    {msg.text}
                    <div className="message-time">{msg.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>
            <form className="chat-input-form" onSubmit={handleSendChatMessage}>
              <input
                type="text"
                placeholder="Type your message..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className="chat-input"
              />
              <button type="submit" className="chat-send-btn">
                Send
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="support-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Support Hours</h3>
              <p><strong>Regular Support:</strong> Monday - Sunday, 9 AM - 9 PM IST</p>
              <p><strong>Emergency Support:</strong> 24/7 via live chat and phone</p>
              <p><strong>Holiday Schedule:</strong> Limited support on major holidays</p>
            </div>
            
            <div className="footer-section">
              <h3>Quick Links</h3>
              <div className="footer-links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/refund">Refund Policy</a>
                <a href="/shipping">Shipping Policy</a>
                <a href="/security">Security</a>
                <a href="/contact">Contact Us</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3>Stay Connected</h3>
              <div className="footer-contact">
                <p><strong>Email:</strong> support@adsadvo.com</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>Address:</strong> 123 Business Street, New Delhi 110001</p>
              </div>
              <div className="footer-social">
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Facebook</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Adsadvo. All rights reserved. Made with ❤️ in India</p>
            <div className="footer-certs">
              <span className="cert-badge">🔒 SSL Secure</span>
              <span className="cert-badge">✅ PCI Compliant</span>
              <span className="cert-badge">⭐ Trusted Partner</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .support-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          color: #1a202c;
          background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .support-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 100px 0 80px;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .support-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%);
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .badge {
          display: inline-block;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          padding: 12px 24px;
          margin-bottom: 24px;
        }

        .badge span {
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 1.5px;
        }

        .hero-title {
          font-size: 56px;
          font-weight: 900;
          margin-bottom: 20px;
          line-height: 1.1;
          background: linear-gradient(135deg, #fff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 20px;
          color: #94a3b8;
          margin-bottom: 48px;
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 40px;
          font-weight: 900;
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
          line-height: 1;
        }

        .stat-label {
          font-size: 15px;
          color: #94a3b8;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        /* Support Navigation */
        .support-nav {
          background: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid #e2e8f0;
        }

        .nav-tabs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          margin: -20px 0 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .nav-tab {
          background: white;
          border: none;
          padding: 28px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 16px;
          font-weight: 600;
          color: #64748b;
          position: relative;
          overflow: hidden;
        }

        .nav-tab:hover {
          background: #f8fafc;
          color: #3B82F6;
          transform: translateY(-2px);
        }

        .nav-tab.active {
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          color: white;
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.2);
        }

        .nav-tab.active::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: white;
        }

        .tab-icon {
          font-size: 32px;
          transition: transform 0.3s ease;
        }

        .nav-tab:hover .tab-icon {
          transform: scale(1.1);
        }

        .tab-badge {
          font-size: 12px;
          padding: 4px 12px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          font-weight: 500;
          margin-top: 4px;
        }

        .nav-tab.active .tab-badge {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Main Content */
        .support-content {
          padding: 80px 0;
        }

        .tab-content {
          animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Contact Grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
        }

        .contact-form-card,
        .contact-methods-card,
        .categories-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-form-card:hover,
        .contact-methods-card:hover,
        .categories-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }

        .contact-form-card {
          grid-column: 1;
          grid-row: span 2;
        }

        .contact-methods-card {
          grid-column: 2;
          grid-row: 1;
        }

        .categories-card {
          grid-column: 2;
          grid-row: 2;
        }

        .card-header {
          padding: 32px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 16px;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }

        .header-icon {
          font-size: 40px;
          flex-shrink: 0;
        }

        .card-header h2 {
          font-size: 28px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 8px 0;
        }

        .card-header p {
          font-size: 15px;
          color: #64748b;
          margin: 0;
        }

        /* Support Form */
        .support-form {
          padding: 32px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          font-size: 15px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 10px;
        }

        .required {
          color: #ef4444;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 15px;
          color: #1a202c;
          background: white;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3B82F6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .char-count {
          text-align: right;
          font-size: 13px;
          color: #64748b;
          margin-top: 8px;
        }

        .form-attachments {
          margin: 24px 0;
          padding: 20px;
          background: #f8fafc;
          border: 2px dashed #e2e8f0;
          border-radius: 12px;
          text-align: center;
        }

        .attachment-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          font-weight: 600;
          color: #3B82F6;
        }

        .attachment-icon {
          font-size: 20px;
        }

        .attachment-input {
          display: none;
        }

        .attachment-hint {
          display: block;
          font-size: 13px;
          color: #64748b;
          margin-top: 8px;
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          color: white;
          border: none;
          padding: 20px;
          border-radius: 12px;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(59, 130, 246, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .submit-btn::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: translateX(-100%);
        }

        .submit-btn:hover::after {
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }

        .btn-icon {
          font-size: 20px;
        }

        .btn-badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          margin-left: 8px;
        }

        /* Contact Methods */
        .contact-methods {
          padding: 24px;
        }

        .contact-method {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 24px;
          background: #f8fafc;
          border-radius: 16px;
          margin-bottom: 16px;
          transition: transform 0.3s ease;
          border: 1px solid transparent;
        }

        .contact-method:hover {
          transform: translateX(4px);
          border-color: #e2e8f0;
          background: white;
        }

        .method-icon {
          font-size: 28px;
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          color: white;
        }

        .method-content h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 0;
        }

        .method-detail {
          font-size: 16px;
          color: #0f172a;
          font-weight: 500;
          margin: 0 0 4px 0;
        }

        .method-meta {
          display: flex;
          gap: 8px;
          margin-top: 12px;
        }

        .method-badge {
          font-size: 12px;
          padding: 4px 12px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          color: #64748b;
        }

        .emergency-note {
          margin: 24px;
          padding: 24px;
          background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
          border-radius: 16px;
          border-left: 6px solid #ef4444;
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .note-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .emergency-note h4 {
          font-size: 18px;
          font-weight: 700;
          color: #dc2626;
          margin: 0 0 8px 0;
        }

        .emergency-note p {
          font-size: 15px;
          color: #dc2626;
          margin: 0;
        }

        /* Categories */
        .categories-grid {
          padding: 24px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .category-item {
          padding: 24px;
          background: #f8fafc;
          border-radius: 16px;
          border: 2px solid #e2e8f0;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .category-item:hover,
        .category-item.active {
          transform: translateY(-4px);
          border-color: #3B82F6;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
          background: white;
        }

        .category-item.active {
          background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
          border-color: #3B82F6;
        }

        .category-icon {
          font-size: 40px;
          margin-bottom: 16px;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          color: white;
          margin: 0 auto 16px;
        }

        .category-item h3 {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 0;
        }

        .category-desc {
          font-size: 13px;
          color: #64748b;
          margin: 0;
        }

        /* FAQ Tab */
        .faq-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .faq-header-icon {
          font-size: 64px;
          margin-bottom: 20px;
        }

        .faq-header h2 {
          font-size: 40px;
          font-weight: 900;
          color: #0f172a;
          margin: 0 0 16px 0;
        }

        .faq-header p {
          font-size: 18px;
          color: #64748b;
          margin: 0;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .faq-header p button {
          background: none;
          border: none;
          color: #3B82F6;
          font-weight: 600;
          cursor: pointer;
          padding: 0;
          text-decoration: underline;
        }

        .faq-header p button:hover {
          color: #1d4ed8;
        }

        .faq-search {
          max-width: 800px;
          margin: 0 auto 48px;
        }

        .search-wrapper {
          position: relative;
          margin-bottom: 16px;
        }

        .search-icon {
          position: absolute;
          left: 24px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 20px;
          color: #64748b;
        }

        .search-input {
          width: 100%;
          padding: 20px 60px 20px 60px;
          border: 3px solid #e2e8f0;
          border-radius: 16px;
          font-size: 18px;
          transition: all 0.3s ease;
          background: white;
        }

        .search-input:focus {
          outline: none;
          border-color: #3B82F6;
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.15);
        }

        .clear-search {
          position: absolute;
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          font-size: 20px;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.2s ease;
        }

        .clear-search:hover {
          background: #f1f5f9;
        }

        .search-stats {
          text-align: center;
          color: #64748b;
          font-size: 14px;
        }

        .no-results {
          text-align: center;
          padding: 80px 20px;
        }

        .no-results-icon {
          font-size: 80px;
          margin-bottom: 24px;
          opacity: 0.5;
        }

        .no-results h3 {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 16px 0;
        }

        .no-results p {
          font-size: 16px;
          color: #64748b;
          margin: 0 0 32px 0;
          max-width: 400px;
          margin: 0 auto 32px;
        }

        .faq-grid {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
          border: 2px solid transparent;
        }

        .faq-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          border-color: #e2e8f0;
        }

        .faq-item.expanded {
          border-color: #3B82F6;
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.15);
        }

        .faq-question {
          padding: 28px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .question-icon {
          font-size: 24px;
          flex-shrink: 0;
          color: #3B82F6;
        }

        .question-content {
          flex: 1;
        }

        .faq-question h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 12px 0;
        }

        .question-meta {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .faq-category {
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .faq-category.shipping { background: #f0f9ff; color: #0369a1; }
        .faq-category.refund { background: #fef2f2; color: #dc2626; }
        .faq-category.order { background: #f0fdf4; color: #15803d; }
        .faq-category.payment { background: #faf5ff; color: #7c3aed; }
        .faq-category.contact { background: #eff6ff; color: #1d4ed8; }
        .faq-category.technical { background: #fefce8; color: #ca8a04; }

        .faq-time {
          font-size: 13px;
          color: #64748b;
        }

        .expand-icon {
          font-size: 14px;
          color: #64748b;
          transition: transform 0.3s ease;
        }

        .faq-item.expanded .expand-icon {
          transform: rotate(180deg);
        }

        .faq-answer {
          padding: 0 28px 28px 88px;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .faq-answer p {
          font-size: 16px;
          color: #475569;
          line-height: 1.7;
          margin: 0 0 24px 0;
        }

        .answer-actions {
          display: flex;
          gap: 12px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          color: #64748b;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .action-btn:hover {
          background: #f1f5f9;
        }

        .faq-footer {
          text-align: center;
          margin-top: 60px;
          padding: 40px;
          background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
          border-radius: 24px;
        }

        .faq-stats {
          display: flex;
          justify-content: center;
          gap: 48px;
          margin-bottom: 32px;
        }

        .faq-stats .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .faq-stats .stat-number {
          font-size: 36px;
          font-weight: 900;
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .faq-stats .stat-label {
          font-size: 14px;
          color: #64748b;
        }

        .faq-footer p {
          font-size: 18px;
          color: #64748b;
          margin: 0 0 24px 0;
        }

        .contact-faq-btn {
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          color: white;
          border: none;
          padding: 16px 40px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .contact-faq-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(59, 130, 246, 0.3);
        }

        /* Resources Tab */
        .resources-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .resources-header-icon {
          font-size: 64px;
          margin-bottom: 20px;
        }

        .resources-header h2 {
          font-size: 40px;
          font-weight: 900;
          color: #0f172a;
          margin: 0 0 16px 0;
        }

        .resources-header p {
          font-size: 18px;
          color: #64748b;
          margin: 0;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 24px;
          margin-bottom: 60px;
        }

        .resource-card {
          background: white;
          border-radius: 20px;
          padding: 32px;
          display: flex;
          gap: 24px;
          align-items: flex-start;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
        }

        .resource-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
          border-color: #e2e8f0;
        }

        .resource-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
        }

        .resource-icon {
          font-size: 48px;
          flex-shrink: 0;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          color: white;
        }

        .resource-content {
          flex: 1;
        }

        .resource-content h3 {
          font-size: 20px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 12px 0;
        }

        .resource-content p {
          font-size: 15px;
          color: #64748b;
          margin: 0 0 16px 0;
          line-height: 1.6;
        }

        .resource-meta {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .resource-type {
          font-size: 13px;
          padding: 4px 12px;
          background: #f1f5f9;
          border-radius: 20px;
          color: #64748b;
          font-weight: 500;
        }

        .resource-time {
          font-size: 13px;
          color: #94a3b8;
        }

        .resource-link {
          align-self: flex-end;
          color: #3B82F6;
          text-decoration: none;
          font-weight: 700;
          font-size: 15px;
          transition: all 0.2s ease;
          padding: 8px 0;
          display: inline-block;
        }

        .resource-link:hover {
          color: #1d4ed8;
          transform: translateX(4px);
        }

        .resources-footer {
          padding: 40px;
          background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
          border-radius: 24px;
        }

        .resource-categories h3 {
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 20px 0;
        }

        .categories-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .category-tag {
          padding: 12px 24px;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          color: #64748b;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .category-tag:hover {
          background: #3B82F6;
          color: white;
          border-color: #3B82F6;
        }

        /* Status Tab */
        .status-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .status-header-icon {
          font-size: 64px;
          margin-bottom: 20px;
        }

        .status-header h2 {
          font-size: 40px;
          font-weight: 900;
          color: #0f172a;
          margin: 0 0 16px 0;
        }

        .status-header p {
          font-size: 18px;
          color: #64748b;
          margin: 0;
        }

        .status-check {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .check-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }

        .check-header {
          padding: 32px;
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          color: white;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .check-header h3 {
          font-size: 24px;
          font-weight: 800;
          margin: 0 0 8px 0;
        }

        .check-header p {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .check-icon {
          font-size: 48px;
          flex-shrink: 0;
        }

        .check-form {
          padding: 32px;
        }

        .input-hint {
          font-size: 13px;
          color: #94a3b8;
          margin-top: 8px;
        }

        .check-btn {
          width: 100%;
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          color: white;
          border: none;
          padding: 20px;
          border-radius: 12px;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.3s ease;
          margin-top: 8px;
        }

        .check-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(59, 130, 246, 0.3);
        }

        .info-card {
          background: white;
          border-radius: 24px;
          padding: 32px;
          display: flex;
          gap: 24px;
          align-items: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          margin-bottom: 24px;
        }

        .info-icon {
          font-size: 48px;
          color: #FF6B35;
          flex-shrink: 0;
        }

        .info-content h3 {
          font-size: 20px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 12px 0;
        }

        .info-content p {
          font-size: 15px;
          color: #64748b;
          margin: 0 0 20px 0;
          line-height: 1.6;
        }

        .info-btn {
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .info-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        }

        .status-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .stat-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
        }

        .stat-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }

        .stat-value {
          font-size: 32px;
          font-weight: 900;
          color: #3B82F6;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
        }

        .status-tips {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border-radius: 20px;
          padding: 32px;
        }

        .status-tips h4 {
          font-size: 20px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 20px 0;
        }

        .status-tips ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .status-tips li {
          font-size: 15px;
          color: #475569;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .status-tips li:last-child {
          margin-bottom: 0;
        }

        /* Footer */
        .support-footer {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
          padding: 80px 0 40px;
          position: relative;
          overflow: hidden;
        }

        .support-footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px;
          margin-bottom: 60px;
          position: relative;
          z-index: 1;
        }

        .footer-section h3 {
          font-size: 20px;
          font-weight: 800;
          margin: 0 0 24px 0;
          color: #f8fafc;
        }

        .footer-section p {
          font-size: 15px;
          color: #94a3b8;
          margin: 0 0 12px 0;
          line-height: 1.6;
        }

        .footer-section strong {
          color: #cbd5e1;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 15px;
          transition: all 0.2s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          color: #3B82F6;
          transform: translateX(4px);
        }

        .footer-contact p {
          display: flex;
          gap: 8px;
          align-items: flex-start;
        }

        .footer-social {
          display: flex;
          gap: 20px;
          margin-top: 24px;
        }

        .social-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s ease;
        }

        .social-link:hover {
          color: #3B82F6;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 1;
        }

        .footer-bottom p {
          font-size: 15px;
          color: #94a3b8;
          margin: 0 0 20px 0;
        }

        .footer-certs {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cert-badge {
          font-size: 13px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          color: #cbd5e1;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Chat Widget */
        .chat-widget {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 400px;
          background: white;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(0);
        }

        .chat-widget.open {
          transform: translateY(0);
        }

        .chat-widget:not(.open) {
          height: 64px;
        }

        .chat-header {
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          color: white;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }

        .chat-status {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          font-size: 16px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #10B981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .chat-close {
          font-size: 24px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transition: background 0.2s ease;
        }

        .chat-close:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .chat-body {
          height: 500px;
          display: flex;
          flex-direction: column;
        }

        .chat-messages {
          flex: 1;
          padding: 24px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .chat-message {
          max-width: 80%;
          animation: messageSlide 0.3s ease;
        }

        @keyframes messageSlide {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .chat-message.bot {
          align-self: flex-start;
        }

        .chat-message.user {
          align-self: flex-end;
        }

        .message-content {
          padding: 16px 20px;
          border-radius: 20px;
          font-size: 15px;
          line-height: 1.5;
          position: relative;
        }

        .chat-message.bot .message-content {
          background: #f1f5f9;
          color: #1a202c;
          border-bottom-left-radius: 4px;
        }

        .chat-message.user .message-content {
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          color: white;
          border-bottom-right-radius: 4px;
        }

        .message-time {
          font-size: 11px;
          opacity: 0.7;
          margin-top: 4px;
          text-align: right;
        }

        .chat-input-form {
          padding: 20px 24px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          gap: 12px;
        }

        .chat-input {
          flex: 1;
          padding: 16px 20px;
          border: 2px solid #e2e8f0;
          border-radius: 20px;
          font-size: 15px;
          transition: all 0.2s ease;
        }

        .chat-input:focus {
          outline: none;
          border-color: #3B82F6;
        }

        .chat-send-btn {
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          color: white;
          border: none;
          padding: 16px 28px;
          border-radius: 20px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .chat-send-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-form-card,
          .contact-methods-card,
          .categories-card {
            grid-column: 1;
          }

          .contact-form-card {
            grid-row: 1;
          }

          .contact-methods-card {
            grid-row: 2;
          }

          .categories-card {
            grid-row: 3;
          }

          .resources-grid {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          }
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 48px;
          }

          .nav-tabs {
            grid-template-columns: repeat(2, 1fr);
          }

          .status-check {
            grid-template-columns: 1fr;
          }

          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }

          .chat-widget {
            width: 360px;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 36px;
          }

          .hero-subtitle {
            font-size: 18px;
          }

          .hero-stats {
            gap: 30px;
          }

          .stat-number {
            font-size: 32px;
          }

          .nav-tabs {
            grid-template-columns: 1fr;
            margin: 0;
            border-radius: 0;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .categories-grid {
            grid-template-columns: 1fr;
          }

          .faq-stats {
            flex-direction: column;
            gap: 24px;
          }

          .faq-answer {
            padding-left: 28px;
            padding-right: 28px;
          }

          .resources-grid {
            grid-template-columns: 1fr;
          }

          .status-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .chat-widget {
            width: calc(100% - 40px);
            right: 20px;
            left: 20px;
            bottom: 20px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 16px;
          }

          .support-hero {
            padding: 60px 0 40px;
          }

          .hero-title {
            font-size: 32px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .hero-stats {
            flex-direction: column;
            gap: 24px;
          }

          .card-header {
            padding: 24px;
          }

          .card-header h2 {
            font-size: 24px;
          }

          .support-form {
            padding: 24px;
          }

          .contact-method {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }

          .method-icon {
            width: 48px;
            height: 48px;
            font-size: 24px;
          }

          .method-meta {
            flex-direction: column;
            align-items: center;
          }

          .emergency-note {
            flex-direction: column;
            text-align: center;
          }

          .faq-header h2 {
            font-size: 32px;
          }

          .search-input {
            padding: 16px 20px 16px 50px;
          }

          .status-stats {
            grid-template-columns: 1fr;
          }

          .chat-messages {
            padding: 16px;
          }

          .chat-input-form {
            padding: 16px;
          }

          .chat-send-btn {
            padding: 16px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Support;