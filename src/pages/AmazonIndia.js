import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ShieldCheck,
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Layout,
  PieChart,
  Layers,
  Award,
  CheckCircle2,
  Package,
  Search,
  MousePointerClick,
  Rocket,
} from "lucide-react";

/* ================= ANIMATIONS ================= */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

/* ================= PAGE ================= */
const AmazonIndiaBest = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 992);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", overflowX: "hidden" }}>
      {/* ================= HERO ================= */}
      <section
        style={{
          minHeight: "100vh",
          padding: isMobile ? "100px 20px" : "140px 5%",
          background: "linear-gradient(135deg,#0f172a,#1e293b)",
          color: "#fff",
          display: "flex",
          gap: "60px",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ flex: 1.2 }}
        >
          <motion.div variants={fadeInUp} style={{ color: "#ff7a18" }}>
            <Award size={18} /> Official Amazon Growth Partner
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            style={{
              fontSize: isMobile ? "40px" : "72px",
              fontWeight: 900,
              lineHeight: 1,
              margin: "24px 0",
            }}
          >
            Build Your <span style={{ color: "#ff7a18" }}>Amazon Empire</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            style={{ fontSize: "18px", opacity: 0.85, maxWidth: "600px" }}
          >
            End-to-end Amazon automation in India. We handle sourcing, compliance,
            ads & fulfillment — you focus on growth.
          </motion.p>

          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            style={{
              marginTop: "40px",
              padding: "18px 40px",
              background: "#ff7a18",
              border: "none",
              borderRadius: "14px",
              color: "#fff",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Get Started <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            flex: 0.8,
            background: "#fff",
            padding: "40px",
            borderRadius: "28px",
            color: "#0f172a",
            boxShadow: "0 40px 80px rgba(0,0,0,.3)",
          }}
        >
          <h3 style={{ fontSize: "24px", fontWeight: 800 }}>
            Free Strategy Call
          </h3>
          <p style={{ color: "#64748b", marginBottom: "20px" }}>
            Limited January slots
          </p>

          <input placeholder="Full Name" style={inputStyle} />
          <input placeholder="WhatsApp Number" style={inputStyle} />

          <button style={ctaStyle}>Check Availability</button>
        </motion.div>
      </section>

      {/* ================= ROADMAP ================= */}
      <section style={{ padding: "100px 5%", background: "#f8fafc" }}>
        <h2 style={sectionTitle}>
          Amazon <span style={{ color: "#ff7a18" }}>Blueprint</span>
        </h2>

        {[
          {
            title: "Account Setup",
            icon: <MousePointerClick />,
            desc: "GST, seller registration & compliance.",
          },
          {
            title: "Product Research",
            icon: <Search />,
            desc: "AI-based high-margin product discovery.",
          },
          {
            title: "Supplier Network",
            icon: <Package />,
            desc: "Verified Indian manufacturers.",
          },
          {
            title: "Scale Sales",
            icon: <Rocket />,
            desc: "PPC, automation & optimization.",
          },
        ].map((step, i) => (
          <Reveal key={i}>
            <div style={card}>
              <div style={{ color: "#ff7a18" }}>{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ================= STATS ================= */}
      <section style={{ padding: "80px 5%", background: "#0f172a" }}>
        <div style={statsGrid}>
          <Stat icon={<TrendingUp />} value="₹15Cr+" label="Revenue Generated" />
          <Stat icon={<Star />} value="94%" label="Success Rate" />
          <Stat icon={<ShieldCheck />} value="100%" label="Policy Safe" />
          <Stat icon={<Zap />} value="2500+" label="Stores Launched" />
        </div>
      </section>
    </div>
  );
};

/* ================= HELPERS ================= */
const Reveal = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div ref={ref} variants={fadeInUp} initial="hidden" animate={controls}>
      {children}
    </motion.div>
  );
};

const Stat = ({ icon, value, label }) => (
  <div style={{ textAlign: "center", color: "#fff" }}>
    <div style={{ color: "#ff7a18" }}>{icon}</div>
    <h3>{value}</h3>
    <p style={{ opacity: 0.6 }}>{label}</p>
  </div>
);

/* ================= STYLES ================= */
const inputStyle = {
  width: "100%",
  padding: "16px",
  marginBottom: "12px",
  borderRadius: "10px",
  border: "1px solid #e2e8f0",
};

const ctaStyle = {
  width: "100%",
  padding: "18px",
  background: "#ff7a18",
  color: "#fff",
  border: "none",
  borderRadius: "12px",
  fontWeight: 800,
};

const sectionTitle = {
  textAlign: "center",
  fontSize: "42px",
  fontWeight: 900,
  marginBottom: "60px",
};

const card = {
  background: "#fff",
  padding: "30px",
  borderRadius: "24px",
  marginBottom: "30px",
  maxWidth: "700px",
  marginInline: "auto",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
  gap: "40px",
  maxWidth: "1200px",
  margin: "auto",
};

export default AmazonIndiaBest;
