import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BarChart3,
  Palette,
  CheckCircle2,
  Globe,
  Award,
  Server,
} from "lucide-react";

const EcomProfessional = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const steps = [
    {
      title: "Architecture",
      icon: <Server size={24} />,
      desc: "High-availability cloud infrastructure with headless architecture for sub-second performance.",
    },
    {
      title: "Psychology Design",
      icon: <Palette size={24} />,
      desc: "Conversion-optimized UI/UX driven by behavioral data and heatmap analysis.",
    },
    {
      title: "Global Logistics",
      icon: <Globe size={24} />,
      desc: "Automated cross-border payments and synchronized global supply chains.",
    },
    {
      title: "Growth Analytics",
      icon: <BarChart3 size={24} />,
      desc: "Precision scaling using GA4 and advanced attribution frameworks.",
    },
  ];

  const styles = {
    page: {
      background: "#ffffff",
      color: "#0f172a",
      fontFamily: "'Inter', sans-serif",
      overflowX: "hidden",
    },
    hero: {
      padding: isMobile ? "100px 24px" : "160px 8%",
      background:
        "radial-gradient(circle at 90% 10%, #f1f5f9 0%, #ffffff 50%)",
    },
    card: {
      background: "#ffffff",
      border: "1px solid #e2e8f0",
      borderRadius: "24px",
      padding: "40px",
      boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
    },
    roadmapLine: {
      position: "absolute",
      left: isMobile ? "30px" : "50%",
      top: "380px",
      bottom: "120px",
      width: "1px",
      background: "#e2e8f0",
    },
  };

  return (
    <div style={styles.page}>
      {/* ================= HERO ================= */}
      <section style={styles.hero}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.2fr 0.8fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#eff6ff",
                padding: "8px 16px",
                borderRadius: "100px",
                color: "#2563eb",
                fontSize: "12px",
                fontWeight: 700,
                marginBottom: "24px",
              }}
            >
              <Award size={16} /> ENTERPRISE SOLUTIONS
            </div>

            <h1
              style={{
                fontSize: "clamp(40px, 5vw, 72px)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              Scale Your DTC{" "}
              <span style={{ color: "#2563eb" }}>Global Storefront</span>
            </h1>

            <p
              style={{
                fontSize: "18px",
                color: "#64748b",
                marginBottom: "40px",
                maxWidth: "600px",
              }}
            >
              Access the exact infrastructure and growth blueprint used by
              India’s fastest-growing ecommerce brands.
            </p>

            <button
              style={{
                padding: "18px 40px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Get Started Now
            </button>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ ...styles.card, background: "#0f172a", color: "#fff" }}
          >
            <h3 style={{ fontSize: "24px", fontWeight: 700 }}>
              Request Strategy Audit
            </h3>
            <p style={{ color: "#94a3b8", marginBottom: "24px" }}>
              Analyze your brand’s growth potential.
            </p>

            <input style={inputStyle} placeholder="Full Name" />
            <input style={inputStyle} placeholder="Contact Number" />

            <select style={inputStyle}>
              <option>Select Investment Tier</option>
              <option>₹5L - ₹10L</option>
              <option>₹10L+</option>
            </select>

            <button style={ctaStyle}>Initialize Audit</button>
          </motion.div>
        </div>
      </section>

      {/* ================= BLUEPRINT ================= */}
      <section style={{ padding: "100px 5%", position: "relative" }}>
        <div style={styles.roadmapLine} />
        <h2 style={sectionTitle}>
          The Connected <span style={{ color: "#2563eb" }}>Blueprint</span>
        </h2>

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{
              ...styles.card,
              width: isMobile ? "100%" : "45%",
              margin: "40px auto",
            }}
          >
            <div style={{ color: "#2563eb", marginBottom: "16px" }}>
              {step.icon}
            </div>
            <h4 style={{ fontSize: "22px", fontWeight: 700 }}>
              {step.title}
            </h4>
            <p style={{ color: "#64748b" }}>{step.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* ================= PRICING ================= */}
      <section style={{ padding: "100px 8%", background: "#f8fafc" }}>
        <h2 style={sectionTitle}>Strategic Growth Tiers</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "30px",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          {[
            { name: "Silver", price: "4,999" },
            { name: "Gold", price: "14,999", popular: true },
            { name: "Platinum", price: "29,999" },
          ].map((plan, i) => (
            <div
              key={i}
              style={{
                ...styles.card,
                border: plan.popular
                  ? "2px solid #2563eb"
                  : "1px solid #e2e8f0",
              }}
            >
              <h4 style={{ fontWeight: 800 }}>{plan.name}</h4>
              <div style={{ fontSize: "42px", fontWeight: 800 }}>
                ₹{plan.price}
              </div>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "24px" }}>
                <li>
                  <CheckCircle2 size={16} color="#2563eb" /> Infrastructure Setup
                </li>
                <li>
                  <CheckCircle2 size={16} color="#2563eb" /> Global Payments
                </li>
                <li>
                  <CheckCircle2 size={16} color="#2563eb" /> Growth Dashboard
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

/* ================= STYLES ================= */
const inputStyle = {
  padding: "16px",
  background: "#1e293b",
  border: "1px solid #334155",
  borderRadius: "8px",
  color: "#fff",
  marginBottom: "16px",
};

const ctaStyle = {
  padding: "18px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontWeight: 700,
  cursor: "pointer",
};

const sectionTitle = {
  textAlign: "center",
  fontSize: "42px",
  fontWeight: 800,
  marginBottom: "80px",
};

export default EcomProfessional;
