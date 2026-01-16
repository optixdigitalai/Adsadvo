import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ContactForm = ({ defaultService = "" }) => {
    const [service, setService] = useState(defaultService);
    const [success, setSuccess] = useState(false);

    /* ✅ UPDATE SERVICE WHEN PAGE CHANGES */
    useEffect(() => {
        setService(defaultService);
    }, [defaultService]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        fetch("/", {
            method: "POST",
            body: data,
        })
            .then(() => {
                setSuccess(true);
                form.reset();
                setService(defaultService);
                setTimeout(() => setSuccess(false), 4000);
            })
            .catch(() => {
                alert("Something went wrong. Please try again.");
            });
    };

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={styles.card}
                >
                    <h2 style={styles.title}>Let’s Talk 👋</h2>
                    <p style={styles.subtitle}>
                        Contact us for inbound & outbound calling or e-commerce services.
                    </p>

                    {success && (
                        <div style={styles.success}>
                            ✅ Your message has been sent successfully!
                        </div>
                    )}

                    <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                        style={styles.form}
                    >
                        {/* NETLIFY REQUIRED */}
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="hidden" name="bot-field" />

                        <div style={styles.row}>
                            <input
                                name="name"
                                placeholder="Full Name"
                                required
                                style={styles.input}
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                required
                                style={styles.input}
                            />
                        </div>

                        <div style={styles.row}>
                            <input
                                name="phone"
                                placeholder="Phone Number"
                                required
                                style={styles.input}
                            />

                            {/* ✅ CONTROLLED SELECT */}
                            <select
                                name="service"
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                style={styles.input}
                                required
                            >
                                <option value="">Select Service</option>
                                <option value="Amazon">Amazon</option>
                                <option value="Flipkart">Flipkart</option>
                                <option value="Meesho">Meesho</option>
                                <option value="E-commerce Website">E-commerce Website</option>
                                <option value="Inbound Calling">Inbound Calling</option>
                                <option value="Outbound Calling">Outbound Calling</option>

                            </select>
                        </div>

                        <textarea
                            name="message"
                            placeholder="Tell us about your requirement..."
                            required
                            style={styles.textarea}
                        />

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            style={styles.button}
                        >
                            🚀 Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;

/* ================= STYLES ================= */

const styles = {
    section: {
        padding: "80px 20px",
        background: "#f1f5f9",
    },
    container: {
        maxWidth: "720px",
        margin: "auto",
    },
    card: {
        background: "#fff",
        padding: "60px",
        borderRadius: "28px",
        boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
    },
    title: {
        textAlign: "center",
        fontSize: "40px",
        fontWeight: 900,
    },
    subtitle: {
        textAlign: "center",
        marginBottom: "30px",
        color: "#64748b",
    },
    success: {
        background: "linear-gradient(135deg,#22c55e,#16a34a)",
        color: "#fff",
        padding: "14px",
        borderRadius: "12px",
        marginBottom: "20px",
        textAlign: "center",
        fontWeight: 700,
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },

    /* ✅ MOBILE RESPONSIVE FIX */
    row: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
        gap: "20px",
    },

    input: {
        padding: "16px",
        borderRadius: "12px",
        border: "1px solid #cbd5e1",
        fontSize: "16px",
    },
    textarea: {
        padding: "16px",
        borderRadius: "12px",
        border: "1px solid #cbd5e1",
        minHeight: "140px",
        fontSize: "16px",
    },
    button: {
        background: "#ff7a18",
        color: "#fff",
        padding: "18px",
        borderRadius: "14px",
        fontWeight: 900,
        border: "none",
        cursor: "pointer",
        fontSize: "18px",
    },
};
