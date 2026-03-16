import React from 'react';
import { 
  FileCheck, 
  Target, 
  Mail, 
  CircleDollarSign, 
  Globe, 
  Layout, 
  Palette, 
  FileText 
} from 'lucide-react';
import '../styles/Analyze.css'; // Fixed path to your styles folder

const Analyze = () => {
  const features = [
    { icon: <FileCheck size={32}/>, title: "ATS Recommendation", desc: "Analyze your CV against industry standards.", badge: "95% pass rate" },
    { icon: <Target size={32}/>, title: "Job Matching Score", desc: "Get personalized compatibility scores for roles.", badge: "2.5x more interviews" },
    { icon: <Mail size={32}/>, title: "Cover Letter Generator", desc: "Generate AI-driven cover letters in seconds.", badge: "80% higher response" },
    { icon: <CircleDollarSign size={32}/>, title: "Salary Estimator", desc: "Predict your market value based on skills.", badge: "15% increase" },
    { icon: <Globe size={32}/>, title: "Resume to Website", desc: "Convert your PDF into a live hosted web URL.", badge: "New" },
    { icon: <Layout size={32}/>, title: "Personalized Portfolio", desc: "Build a stunning interactive 3D portfolio.", badge: "Professional" },
    { icon: <Palette size={32}/>, title: "Custom Templates", desc: "Switch between professional themes easily.", badge: "Multiple Colors" },
    { icon: <FileText size={32}/>, title: "AI Resume Builder", desc: "Create high-impact resumes with AI guidance.", badge: "High Impact" }
  ];

  return (
    <div className="features-container">
      <div className="analyze-header">
        <span className="subtitle">Career Success Tools</span>
        <h2 className="main-title">
          Land Your Dream Job <br />
          <span className="highlight">With AI-Powered Tools</span>
        </h2>
      </div>

      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-square">
            <div className="icon-wrapper">
              {f.icon}
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <div className="badge">{f.badge}</div>
            <div className="hover-glow"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analyze;