import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    platform: "",
    businessType: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        platform: "",
        businessType: "",
        message: ""
      });
    }, 3000);
  };

  const platforms = [
    { id: "amazon", name: "Amazon Dropshipping", icon: "🅰" },
    { id: "flipkart", name: "Flipkart Dropshipping", icon: "🅵" },
    { id: "meesho", name: "Meesho Dropshipping", icon: "🅼" },
    { id: "ecommerce", name: "E-commerce Website", icon: "🌐" },
    { id: "multiple", name: "Multiple Platforms", icon: "📊" },
    { id: "consultation", name: "Business Consultation", icon: "💼" }
  ];

  const businessTypes = [
    "Individual / Freelancer",
    "Startup / Small Business",
    "Medium Business",
    "Enterprise",
    "Student / Learner",
    "Other"
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.heroContent}
        >
          <h1 style={styles.heroTitle}>Contact Our <span style={styles.highlight}>Dropshipping</span> Experts</h1>
          <p style={styles.heroSubtitle}>Get personalized guidance to start and scale your dropshipping business</p>
        </motion.div>
      </section>

      <main style={styles.mainContent}>
        <div style={styles.contentGrid}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={styles.formSection}
          >
            <div style={styles.formContainer}>
              <h2 style={styles.formTitle}>Send us a Message</h2>
              <p style={styles.formSubtitle}>Fill out the form below and we'll get back to you within 24 hours</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={styles.successMessage}
                >
                  <div style={styles.successIcon}>✓</div>
                  <h3 style={styles.successTitle}>Message Sent Successfully!</h3>
                  <p style={styles.successText}>Thank you for contacting us. Our team will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={styles.form}>
                  <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>
                        Full Name <span style={styles.required}>*</span>
                      </label>
                      <input
                        style={styles.formInput}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        type="text"
                        required
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>
                        Email Address <span style={styles.required}>*</span>
                      </label>
                      <input
                        style={styles.formInput}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        type="email"
                        required
                      />
                    </div>
                  </div>

                  <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>
                        Phone Number <span style={styles.required}>*</span>
                      </label>
                      <input
                        style={styles.formInput}
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        type="tel"
                        required
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>
                        Business Type <span style={styles.required}>*</span>
                      </label>
                      <select
                        style={styles.formInput}
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select business type</option>
                        {businessTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>
                      Interested In <span style={styles.required}>*</span>
                    </label>
                    <div style={styles.platformGrid}>
                      {platforms.map((platform) => (
                        <label
                          key={platform.id}
                          style={{
                            ...styles.platformOption,
                            borderColor: formData.platform === platform.id ? "#3b82f6" : "#e2e8f0",
                            backgroundColor: formData.platform === platform.id ? "#eff6ff" : "#ffffff"
                          }}
                        >
                          <input
                            type="radio"
                            name="platform"
                            value={platform.id}
                            checked={formData.platform === platform.id}
                            onChange={handleChange}
                            style={styles.radioInput}
                            required
                          />
                          <span style={styles.platformIcon}>{platform.icon}</span>
                          <span style={styles.platformName}>{platform.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>
                      Your Message <span style={styles.required}>*</span>
                    </label>
                    <textarea
                      style={styles.formTextarea}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business goals, challenges, and what you're looking to achieve..."
                      rows="6"
                      required
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.checkboxLabel}>
                      <input type="checkbox" required style={styles.checkbox} />
                      I agree to receive updates and marketing communications
                    </label>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    style={styles.submitButton}
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={styles.infoSection}
          >
            <div style={styles.infoContainer}>
              <h2 style={styles.infoTitle}>Get in Touch</h2>
              <p style={styles.infoSubtitle}>Multiple ways to connect with our team</p>

              <div style={styles.contactMethods}>
                <div style={styles.contactMethod}>
                  <div style={styles.methodIcon}>📧</div>
                  <div>
                    <h3 style={styles.methodTitle}>Email Us</h3>
                    <p style={styles.methodText}>support@dropshipmaster.com</p>
                    <p style={styles.methodText}>sales@dropshipmaster.com</p>
                  </div>
                </div>

                <div style={styles.contactMethod}>
                  <div style={styles.methodIcon}>📱</div>
                  <div>
                    <h3 style={styles.methodTitle}>Call Us</h3>
                    <p style={styles.methodText}>+91 1800 123 4567 (Toll-Free)</p>
                    <p style={styles.methodText}>+91 98765 43210 (WhatsApp)</p>
                  </div>
                </div>

                <div style={styles.contactMethod}>
                  <div style={styles.methodIcon}>🏢</div>
                  <div>
                    <h3 style={styles.methodTitle}>Visit Us</h3>
                    <p style={styles.methodText}>Dropship Master Solutions</p>
                    <p style={styles.methodText}>123 Business Park, Sector 15</p>
                    <p style={styles.methodText}>Gurgaon, Haryana 122001</p>
                  </div>
                </div>

                <div style={styles.contactMethod}>
                  <div style={styles.methodIcon}>🕒</div>
                  <div>
                    <h3 style={styles.methodTitle}>Business Hours</h3>
                    <p style={styles.methodText}>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p style={styles.methodText}>Saturday: 10:00 AM - 5:00 PM</p>
                    <p style={styles.methodText}>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Team Section */}
              <div style={styles.teamSection}>
                <h3 style={styles.teamTitle}>Our Support Team</h3>
                <div style={styles.teamGrid}>
                  {teamMembers.map((member, index) => (
                    <div key={index} style={styles.teamMember}>
                      <div style={styles.memberAvatar}>{member.avatar}</div>
                      <div style={styles.memberInfo}>
                        <h4 style={styles.memberName}>{member.name}</h4>
                        <p style={styles.memberRole}>{member.role}</p>
                        <p style={styles.memberExpertise}>{member.expertise}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div style={styles.faqSection}>
                <h3 style={styles.faqTitle}>Quick Questions?</h3>
                <div style={styles.faqList}>
                  {quickQuestions.map((question, index) => (
                    <div key={index} style={styles.faqItem}>
                      <span style={styles.faqIcon}>❓</span>
                      <span style={styles.faqText}>{question}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <section style={styles.ctaSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={styles.ctaCard}
          >
            <h2 style={styles.ctaTitle}>Ready to Start Your Dropshipping Journey?</h2>
            <p style={styles.ctaText}>Book a free 30-minute consultation with our experts</p>
            <div style={styles.ctaButtons}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={styles.ctaPrimaryButton}
              >
                Schedule Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={styles.ctaSecondaryButton}
              >
                Download Starter Guide
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

// Team Members Data
const teamMembers = [
  { avatar: "👨‍💼", name: "Rajesh Kumar", role: "Sales Director", expertise: "Amazon & Flipkart Expert" },
  { avatar: "👩‍💼", name: "Priya Sharma", role: "Support Manager", expertise: "Meesho & Social Commerce" },
  { avatar: "👨‍💻", name: "Amit Patel", role: "Technical Head", expertise: "E-commerce Development" },
  { avatar: "👩‍🎓", name: "Neha Gupta", role: "Business Consultant", expertise: "Startup Guidance" }
];

// Quick Questions Data
const quickQuestions = [
  "How quickly can I start selling?",
  "What documents are required?",
  "Is there any setup fee?",
  "Can I switch between platforms?",
  "Do you provide supplier contacts?"
];

// Styles
const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
  },
  
  // Hero Section
  heroSection: {
    padding: "80px 20px",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    textAlign: "center",
    color: "#ffffff",
  },
  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  heroTitle: {
    fontSize: "48px",
    fontWeight: "900",
    marginBottom: "20px",
    lineHeight: "1.2",
  },
  highlight: {
    color: "#3b82f6",
  },
  heroSubtitle: {
    fontSize: "20px",
    color: "#cbd5e1",
    maxWidth: "600px",
    margin: "0 auto",
  },
  
  // Main Content
  mainContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    margin: "80px 0",
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "1fr",
    },
  },
  
  // Form Section
  formSection: {
    flex: "1",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "24px",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e2e8f0",
  },
  formTitle: {
    fontSize: "32px",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "12px",
  },
  formSubtitle: {
    color: "#64748b",
    marginBottom: "32px",
    fontSize: "16px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  formLabel: {
    fontWeight: "600",
    color: "#475569",
    fontSize: "14px",
  },
  required: {
    color: "#ef4444",
  },
  formInput: {
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    fontSize: "16px",
    backgroundColor: "#f8fafc",
    outline: "none",
    transition: "all 0.3s",
    ":focus": {
      borderColor: "#3b82f6",
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
    },
  },
  
  // Platform Selection
  platformGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "12px",
    "@media (max-width: 640px)": {
      gridTemplateColumns: "1fr",
    },
  },
  platformOption: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "16px",
    borderRadius: "12px",
    border: "2px solid",
    cursor: "pointer",
    transition: "all 0.3s",
    ":hover": {
      borderColor: "#3b82f6",
      backgroundColor: "#eff6ff",
    },
  },
  radioInput: {
    display: "none",
  },
  platformIcon: {
    fontSize: "24px",
  },
  platformName: {
    fontWeight: "500",
    color: "#475569",
    fontSize: "14px",
  },
  
  // Textarea
  formTextarea: {
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    fontSize: "16px",
    backgroundColor: "#f8fafc",
    outline: "none",
    resize: "vertical",
    minHeight: "150px",
    transition: "all 0.3s",
    ":focus": {
      borderColor: "#3b82f6",
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
    },
  },
  
  // Checkbox
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#475569",
    fontSize: "14px",
    cursor: "pointer",
  },
  checkbox: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
  },
  
  // Submit Button
  submitButton: {
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    border: "none",
    padding: "18px",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.3s",
    ":hover": {
      backgroundColor: "#2563eb",
    },
  },
  
  // Success Message
  successMessage: {
    backgroundColor: "#dcfce7",
    border: "1px solid #86efac",
    borderRadius: "16px",
    padding: "40px",
    textAlign: "center",
  },
  successIcon: {
    fontSize: "48px",
    color: "#16a34a",
    marginBottom: "20px",
  },
  successTitle: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#166534",
    marginBottom: "12px",
  },
  successText: {
    color: "#15803d",
    lineHeight: "1.6",
  },
  
  // Info Section
  infoSection: {
    flex: "1",
  },
  infoContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  infoTitle: {
    fontSize: "32px",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "12px",
  },
  infoSubtitle: {
    color: "#64748b",
    fontSize: "16px",
  },
  
  // Contact Methods
  contactMethods: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  contactMethod: {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    padding: "24px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e2e8f0",
  },
  methodIcon: {
    fontSize: "32px",
    width: "60px",
    height: "60px",
    backgroundColor: "#eff6ff",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
  },
  methodTitle: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "8px",
  },
  methodText: {
    color: "#64748b",
    fontSize: "14px",
    lineHeight: "1.5",
  },
  
  // Team Section
  teamSection: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e2e8f0",
  },
  teamTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "20px",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    "@media (max-width: 640px)": {
      gridTemplateColumns: "1fr",
    },
  },
  teamMember: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "16px",
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
  },
  memberAvatar: {
    width: "50px",
    height: "50px",
    backgroundColor: "#dbeafe",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    flexShrink: "0",
  },
  memberInfo: {
    flex: "1",
  },
  memberName: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "4px",
  },
  memberRole: {
    fontSize: "14px",
    color: "#3b82f6",
    fontWeight: "600",
    marginBottom: "4px",
  },
  memberExpertise: {
    fontSize: "12px",
    color: "#64748b",
  },
  
  // FAQ Section
  faqSection: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e2e8f0",
  },
  faqTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "20px",
  },
  faqList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  faqItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    ":hover": {
      backgroundColor: "#eff6ff",
    },
  },
  faqIcon: {
    fontSize: "20px",
  },
  faqText: {
    color: "#475569",
    fontSize: "14px",
    fontWeight: "500",
  },
  
  // CTA Section
  ctaSection: {
    margin: "80px 0",
  },
  ctaCard: {
    backgroundColor: "#0f172a",
    padding: "60px",
    borderRadius: "24px",
    textAlign: "center",
    color: "#ffffff",
  },
  ctaTitle: {
    fontSize: "36px",
    fontWeight: "900",
    marginBottom: "16px",
  },
  ctaText: {
    fontSize: "18px",
    color: "#cbd5e1",
    marginBottom: "32px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  ctaButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
  },
  ctaPrimaryButton: {
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    border: "none",
    padding: "18px 32px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#2563eb",
    },
  },
  ctaSecondaryButton: {
    backgroundColor: "transparent",
    color: "#ffffff",
    border: "2px solid #3b82f6",
    padding: "18px 32px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "rgba(59, 130, 246, 0.1)",
    },
  },
};

export default ContactPage;