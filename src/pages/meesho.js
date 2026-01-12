import React from "react";
import { motion } from "framer-motion";

const MeeshoDropshippingPage = () => {
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
            <h1 style={styles.heroTitle}>Start Your <span style={styles.highlight}>Meesho</span> Dropshipping Business</h1>
            <p style={styles.heroSubtitle}>Join India's social commerce revolution with zero inventory investment on Meesho</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={styles.heroButton}
            >
              Start Selling on Meesho
            </motion.button>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" style={styles.section}>
          <h2 style={styles.sectionTitle}>Why Choose Meesho for Dropshipping</h2>
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
          <h2 style={styles.sectionTitle}>How to Start Selling on Meesho</h2>
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

        {/* Pricing Section - Meesho INR Pricing */}
        <section id="pricing" style={styles.section}>
          <h2 style={styles.sectionTitle}>Meesho Dropshipping Plans</h2>
          <div style={styles.pricingContainer}>
            <motion.div
              whileHover={{ y: -10 }}
              style={styles.pricingCard}
            >
              <div style={styles.pricingHeader}>
                <h3 style={styles.pricingTitle}>Reseller Plan</h3>
                <div style={styles.pricingPrice}>
                  <span style={styles.price}>₹8,999</span>
                  <span style={styles.period}>/Year</span>
                </div>
                <p style={styles.pricingSubtitle}>Perfect for beginners</p>
              </div>
              <ul style={styles.pricingFeatures}>
                <li style={styles.pricingFeature}>Up to 100 Meesho products</li>
                <li style={styles.pricingFeature}>Meesho supplier network access</li>
                <li style={styles.pricingFeature}>Basic WhatsApp order alerts</li>
                <li style={styles.pricingFeature}>Community forum support</li>
                <li style={styles.pricingFeature}>Basic analytics dashboard</li>
                <li style={styles.pricingFeature}>Social media sharing tools</li>
              </ul>
              <button style={styles.pricingButton}>Start Reselling</button>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              style={{...styles.pricingCard, ...styles.popularCard}}
            >
              <div style={styles.popularBadge}>Most Popular</div>
              <div style={styles.pricingHeader}>
                <h3 style={styles.pricingTitle}>Growth Plan</h3>
                <div style={styles.pricingPrice}>
                  <span style={styles.price}>₹24,999</span>
                  <span style={styles.period}>/Year</span>
                </div>
                <p style={styles.pricingSubtitle}>For growing businesses</p>
              </div>
              <ul style={styles.pricingFeatures}>
                <li style={styles.pricingFeature}>Up to 500 Meesho products</li>
                <li style={styles.pricingFeature}>Premium supplier catalog</li>
                <li style={styles.pricingFeature}>Advanced WhatsApp automation</li>
                <li style={styles.pricingFeature}>Priority phone & email support</li>
                <li style={styles.pricingFeature}>Advanced analytics & reports</li>
                <li style={styles.pricingFeature}>Bulk order processing</li>
                <li style={styles.pricingFeature}>Social commerce toolkit</li>
              </ul>
              <button style={styles.popularButton}>Choose Growth Plan</button>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              style={styles.pricingCard}
            >
              <div style={styles.pricingHeader}>
                <h3 style={styles.pricingTitle}>Scale Plan</h3>
                <div style={styles.pricingPrice}>
                  <span style={styles.price}>₹49,999</span>
                  <span style={styles.period}>/Year</span>
                </div>
                <p style={styles.pricingSubtitle}>For serious entrepreneurs</p>
              </div>
              <ul style={styles.pricingFeatures}>
                <li style={styles.pricingFeature}>Unlimited Meesho products</li>
                <li style={styles.pricingFeature}>Exclusive supplier partnerships</li>
                <li style={styles.pricingFeature}>Custom WhatsApp automation</li>
                <li style={styles.pricingFeature}>Dedicated account manager</li>
                <li style={styles.pricingFeature}>Custom analytics dashboard</li>
                <li style={styles.pricingFeature}>Multi-reseller team management</li>
                <li style={styles.pricingFeature}>Advanced marketing tools</li>
                <li style={styles.pricingFeature}>API access for automation</li>
              </ul>
              <button style={styles.pricingButton}>Contact for Scale</button>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" style={styles.section}>
          <h2 style={styles.sectionTitle}>Advantages of Meesho Dropshipping</h2>
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

        {/* Success Stories */}
        <section id="success" style={styles.section}>
          <h2 style={styles.sectionTitle}>Success Stories on Meesho</h2>
          <div style={styles.successContainer}>
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={styles.successCard}
              >
                <div style={styles.successContent}>
                  <p style={styles.successQuote}>"{story.quote}"</p>
                  <div style={styles.successAuthor}>
                    <div style={styles.successAuthorInfo}>
                      <h4 style={styles.successName}>{story.name}</h4>
                      <p style={styles.successLocation}>{story.location}</p>
                    </div>
                  </div>
                  <div style={styles.successStats}>
                    <div style={styles.successStat}>
                      <span style={styles.statValue}>{story.monthlySales}</span>
                      <span style={styles.statLabel}>Monthly Sales</span>
                    </div>
                    <div style={styles.successStat}>
                      <span style={styles.statValue}>{story.products}</span>
                      <span style={styles.statLabel}>Products</span>
                    </div>
                    <div style={styles.successStat}>
                      <span style={styles.statValue}>{story.resellers}</span>
                      <span style={styles.statLabel}>Resellers</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              <h2 style={styles.contactTitle}>Start Your Meesho Journey Today</h2>
              <p style={styles.contactSubtitle}>Join thousands of successful entrepreneurs selling on Meesho</p>

              <form style={styles.contactForm}>
                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Full Name</label>
                    <input
                      style={styles.formInput}
                      placeholder="Enter your name"
                      type="text"
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>WhatsApp Number</label>
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
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>
                
                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Social Media Experience</label>
                    <select style={styles.formInput}>
                      <option value="">Select experience level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Target Audience</label>
                    <select style={styles.formInput}>
                      <option value="">Select target audience</option>
                      <option value="women">Women's Fashion</option>
                      <option value="men">Men's Fashion</option>
                      <option value="home">Home & Kitchen</option>
                      <option value="beauty">Beauty & Personal Care</option>
                      <option value="electronics">Electronics</option>
                      <option value="kids">Kids & Baby Care</option>
                    </select>
                  </div>
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Business Goals</label>
                  <textarea
                    style={styles.formTextarea}
                    placeholder="Tell us about your business goals and target monthly income..."
                    rows="4"
                  />
                </div>
                
                <div style={styles.checkboxGroup}>
                  <input type="checkbox" id="whatsapp" style={styles.checkbox} />
                  <label htmlFor="whatsapp" style={styles.checkboxLabel}>
                    I want to receive order updates via WhatsApp
                  </label>
                </div>
                
                <div style={styles.checkboxGroup}>
                  <input type="checkbox" id="marketing" style={styles.checkbox} />
                  <label htmlFor="marketing" style={styles.checkboxLabel}>
                    I'm interested in social media marketing tools
                  </label>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  style={styles.submitButton}
                >
                  Start Selling on Meesho Now
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
  { icon: "👥", title: "Reseller Network", description: "Access to Meesho's vast network of resellers across India" },
  { icon: "💰", title: "Zero Commission", description: "No commission on sales - keep 100% of your profits" },
  { icon: "📱", title: "WhatsApp Integration", description: "Automated order alerts and updates via WhatsApp" },
  { icon: "🚚", title: "Free Shipping", description: "Free shipping on all orders across India" },
  { icon: "📦", title: "No Inventory", description: "Zero inventory investment required" },
  { icon: "📊", title: "Social Analytics", description: "Track performance across social media platforms" }
];

const steps = [
  { title: "Sign Up on Meesho", description: "Create your Meesho seller account with our guidance" },
  { title: "Choose Products", description: "Select from Meesho's catalog of trending products" },
  { title: "Share on Social Media", description: "Share product links on WhatsApp, Facebook, Instagram" },
  { title: "Earn Commission", description: "Earn commission on every sale through your links" }
];

const benefits = [
  { icon: "🚀", title: "Low Investment", description: "Start with as low as ₹0 investment" },
  { icon: "👩‍💻", title: "Work from Anywhere", description: "Manage your business from your smartphone" },
  { icon: "📈", title: "High Growth Potential", description: "Meesho is India's fastest growing social commerce platform" },
  { icon: "🤝", title: "Community Support", description: "Join a community of successful Meesho sellers" },
  { icon: "🎯", title: "Targeted Categories", description: "Focus on high-demand categories like fashion, home decor" },
  { icon: "💬", title: "Social Selling", description: "Leverage social media for maximum reach" }
];

const successStories = [
  { 
    quote: "Started with just ₹5000 and now making ₹2.5 lakhs monthly through Meesho!", 
    name: "Priya Sharma", 
    location: "Delhi",
    monthlySales: "₹2.5L",
    products: "120+",
    resellers: "45"
  },
  { 
    quote: "Meesho helped me build a business while being a full-time mom. Now I have 30+ resellers!", 
    name: "Anjali Patel", 
    location: "Mumbai",
    monthlySales: "₹1.8L",
    products: "85",
    resellers: "30"
  },
  { 
    quote: "From college student to earning ₹1 lakh per month with Meesho dropshipping!", 
    name: "Rahul Verma", 
    location: "Bangalore",
    monthlySales: "₹1L",
    products: "65",
    resellers: "22"
  }
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
    background: "linear-gradient(135deg, #f43397 0%, #d62a82 100%)",
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
    color: "#ffd700",
  },
  heroSubtitle: {
    fontSize: "20px",
    color: "#ffe6f2",
    marginBottom: "40px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  heroButton: {
    backgroundColor: "#ffd700",
    color: "#000000",
    border: "none",
    padding: "18px 40px",
    borderRadius: "12px",
    fontWeight: "800",
    fontSize: "18px",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(255, 215, 0, 0.3)",
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
    backgroundColor: "#f43397",
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
    border: "2px solid #f43397",
    transform: "scale(1.05)",
  },
  popularBadge: {
    position: "absolute",
    top: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#f43397",
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
  pricingSubtitle: {
    color: "#f43397",
    fontWeight: "600",
    marginTop: "10px",
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
    backgroundColor: "#f43397",
    color: "#ffffff",
    border: "none",
    padding: "16px",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(244, 51, 151, 0.3)",
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
  
  // Success Stories Styles
  successContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  successCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e2e8f0",
  },
  successContent: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  successQuote: {
    fontSize: "18px",
    fontStyle: "italic",
    color: "#475569",
    marginBottom: "25px",
    lineHeight: "1.6",
    flex: "1",
  },
  successAuthor: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  successAuthorInfo: {
    flex: "1",
  },
  successName: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "4px",
  },
  successLocation: {
    fontSize: "14px",
    color: "#64748b",
  },
  successStats: {
    display: "flex",
    justifyContent: "space-between",
    borderTop: "1px solid #e2e8f0",
    paddingTop: "20px",
  },
  successStat: {
    textAlign: "center",
  },
  statValue: {
    display: "block",
    fontSize: "20px",
    fontWeight: "800",
    color: "#f43397",
    marginBottom: "4px",
  },
  statLabel: {
    fontSize: "12px",
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
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
    minHeight: "120px",
    resize: "vertical",
    outline: "none",
    transition: "border 0.3s",
  },
  checkboxGroup: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  checkbox: {
    width: "18px",
    height: "18px",
  },
  checkboxLabel: {
    color: "#475569",
    fontSize: "14px",
  },
  submitButton: {
    background: "#f43397",
    color: "#fff",
    border: "none",
    padding: "18px",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "800",
    marginTop: "10px",
    boxShadow: "0 10px 20px rgba(244, 51, 151, 0.2)",
    cursor: "pointer",
  },
};

export default MeeshoDropshippingPage;