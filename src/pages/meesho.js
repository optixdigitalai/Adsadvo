import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Truck, ShieldCheck, 
  Database, Zap, BarChart3, 
  ArrowUpRight, Globe, Layers, 
  Boxes, MoveRight, Smartphone, Activity
} from 'lucide-react';

const MeeshoInfinity = () => {
  // Real-time responsive detection for complex logic
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const styles = {
    page: {
      background: "#ffffff",
      color: "#0a0a0a",
      fontFamily: "'Inter', system-ui, sans-serif",
      overflowX: "hidden",
    },
    // Dynamic Responsive Hero
    heroSection: {
      position: "relative",
      minHeight: isMobile ? "auto" : "90vh",
      padding: isMobile ? "120px 20px 60px" : "160px 8% 100px",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.2fr 0.8fr",
      alignItems: "center",
      gap: "40px",
      maxWidth: "1400px",
      margin: "0 auto",
    },
    // Advanced Typography (Fluid)
    heroTitle: {
      fontSize: "clamp(40px, 6vw, 84px)", // Perfectly scales from mobile to 4k
      fontWeight: 900,
      lineHeight: 0.95,
      letterSpacing: "-0.04em",
      marginBottom: "24px",
      color: "#000",
    },
    // Floating Glass elements
    floatingGlass: {
      background: "rgba(255, 255, 255, 0.7)",
      backdropFilter: "blur(25px)",
      WebkitBackdropFilter: "blur(25px)",
      border: "1px solid rgba(0,0,0,0.06)",
      borderRadius: "32px",
      padding: isMobile ? "24px" : "40px",
      boxShadow: "0 25px 50px -12px rgba(255, 0, 138, 0.1)",
    },
    btnPrimary: {
      padding: "clamp(16px, 2vw, 22px) clamp(30px, 4vw, 50px)",
      background: "#000",
      color: "#fff",
      borderRadius: "100px",
      border: "none",
      fontWeight: 600,
      fontSize: "16px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      width: isMobile ? "100%" : "auto",
      justifyContent: "center",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
    }
  };

  return (
    <div style={styles.page}>
      {/* Background Beauty Elements */}
      <div style={{ position: "fixed", top: "10%", right: "-5%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(255,0,138,0.06) 0%, transparent 70%)", zMount: 0, filter: "blur(100px)" }} />
      <div style={{ position: "fixed", bottom: "10%", left: "-5%", width: "30vw", height: "30vw", background: "radial-gradient(circle, rgba(0,180,255,0.04) 0%, transparent 70%)", zMount: 0, filter: "blur(80px)" }} />

      {/* ================= HERO SECTION ================= */}
      <section style={styles.heroSection}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#ff008a", fontWeight: 700, marginBottom: "20px", fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase" }}>
            <Activity size={16} /> Scalable Partnership
          </div>
          <h1 style={styles.heroTitle}>
            High-Margin <br />
            <span style={{ color: "#ff008a" }}>Meesho Logistics.</span>
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#555", lineHeight: 1.6, marginBottom: "40px", maxWidth: "560px" }}>
            Engineered for high-volume enterprise operations. We bridge the gap between Tier-1 manufacturing and automated social-commerce fulfillment.
          </p>
          <div style={{ display: "flex", gap: "16px", flexDirection: isMobile ? "column" : "row" }}>
            <motion.button 
              whileHover={{ scale: 1.02, background: "#ff008a" }}
              whileTap={{ scale: 0.98 }}
              style={styles.btnPrimary}
            >
              Start Partnership <MoveRight size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* ADAPTIVE DASHBOARD UI */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ width: "100%", position: "relative" }}
        >
          <div style={styles.floatingGlass}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "32px" }}>
              <div style={{ height: "48px", width: "48px", background: "#000", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Boxes color="#fff" size={24} />
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#10b981", background: "rgba(16, 185, 129, 0.1)", padding: "4px 12px", borderRadius: "100px" }}>ACTIVE HUB</div>
              </div>
            </div>

            <div style={{ marginBottom: "32px" }}>
              <span style={{ fontSize: "13px", color: "#888", fontWeight: 600 }}>Network Supply Volume</span>
              <div style={{ fontSize: isMobile ? "32px" : "44px", fontWeight: 800, marginTop: "4px" }}>₹8,42,90,000+</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ padding: "20px", background: "rgba(0,0,0,0.02)", borderRadius: "20px", border: "1px solid rgba(0,0,0,0.02)" }}>
                <TrendingUp size={18} color="#ff008a" />
                <div style={{ fontSize: "20px", fontWeight: 700, marginTop: "8px" }}>22.4%</div>
                <div style={{ fontSize: "11px", opacity: 0.5 }}>Net Profit Avg.</div>
              </div>
              <div style={{ padding: "20px", background: "rgba(0,0,0,0.02)", borderRadius: "20px", border: "1px solid rgba(0,0,0,0.02)" }}>
                <ShieldCheck size={18} color="#ff008a" />
                <div style={{ fontSize: "20px", fontWeight: 700, marginTop: "8px" }}>98.2%</div>
                <div style={{ fontSize: "11px", opacity: 0.5 }}>Delivered Rate</div>
              </div>
            </div>
          </div>

          {/* Secondary Mobile Hidden Graphic */}
          {!isMobile && (
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", bottom: "-30px", left: "-30px", background: "#fff", padding: "16px 24px", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: "12px", border: "1px solid #f0f0f0" }}
            >
              <div style={{ background: "#fef2f2", padding: "8px", borderRadius: "12px" }}><Zap size={16} color="#ff008a" /></div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700 }}>Real-time Sourcing</div>
                <div style={{ fontSize: "11px", opacity: 0.5 }}>Connecting to Surat Hub...</div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* ================= PILLAR SECTION ================= */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 8%" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "24px", maxWidth: "1400px", margin: "0 auto" }}>
          {[
            { 
              title: "Direct Manufacturing", 
              desc: "Eliminate middleman costs by connecting directly to our vetted factory network.",
              icon: <Globe size={28} />
            },
            { 
              title: "RTO Shield", 
              desc: "Advanced address validation and customer intent tracking to minimize returns.",
              icon: <Layers size={28} />
            },
            { 
              title: "Growth Capital", 
              desc: "Flexible inventory management systems designed for rapid Meesho scaling.",
              icon: <BarChart3 size={28} />
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              style={{ 
                padding: "40px", 
                borderRadius: "32px", 
                background: "#fcfcfc", 
                border: "1px solid #f1f1f1",
                transition: "all 0.3s ease"
              }}
            >
              <div style={{ color: "#ff008a", marginBottom: "24px" }}>{item.icon}</div>
              <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>{item.title}</h4>
              <p style={{ color: "#666", fontSize: "15px", lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA: THE ENDING ================= */}
      <section style={{ padding: isMobile ? "40px 20px" : "80px 8%" }}>
        <div style={{ 
          background: "#000", 
          borderRadius: "48px", 
          padding: isMobile ? "60px 24px" : "100px", 
          textAlign: "center",
          color: "#fff",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle at 50% 10%, rgba(255,0,138,0.2) 0%, transparent 70%)" }} />
          <h2 style={{ fontSize: "clamp(30px, 5vw, 56px)", fontWeight: 800, marginBottom: "20px", position: "relative" }}>Join the Enterprise.</h2>
          <p style={{ fontSize: "18px", opacity: 0.6, marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px", position: "relative" }}>
            The India social-commerce market is moving fast. We provide the speed you need to lead.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            style={{ ...styles.btnPrimary, background: "#fff", color: "#000", margin: "0 auto", position: "relative" }}
          >
            Schedule Consultation
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default MeeshoInfinity;