import React, { useState, useEffect, useRef } from "react";

// Update imports to use relative paths
import abhiImg from '../assets/images/abbi.png';
import tanish from '../assets/images/kanishhh.png';
import saurabh from '../assets/images/saurabh.png';
import sir from '../assets/images/sir.png';

const teamMembers = [
  {
    name: "Ravi Ranjan",
    role: "Founder",
    image: sir,
    bio: "Ravi Ranjan is a seasoned IT leader with over 20+ years of experience in the IT industry. As the Founder of AdShadow, he brings deep expertise in building scalable technology ecosystems, driving digital transformation, and leading high-impact enterprise projects.",
    social: { linkedin: "#", twitter: "#" },
    expertise: [
      "Cloud Infrastructure",
      "Software Architecture",
      "Project Management",
      "IT Strategy",
      "Process Optimization"
    ],
    quote: "Strong technology foundations create unstoppable businesses.",
    color: "#FF6B35",
    achievements: [
      "20+ years of leadership in IT",
      "Built and scaled enterprise platforms",
      "Led complete project lifecycles"
    ]
  },
  {
    name: "Abhishek Pandey",
    role: "CEO & Digital Strategist",
    image: abhiImg,
    bio: "Abhishek Pandey is a digital marketing expert known for his data-driven approach to growth. He specializes in performance marketing, business scaling strategies, and building profitable e-commerce brands.",
    social: { linkedin: "#", twitter: "#" },
    expertise: [
      "Digital Marketing",
      "Growth Strategy",
      "Performance Marketing",
      "E-commerce Scaling",
      "Data Analytics"
    ],
    quote: "Growth happens when data meets execution.",
    color: "#3B82F6",
    achievements: [
      "Scaled multiple brands profitably",
      "Built data-first marketing frameworks",
      "Optimized conversion funnels"
    ]
  },
  {
    name: "Kanishka",
    role: "Influencer Marketing Lead",
    image: tanish,
    bio: "Kanishka is an influencer marketing and social media branding expert. She focuses on building authentic digital identities, managing influencer collaborations, and creating high-impact content strategies.",
    social: { instagram: "#", twitter: "#" },
    expertise: [
      "Influencer Marketing",
      "Social Media Strategy",
      "Content Creation",
      "Brand Building",
      "Campaign Management"
    ],
    quote: "Authenticity is the currency of modern branding.",
    color: "#8B5CF6",
    achievements: [
      "Executed high-performing campaigns",
      "Built creator-brand ecosystems",
      "Boosted organic engagement"
    ]
  },
  {
    name: "Saurabh Srivastava",
    role: "Lead Developer",
    image: saurabh,
    bio: "Saurabh Srivastava is a full-stack developer focused on building robust, scalable, and high-performance platforms. He specializes in web development, system architecture, and DevOps.",
    social: { linkedin: "#", github: "#" },
    expertise: [
      "Web Development",
      "System Architecture",
      "Performance Optimization",
      "DevOps",
      "Full-stack Development"
    ],
    quote: "Performance and scalability are built, not patched.",
    color: "#10B981",
    achievements: [
      "Designed scalable architectures",
      "Improved system performance",
      "Implemented automation pipelines"
    ]
  }
];

const companyInfo = {
  name: "AdsAdvo",
  description: "At AdsAdvo, our greatest strength is our people. We are a diverse and dedicated team of professionals who share a common goal — to build scalable, sustainable, and performance-driven e-commerce businesses.",
  mission: "We don't just build stores or run ads. We build businesses designed for long-term success through collaboration, innovation, and data-driven decisions.",
  stats: [
    { value: "12+", label: "Stores Built" },
    { value: "19+", label: "Team Members" },
    { value: "$4.8K+", label: "Ad Spend Managed" },
    { value: "98%", label: "Client Satisfaction" }
  ],
  values: [
    { title: "Ownership", desc: "Taking full responsibility for outcomes" },
    { title: "Transparency", desc: "Open communication and honesty" },
    { title: "Learning", desc: "Continuous improvement and growth" },
    { title: "Client-First", desc: "Putting clients at the center" },
    { title: "Ethical Growth", desc: "Sustainable and responsible scaling" }
  ]
};

const SocialIcon = ({ platform }) => {
  const icons = {
    linkedin: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
    twitter: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",
    github: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.08-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    instagram: "M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2m0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5M12 7a5 5 0 110 10 5 5 0 010-10m0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7m4.25-.75a1 1 0 110 2 1 1 0 010-2"
  };

  return (
    <svg 
      className="social-icon" 
      viewBox="0 0 24 24" 
      width="20" 
      height="20"
      aria-label={`${platform} icon`}
    >
      <path d={icons[platform]} fill="currentColor" />
    </svg>
  );
};

const TeamCard = ({ member, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`team-card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-label={`${member.name} profile card. Click to ${isFlipped ? 'show image' : 'view details'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front">
          <div className="image-container">
            <div className={`image-wrapper ${imageLoaded ? 'loaded' : ''}`}>
              <img
                src={member.image}
                alt={`Professional portrait of ${member.name}`}
                className="profile-image"
                loading="lazy"
                width="400"
                height="500"
                onLoad={() => setImageLoaded(true)}
              />
              
              {!imageLoaded && (
                <div className="image-skeleton">
                  <div className="skeleton-shimmer" />
                </div>
              )}
              
              <div className="image-overlay">
                <div className="overlay-gradient" />
              </div>
              
              <div className="card-content">
                <div className="text-content">
                  <h3 className="member-name">{member.name}</h3>
                  <div 
                    className="role-badge"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.role}
                  </div>
                  <p className="card-quote">"{member.quote}"</p>
                </div>
                <div className="flip-indicator">
                  <span>View Details</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <div className="back-content">
            <div className="back-header">
              <div className="back-image-section">
                <div className="back-image-wrapper">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="back-profile-image"
                    loading="lazy"
                  />
                  <div 
                    className="back-image-glow" 
                    style={{ backgroundColor: member.color }}
                  />
                </div>
                <div className="back-titles">
                  <h3>{member.name}</h3>
                  <p 
                    className="back-role" 
                    style={{ color: member.color }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
              
              <div className="header-social">
                {Object.entries(member.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    className="social-link-header"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{ backgroundColor: member.color }}
                    aria-label={`Visit ${member.name}'s ${platform}`}
                  >
                    <SocialIcon platform={platform} />
                  </a>
                ))}
              </div>
            </div>

            <div className="back-body">
              <div className="section bio-section">
                <div className="section-header">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: member.color }}>
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM13 7H11V9H13V7ZM13 11H11V17H13V11Z" fill="currentColor"/>
                  </svg>
                  <h4>About</h4>
                </div>
                <p className="member-bio">{member.bio}</p>
              </div>

              <div className="section expertise-section">
                <div className="section-header">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: member.color }}>
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM13 7H11V9H13V7ZM13 11H11V17H13V11Z" fill="currentColor"/>
                  </svg>
                  <h4>Expertise</h4>
                </div>
                <div className="expertise-grid">
                  {member.expertise.map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="expertise-item"
                      style={{ 
                        backgroundColor: member.color + '15',
                        borderColor: member.color + '30'
                      }}
                    >
                      <span style={{ color: member.color }}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section achievements-section">
                <div className="section-header">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: member.color }}>
                    <path d="M20 6H12L10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V6H9.17L11.17 8H20V18ZM12 16C13.66 16 15 14.66 15 13C15 11.34 13.66 10 12 10C10.34 10 9 11.34 9 13C9 14.66 10.34 16 12 16Z" fill="currentColor"/>
                  </svg>
                  <h4>Key Achievements</h4>
                </div>
                <div className="achievements-list">
                  {member.achievements.map((achievement, idx) => (
                    <div key={idx} className="achievement-item">
                      <div 
                        className="achievement-bullet" 
                        style={{ backgroundColor: member.color }}
                      />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button 
              className="flip-back-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              style={{ backgroundColor: member.color }}
              aria-label="Back to profile image"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurTeam = () => {
  const [visibleCards, setVisibleCards] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setTimeout(() => {
              setVisibleCards(prev => Math.max(prev, index + 1));
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.team-card');
    cards.forEach((card, index) => {
      card.dataset.index = index;
      observerRef.current?.observe(card);
    });
  }, []);

  return (
    <div className="our-team-page">
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>MEET OUR TEAM</span>
            </div>
            <h1 className="hero-title">
              The Minds Behind <span className="highlight">AdsAdvo</span>
            </h1>
            <p className="hero-subtitle">
              Discover the expertise, achievements, and stories of the professionals 
              driving innovation in e-commerce.
            </p>
            
            <div className="hero-stats">
              {companyInfo.stats.map((stat, index) => (
                <div key={index} className="hero-stat">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-text">
              <h2>Our Philosophy</h2>
              <p className="philosophy-description">{companyInfo.description}</p>
              <p className="philosophy-mission">{companyInfo.mission}</p>
            </div>
            
            <div className="values-grid">
              {companyInfo.values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-number">0{index + 1}</div>
                  <div className="value-content">
                    <h3>{value.title}</h3>
                    <p>{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-subtitle">
              Click on any card to explore detailed profiles
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="team-card-wrapper"
                style={{ 
                  opacity: index < visibleCards ? 1 : 0,
                  transform: index < visibleCards ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease ${index * 100}ms`
                }}
              >
                <TeamCard member={member} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build With Experts?</h2>
            <p>Partner with our team of proven professionals to scale your e-commerce business.</p>
            <button className="cta-button">
              Schedule a Consultation
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M14 5L12 7L15 10H3V12H15L12 15L14 17L21 11L14 5Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .our-team-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          color: #1a202c;
          background: #f8fafc;
          overflow-x: hidden;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 120px 0 100px;
          color: white;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
        }

        .hero-content {
          position: relative;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 12px 24px;
          margin-bottom: 32px;
        }

        .hero-badge span {
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 1.5px;
        }

        .hero-title {
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .highlight {
          color: #FF6B35;
        }

        .hero-subtitle {
          font-size: clamp(16px, 2vw, 20px);
          color: #cbd5e1;
          max-width: 700px;
          margin: 0 auto 60px;
          line-height: 1.6;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: clamp(30px, 5vw, 60px);
          flex-wrap: wrap;
        }

        .hero-stat {
          text-align: center;
        }

        .stat-value {
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 800;
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 8px;
          line-height: 1;
        }

        .stat-label {
          font-size: 14px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        /* Philosophy Section */
        .philosophy-section {
          padding: 100px 0;
          background: white;
        }

        .philosophy-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .philosophy-text h2 {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 24px;
          text-align: center;
        }

        .philosophy-description {
          font-size: clamp(16px, 2vw, 20px);
          color: #475569;
          line-height: 1.7;
          margin-bottom: 16px;
          text-align: center;
        }

        .philosophy-mission {
          font-size: clamp(14px, 1.8vw, 18px);
          color: #64748b;
          font-style: italic;
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .value-card {
          background: white;
          border-radius: 20px;
          padding: 24px;
          border: 2px solid #e2e8f0;
          display: flex;
          gap: 20px;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border-color: #FF6B35;
        }

        .value-number {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .value-content h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .value-content p {
          font-size: 14px;
          color: #64748b;
          line-height: 1.5;
        }

        /* Team Section */
        .team-section {
          padding: 100px 0;
          background: #f8fafc;
        }

        .section-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 60px;
        }

        .section-title {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 16px;
        }

        .section-subtitle {
          font-size: 18px;
          color: #64748b;
          line-height: 1.6;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        .team-card-wrapper {
          transition: all 0.6s ease;
        }

        /* Team Card */
        .team-card {
          perspective: 1500px;
          height: 500px;
          cursor: pointer;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          background: white;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .team-card.flipped .card-inner {
          transform: rotateY(180deg);
        }

        .card-front, .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 24px;
          overflow: hidden;
        }

        .card-front {
          background: #1a1a1a;
        }

        .card-back {
          background: white;
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
        }

        /* Front Card */
        .image-container {
          position: relative;
          height: 100%;
          width: 100%;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.8s ease;
          opacity: 1;
          filter: brightness(0.95);
        }

        .team-card:hover .profile-image {
          transform: scale(1.05);
        }

        .image-skeleton {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #2d2d2d 25%, #3d3d3d 50%, #2d2d2d 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }

        @keyframes loading {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .skeleton-shimmer {
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            rgba(255, 255, 255, 0) 0%, 
            rgba(255, 255, 255, 0.1) 50%, 
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .overlay-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60%;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            transparent 100%
          );
        }

        .card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 32px;
          z-index: 2;
        }

        .text-content {
          margin-bottom: 20px;
        }

        .member-name {
          font-size: 28px;
          font-weight: 800;
          color: white;
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .role-badge {
          display: inline-block;
          padding: 8px 20px;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
          backdrop-filter: blur(10px);
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .card-quote {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          line-height: 1.5;
          font-style: italic;
          margin: 0;
        }

        .flip-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          font-size: 13px;
          font-weight: 500;
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }

        .team-card:hover .flip-indicator {
          opacity: 1;
        }

        /* Back Card */
        .back-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .back-header {
          padding: 24px;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .back-image-section {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .back-image-wrapper {
          position: relative;
          width: 64px;
          height: 64px;
          flex-shrink: 0;
        }

        .back-profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          position: relative;
          z-index: 2;
        }

        .back-image-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          filter: blur(10px);
          opacity: 0.3;
          z-index: 1;
        }

        .back-titles h3 {
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 4px;
          line-height: 1.2;
        }

        .back-role {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin: 0;
        }

        .header-social {
          display: flex;
          gap: 8px;
        }

        .social-link-header {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link-header:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .back-body {
          padding: 24px;
          flex: 1;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 transparent;
        }

        .back-body::-webkit-scrollbar {
          width: 6px;
        }

        .back-body::-webkit-scrollbar-track {
          background: transparent;
        }

        .back-body::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 3px;
        }

        .section {
          margin-bottom: 24px;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .section-header h4 {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .member-bio {
          font-size: 14px;
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 8px;
        }

        .expertise-item {
          padding: 8px 12px;
          border-radius: 8px;
          border: 1.5px solid;
          font-size: 12px;
          font-weight: 500;
          text-align: center;
          transition: transform 0.2s ease;
        }

        .expertise-item:hover {
          transform: translateY(-2px);
        }

        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .achievement-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .achievement-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
        }

        .achievement-item span {
          font-size: 13px;
          color: #475569;
          line-height: 1.5;
        }

        .flip-back-btn {
          margin: 20px 24px 24px;
          padding: 14px;
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .flip-back-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        /* CTA Section */
        .cta-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          color: white;
          text-align: center;
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          margin-bottom: 16px;
          line-height: 1.1;
        }

        .cta-content p {
          font-size: 18px;
          color: #cbd5e1;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .cta-button {
          background: linear-gradient(135deg, #FF6B35 0%, #3B82F6 100%);
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 80px 0 60px;
          }
          
          .philosophy-section, .team-section, .cta-section {
            padding: 80px 0;
          }
          
          .team-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }
          
          .back-header {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }
          
          .back-image-section {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 16px;
          }
          
          .team-card {
            height: 450px;
          }
          
          .member-name {
            font-size: 24px;
          }
          
          .back-body {
            padding: 20px;
          }
          
          .expertise-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default OurTeam;