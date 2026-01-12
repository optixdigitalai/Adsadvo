import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  BarChart3,
  Globe,
  Layers,
  Boxes,
  MoveRight,
} from "lucide-react";

const MeeshoInfinity = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const styles = {
    page: {
      background: "#ffffff",
      color: "#0a0a0a",
      fontFamily: "'Inter', system-ui, sans-serif",
      overflowX: "hidden",
    },

    heroSection: {
      minHeight: isMobile ? "auto" : "90vh",
      padding: isMobile ? "120px 20px 60px" : "160px 8% 100px",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.2fr 0.8fr",
      gap: "40px",
      maxWidth: "1400px",
      margin: "0 auto",
      alignItems: "center",
    },

    heroTitle: {
      fontSize: "clamp(40px, 6vw, 84px)",
      fontWeight: 900,
      lineHeight: 0.95,
      letterSpacing: "-0.04em",
      marginBottom: "24px",
    },

    floatingGlass: {
      background: "rgba(255,255,255,0.7)",
      backdropFilter: "blur(25px)",
      border: "1px solid rgba(0,0,0,0.06)",
      borderRadius: "32px",
      padding: isMobile ? "24px" : "40px",
      boxShadow: "0 25px 50px rgba(255,0,138,0.1)",
    },

    btnPrimary: {
      padding: "18px 42px",
      background: "#000",
      color: "#fff",
      borderRadius: "100px",
      border: "none",
      fontWeight: 600,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      justifyContent: "center",
    },
  };

  return (
    <div style={styles.page}>
      {/* ================= HERO ================= */}
      <section style={styles.heroSection}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            style={{
              color: "#ff008a",
              fontWeight: 700,
              marginBottom: "20px",
              fontSize: "13px",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Scalable Partnership
          </div>

          <h1 style={styles.heroTitle}>
            High-Margin <br />
            <span style={{ color: "#ff008a" }}>Meesho Logistics</span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#555",
              lineHeight: 1.6,
              maxWidth: "560px",
              marginBottom: "40px",
            }}
          >
            Built for enterprise-scale social commerce. We connect manufacturers
            directly to Meesho fulfillment with automation.
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={styles.btnPrimary}
          >
            Start Partnership <MoveRight size={18} />
          </motion.button>
        </motion.div>

        {/* ================= DASHBOARD ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div style={styles.floatingGlass}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  height: 48,
                  width: 48,
                  background: "#000",
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Boxes color="#fff" />
              </div>
              <span
                style={{
                  fontSize: 11,
                  color: "#10b981",
                  fontWeight: 700,
                }}
              >
                ACTIVE HUB
              </span>
            </div>

            <div style={{ marginBottom: "32px" }}>
              <div style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>
                Network Supply Volume
              </div>
              <div style={{ fontSize: 40, fontWeight: 800 }}>
                ₹8,42,90,000+
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ padding: 20, borderRadius: 20, background: "#fafafa" }}>
                <TrendingUp color="#ff008a" />
                <div style={{ fontSize: 20, fontWeight: 700 }}>22.4%</div>
                <div style={{ fontSize: 11, opacity: 0.6 }}>Net Profit</div>
              </div>

              <div style={{ padding: 20, borderRadius: 20, background: "#fafafa" }}>
                <ShieldCheck color="#ff008a" />
                <div style={{ fontSize: 20, fontWeight: 700 }}>98.2%</div>
                <div style={{ fontSize: 11, opacity: 0.6 }}>Delivered</div>
              </div>
            </div>
          </div>

          {!isMobile && (
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{
                marginTop: 24,
                padding: "14px 20px",
                borderRadius: 20,
                background: "#fff",
                boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <Zap color="#ff008a" size={16} />
              <div>
                <strong>Real-time sourcing</strong>
                <div style={{ fontSize: 11, opacity: 0.5 }}>
                  Surat Hub Connected
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* ================= PILLARS ================= */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 8%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: 24,
            maxWidth: 1400,
            margin: "0 auto",
          }}
        >
          {[
            {
              title: "Direct Manufacturing",
              desc: "Work directly with vetted factories. No middlemen.",
              icon: <Globe />,
            },
            {
              title: "RTO Shield",
              desc: "Advanced validation to minimize returns.",
              icon: <Layers />,
            },
            {
              title: "Growth Capital",
              desc: "Systems designed for rapid Meesho scaling.",
              icon: <BarChart3 />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              style={{
                padding: 40,
                borderRadius: 32,
                background: "#fcfcfc",
                border: "1px solid #eee",
              }}
            >
              <div style={{ color: "#ff008a", marginBottom: 24 }}>
                {item.icon}
              </div>
              <h4 style={{ fontSize: 20, fontWeight: 700 }}>{item.title}</h4>
              <p style={{ color: "#666", lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section style={{ padding: isMobile ? "40px 20px" : "80px 8%" }}>
        <div
          style={{
            background: "#000",
            borderRadius: 48,
            padding: isMobile ? "60px 24px" : "100px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h2 style={{ fontSize: "clamp(30px, 5vw, 56px)", fontWeight: 800 }}>
            Join the Enterprise
          </h2>
          <p style={{ opacity: 0.6, maxWidth: 600, margin: "20px auto 40px" }}>
            Meesho commerce is scaling fast. We give you the infrastructure to
            lead.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            style={{ ...styles.btnPrimary, background: "#fff", color: "#000" }}
          >
            Schedule Consultation
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default MeeshoInfinity;
