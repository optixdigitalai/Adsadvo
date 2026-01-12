import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ShieldCheck, ArrowRight, Star, TrendingUp, 
  Zap, Layout, PieChart, Layers, 
  Award, CheckCircle2, Package, Search, 
  MousePointerClick, Rocket, Check, X
} from 'lucide-react';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const AmazonIndiaBest = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    page: { fontFamily: "'Poppins', sans-serif", background: "#fff", color: "#0f172a", overflowX: "hidden" },
    hero: {
      minHeight: "100vh",
      padding: isMobile ? "100px 20px 60px" : "140px 5% 100px",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      color: "#fff",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "60px",
      alignItems: "center",
      position: "relative"
    },
    // Roadmap (Timeline) Styles
    timelineContainer: { position: "relative", padding: "100px 5%", maxWidth: "1200px", margin: "auto" },
    line: {
      position: "absolute",
      left: isMobile ? "30px" : "50%",
      transform: isMobile ? "none" : "translateX(-50%)",
      width: "4px",
      height: "80%",
      background: "linear-gradient(to bottom, #ff7a18, #f1f5f9)",
      top: "200px",
      zIndex: 0,
      borderRadius: "4px"
    },
    pricingGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: "30px",
      maxWidth: "1200px",
      margin: "auto"
    }
  };

  return (
    <div style={styles.page}>
      {/* ================= HERO SECTION WITH REVEAL ================= */}
      <section style={styles.hero}>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          style={{ flex: 1.2 }}
        >
          <motion.div variants={fadeInUp} style={{ display: "inline-block", padding: "8px 16px", background: "rgba(255,122,24,0.15)", borderRadius: "100px", color: "#ff7a18", fontWeight: 700, marginBottom: "20px", fontSize: "14px" }}>
            🚀 OFFICIAL AMAZON GROWTH PARTNER
          </motion.div>
          <motion.h1 variants={fadeInUp} style={{ fontSize: isMobile ? "42px" : "72px", fontWeight: 900, lineHeight: 1, marginBottom: "24px", letterSpacing: "-2px" }}>
            Build Your <span style={{ color: "#ff7a18" }}>Amazon Empire</span> While You Sleep
          </motion.h1>
          <motion.p variants={fadeInUp} style={{ fontSize: "20px", opacity: 0.8, marginBottom: "40px", lineHeight: 1.6 }}>
            The #1 end-to-end automation service in India. We handle the sourcing, 
            the tech, and the shipping. You handle the profits.
          </motion.p>
          <motion.div variants={fadeInUp} style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: "20px 40px", background: "#ff7a18", border: "none", borderRadius: "14px", color: "#fff", fontWeight: 800, cursor: "pointer", boxShadow: "0 20px 40px rgba(255,122,24,0.3)" }}>
              Get Started Now
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ flex: 0.8, width: "100%", background: "#fff", padding: "40px", borderRadius: "32px", color: "#0f172a", boxShadow: "0 50px 100px rgba(0,0,0,0.3)" }}
        >
          <h3 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "8px" }}>Free Audit Call</h3>
          <p style={{ color: "#64748b", marginBottom: "30px" }}>Limited slots available for January 2026.</p>
          <input style={{ width: "100%", padding: "18px", marginBottom: "12px", borderRadius: "12px", border: "2px solid #f1f5f9", fontSize: "16px" }} placeholder="Full Name" />
          <input style={{ width: "100%", padding: "18px", marginBottom: "12px", borderRadius: "12px", border: "2px solid #f1f5f9", fontSize: "16px" }} placeholder="WhatsApp Number" />
          <button style={{ width: "100%", padding: "20px", background: "#ff7a18", color: "#fff", border: "none", borderRadius: "12px", fontWeight: 800, fontSize: "18px", cursor: "pointer" }}>Check Availability</button>
        </motion.div>
      </section>

      {/* ================= ANIMATED ROADMAP ================= */}
      <section style={styles.timelineContainer}>
        <motion.h2 
          initial="hidden" whileInView="visible" variants={fadeInUp}
          style={{ textAlign: "center", fontSize: isMobile ? "36px" : "54px", fontWeight: 900, marginBottom: "80px" }}
        >
          How to Start Your <span style={{ color: "#ff7a18" }}>Business</span>
        </motion.h2>

        <div style={styles.line}></div>

        {[
          { title: "Register Account", desc: "Complete GST and Amazon Professional Seller integration with our help.", icon: <MousePointerClick size={32} /> },
          { title: "Product Hunting", desc: "Using AI to locate high-velocity products with verified 40% margins.", icon: <Search size={32} /> },
          { title: "Supplier Sourcing", desc: "Connecting you directly to our private network of Indian manufacturers.", icon: <Package size={32} /> },
          { title: "Scale to Profits", desc: "Launching Adsadvo's proprietary PPC scripts to drive 7-figure sales.", icon: <Rocket size={32} /> }
        ].map((item, i) => (
          <ScrollRevealWrapper key={i}>
            <div style={{ 
              display: "flex", 
              justifyContent: isMobile ? "flex-start" : (i % 2 === 0 ? "flex-end" : "flex-start"),
              width: isMobile ? "100%" : "50%",
              marginLeft: isMobile ? "60px" : (i % 2 === 0 ? "0" : "50%"),
              padding: "40px",
              position: "relative"
            }}>
              <div style={{ 
                background: "#fff", padding: "30px", borderRadius: "24px", 
                boxShadow: "0 20px 50px rgba(0,0,0,0.05)", border: "1px solid #f1f5f9",
                textAlign: isMobile ? "left" : (i % 2 === 0 ? "right" : "left")
              }}>
                <div style={{ color: "#ff7a18", marginBottom: "15px", display: "flex", justifyContent: isMobile ? "flex-start" : (i % 2 === 0 ? "flex-end" : "flex-start") }}>{item.icon}</div>
                <h4 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "10px" }}>{item.title}</h4>
                <p style={{ color: "#64748b", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
              
              {/* Animated Dot */}
              <div style={{ 
                position: "absolute", 
                left: isMobile ? "-36px" : (i % 2 === 0 ? "calc(100% - 10px)" : "-10px"), 
                top: "60px", 
                width: "20px", height: "20px", background: "#ff7a18", 
                borderRadius: "50%", border: "4px solid #fff", zIndex: 2 
              }}></div>
            </div>
          </ScrollRevealWrapper>
        ))}
      </section>

      {/* ================= COMPARISON SECTION ================= */}
      <section style={{ padding: "100px 5%", background: "#0f172a", color: "#fff" }}>
        <motion.div initial="hidden" whileInView="visible" variants={staggerContainer} style={{ maxWidth: "1200px", margin: "auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "42px", fontWeight: 900, marginBottom: "60px" }}>Adsadvo vs. Other Agencies</h2>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "20px" }}>
            
            <motion.div variants={fadeInUp} style={{ flex: 1, padding: "40px", borderRadius: "24px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <h4 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "25px" }}>Generic Agencies</h4>
              {['Manual Sourcing', 'High Risk of Suspension', 'Slow Growth', 'No India Focus'].map(t => (
                <div key={t} style={{ display: "flex", gap: "10px", marginBottom: "15px", opacity: 0.6 }}><X color="#ef4444" /> {t}</div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} style={{ flex: 1, padding: "40px", borderRadius: "24px", background: "linear-gradient(135deg, #ff7a18, #ff9a44)", transform: isMobile ? "none" : "scale(1.05)", zIndex: 2 }}>
              <h4 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "25px" }}>Adsadvo Partnership</h4>
              {['AI Winner Identification', '100% Policy Safe', '7-Figure Scaling', 'Local Indian Network'].map(t => (
                <div key={t} style={{ display: "flex", gap: "10px", marginBottom: "15px", fontWeight: 600 }}><Check color="#fff" /> {t}</div>
              ))}
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* ================= PRICING CARDS ================= */}
      <section style={{ padding: "100px 5%", background: "#f8fafc" }}>
        <h2 style={styles.sectionHeading}>Pricing Plans</h2>
        <div style={styles.pricingGrid}>
          {[
            { name: "Silver", price: "14,999", features: ["10 Products", "Store Setup", "Supplier List"], popular: false },
            { name: "Gold", price: "34,999", features: ["50 Products", "PPC Management", "Brand Registry"], popular: true },
            { name: "Platinum", price: "54,999", features: ["Full Automation", "Personal Manager", "Unlimited Updates"], popular: false }
          ].map((plan, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              style={{ 
                background: "#fff", padding: "50px 30px", borderRadius: "32px", 
                textAlign: "center", border: plan.popular ? "3px solid #ff7a18" : "1px solid #e2e8f0",
                position: "relative"
              }}
            >
              {plan.popular && <div style={{ position: "absolute", top: "-15px", left: "50%", transform: "translateX(-50%)", background: "#ff7a18", color: "#fff", padding: "5px 20px", borderRadius: "20px", fontSize: "12px", fontWeight: 800 }}>RECOMMENDED</div>}
              <h3 style={{ fontSize: "24px", fontWeight: 800 }}>{plan.name}</h3>
              <div style={{ fontSize: "42px", fontWeight: 900, margin: "20px 0" }}>₹{plan.price}</div>
              <div style={{ marginBottom: "30px" }}>
                {plan.features.map(f => (
                  <div key={f} style={{ marginBottom: "10px", color: "#64748b" }}><CheckCircle2 size={16} color="#10b981" inline /> {f}</div>
                ))}
              </div>
              <button style={{ width: "100%", padding: "15px", borderRadius: "12px", background: plan.popular ? "#ff7a18" : "#0f172a", color: "#fff", border: "none", fontWeight: 700, cursor: "pointer" }}>Select Plan</button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Helper Component for Scroll Animations
const ScrollRevealWrapper = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
};

export default AmazonIndiaBest;