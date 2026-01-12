import React from "react";
import { motion } from "framer-motion";

const AmazonDropshippingPage = () => {
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
            <h1 style={styles.heroTitle}>Start Your Amazon <span style={styles.highlight}>Dropshipping</span> Journey</h1>
            <p style={styles.heroSubtitle}>Transform your e-commerce business with our comprehensive dropshipping solution</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={styles.heroButton}
            >
              Launch Your Store Now
            </motion.button>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" style={styles.section}>
          <h2 style={styles.sectionTitle}>Why Choose Us for Amazon Dropshipping</h2>
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
          <h2 style={styles.sectionTitle}>How to Start Your Amazon Dropshipping Business</h2>
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

        {/* Pricing Section - Updated to INR */}
        <section id="pricing" style={styles.section}>
          <h2 style={styles.sectionTitle}>Choose Your Perfect Plan</h2>
          <div style={styles.pricingContainer}>
            <motion.div
              whileHover={{ y: -10 }}
              style={styles.pricingCard}
            >
              <div style={styles.pricingHeader}>
                <h3 style={styles.pricingTitle}>Basic Plan</h3>
                <div style={styles.pricingPrice}>
                  <span style={styles.price}>₹16,499</span>
                  <span style={styles.period}>/Year</span>
                </div>
              </div>
              <ul style={styles.pricingFeatures}>
                <li style={styles.pricingFeature}>Up to 100 products</li>
                <li style={styles.pricingFeature}>Basic analytics</li>
                <li style={styles.pricingFeature}>Email support</li>
                <li style={styles.pricingFeature}>Inventory management</li>
              </ul>
              <button style={styles.pricingButton}>Get Started</button>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              style={{...styles.pricingCard, ...styles.popularCard}}
            >
              <div style={styles.popularBadge}>Most Popular</div>
              <div style={styles.pricingHeader}>
                <h3 style={styles.pricingTitle}>Pro Plan</h3>
                <div style={styles.pricingPrice}>
                  <span style={styles.price}>₹41,499</span>
                  <span style={styles.period}>/Year</span>
                </div>
              </div>
              <ul style={styles.pricingFeatures}>
                <li style={styles.pricingFeature}>Unlimited products</li>
                <li style={styles.pricingFeature}>Advanced analytics</li>
                <li style={styles.pricingFeature}>Priority support</li>
                <li style={styles.pricingFeature}>Automated inventory</li>
                <li style={styles.pricingFeature}>Market research tools</li>
              </ul>
              <button style={styles.popularButton}>Get Started</button>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              style={styles.pricingCard}
            >
              <div style={styles.pricingHeader}>
                <h3 style={styles.pricingTitle}>Enterprise</h3>
                <div style={styles.pricingPrice}>
                  <span style={styles.price}>₹82,999</span>
                  <span style={styles.period}>/Year</span>
                </div>
              </div>
              <ul style={styles.pricingFeatures}>
                <li style={styles.pricingFeature}>Custom solutions</li>
                <li style={styles.pricingFeature}>Dedicated account manager</li>
                <li style={styles.pricingFeature}>24/7 phone support</li>
                <li style={styles.pricingFeature}>API access</li>
                <li style={styles.pricingFeature}>Custom integrations</li>
              </ul>
              <button style={styles.pricingButton}>Contact Sales</button>
            </motion.div>
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
              <h2 style={styles.contactTitle}>Contact Us</h2>
              <p style={styles.contactSubtitle}>We're here to help you grow your business.</p>

              <form style={styles.contactForm}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Full Name</label>
                  <input
                    style={styles.formInput}
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Email Address</label>
                  <input
                    style={styles.formInput}
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Message</label>
                  <textarea
                    style={styles.formTextarea}
                    placeholder="How can we help you?"
                    rows="5"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  style={styles.submitButton}
                >
                  Send Message
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
  { icon: "📦", title: "Zero Inventory", description: "No need to stock products. We handle inventory management for you." },
  { icon: "🚀", title: "Fast Setup", description: "Get your Amazon store up and running in less than 24 hours." },
  { icon: "📊", title: "Advanced Analytics", description: "Real-time insights into your sales, profit margins, and performance." },
  { icon: "🛡️", title: "Risk-Free", description: "No upfront inventory costs. Pay only when you make a sale." },
  { icon: "🌍", title: "Global Suppliers", description: "Access to thousands of vetted suppliers worldwide." },
  { icon: "💼", title: "Automated Order Processing", description: "Orders are automatically forwarded to suppliers for fulfillment." }
];

const steps = [
  { title: "Create an Account", description: "Sign up for our platform and connect your Amazon seller account." },
  { title: "Choose Products", description: "Browse our catalog of high-demand, profitable products to sell." },
  { title: "Import to Amazon", description: "Use our tools to import product listings directly to your Amazon store." },
  { title: "Start Selling", description: "When customers buy, we handle fulfillment and shipping automatically." }
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
    background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
    textAlign: "center",
  },
  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  heroTitle: {
    fontSize: "56px",
    fontWeight: "900",
    color: "#0f172a",
    marginBottom: "20px",
    lineHeight: "1.2",
  },
  highlight: {
    color: "#ff7a18",
  },
  heroSubtitle: {
    fontSize: "20px",
    color: "#64748b",
    marginBottom: "40px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  heroButton: {
    backgroundColor: "#0f172a",
    color: "#ffffff",
    border: "none",
    padding: "18px 40px",
    borderRadius: "12px",
    fontWeight: "800",
    fontSize: "18px",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.15)",
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
    backgroundColor: "#ff7a18",
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
  
  // Pricing Styles - Updated for INR
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
    border: "2px solid #ff7a18",
    transform: "scale(1.05)",
  },
  popularBadge: {
    position: "absolute",
    top: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#ff7a18",
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
    backgroundColor: "#ff7a18",
    color: "#ffffff",
    border: "none",
    padding: "16px",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(255, 122, 24, 0.3)",
    transition: "all 0.3s",
  },
  
  // Contact Styles
  contactContainer: {
    maxWidth: "600px",
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
    background: "#ff7a18",
    color: "#fff",
    border: "none",
    padding: "18px",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "800",
    marginTop: "10px",
    boxShadow: "0 10px 20px rgba(255, 122, 24, 0.2)",
    cursor: "pointer",
  },
};

export default AmazonDropshippingPage;