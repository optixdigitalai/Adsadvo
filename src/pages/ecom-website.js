import React from "react";
import { motion } from "framer-motion";

const EcommerceDropshippingPage = () => {
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
            <h1 style={styles.heroTitle}>Build Your Own <span style={styles.highlight}>E-commerce Website</span></h1>
            <p style={styles.heroSubtitle}>Create a branded online store with complete dropshipping integration</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={styles.heroButton}
            >
              Launch Your Store
            </motion.button>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" style={styles.section}>
          <h2 style={styles.sectionTitle}>Complete E-commerce Solution</h2>
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
          <h2 style={styles.sectionTitle}>How to Build Your E-commerce Store</h2>
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

        {/* Pricing Section - E-commerce INR Pricing */}
        <section id="pricing" style={styles.section}>
          <h2 style={styles.sectionTitle}>E-commerce Website Plans</h2>
          <div style={styles.pricingContainer}>
            <motion.div
              whileHover={{ y: -10 }}
              style={styles.pricingCard}
            >
              <div style={styles.pricingHeader}>
                <h3 style={styles.pricingTitle}>Basic Store</h3>
                <div style={styles.pricingPrice}>
                  <span style={styles.price}>₹14,999</span>
                  <span style={styles.period}>/Year</span>
                </div>
                <p style={styles.pricingSubtitle}>Perfect for startups</p>
              </div>
              <ul style={styles.pricingFeatures}>
                <li style={styles.pricingFeature}>Custom domain name (.com/.in)</li>
                <li style={styles.pricingFeature}>100+ product catalog</li>
                <li style={styles.pricingFeature}>Mobile-responsive design</li>
                <li style={styles.pricingFeature}>Basic payment gateway (Razorpay/Stripe)</li>
                <li style={styles.pricingFeature}>Email support</li>
                <li style={styles.pricingFeature}>Basic SEO optimization</li>
              </ul>
              <button style={styles.pricingButton}>Start Basic Store</button>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              style={{...styles.pricingCard, ...styles.popularCard}}
            >
              <div style={styles.popularBadge}>Most Popular</div>
              <div style={styles.pricingHeader}>
                <h3 style={styles.pricingTitle}>Business Store</h3>
                <div style={styles.pricingPrice}>
                  <span style={styles.price}>₹39,999</span>
                  <span style={styles.period}>/Year</span>
                </div>
                <p style={styles.pricingSubtitle}>For growing businesses</p>
              </div>
              <ul style={styles.pricingFeatures}>
                <li style={styles.pricingFeature}>Advanced website builder</li>
                <li style={styles.pricingFeature}>Unlimited products</li>
                <li style={styles.pricingFeature}>Mobile app included (iOS & Android)</li>
                <li style={styles.pricingFeature}>Multiple payment gateways</li>
                <li style={styles.pricingFeature}>Priority support</li>
                <li style={styles.pricingFeature}>Advanced SEO tools</li>
                <li style={styles.pricingFeature}>Email marketing automation</li>
                <li style={styles.pricingFeature}>Inventory management system</li>
              </ul>
              <button style={styles.popularButton}>Choose Business Plan</button>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              style={styles.pricingCard}
            >
              <div style={styles.pricingHeader}>
                <h3 style={styles.pricingTitle}>Enterprise Store</h3>
                <div style={styles.pricingPrice}>
                  <span style={styles.price}>₹79,999</span>
                  <span style={styles.period}>/Year</span>
                </div>
                <p style={styles.pricingSubtitle}>For serious brands</p>
              </div>
              <ul style={styles.pricingFeatures}>
                <li style={styles.pricingFeature}>Custom website design & development</li>
                <li style={styles.pricingFeature}>Multi-channel selling integration</li>
                <li style={styles.pricingFeature}>Advanced CRM system</li>
                <li style={styles.pricingFeature}>API access for custom integrations</li>
                <li style={styles.pricingFeature}>Dedicated account manager</li>
                <li style={styles.pricingFeature}>Advanced analytics dashboard</li>
                <li style={styles.pricingFeature}>Bulk import/export tools</li>
                <li style={styles.pricingFeature}>Custom checkout process</li>
                <li style={styles.pricingFeature}>Multi-language support</li>
              </ul>
              <button style={styles.pricingButton}>Contact for Enterprise</button>
            </motion.div>
          </div>
        </section>

        {/* Store Templates Section */}
        <section id="templates" style={styles.section}>
          <h2 style={styles.sectionTitle}>Choose Your Store Design</h2>
          <div style={styles.templatesContainer}>
            {templates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={styles.templateCard}
              >
                <div style={styles.templateImage} className={template.category}>
                  <div style={styles.templateCategory}>{template.category}</div>
                </div>
                <div style={styles.templateContent}>
                  <h3 style={styles.templateTitle}>{template.title}</h3>
                  <p style={styles.templateDescription}>{template.description}</p>
                  <div style={styles.templateFeatures}>
                    {template.features.map((feature, fIndex) => (
                      <span key={fIndex} style={styles.templateFeature}>
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button style={styles.templateButton}>Preview Design</button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Integration Section */}
        <section id="integration" style={styles.section}>
          <h2 style={styles.sectionTitle}>Seamless Integrations</h2>
          <div style={styles.integrationContainer}>
            <div style={styles.integrationGrid}>
              {integrations.map((integration, index) => (
                <div key={index} style={styles.integrationCard}>
                  <div style={styles.integrationIcon}>{integration.icon}</div>
                  <h3 style={styles.integrationTitle}>{integration.title}</h3>
                  <p style={styles.integrationDescription}>{integration.description}</p>
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
              <h2 style={styles.contactTitle}>Build Your Brand Online</h2>
              <p style={styles.contactSubtitle}>Get a custom e-commerce website with complete dropshipping setup</p>

              <form style={styles.contactForm}>
                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Business Name</label>
                    <input
                      style={styles.formInput}
                      placeholder="Enter your business name"
                      type="text"
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Preferred Domain</label>
                    <input
                      style={styles.formInput}
                      placeholder="yourstore.com"
                      type="text"
                    />
                  </div>
                </div>
                
                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Contact Person</label>
                    <input
                      style={styles.formInput}
                      placeholder="Your name"
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
                    <label style={styles.formLabel}>Business Category</label>
                    <select style={styles.formInput}>
                      <option value="">Select category</option>
                      <option value="fashion">Fashion & Apparel</option>
                      <option value="electronics">Electronics</option>
                      <option value="home">Home & Kitchen</option>
                      <option value="beauty">Beauty & Personal Care</option>
                      <option value="sports">Sports & Fitness</option>
                      <option value="books">Books & Stationery</option>
                      <option value="jewelry">Jewelry & Accessories</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Target Monthly Sales</label>
                    <select style={styles.formInput}>
                      <option value="">Select target</option>
                      <option value="0-1">₹0 - ₹1 Lakh</option>
                      <option value="1-5">₹1 - ₹5 Lakh</option>
                      <option value="5-10">₹5 - ₹10 Lakh</option>
                      <option value="10-20">₹10 - ₹20 Lakh</option>
                      <option value="20+">₹20+ Lakh</option>
                    </select>
                  </div>
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Additional Requirements</label>
                  <textarea
                    style={styles.formTextarea}
                    placeholder="Tell us about your specific requirements, preferred features, and timeline..."
                    rows="5"
                  />
                </div>
                
                <div style={styles.checkboxGroup}>
                  <input type="checkbox" id="mobileApp" style={styles.checkbox} defaultChecked />
                  <label htmlFor="mobileApp" style={styles.checkboxLabel}>
                    I want a mobile app for my store
                  </label>
                </div>
                
                <div style={styles.checkboxGroup}>
                  <input type="checkbox" id="multiChannel" style={styles.checkbox} />
                  <label htmlFor="multiChannel" style={styles.checkboxLabel}>
                    I want to sell on multiple channels (Amazon, Flipkart, etc.)
                  </label>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  style={styles.submitButton}
                >
                  Get Custom Quote
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
  { icon: "🛒", title: "Custom Store Design", description: "Fully customizable e-commerce website with your branding" },
  { icon: "📱", title: "Mobile App", description: "Native mobile apps for iOS and Android included" },
  { icon: "💳", title: "Payment Gateway", description: "Integration with Razorpay, Stripe, PayPal, and Indian payment methods" },
  { icon: "🚚", title: "Dropshipping Integration", description: "Connect with thousands of suppliers worldwide" },
  { icon: "📊", title: "Advanced Analytics", description: "Complete analytics dashboard for sales, traffic, and customer behavior" },
  { icon: "📧", title: "Marketing Tools", description: "Email marketing, SMS campaigns, and social media integration" }
];

const steps = [
  { title: "Choose Your Design", description: "Select from our templates or get a custom design" },
  { title: "Add Your Products", description: "Import products from dropshipping suppliers or add your own" },
  { title: "Configure Payments", description: "Set up payment gateways and shipping methods" },
  { title: "Launch & Market", description: "Go live and start marketing your store" }
];

const templates = [
  {
    category: "Fashion",
    title: "Modern Fashion Store",
    description: "Clean, trendy design perfect for clothing, accessories, and footwear brands",
    features: ["Product Zoom", "Size Guide", "Color Swatches", "Lookbook"]
  },
  {
    category: "Electronics",
    title: "Tech & Gadgets Store",
    description: "Feature-rich design for electronics, gadgets, and tech accessories",
    features: ["Specs Table", "Comparison Tool", "Warranty Info", "Video Reviews"]
  },
  {
    category: "Home & Kitchen",
    title: "Home Decor Store",
    description: "Warm, inviting design for home decor, kitchenware, and furniture",
    features: ["Room Visualizer", "Measurement Guide", "Assembly Info", "Style Quiz"]
  }
];

const integrations = [
  { icon: "📦", title: "Dropshipping Suppliers", description: "Connect with Oberlo, Spocket, AliExpress, and Indian suppliers" },
  { icon: "📊", title: "Analytics", description: "Google Analytics, Facebook Pixel, and custom analytics integration" },
  { icon: "🚚", title: "Shipping", description: "Integrate with Delhivery, BlueDart, FedEx, and local couriers" },
  { icon: "💬", title: "Customer Support", description: "Live chat, WhatsApp, and help desk integration" },
  { icon: "📧", title: "Email Marketing", description: "Mailchimp, SendGrid, and automated email flows" },
  { icon: "💰", title: "Accounting", description: "Tally, QuickBooks, and GST invoice generation" }
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
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
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
    color: "#3b82f6",
  },
  heroSubtitle: {
    fontSize: "20px",
    color: "#cbd5e1",
    marginBottom: "40px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  heroButton: {
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    border: "none",
    padding: "18px 40px",
    borderRadius: "12px",
    fontWeight: "800",
    fontSize: "18px",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
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
    backgroundColor: "#3b82f6",
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
    border: "2px solid #3b82f6",
    transform: "scale(1.05)",
  },
  popularBadge: {
    position: "absolute",
    top: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#3b82f6",
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
    color: "#3b82f6",
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
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    border: "none",
    padding: "16px",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)",
    transition: "all 0.3s",
  },
  
  // Templates Styles
  templatesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
  },
  templateCard: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e2e8f0",
    overflow: "hidden",
  },
  templateImage: {
    height: "200px",
    position: "relative",
    background: "linear-gradient(45deg, #f3f4f6, #e5e7eb)",
  },
  templateCategory: {
    position: "absolute",
    top: "15px",
    right: "15px",
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
  },
  templateContent: {
    padding: "25px",
  },
  templateTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "10px",
  },
  templateDescription: {
    color: "#64748b",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  templateFeatures: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "20px",
  },
  templateFeature: {
    backgroundColor: "#f1f5f9",
    color: "#475569",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "500",
  },
  templateButton: {
    backgroundColor: "transparent",
    color: "#3b82f6",
    border: "2px solid #3b82f6",
    padding: "10px 20px",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
    width: "100%",
    transition: "all 0.3s",
  },
  
  // Integration Styles
  integrationContainer: {
    backgroundColor: "#ffffff",
    padding: "50px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
  },
  integrationGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  integrationCard: {
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    textAlign: "center",
  },
  integrationIcon: {
    fontSize: "40px",
    marginBottom: "20px",
  },
  integrationTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "10px",
  },
  integrationDescription: {
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
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    padding: "18px",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "800",
    marginTop: "10px",
    boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)",
    cursor: "pointer",
  },
};

export default EcommerceDropshippingPage;