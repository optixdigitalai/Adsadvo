import React from "react";
import { motion } from "framer-motion";

const FlipkartDropshippingPage = () => {
  return (
    <div style={styles.container}>
      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Hero Section */}
        <section style={styles.heroSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.heroContent}
          >
            <h1 style={styles.heroTitle}>Start Your <span style={styles.highlight}>Flipkart</span> Dropshipping Business</h1>
            <p style={styles.heroSubtitle}>Launch and scale your online store on India's second-largest e-commerce marketplace</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={styles.heroButton}
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" style={styles.section}>
          <h2 style={styles.sectionTitle}>Why Choose Us for Flipkart Dropshipping</h2>
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={styles.featureCard}
              >
                <div style={styles.featureIcon}>{feature.icon}</div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How To Start Section */}
        <section id="howto" style={styles.section}>
          <h2 style={styles.sectionTitle}>How to Start Your Flipkart Dropshipping Business</h2>
          <div style={styles.stepsContainer}>
            {steps.map((step, index) => (
              <div key={index} style={styles.stepCard}>
                <div style={styles.stepNumber}>{index + 1}</div>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section - Flipkart INR Pricing */}
        <section id="pricing" style={styles.section}>
          <h2 style={styles.sectionTitle}>Flipkart Dropshipping Plans</h2>
          <div style={styles.pricingContainer}>
            <motion.div
              whileHover={{ y: -10 }}
              style={styles.pricingCard}
            >
              <div style={styles.pricingHeader}>
                <h3 style={styles.pricingTitle}>Basic Plan</h3>
                <div style={styles.pricingPrice}>
                  <span style={styles.price}>₹12,999</span>
                  <span style={styles.period}>/Year</span>
                </div>
              </div>
              <ul style={styles.pricingFeatures}>
                <li style={styles.pricingFeature}>Up to 50 products on Flipkart</li>
                <li style={styles.pricingFeature}>Flipkart Seller Hub integration</li>
                <li style={styles.pricingFeature}>Basic listing creation tools</li>
                <li style={styles.pricingFeature}>Email support (9 AM - 6 PM)</li>
                <li style={styles.pricingFeature}>Basic order management</li>
              </ul>
              <button style={styles.pricingButton}>Get Started</button>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              style={{...styles.pricingCard, ...styles.popularCard}}
            >
              <div style={styles.popularBadge}>Most Popular</div>
              <div style={styles.pricingHeader}>
                <h3 style={styles.pricingTitle}>Advanced Plan</h3>
                <div style={styles.pricingPrice}>
                  <span style={styles.price}>₹31,999</span>
                  <span style={styles.period}>/Year</span>
                </div>
              </div>
              <ul style={styles.pricingFeatures}>
                <li style={styles.pricingFeature}>Up to 500 products on Flipkart</li>
                <li style={styles.pricingFeature}>Advanced Flipkart tools suite</li>
                <li style={styles.pricingFeature}>Automated inventory management</li>
                <li style={styles.pricingFeature}>Priority phone & email support</li>
                <li style={styles.pricingFeature}>Bulk order processing</li>
                <li style={styles.pricingFeature}>Flipkart ads management</li>
              </ul>
              <button style={styles.popularButton}>Get Started</button>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              style={styles.pricingCard}
            >
              <div style={styles.pricingHeader}>
                <h3 style={styles.pricingTitle}>Pro Plan</h3>
                <div style={styles.pricingPrice}>
                  <span style={styles.price}>₹64,999</span>
                  <span style={styles.period}>/Year</span>
                </div>
              </div>
              <ul style={styles.pricingFeatures}>
                <li style={styles.pricingFeature}>Unlimited products on Flipkart</li>
                <li style={styles.pricingFeature}>Advanced analytics dashboard</li>
                <li style={styles.pricingFeature}>Dedicated account manager</li>
                <li style={styles.pricingFeature}>24/7 priority support</li>
                <li style={styles.pricingFeature}>Custom API integration</li>
                <li style={styles.pricingFeature}>Multi-warehouse management</li>
                <li style={styles.pricingFeature}>Flipkart Plus optimization</li>
              </ul>
              <button style={styles.pricingButton}>Contact Sales</button>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" style={styles.section}>
          <h2 style={styles.sectionTitle}>Benefits of Flipkart Dropshipping</h2>
          <div style={styles.benefitsContainer}>
            <div style={styles.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <div key={index} style={styles.benefitCard}>
                  <div style={styles.benefitIcon}>{benefit.icon}</div>
                  <h3 style={styles.benefitTitle}>{benefit.title}</h3>
                  <p style={styles.benefitDescription}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={styles.section}>
          <div style={styles.contactContainer}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={styles.contactCard}
            >
              <h2 style={styles.contactTitle}>Start Your Flipkart Journey</h2>
              <p style={styles.contactSubtitle}>Fill out the form below and our experts will guide you through the setup process</p>

              <form style={styles.contactForm}>
                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Full Name</label>
                    <input
                      style={styles.formInput}
                      placeholder="Enter your full name"
                      type="text"
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Phone Number</label>
                    <input
                      style={styles.formInput}
                      placeholder="+91 98765 43210"
                      type="tel"
                    />
                  </div>
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Email Address</label>
                  <input
                    style={styles.formInput}
                    placeholder="business@example.com"
                    type="email"
                  />
                </div>
                
                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Business Type</label>
                    <select style={styles.formInput}>
                      <option value="">Select business type</option>
                      <option value="individual">Individual</option>
                      <option value="proprietorship">Proprietorship</option>
                      <option value="partnership">Partnership</option>
                      <option value="llp">LLP</option>
                      <option value="pvt-ltd">Private Limited</option>
                    </select>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Expected Monthly Sales</label>
                    <select style={styles.formInput}>
                      <option value="">Select expected sales</option>
                      <option value="0-1">₹0 - ₹1 Lakh</option>
                      <option value="1-5">₹1 - ₹5 Lakh</option>
                      <option value="5-10">₹5 - ₹10 Lakh</option>
                      <option value="10+">₹10+ Lakh</option>
                    </select>
                  </div>
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Message</label>
                  <textarea
                    style={styles.formTextarea}
                    placeholder="Tell us about your business and goals..."
                    rows="5"
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  style={styles.submitButton}
                >
                  Get Started with Flipkart
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Data
const features = [
  { icon: "🛒", title: "Flipkart Seller Hub", description: "Complete integration with Flipkart Seller Hub for seamless management" },
  { icon: "📦", title: "Zero Inventory", description: "No need to stock products. Suppliers ship directly to customers" },
  { icon: "🚚", title: "Fulfillment Network", description: "Access to Flipkart's extensive fulfillment centers across India" },
  { icon: "📊", title: "Advanced Analytics", description: "Real-time insights into your Flipkart sales, traffic, and performance" },
  { icon: "💰", title: "Low Commission", description: "Competitive commission rates compared to other marketplaces" },
  { icon: "🎯", title: "Category Expertise", description: "Specialized tools for popular Flipkart categories like electronics, fashion, home" }
];

const steps = [
  { title: "Create Flipkart Seller Account", description: "We help you register and verify your Flipkart seller account" },
  { title: "Choose Products", description: "Select from thousands of profitable products in our Flipkart-optimized catalog" },
  { title: "Import Listings", description: "Use our tools to import product listings directly to your Flipkart store" },
  { title: "Start Selling", description: "When customers buy, we handle fulfillment through our supplier network" }
];

const benefits = [
  { icon: "🏪", title: "135+ Million Customers", description: "Access to Flipkart's massive customer base across India" },
  { icon: "🚀", title: "Fast Delivery", description: "Leverage Flipkart's logistics for quick delivery with Flipkart Plus" },
  { icon: "🛡️", title: "Payment Protection", description: "Secure payments with Flipkart's escrow system" },
  { icon: "📱", title: "Mobile App", description: "Manage your business on-the-go with Flipkart Seller App" },
  { icon: "🎪", title: "Big Billion Days", description: "Participate in Flipkart's biggest sales events for massive revenue" },
  { icon: "💼", title: "Business Tools", description: "Access to Flipkart's business insights and growth tools" }
];

// Styles
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f8fafc",
  },
  
  // Main Content Styles
  mainContent: {
    flex: "1",
  },
  
  // Hero Section Styles
  heroSection: {
    padding: "80px 20px",
    background: "linear-gradient(135deg, #2874f0 0%, #1a5dc1 100%)",
    textAlign: "center",
    color: "#ffffff",
  },
  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  heroTitle: {
    fontSize: "56px",
    fontWeight: "900",
    marginBottom: "20px",
    lineHeight: "1.2",
  },
  highlight: {
    color: "#ff9f00",
  },
  heroSubtitle: {
    fontSize: "20px",
    color: "#e3f2fd",
    marginBottom: "40px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  heroButton: {
    backgroundColor: "#ff9f00",
    color: "#000000",
    border: "none",
    padding: "18px 40px",
    borderRadius: "12px",
    fontWeight: "800",
    fontSize: "18px",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(255, 159, 0, 0.3)",
  },
  
  // Section Styles
  section: {
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "42px",
    fontWeight: "900",
    textAlign: "center",
    color: "#0f172a",
    marginBottom: "60px",
  },
  
  // Features Styles
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  featureCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e2e8f0",
    transition: "transform 0.3s",
  },
  featureIcon: {
    fontSize: "40px",
    marginBottom: "20px",
  },
  featureTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "12px",
  },
  featureDescription: {
    color: "#64748b",
    lineHeight: "1.6",
  },
  
  // Steps Styles
  stepsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },
  stepCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e2e8f0",
    textAlign: "center",
  },
  stepNumber: {
    width: "60px",
    height: "60px",
    backgroundColor: "#2874f0",
    color: "#ffffff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "800",
    margin: "0 auto 20px",
  },
  stepTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "12px",
  },
  stepDescription: {
    color: "#64748b",
    lineHeight: "1.6",
  },
  
  // Pricing Styles
  pricingContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  pricingCard: {
    backgroundColor: "#ffffff",
    padding: "40px 30px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e2e8f0",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  popularCard: {
    border: "2px solid #2874f0",
    transform: "scale(1.05)",
  },
  popularBadge: {
    position: "absolute",
    top: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#2874f0",
    color: "#ffffff",
    padding: "6px 20px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "700",
  },
  pricingHeader: {
    textAlign: "center",
    marginBottom: "30px",
  },
  pricingTitle: {
    fontSize: "28px",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "15px",
  },
  pricingPrice: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    gap: "5px",
  },
  price: {
    fontSize: "48px",
    fontWeight: "900",
    color: "#0f172a",
  },
  period: {
    fontSize: "18px",
    color: "#64748b",
  },
  pricingFeatures: {
    listStyle: "none",
    padding: "0",
    marginBottom: "30px",
    flex: "1",
  },
  pricingFeature: {
    padding: "12px 0",
    color: "#475569",
    borderBottom: "1px solid #e2e8f0",
    display: "flex",
    alignItems: "center",
  },
  pricingButton: {
    backgroundColor: "#0f172a",
    color: "#ffffff",
    border: "none",
    padding: "16px",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  popularButton: {
    backgroundColor: "#2874f0",
    color: "#ffffff",
    border: "none",
    padding: "16px",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(40, 116, 240, 0.3)",
    transition: "all 0.3s",
  },
  
  // Benefits Styles
  benefitsContainer: {
    backgroundColor: "#ffffff",
    padding: "50px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
  },
  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  benefitCard: {
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    textAlign: "center",
  },
  benefitIcon: {
    fontSize: "40px",
    marginBottom: "20px",
  },
  benefitTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "10px",
  },
  benefitDescription: {
    color: "#64748b",
    lineHeight: "1.6",
  },
  
  // Contact Styles
  contactContainer: {
    maxWidth: "800px",
    margin: "auto",
  },
  contactCard: {
    background: "#fff",
    padding: "50px",
    borderRadius: "32px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.05)",
    border: "1px solid #e2e8f0",
  },
  contactTitle: {
    fontSize: "42px",
    fontWeight: "900",
    textAlign: "center",
    marginBottom: "10px",
    color: "#0f172a",
  },
  contactSubtitle: {
    textAlign: "center",
    color: "#64748b",
    marginBottom: "40px",
    fontSize: "18px",
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  formLabel: {
    fontWeight: "600",
    color: "#475569",
  },
  formInput: {
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    fontSize: "16px",
    background: "#f8fafc",
    outline: "none",
    transition: "border 0.3s",
  },
  formTextarea: {
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    fontSize: "16px",
    background: "#f8fafc",
    minHeight: "150px",
    resize: "vertical",
    outline: "none",
    transition: "border 0.3s",
  },
  submitButton: {
    background: "#2874f0",
    color: "#fff",
    border: "none",
    padding: "18px",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "800",
    marginTop: "10px",
    boxShadow: "0 10px 20px rgba(40, 116, 240, 0.2)",
    cursor: "pointer",
  },
};

export default FlipkartDropshippingPage;