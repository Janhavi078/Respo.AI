
// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Chrome, TrendingUp, CheckCircle } from 'lucide-react';
// import Analyze from './Analyze'; // Import the Analyze component
// import '../styles/home.css';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <section className="hero">
//         <div className="hero-content">
//           {/* Left Side: Text */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hero-left"
//           >
//             <div className="ai-badge">
//               <span className="star">★</span> AI-Powered CV Analysis
//             </div>
            
//             <h1>Let AI make <br />your career <br /><span className="gradient-text">10x brighter</span></h1>
            
//             <p className="hero-subtext">
//               Get your CV scored, generate tailored resumes, and prepare for 
//               job interviews with ease.
//             </p>

//             <div className="hero-stats">
//               <span><TrendingUp size={16} color="#10b981" /> 95% Success Rate</span>
//               <span><CheckCircle size={16} color="#3b82f6" /> 1M+ CVs Analyzed</span>
//             </div>

//             <div className="cta-row">
//               <button className="btn-gradient">
//                 START FREE ANALYSIS <ArrowRight size={18} />
//               </button>
//               <button className="btn-outline">
//                 Add to Chrome <Chrome size={18} />
//               </button>
//             </div>
//           </motion.div>

//           {/* Right Side: Image with Greenery Background */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             className="hero-right"
//           >
//             <div className="image-card">
//               <img 
//                 src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
//                 alt="Professional Interview" 
//               />
//               <div className="scroll-indicator">
//                  <div className="mouse"></div>
//                  <span>Scroll to explore</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* --- ADDED ANALYZE SECTION HERE --- */}
//       <motion.section 
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         <Analyze />
//       </motion.section>
      
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Chrome, TrendingUp, CheckCircle } from 'lucide-react';
import Analyze from './Analyze'; 
import Feature from './Feature'; // Import the Premium Dashboard component
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-left"
          >
            <div className="ai-badge">
              <span className="star">★</span> AI-Powered CV Analysis
            </div>
            
            <h1>Let AI make <br />your career <br /><span className="gradient-text">10x brighter</span></h1>
            
            <p className="hero-subtext">
              Get your CV scored, generate tailored resumes, and prepare for 
              job interviews with ease.
            </p>

            <div className="hero-stats">
              <span><TrendingUp size={16} color="#10b981" /> 95% Success Rate</span>
              <span><CheckCircle size={16} color="#3b82f6" /> 1M+ CVs Analyzed</span>
            </div>

            <div className="cta-row">
              <button className="btn-gradient">
                START FREE ANALYSIS <ArrowRight size={18} />
              </button>
              <button className="btn-outline">
                Add to Chrome <Chrome size={18} />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="hero-right"
          >
            <div className="image-card">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
                alt="Professional Interview" 
              />
              <div className="scroll-indicator">
                 <div className="mouse"></div>
                 <span>Scroll to explore</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PREMIUM DASHBOARD SECTION (Before Analyze) */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Feature />
      </motion.section>

      {/* 3. FEATURE SQUARES SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Analyze />
      </motion.section>
      
    </div>
  );
};

export default Home;