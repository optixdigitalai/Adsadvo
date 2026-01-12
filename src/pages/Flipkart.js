import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ShoppingBag, ShieldCheck, Zap, BarChart3, 
  Truck, Search, Star, ArrowUpRight, 
  CheckCircle2, PlayCircle, Award, Users,
  Globe, MousePointer2
} from 'lucide-react';

const FlipkartTitan = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    page: {
      background: "#030712", // Deep charcoal/blue
      color: "#f8fafc",
      fontFamily: "'Inter', sans-serif",
      overflowX: "hidden",
    },
    heroSection: {
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: isMobile ? "120px 24px" : "100px 8%",
      background: "radial-gradient(circle at 0% 0%, rgba(40, 116, 240, 0.15) 0%, transparent 40%)",
    },
    gradientText: {
      background: "linear-gradient(to right, #fff, #2874f0)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: 900,
    },
    glassCard: {
      background: "rgba(15, 23, 42, 0.6)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: "40px",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    }
  };

  return (
    <div style={styles.page}>
      {/* Background Glows */}
      <div style={{ position: "fixed", top: "20%", right: "-10%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(40, 116, 240, 0.1) 0%, transparent 70%)", filter: "blur(100px)", zIndex: 0 }} />

      {/* ================= HERO: THE TITAN ENTRANCE ================= */}
      <section style={styles.heroSection}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.2fr 0.8fr", gap: "60px", width: "100%", maxWidth: "1400px", margin: "0 auto" }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "8px 20px", background: "rgba(40, 116, 240, 0.1)", borderRadius: "100px", color: "#2874f0", fontSize: "12px", fontWeight: 800, letterSpacing: "2px", marginBottom: "30px", border: "1px solid rgba(40, 116, 240, 0.2)" }}>
              <Globe size={16} /> GLOBAL INFRASTRUCTURE
            </div>
            <h1 style={{ fontSize: "clamp(48px, 6vw, 92px)", lineHeight: 0.9, marginBottom: "32px", letterSpacing: "-0.05em" }}>
              Own the <br /> 
              <span style={styles.gradientText}>Flipkart Market.</span>
            </h1>
            <p style={{ fontSize: "clamp(18px, 2vw, 22px)", color: "#94a3b8", lineHeight: 1.5, marginBottom: "48px", maxWidth: "600px" }}>
              Scale to 7-figure monthly revenue with our proprietary automation stack. We build, you earn. 
            </p>
            
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(40, 116, 240, 0.4)" }}
                style={{ padding: "24px 48px", background: "#2874f0", color: "#fff", border: "none", borderRadius: "16px", fontWeight: 800, fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}
              >
                Launch Store <ArrowUpRight size={20} />
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ ...styles.glassCard, padding: "50px", position: "relative", overflow: "hidden" }}
          >
            <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "4px", background: "linear-gradient(to right, transparent, #2874f0, transparent)" }} />
            <h3 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "12px" }}>Strategic Audit</h3>
            <p style={{ color: "#94a3b8", marginBottom: "32px" }}>Analyze your market potential today.</p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <input style={{ padding: "20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", outline: "none" }} placeholder="Contact Person" />
              <input style={{ padding: "20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", outline: "none" }} placeholder="Investment Range (₹)" />
              <button style={{ padding: "22px", background: "#fff", color: "#000", border: "none", borderRadius: "12px", fontWeight: 900, fontSize: "16px", cursor: "pointer", marginTop: "10px" }}>Request Partnership</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ROADMAP: THE FLUID BLUEPRINT ================= */}
      <section style={{ padding: "120px 8%", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          <h2 style={{ fontSize: "clamp(36px, 4vw, 64px)", fontWeight: 900, letterSpacing: "-0.03em" }}>The <span style={{color: "#2874f0"}}>Flipkart</span> Protocol</h2>
        </div>

        <div style={{ position: "absolute", left: isMobile ? "30px" : "50%", top: "300px", bottom: "100px", width: "1px", background: "rgba(40, 116, 240, 0.3)", zIndex: 0 }} />

        {[
          { title: "Niche Engineering", desc: "Data-mining the Big Billion Day trends to find 'Invisible Winners'.", icon: <Search size={32} /> },
          { title: "Enterprise Compliance", desc: "Full GST, Brand Registry, and Trademark automation for zero-risk operations.", icon: <ShieldCheck size={32} /> },
          { title: "Tier-1 Supply Chain", desc: "Access exclusive manufacturing hubs with 24-hour fulfillment cycles.", icon: <Truck size={32} /> },
          { title: "Revenue Acceleration", desc: "Algorithmic bidding strategies to dominate Flipkart Search Results.", icon: <Zap size={32} /> }
        ].map((item, i) => (
          <ScrollRevealWrapper key={i}>
            <div style={{ 
              display: "flex", 
              justifyContent: isMobile ? "flex-start" : (i % 2 === 0 ? "flex-end" : "flex-start"),
              width: isMobile ? "100%" : "50%",
              marginLeft: isMobile ? "60px" : (i % 2 === 0 ? "0" : "50%"),
              padding: isMobile ? "20px 0" : "60px 40px",
              position: "relative"
            }}>
              <motion.div 
                whileHover={{ y: -10, borderColor: "rgba(40, 116, 240, 0.5)" }}
                style={{ ...styles.glassCard, padding: "40px", maxWidth: "500px", transition: "0.3s border-color" }}
              >
                <div style={{ color: "#2874f0", marginBottom: "20px" }}>{item.icon}</div>
                <h4 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "16px" }}>{item.title}</h4>
                <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "16px" }}>{item.desc}</p>
              </motion.div>
              
              <div style={{ 
                position: "absolute", 
                left: isMobile ? "-35px" : (i % 2 === 0 ? "calc(100% - 6px)" : "-6px"), 
                top: "100px", width: "12px", height: "12px", background: "#2874f0", 
                borderRadius: "50%", border: "2px solid #030712", zIndex: 2,
                boxShadow: "0 0 15px #2874f0"
              }}></div>
            </div>
          </ScrollRevealWrapper>
        ))}
      </section>

      {/* ================= STATS: THE PROOF OF CONCEPT ================= */}
      <section style={{ padding: "100px 8%", background: "linear-gradient(to bottom, transparent, rgba(40, 116, 240, 0.05), transparent)" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: "40px", maxWidth: "1200px", margin: "auto" }}>
          {[
            { label: "Partner Assets", val: "₹150M+", icon: <BarChart3 color="#2874f0"/> },
            { label: "Global Sellers", val: "850+", icon: <Users color="#2874f0"/> },
            { label: "Trust Index", val: "99.9%", icon: <Star color="#2874f0"/> },
            { label: "Daily Units", val: "12k+", icon: <ShoppingBag color="#2874f0"/> }
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "42px", fontWeight: 900, marginBottom: "8px" }}>{stat.val}</div>
              <div style={{ color: "#64748b", textTransform: "uppercase", fontSize: "12px", letterSpacing: "2px", fontWeight: 700 }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CALL TO ACTION ================= */}
      <section style={{ padding: "150px 8%", textAlign: "center" }}>
        <motion.div 
          whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
          style={{ ...styles.glassCard, padding: isMobile ? "60px 20px" : "100px", background: "radial-gradient(circle at center, rgba(40, 116, 240, 0.2) 0%, #0f172a 100%)" }}
        >
          <h2 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900, marginBottom: "24px" }}>Ready for Dominance?</h2>
          <p style={{ color: "#94a3b8", fontSize: "20px", marginBottom: "48px", maxWidth: "700px", margin: "0 auto 48px" }}>
            The Flipkart landscape is shifting. Secure your position in the next generation of Indian e-commerce.
          </p>
          <button style={{ padding: "26px 64px", background: "#fff", color: "#000", border: "none", borderRadius: "100px", fontWeight: 900, fontSize: "20px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "15px" }}>
            Initialize Partnership <MousePointer2 />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

const ScrollRevealWrapper = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } }
    }}>
      {children}
    </motion.div>
  );
};

export default FlipkartTitan;