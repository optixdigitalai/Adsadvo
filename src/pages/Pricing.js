import React, { useState } from "react";
import { motion } from "framer-motion";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("annual");
  const [selectedPlatform, setSelectedPlatform] = useState("all");

  const platforms = [
    { id: "all", name: "All Platforms", color: "#3b82f6" },
    { id: "amazon", name: "Amazon", color: "#ff7a18" },
    { id: "flipkart", name: "Flipkart", color: "#2874f0" },
    { id: "meesho", name: "Meesho", color: "#f43397" },
    { id: "ecommerce", name: "E-commerce", color: "#10b981" }
  ];

  const plans = [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for beginners",
      annualPrice: { all: 9999, amazon: 16499, flipkart: 12999, meesho: 8999, ecommerce: 14999 },
      monthlyPrice: { all: 1199, amazon: 1999, flipkart: 1599, meesho: 1199, ecommerce: 1899 },
      features: {
        all: [
          "Up to 50 products total",
          "Basic dashboard",
          "Email support",
          "1 platform integration"
        ],
        amazon: [
          "Up to 50 products on Amazon",
          "Basic Amazon tools",
          "Email support",
          "Inventory sync"
        ],
        flipkart: [
          "Up to 50 products on Flipkart",
          "Basic Seller Hub tools",
          "Email support",
          "Order management"
        ],
        meesho: [
          "Up to 50 products on Meesho",
          "Basic reseller tools",
          "Community support",
          "WhatsApp alerts"
        ],
        ecommerce: [
          "Custom domain",
          "Basic website builder",
          "50 product catalog",
          "Email support"
        ]
      }
    },
    {
      id: "professional",
      name: "Professional",
      description: "Most popular choice",
      popular: true,
      annualPrice: { all: 24999, amazon: 41499, flipkart: 31999, meesho: 24999, ecommerce: 39999 },
      monthlyPrice: { all: 2999, amazon: 4999, flipkart: 3999, meesho: 2999, ecommerce: 4799 },
      features: {
        all: [
          "Up to 500 products total",
          "Advanced analytics",
          "Priority support",
          "All platform integrations",
          "Bulk operations",
          "Custom reports"
        ],
        amazon: [
          "Up to 500 products on Amazon",
          "Advanced Amazon tools",
          "Priority support",
          "Automated inventory",
          "Amazon ads management",
          "Profit calculator"
        ],
        flipkart: [
          "Up to 500 products on Flipkart",
          "Advanced Flipkart tools",
          "Priority support",
          "Bulk order processing",
          "Flipkart ads management",
          "Advanced analytics"
        ],
        meesho: [
          "Up to 500 products on Meesho",
          "Advanced reseller tools",
          "Priority support",
          "WhatsApp automation",
          "Social media toolkit",
          "Advanced analytics"
        ],
        ecommerce: [
          "Advanced website builder",
          "Mobile app included",
          "500 product catalog",
          "Priority support",
          "Marketing tools",
          "Analytics dashboard"
        ]
      }
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For scaling businesses",
      annualPrice: { all: 49999, amazon: 82999, flipkart: 64999, meesho: 49999, ecommerce: 79999 },
      monthlyPrice: { all: 5999, amazon: 9999, flipkart: 7999, meesho: 5999, ecommerce: 9599 },
      features: {
        all: [
          "Unlimited products",
          "Custom analytics",
          "Dedicated manager",
          "24/7 phone support",
          "API access",
          "Custom integrations",
          "Multi-user accounts",
          "Advanced security"
        ],
        amazon: [
          "Unlimited Amazon products",
          "Custom Amazon solutions",
          "Dedicated manager",
          "24/7 phone support",
          "API access",
          "Custom integrations",
          "Advanced analytics",
          "Brand protection"
        ],
        flipkart: [
          "Unlimited Flipkart products",
          "Custom Flipkart solutions",
          "Dedicated manager",
          "24/7 phone support",
          "API access",
          "Custom integrations",
          "Advanced reporting",
          "Multi-warehouse"
        ],
        meesho: [
          "Unlimited Meesho products",
          "Custom reseller solutions",
          "Dedicated manager",
          "24/7 phone support",
          "API access",
          "Custom integrations",
          "Team management",
          "Advanced marketing"
        ],
        ecommerce: [
          "Custom website design",
          "Multi-channel selling",
          "Advanced CRM",
          "24/7 support",
          "API access",
          "Custom integrations",
          "Multi-language",
          "Advanced security"
        ]
      }
    }
  ];

  const getCurrentPrice = (plan) => {
    return billingCycle === "annual" 
      ? plan.annualPrice[selectedPlatform]
      : plan.monthlyPrice[selectedPlatform];
  };

  const getSavings = (plan) => {
    if (billingCycle === "annual") {
      const monthlyTotal = plan.monthlyPrice[selectedPlatform] * 12;
      const annualPrice = plan.annualPrice[selectedPlatform];
      const savings = monthlyTotal - annualPrice;
      const percentage = Math.round((savings / monthlyTotal) * 100);
      return { savings, percentage };
    }
    return { savings: 0, percentage: 0 };
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>Dropshipping Pricing Plans</h1>
          <p style={styles.headerSubtitle}>Choose the perfect plan for your business growth</p>
        </div>
      </header>

      <main style={styles.mainContent}>
        {/* Platform Selector */}
        <section style={styles.platformSelectorSection}>
          <h2 style={styles.sectionTitle}>Select Your Platform</h2>
          <div style={styles.platformSelector}>
            {platforms.map((platform) => (
              <button
                key={platform.id}
                style={{
                  ...styles.platformButton,
                  backgroundColor: selectedPlatform === platform.id ? platform.color : "#ffffff",
                  color: selectedPlatform === platform.id ? "#ffffff" : "#475569",
                  borderColor: selectedPlatform === platform.id ? platform.color : "#e2e8f0"
                }}
                onClick={() => setSelectedPlatform(platform.id)}
              >
                {platform.name}
              </button>
            ))}
          </div>
        </section>

        {/* Billing Toggle */}
        <section style={styles.billingSection}>
          <div style={styles.billingToggle}>
            <span style={styles.billingLabel}>Monthly</span>
            <button 
              style={styles.toggleButton}
              onClick={() => setBillingCycle(billingCycle === "annual" ? "monthly" : "annual")}
            >
              <div style={{
                ...styles.toggleKnob,
                left: billingCycle === "annual" ? "calc(100% - 28px)" : "4px",
                backgroundColor: platforms.find(p => p.id === selectedPlatform)?.color || "#3b82f6"
              }} />
            </button>
            <span style={styles.billingLabel}>Annual <span style={styles.saveBadge}>Save up to 20%</span></span>
          </div>
        </section>

        {/* Pricing Cards */}
        <section style={styles.pricingSection}>
          <div style={styles.pricingGrid}>
            {plans.map((plan, index) => {
              const currentPrice = getCurrentPrice(plan);
              const savings = getSavings(plan);
              
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    ...styles.pricingCard,
                    borderColor: plan.popular ? platforms.find(p => p.id === selectedPlatform)?.color || "#3b82f6" : "#e2e8f0",
                    transform: plan.popular ? "scale(1.05)" : "scale(1)"
                  }}
                >
                  {plan.popular && (
                    <div style={{
                      ...styles.popularBadge,
                      backgroundColor: platforms.find(p => p.id === selectedPlatform)?.color || "#3b82f6"
                    }}>
                      Most Popular
                    </div>
                  )}
                  
                  <div style={styles.cardHeader}>
                    <h3 style={styles.planName}>{plan.name}</h3>
                    <p style={styles.planDescription}>{plan.description}</p>
                    
                    <div style={styles.priceContainer}>
                      <span style={styles.priceCurrency}>₹</span>
                      <span style={styles.priceAmount}>{currentPrice.toLocaleString()}</span>
                      <span style={styles.pricePeriod}>
                        /{billingCycle === "annual" ? "year" : "month"}
                      </span>
                    </div>
                    
                    {billingCycle === "annual" && savings.savings > 0 && (
                      <div style={styles.savingsBadge}>
                        Save ₹{savings.savings.toLocaleString()} ({savings.percentage}%)
                      </div>
                    )}
                  </div>

                  <div style={styles.cardBody}>
                    <ul style={styles.featuresList}>
                      {plan.features[selectedPlatform].map((feature, featureIndex) => (
                        <li key={featureIndex} style={styles.featureItem}>
                          <svg style={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        ...styles.ctaButton,
                        backgroundColor: plan.popular 
                          ? (platforms.find(p => p.id === selectedPlatform)?.color || "#3b82f6")
                          : "#0f172a"
                      }}
                    >
                      {plan.id === "enterprise" ? "Contact Sales" : "Get Started"}
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Comparison Table */}
        

        {/* FAQ Section */}
        <section style={styles.faqSection}>
          <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div style={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} style={styles.faqCard}>
                <h3 style={styles.faqQuestion}>{faq.question}</h3>
                <p style={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={styles.ctaSection}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.ctaCard}
          >
            <h2 style={styles.ctaTitle}>Still have questions?</h2>
            <p style={styles.ctaText}>Our sales team is here to help you choose the right plan for your business needs.</p>
            <div style={styles.ctaButtons}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={styles.ctaPrimaryButton}
              >
                Schedule a Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={styles.ctaSecondaryButton}
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

// Comparison Features Data


// FAQ Data
const faqs = [
  {
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, changes will take effect at the next billing cycle."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, UPI, net banking, and PayPal for international payments."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll have access to the service until the end of your current billing period."
  },
  {
    question: "Do you offer discounts for annual plans?",
    answer: "Yes, annual plans come with up to 20% discount compared to monthly billing. The discount varies by plan."
  },
  {
    question: "Is there setup fee?",
    answer: "No, there are no setup fees for any of our plans. You only pay the subscription fee."
  }
];

// Styles
const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
  },
  
  // Header Styles
  header: {
    padding: "60px 20px",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    textAlign: "center",
    color: "#ffffff",
  },
  headerContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  headerTitle: {
    fontSize: "48px",
    fontWeight: "900",
    marginBottom: "16px",
  },
  headerSubtitle: {
    fontSize: "18px",
    color: "#cbd5e1",
  },
  
  // Main Content
  mainContent: {
    padding: "0 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  
  // Section Titles
  sectionTitle: {
    fontSize: "32px",
    fontWeight: "800",
    textAlign: "center",
    color: "#0f172a",
    marginBottom: "40px",
  },
  
  // Platform Selector
  platformSelectorSection: {
    padding: "60px 0 20px",
  },
  platformSelector: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "40px",
  },
  platformButton: {
    padding: "12px 24px",
    borderRadius: "8px",
    border: "2px solid",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s",
    minWidth: "120px",
  },
  
  // Billing Section
  billingSection: {
    padding: "20px 0 40px",
    textAlign: "center",
  },
  billingToggle: {
    display: "inline-flex",
    alignItems: "center",
    gap: "16px",
    backgroundColor: "#ffffff",
    padding: "8px",
    borderRadius: "50px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  billingLabel: {
    fontWeight: "600",
    color: "#475569",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  saveBadge: {
    backgroundColor: "#10b981",
    color: "#ffffff",
    padding: "4px 8px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "600",
  },
  toggleButton: {
    width: "60px",
    height: "32px",
    backgroundColor: "#e2e8f0",
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
    position: "relative",
    padding: "0",
  },
  toggleKnob: {
    position: "absolute",
    top: "4px",
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: "#3b82f6",
    transition: "left 0.3s",
  },
  
  // Pricing Cards
  pricingSection: {
    padding: "40px 0 80px",
  },
  pricingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
  },
  pricingCard: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "40px 30px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
    border: "2px solid",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  popularBadge: {
    position: "absolute",
    top: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#ffffff",
    padding: "6px 20px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  cardHeader: {
    textAlign: "center",
    marginBottom: "30px",
  },
  planName: {
    fontSize: "28px",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "8px",
  },
  planDescription: {
    color: "#64748b",
    marginBottom: "20px",
  },
  priceContainer: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    gap: "4px",
    marginBottom: "12px",
  },
  priceCurrency: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#0f172a",
  },
  priceAmount: {
    fontSize: "48px",
    fontWeight: "900",
    color: "#0f172a",
  },
  pricePeriod: {
    fontSize: "18px",
    color: "#64748b",
  },
  savingsBadge: {
    backgroundColor: "#dcfce7",
    color: "#166534",
    padding: "8px 16px",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "600",
    display: "inline-block",
  },
  
  // Card Body
  cardBody: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
  },
  featuresList: {
    listStyle: "none",
    padding: "0",
    marginBottom: "30px",
    flex: "1",
  },
  featureItem: {
    padding: "12px 0",
    color: "#475569",
    borderBottom: "1px solid #e2e8f0",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  checkIcon: {
    width: "20px",
    height: "20px",
    color: "#10b981",
    flexShrink: "0",
  },
  ctaButton: {
    color: "#ffffff",
    border: "none",
    padding: "16px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "auto",
  },
  
  // Comparison Table
  comparisonSection: {
    padding: "80px 0",
  },
  comparisonTable: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    padding: "24px",
    textAlign: "center",
    backgroundColor: "#f8fafc",
    fontWeight: "700",
    color: "#0f172a",
    fontSize: "18px",
    borderBottom: "2px solid #e2e8f0",
    position: "relative",
  },
  tablePopular: {
    fontSize: "12px",
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    padding: "4px 8px",
    borderRadius: "12px",
    marginTop: "8px",
    display: "inline-block",
  },
  tableRowEven: {
    backgroundColor: "#ffffff",
  },
  tableRowOdd: {
    backgroundColor: "#f8fafc",
  },
  featureCell: {
    padding: "20px 24px",
    fontWeight: "600",
    color: "#0f172a",
    borderRight: "1px solid #e2e8f0",
    width: "30%",
  },
  planCell: {
    padding: "20px 24px",
    textAlign: "center",
    color: "#475569",
  },
  checkMark: {
    color: "#10b981",
    fontWeight: "bold",
    fontSize: "18px",
  },
  crossMark: {
    color: "#ef4444",
    fontWeight: "bold",
    fontSize: "18px",
  },
  
  // FAQ Section
  faqSection: {
    padding: "80px 0",
  },
  faqGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
  },
  faqCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
  },
  faqQuestion: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "12px",
  },
  faqAnswer: {
    color: "#64748b",
    lineHeight: "1.6",
  },
  
  // CTA Section
  ctaSection: {
    padding: "80px 0",
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
    padding: "16px 32px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
  },
  ctaSecondaryButton: {
    backgroundColor: "transparent",
    color: "#ffffff",
    border: "2px solid #3b82f6",
    padding: "16px 32px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default PricingPage;