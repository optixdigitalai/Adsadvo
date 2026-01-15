import React, { useState } from "react";
import { motion } from "framer-motion";

const AmazonDropshippingPage = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        setSuccess(true);
        form.reset();
        setTimeout(() => setSuccess(false), 4000);
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div style={styles.container}>
      <main>

        {/* ================= HERO ================= */}
        <section style={styles.heroSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.heroContent}
          >
            <h1 style={styles.heroTitle}>
              Start Your Amazon <span style={styles.highlight}>Dropshipping</span> Journey
            </h1>
            <p style={styles.heroSubtitle}>
              Transform your e-commerce business with our complete dropshipping solution.
            </p>
            <button style={styles.heroButton}>Launch Your Store</button>
          </motion.div>
        </section>

        {/* ================= FEATURES ================= */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Why Choose Us</h2>
          <div style={styles.featuresGrid}>
            {features.map((f, i) => (
              <div key={i} style={styles.featureCard}>
                <div style={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section style={styles.sectionAlt}>
          <h2 style={styles.sectionTitle}>How It Works</h2>
          <div style={styles.stepsGrid}>
            {steps.map((s, i) => (
              <div key={i} style={styles.stepCard}>
                <div style={styles.stepNumber}>{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PRICING ================= */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Pricing Plans</h2>
          <div style={styles.pricingGrid}>
            {pricing.map((p, i) => (
              <div
                key={i}
                style={{ ...styles.priceCard, ...(p.popular && styles.popularCard) }}
              >
                {p.popular && <div style={styles.popularBadge}>Most Popular</div>}
                <h3>{p.name}</h3>
                <p style={styles.price}>{p.price}</p>
                <ul>
                  {p.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
                <button style={styles.priceButton}>{p.cta}</button>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section style={styles.sectionAlt}>
          <div style={styles.contactContainer}>
            <div style={styles.contactCard}>
              <h2 style={styles.contactTitle}>Let’s Talk 👋</h2>
              <p style={styles.contactSubtitle}>
                Fill the form and we’ll contact you within 24 hours.
              </p>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={styles.successToast}
                >
                  ✅ Message sent successfully!
                </motion.div>
              )}

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                style={styles.contactForm}
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div style={styles.formRow}>
                  <input name="name" placeholder="Full Name" required style={styles.input} />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    style={styles.input}
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us about your requirement..."
                  required
                  style={styles.textarea}
                />

                <button type="submit" style={styles.submitButton}>
                  🚀 Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

/* ================= DATA ================= */

const features = [
  { icon: "📦", title: "No Inventory", description: "Sell without holding stock." },
  { icon: "🚀", title: "Fast Setup", description: "Launch your store in 24 hours." },
  { icon: "📊", title: "Analytics", description: "Track profit and performance." },
  { icon: "🌍", title: "Global Suppliers", description: "Verified suppliers worldwide." },
];

const steps = [
  { title: "Register", description: "Create your account." },
  { title: "Choose Products", description: "Select profitable products." },
  { title: "List on Amazon", description: "One-click import." },
  { title: "Start Selling", description: "We handle fulfillment." },
];

const pricing = [
  {
    name: "Basic",
    price: "₹16,499 / Year",
    features: ["100 Products", "Email Support", "Basic Analytics"],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "₹41,499 / Year",
    features: ["Unlimited Products", "Priority Support", "Advanced Analytics"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹82,999 / Year",
    features: ["Custom Setup", "Dedicated Manager", "24/7 Support"],
    cta: "Contact Sales",
  },
];

/* ================= STYLES ================= */

const styles = {
  container: { background: "#f8fafc" },

  heroSection: {
    padding: "100px 20px",
    textAlign: "center",
    background: "#0f172a",
    color: "#fff",
  },
  heroContent: { maxWidth: "800px", margin: "auto" },
  heroTitle: { fontSize: "52px", fontWeight: 900 },
  highlight: { color: "#ff7a18" },
  heroSubtitle: { margin: "20px auto", maxWidth: "600px" },
  heroButton: {
    padding: "16px 40px",
    borderRadius: "12px",
    fontWeight: 800,
    background: "#ff7a18",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },

  section: { padding: "80px 20px" },
  sectionAlt: { padding: "80px 20px", background: "#f1f5f9" },
  sectionTitle: { textAlign: "center", fontSize: "40px", marginBottom: "50px" },

  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "30px",
  },
  featureCard: {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    textAlign: "center",
  },
  featureIcon: { fontSize: "36px" },

  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "30px",
  },
  stepCard: {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    textAlign: "center",
  },
  stepNumber: { fontSize: "24px", fontWeight: 800 },

  pricingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "30px",
  },
  priceCard: {
    background: "#fff",
    padding: "40px",
    borderRadius: "20px",
  },
  popularCard: { border: "2px solid #ff7a18" },
  popularBadge: {
    background: "#ff7a18",
    color: "#fff",
    padding: "6px 16px",
    borderRadius: "12px",
    marginBottom: "10px",
    display: "inline-block",
  },
  price: { fontSize: "28px", fontWeight: 900 },
  priceButton: {
    marginTop: "20px",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    background: "#0f172a",
    color: "#fff",
  },

  contactContainer: { maxWidth: "700px", margin: "auto" },
  contactCard: {
    background: "#fff",
    padding: "60px",
    borderRadius: "28px",
    boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
  },
  contactTitle: { textAlign: "center", fontSize: "42px" },
  contactSubtitle: { textAlign: "center", marginBottom: "30px" },

  successToast: {
    background: "linear-gradient(135deg,#22c55e,#16a34a)",
    color: "#fff",
    padding: "14px",
    borderRadius: "12px",
    marginBottom: "20px",
    textAlign: "center",
    fontWeight: 700,
  },

  contactForm: { display: "flex", flexDirection: "column", gap: "20px" },
  formRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" },
  input: { padding: "16px", borderRadius: "12px", border: "1px solid #cbd5e1" },
  textarea: {
    padding: "16px",
    borderRadius: "12px",
    minHeight: "140px",
    border: "1px solid #cbd5e1",
  },
  submitButton: {
    background: "#ff7a18",
    color: "#fff",
    padding: "18px",
    borderRadius: "14px",
    fontWeight: 900,
    border: "none",
    cursor: "pointer",
  },
};

export default AmazonDropshippingPage;
