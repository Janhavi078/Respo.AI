import React from 'react';
import { Mail, Phone, MapPin, Globe, Github, Twitter, Linkedin } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-icon">R</div>
            <span>RespoAI</span>
          </div>
          <p>Helping professionals optimize their job applications and land their dream careers with AI-powered tools.</p>
          <div className="social-links">
            <Github size={18} />
            <Twitter size={18} />
            <Linkedin size={18} />
          </div>
        </div>

        {/* Services Column */}
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li>CV Scoring (ATS)</li>
            <li>Job Matching Score</li>
            <li>Cover Letter Generator</li>
            <li>Salary Estimator</li>
            <li>AI Resume Builder</li>
          </ul>
        </div>

        {/* Portfolio Feature Column */}
        <div className="footer-links">
          <h4>Portfolio</h4>
          <ul>
            <li>Personalized Portfolio</li>
            <li>Custom Templates</li>
            <li>Professional Themes</li>
            <li>Resume to Website</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-links">
          <h4>Contact</h4>
          <ul>
            <li><Mail size={14} /> info@respoai.com</li>
            <li><Phone size={14} /> +91 123 456 7890</li>
            <li><MapPin size={14} /> Pune, Maharashtra, India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 RespoAI. All rights reserved.</p>
        <div className="bottom-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;