import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Global styles
import "./styles/global.css";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// ================= Lazy-loaded main pages =================
const Home = lazy(() => import("./pages/Home"));
const Pricing = lazy(() => import("./pages/Pricing"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const Dropshipping = lazy(() => import("./pages/Dropshipping"));

// ================= Amazon pages =================
const AmazonIndia = lazy(() => import("./pages/AmazonIndia"));
const AmazonInternational = lazy(() =>
  import("./pages/AmazonInternational")
);

// ================= Our Team page =================
const OurTeam = lazy(() => import("./pages/Ourteam"));

// ================= Service pages =================
const Flipkart = lazy(() => import("./pages/Flipkart"));
const Meesho = lazy(() => import("./pages/meesho"));
const EcomWebsite = lazy(() => import("./pages/ecom-website"));

// ================= Policy pages =================
const PrivacyPolicy = lazy(() =>
  import("./pages/policies/PrivacyPolicy")
);
const TermsAndConditions = lazy(() =>
  import("./pages/policies/TermsAndConditions")
);
const RefundPolicy = lazy(() =>
  import("./pages/policies/RefundPolicy")
);
const ShippingPolicy = lazy(() =>
  import("./pages/policies/ShippingPolicy")
);
// const Support = lazy(() =>
//   import("./pages/policies/Support")
// );

function App() {
  return (
    <>
      <Header />

      <Suspense
        fallback={
          <div
            style={{
              minHeight: "60vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#0b1c2d",
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Loading...
          </div>
        }
      >
        <Routes>
          {/* ================= Main Pages ================= */}
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dropshipping" element={<Dropshipping />} />

          {/* ================= Our Team ================= */}
          <Route path="/our-team" element={<OurTeam />} />

          {/* ================= Amazon ================= */}
          <Route path="/amazonindia" element={<AmazonIndia />} />
          <Route
            path="/amazon-international"
            element={<AmazonInternational />}
          />

          {/* ================= Services ================= */}
          <Route path="/flipkart" element={<Flipkart />} />
          <Route path="/meesho" element={<Meesho />} />
          <Route path="/ecom-website" element={<EcomWebsite />} />

          {/* ================= Policies ================= */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          {/* <Route path="/support" element={<Support />} /> */}

          {/* ================= Fallback ================= */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
