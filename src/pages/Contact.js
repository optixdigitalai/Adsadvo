import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

/* ================= PAGE ================= */
const ContactPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.container}>
      {/* ================= HERO ================= */}
      <section style={styles.heroSection}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.heroContent}
        >
          <h1 style={styles.heroTitle}>
            Contact Our <span style={styles.highlight}>Dropshipping</span> Experts
          </h1>
          <p style={styles.heroSubtitle}>
            Get personalized guidance to start and scale your dropshipping business
          </p>
        </motion.div>
      </section>

      <main style={styles.mainContent}>
        {/* ================= GRID ================= */}
        <div
          style={{
            ...styles.contentGrid,
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          }}
        >
          {/* ================= FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={styles.formContainer}>
              <ContactForm defaultService="Amazon" />
            </div>
          </motion.div>

          {/* ================= INFO ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={styles.infoContainer}>
              <h2 style={styles.infoTitle}>Get in Touch</h2>
              <p style={styles.infoSubtitle}>
                Multiple ways to connect with our team
              </p>

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
                    <p style={styles.methodText}>+91 1800 123 4567</p>
                    <p style={styles.methodText}>+91 98765 43210</p>
                  </div>
                </div>

                <div style={styles.contactMethod}>
                  <div style={styles.methodIcon}>🏢</div>
                  <div>
                    <h3 style={styles.methodTitle}>Visit Us</h3>
                    <p style={styles.methodText}>Gurgaon, Haryana</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= CTA ================= */}
        <section style={styles.ctaSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.ctaCard}
          >
            <h2 style={styles.ctaTitle}>
              Ready to Start Your Dropshipping Journey?
            </h2>
            <p style={styles.ctaText}>
              Book a free 30-minute consultation with our experts
            </p>

            <div
              style={{
                ...styles.ctaButtons,
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <button style={styles.ctaPrimaryButton}>
                Schedule Free Consultation
              </button>
              <button style={styles.ctaSecondaryButton}>
                Download Starter Guide
              </button>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

/* ================= STYLES ================= */

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
  },

  heroSection: {
    padding: "clamp(60px, 10vw, 100px) 20px",
    background: "linear-gradient(135deg,#0f172a,#1e293b)",
    textAlign: "center",
    color: "#fff",
  },

  heroContent: {
    maxWidth: 900,
    margin: "0 auto",
  },

  heroTitle: {
    fontSize: "clamp(32px, 6vw, 48px)",
    fontWeight: 900,
  },

  highlight: {
    color: "#3b82f6",
  },

  heroSubtitle: {
    fontSize: "clamp(16px, 3vw, 20px)",
    color: "#cbd5e1",
    marginTop: 12,
  },

  mainContent: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: 20,
  },

  contentGrid: {
    display: "grid",
    gap: 40,
    marginTop: 60,
  },

  formContainer: {
    background: "#fff",
    padding: "clamp(24px, 5vw, 40px)",
    borderRadius: 24,
    boxShadow: "0 20px 50px rgba(0,0,0,.05)",
  },

  infoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },

  infoTitle: {
    fontSize: "clamp(26px, 5vw, 32px)",
    fontWeight: 800,
  },

  infoSubtitle: {
    color: "#64748b",
  },

  contactMethods: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },

  contactMethod: {
    display: "flex",
    gap: 16,
    padding: 24,
    background: "#fff",
    borderRadius: 16,
  },

  methodIcon: {
    width: 60,
    height: 60,
    background: "#eff6ff",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
  },

  methodTitle: {
    fontWeight: 700,
  },

  methodText: {
    color: "#64748b",
  },

  ctaSection: {
    margin: "80px 0",
  },

  ctaCard: {
    background: "#0f172a",
    padding: "clamp(32px, 6vw, 60px)",
    borderRadius: 24,
    color: "#fff",
    textAlign: "center",
  },

  ctaTitle: {
    fontSize: "clamp(26px, 5vw, 36px)",
    fontWeight: 900,
  },

  ctaText: {
    color: "#cbd5e1",
    marginBottom: 32,
  },

  ctaButtons: {
    display: "flex",
    justifyContent: "center",
    gap: 16,
  },

  ctaPrimaryButton: {
    background: "#3b82f6",
    padding: "16px 32px",
    borderRadius: 12,
    border: "none",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },

  ctaSecondaryButton: {
    background: "transparent",
    border: "2px solid #3b82f6",
    color: "#fff",
    padding: "16px 32px",
    borderRadius: 12,
    cursor: "pointer",
  },
};

export default ContactPage;
