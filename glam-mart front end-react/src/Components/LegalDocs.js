import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Health <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Welcome to Health Plus, your trusted online healthcare platform. Our
          mission is to provide accessible and personalized healthcare services
          to individuals seeking expert medical advice and treatment. By using
          our platform, you agree to the terms outlined in our Privacy Policy
          and Terms of Service.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy is paramount to us. Our Privacy Policy outlines how we
          collect, use, and protect your personal and medical information. We
          ensure secure data handling, and you can trust that your information
          is treated with the utmost confidentiality.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          When using Health Plus, you agree to our Terms of Service. This
          includes guidelines for using our platform, interacting with doctors,
          and the responsibilities of both parties. It's essential to understand
          these terms to ensure a smooth experience for all users.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
          
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
         
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Health+. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
