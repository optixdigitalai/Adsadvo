import React, { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzLMTft9FzimeNv2uOgfoa0qClDaOYd8YZ0opfEwLTKl6jNJrw15IAwcbekziRQ-DPruA/exec";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formBody = new URLSearchParams(formData).toString();

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      });

      setStatus("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setStatus("❌ Network error. Try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={styles.form}
      className="contact-form"
    >
      {/* Mobile Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .contact-form {
              padding: 24px !important;
              border-radius: 20px !important;
            }

            .contact-form h2 {
              font-size: 22px !important;
            }

            .contact-form p {
              font-size: 13px !important;
            }

            .contact-form .grid {
              grid-template-columns: 1fr !important;
            }

            .contact-form input,
            .contact-form textarea,
            .contact-form select {
              font-size: 15px !important;
              padding: 14px !important;
            }

            .contact-form button {
              padding: 18px !important;
              font-size: 16px !important;
            }
          }
        `}
      </style>

      <h2 style={styles.heading}>Send us a message</h2>
      <p style={styles.subheading}>
        Our experts will contact you within 24 hours
      </p>

      <div style={styles.grid} className="grid">
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <input
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        style={styles.input}
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
        style={styles.input}
      >
        <option value="">Select Service</option>
        <option value="Amazon">Amazon</option>
        <option value="Shopify">E-commerce Website</option>
      </select>

      <textarea
        name="message"
        placeholder="Tell us about your requirement..."
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
        style={styles.textarea}
      />

      <button type="submit" style={styles.button}>
        🚀 Send Message
      </button>

      {status && <p style={styles.status}>{status}</p>}
    </form>
  );
};

export default ContactForm;

/* ================= STYLES ================= */

const styles = {
  form: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "24px",
    boxShadow: "0 30px 60px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "520px",
    width: "100%",
    margin: "0 auto",
  },
  heading: {
    fontSize: "26px",
    fontWeight: "800",
    color: "#0f172a",
  },
  subheading: {
    fontSize: "14px",
    color: "#64748b",
    marginBottom: "10px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "14px",
  },
  input: {
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    fontSize: "14px",
    outline: "none",
    width: "100%",
  },
  textarea: {
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    fontSize: "14px",
    resize: "none",
    width: "100%",
  },
  button: {
    marginTop: "10px",
    background: "linear-gradient(135deg,#3b82f6,#2563eb)",
    color: "#fff",
    padding: "16px",
    borderRadius: "14px",
    border: "none",
    fontWeight: "700",
    fontSize: "15px",
    cursor: "pointer",
  },
  status: {
    marginTop: "10px",
    fontWeight: "600",
    fontSize: "14px",
  },
};
