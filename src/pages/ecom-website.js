import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  ShieldCheck, Zap, BarChart3, 
  ArrowRight, Code, Palette, 
  CheckCircle2, Globe, Activity,
  Users, Award, TrendingUp,
  LayoutDashboard, Server
} from 'lucide-react';

const EcomProfessional = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const steps = [
    { title: "Architecture", icon: <Server size={24} />, desc: "Deploying high-availability cloud infrastructure and custom headless architectures for sub-second performance." },
    { title: "Psychology Design", icon: <Palette size={24} />, desc: "Implementing conversion-optimized UI/UX based on consumer behavior data and heatmap analysis." },
    { title: "Global Logistics", icon: <Globe size={24} />, desc: "Integrated cross-border payment gateways and automated supply chain synchronization for global scale." },
    { title: "Growth Analytics", icon: <BarChart3 size={24} />, desc: "Data-driven scaling using Meta CAPI and Google Analytics 4 for high-precision attribution." }
  ];

  const styles = {
    page: { background: "#ffffff", color: "#0f172a", fontFamily: "'Inter', sans-serif", overflowX: "hidden" },
    navbar: { position: "fixed", top: 0, width: "100%", height: "4px", background: "#2563eb", zIndex: 1000, scaleX },
    hero: { padding: isMobile ? "100px 24px" : "160px 8%", background: "radial-gradient(circle at 90% 10%, #f1f5f9 0%, #ffffff 50%)", position: "relative" },
    roadmapLine: { position: "absolute", left: isMobile ? "30px" : "50%", top: "400px", bottom: "100px", width: "1px", background: "#e2e8f0", display: "block" },
    card: { background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "24px", padding: "40px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }
  };

  return (
    <div style={styles.page}>
      <motion.div style={styles.navbar} />
      
      {/* ================= HERO SECTION ================= */}
      <section style={styles.hero}>
        <div style={{ maxWidth: "1400px", margin: "auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.2fr 0.8fr", gap: "60px", alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#eff6ff", padding: "8px 16px", borderRadius: "100px", color: "#2563eb", fontSize: "12px", fontWeight: 700, letterSpacing: "1px", marginBottom: "24px" }}>
              <Award size={16} /> ENTERPRISE SOLUTIONS
            </div>
            <h1 style={{ fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 800, lineHeight: 1.1, color: "#1e293b", marginBottom: "24px" }}>
              Scale Your DTC <span style={{ color: "#2563eb" }}>Global Storefront</span> Without Friction
            </h1>
            <p style={{ fontSize: "18px", color: "#64748b", marginBottom: "40px", lineHeight: 1.6, maxWidth: "600px" }}>
              Access the exact technical infrastructure and growth blueprint used by India's fastest-growing e-commerce brands.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button style={{ padding: "18px 40px", background: "#2563eb", color: "#fff", border: "none", borderRadius: "12px", fontWeight: 700, fontSize: "16px", cursor: "pointer" }}>Get Started Now</button>
              <button style={{ padding: "18px 40px", background: "#fff", color: "#1e293b", border: "1px solid #e2e8f0", borderRadius: "12px", fontWeight: 700, fontSize: "16px", cursor: "pointer" }}>View Case Studies</button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ ...styles.card, background: "#0f172a", color: "#fff" }}>
            <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>Request Strategy Audit</h3>
            <p style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "24px" }}>Analyze your brand's growth potential.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <input style={{ padding: "16px", background: "#1e293b", border: "1px solid #334155", borderRadius: "8px", color: "#fff" }} placeholder="Full Name" />
              <input style={{ padding: "16px", background: "#1e293b", border: "1px solid #334155", borderRadius: "8px", color: "#fff" }} placeholder="Contact Number" />
              <select style={{ padding: "16px", background: "#1e293b", border: "1px solid #334155", borderRadius: "8px", color: "#fff" }}>
                <option>Select Investment Tier</option>
                <option>₹5L - ₹10L</option>
                <option>₹10L+</option>
              </select>
              <button style={{ padding: "18px", background: "#2563eb", color: "#fff", border: "none", borderRadius: "8px", fontWeight: 700, cursor: "pointer" }}>Initalize Audit</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONNECTED BLUEPRINT ================= */}
      <section style={{ padding: "100px 5%", position: "relative" }}>
        <div style={styles.roadmapLine} />
        <h2 style={{ textAlign: "center", fontSize: "42px", fontWeight: 800, marginBottom: "80px" }}>The Connected <span style={{ color: "#2563eb" }}>Blueprint</span></h2>
        
        {steps.map((step, i) => (
          <div key={i} style={{ display: "flex", justifyContent: isMobile ? "flex-start" : (i % 2 === 0 ? "flex-start" : "flex-end"), width: "100%", padding: "40px 0", position: "relative" }}>
            {!isMobile && (
              <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "12px", height: "12px", background: "#2563eb", borderRadius: "50%", zIndex: 10, border: "4px solid #fff" }} />
            )}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} style={{ ...styles.card, width: isMobile ? "100%" : "45%", marginLeft: isMobile ? "60px" : "0" }}>
              <div style={{ color: "#2563eb", marginBottom: "16px" }}>{step.icon}</div>
              <h4 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>{step.title}</h4>
              <p style={{ color: "#64748b", lineHeight: 1.6 }}>{step.desc}</p>
            </motion.div>
          </div>
        ))}
      </section>

      {/* ================= COMPARISON FRAMEWORK ================= */}
      <section style={{ padding: "100px 8%", background: "#f8fafc" }}>
        <h2 style={{ textAlign: "center", fontSize: "42px", fontWeight: 800, marginBottom: "60px" }}>Why Enterprise Partners Choose Us</h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr 1fr", gap: "20px", maxWidth: "1200px", margin: "auto" }}>
          <div style={{ ...styles.card, opacity: 0.6 }}>
            <h4 style={{ marginBottom: "24px" }}>Standard Agencies</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li>✕ Template-based design</li>
              <li>✕ Manual fulfillment</li>
              <li>✕ Basic pixel tracking</li>
            </ul>
          </div>
          <div style={{ ...styles.card, border: "2px solid #2563eb", transform: "scale(1.05)" }}>
            <h4 style={{ marginBottom: "24px", color: "#2563eb", fontWeight: 800 }}>DTC Nexus Protocol</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li><CheckCircle2 size={18} color="#2563eb" /> Custom Headless Architecture</li>
              <li><CheckCircle2 size={18} color="#2563eb" /> Automated Supply Chain Sync</li>
              <li><CheckCircle2 size={18} color="#2563eb" /> Advanced CAPI Tracking</li>
              <li><CheckCircle2 size={18} color="#2563eb" /> 24/7 Enterprise Support</li>
            </ul>
          </div>
          <div style={{ ...styles.card, opacity: 0.6 }}>
            <h4 style={{ marginBottom: "24px" }}>Freelance Setup</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li>✕ No scaling infrastructure</li>
              <li>✕ High risk of downtime</li>
              <li>✕ Limited data security</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= TIERED PRICING ================= */}
      <section style={{ padding: "100px 8%" }}>
        <h2 style={{ textAlign: "center", fontSize: "42px", fontWeight: 800, marginBottom: "60px" }}>Strategic Growth Tiers</h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "30px", maxWidth: "1200px", margin: "auto" }}>
          {[
            { name: "Silver", price: "4,999", color: "#64748b" },
            { name: "Gold", price: "14,999", color: "#2563eb", popular: true },
            { name: "Platinum", price: "29,999", color: "#1e293b" }
          ].map((plan, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} style={{ ...styles.card, borderColor: plan.popular ? "#2563eb" : "#e2e8f0" }}>
              {plan.popular && <div style={{ background: "#2563eb", color: "#fff", fontSize: "11px", fontWeight: 800, padding: "4px 12px", borderRadius: "100px", position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)" }}>MOST POPULAR</div>}
              <h4 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "10px" }}>{plan.name} Tier</h4>
              <div style={{ fontSize: "48px", fontWeight: 800, marginBottom: "30px" }}>₹{plan.price}</div>
              <ul style={{ listStyle: "none", padding: 0, textAlign: "left", marginBottom: "40px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ color: "#64748b" }}><ShieldCheck size={16} color="#2563eb" /> Infrastructure Setup</li>
                <li style={{ color: "#64748b" }}><ShieldCheck size={16} color="#2563eb" /> Global Payments</li>
                <li style={{ color: "#64748b" }}><ShieldCheck size={16} color="#2563eb" /> Growth Dashboard</li>
              </ul>
              <button style={{ width: "100%", padding: "16px", borderRadius: "12px", border: "none", background: plan.popular ? "#2563eb" : "#0f172a", color: "#fff", fontWeight: 800, cursor: "pointer" }}>Initialize Plan</button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EcomProfessional;