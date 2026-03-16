// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   FileText, ShieldCheck, AlertCircle, 
//   TrendingUp, Code, Briefcase, Sparkles, ChevronRight 
// } from 'lucide-react';
// import '../styles/feature.css';

// const Feature = () => {
//   const portfolioStyles = [
//     { id: 'modern', name: 'Modern Portfolio', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80', color: '#3b82f6' },
//     { id: 'minimal', name: 'Minimal Portfolio', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&q=80', color: '#10b981' },
//     { id: 'creative', name: 'Creative Designer', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&q=80', color: '#a855f7' }
//   ];

//   return (
//     <div className="dashboard-wrapper">
//       <motion.h2 
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="dashboard-title"
//       >
//         Personalized Dashboard
//       </motion.h2>

//       <div className="dashboard-grid">
        
//         {/* Left Card: Resume Analysis */}
//         <motion.div 
//           className="glass-card analysis-card"
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           <div className="card-header">
//             <div className="header-info">
//               <FileText className="icon-blue" size={20} />
//               <h3>Resume Analysis Results</h3>
//             </div>
//             <div className="score-circle">
//               <span className="score-num">92</span>
//               <span className="score-label">Overall Score</span>
//             </div>
//           </div>

//           <div className="file-info">
//             <h4>JohnSmith.pdf</h4>
//             <div className="status-pills">
//               <span className="pill pass"><ShieldCheck size={14} /> 7 Passed Checks</span>
//               <span className="pill warn"><AlertCircle size={14} /> 1 Warning</span>
//             </div>
//           </div>

//           <div className="resume-data-section">
//             <p className="section-label">Resume Data</p>
//             <div className="user-mini-profile">
//               <div className="avatar">JS</div>
//               <div>
//                 <h5>John Smith</h5>
//                 <p>Frontend Developer</p>
//               </div>
//             </div>

//             <div className="skills-grid">
//               <p className="label">Skills</p>
//               <div className="skill-item"><span>React</span> <span className="val blue">99</span></div>
//               <div className="skill-item"><span>Node.js</span> <span className="val green">95</span></div>
//               <div className="skill-item"><span>MongoDB</span> <span className="val purple">95</span></div>
//             </div>

//             <div className="projects-list">
//               <p className="label">Projects</p>
//               <div className="project-item"><Code size={14} /> Netflix Clone <span className="val">95</span></div>
//               <div className="project-item"><Sparkles size={14} /> AI Resume Analyzer <span className="val">99</span></div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Card: Portfolio Creation */}
//         <motion.div 
//           className="glass-card portfolio-card"
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.4 }}
//         >
//           <div className="card-header-alt">
//             <h3>Create <span>Your Portfolio</span></h3>
//             <p>Choose a style to generate a portfolio from your resume</p>
//           </div>

//           <div className="preview-main">
//             <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80" alt="Current Theme" />
//             <div className="overlay-text">
//               <h4>John Smith</h4>
//               <p>Frontend Developer</p>
//             </div>
//           </div>

//           <div className="style-selector">
//             <p className="selector-title">Choose a style</p>
//             <div className="style-grid">
//               {portfolioStyles.map((style) => (
//                 <div key={style.id} className="style-option">
//                   <div className="img-holder">
//                     <img src={style.img} alt={style.name} />
//                   </div>
//                   <p>{style.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button className="generate-btn">
//             Generate Portfolio <ChevronRight size={18} />
//           </button>
//         </motion.div>

//       </div>
//     </div>
//   );
// };

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, ShieldCheck, AlertCircle, 
  Code, Sparkles, ChevronRight 
} from 'lucide-react';
import '../styles/feature.css';

const Feature = () => {
  const portfolioStyles = [
    { id: 'modern', name: 'Modern Portfolio', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80', color: '#3b82f6' },
    { id: 'minimal', name: 'Minimal Portfolio', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&q=80', color: '#10b981' },
    { id: 'creative', name: 'Creative Designer', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&q=80', color: '#a855f7' }
  ];

  return (
    <div className="dashboard-wrapper">
      {/* THE UPPER CRAFT OVERLAY */}
      <div className="dashboard-overlay">
        <motion.div 
          className="overlay-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Upload your CV. <br/> Get instant feedback.</h2>
          <p>See your strengths. Fix your weaknesses.</p>
          <button className="cta-button">
            Start Your Free Analysis <ChevronRight size={20} />
          </button>
        </motion.div>
      </div>

      {/* BLURRED BACKGROUND CONTENT */}
      <div className="dashboard-main-content">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="dashboard-title"
        >
          Personalized Dashboard
        </motion.h2>

        <div className="dashboard-grid">
          {/* Left Card: Resume Analysis */}
          <motion.div 
            className="glass-card analysis-card"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="card-header">
              <div className="header-info">
                <FileText className="icon-blue" size={20} />
                <h3>Resume Analysis Results</h3>
              </div>
              <div className="score-circle">
                <span className="score-num">92</span>
                <span className="score-label">Overall</span>
              </div>
            </div>

            <div className="file-info">
              <h4>JohnSmith.pdf</h4>
              <div className="status-pills">
                <span className="pill pass"><ShieldCheck size={14} /> 7 Passed</span>
                <span className="pill warn"><AlertCircle size={14} /> 1 Warning</span>
              </div>
            </div>

            <div className="resume-data-section">
              <p className="section-label">Resume Data</p>
              <div className="user-mini-profile">
                <div className="avatar">JS</div>
                <div>
                  <h5>John Smith</h5>
                  <p>Frontend Developer</p>
                </div>
              </div>

              <div className="skills-grid">
                <div className="skill-item"><span>React</span> <span className="val blue">99</span></div>
                <div className="skill-item"><span>Node.js</span> <span className="val green">95</span></div>
                <div className="skill-item"><span>MongoDB</span> <span className="val purple">95</span></div>
              </div>
            </div>
          </motion.div>

          {/* Right Card: Portfolio Creation */}
          <motion.div 
            className="glass-card portfolio-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="card-header-alt">
              <h3>Create <span>Your Portfolio</span></h3>
              <p>Choose a style to generate from your resume</p>
            </div>

            <div className="preview-main">
              <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80" alt="Theme" />
            </div>

            <div className="style-grid">
              {portfolioStyles.map((style) => (
                <div key={style.id} className="style-option">
                  <div className="img-holder">
                    <img src={style.img} alt={style.name} />
                  </div>
                  <p>{style.name}</p>
                </div>
              ))}
            </div>

            <button className="generate-btn">
              Generate Portfolio <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Feature;