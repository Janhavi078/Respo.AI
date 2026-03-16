
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // // Pages
// // import Home from './pages/Home';
// // import Analyze from './pages/Analyze'; 
// // import Feature from './pages/Feature'; // New Premium Dashboard Feature

// // // Global Styles
// // import './App.css'; 

// // function App() {
// //   return (
// //     <Router>
// //       <div className="App">
// //         <Routes>
// //           {/* Main Landing Page */}
// //           <Route path="/" element={<Home />} />
          
// //           {/* Feature Squares Page */}
// //           <Route path="/analyze" element={<Analyze />} />

// //           {/* New Premium Dashboard Page */}
// //           <Route path="/dashboard" element={<Feature />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;
// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';

// // Pages
// import Home from './pages/Home';
// import Analyze from './pages/Analyze'; 
// import Feature from './pages/Feature'; 

// // Global Styles
// import './App.css'; 

// // Helper to reset scroll position on page change
// const ScrollToTop = () => {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// };

// // This component handles the background color transition logic
// const AnimatedRoutes = () => {
//   const location = useLocation();

//   // Define colors for each route to break the "too white" look
//   const bgColorMap = {
//     '/': '#131d3c',          // Very Soft Indigo/Blue for Home
//     '/analyze': '#05182a',    // Clean Slate for Analyze
//     '/dashboard': '#565656',  // Sleek Professional Grey for Feature/Dashboard
//   };

//   const currentBg = bgColorMap[location.pathname] || '#ffffff';

//   return (
//     <motion.div 
//       animate={{ backgroundColor: currentBg }}
//       transition={{ duration: 0.8, ease: "easeInOut" }}
//       style={{ minHeight: '100vh', transition: 'background-color 0.8s ease' }}
//     >
//       <AnimatePresence mode="wait">
//         <Routes location={location} key={location.pathname}>
//           <Route path="/" element={<Home />} />
//           <Route path="/analyze" element={<Analyze />} />
//           <Route path="/dashboard" element={<Feature />} />
//         </Routes>
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <div className="App">
//         <AnimatedRoutes />
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Pages
import Home from './pages/Home';
import Analyze from './pages/Analyze'; 
import Feature from './pages/Feature'; 

// Components
import Footer from './components/Footer'; // Make sure the path matches your structure

// Global Styles
import './App.css'; 

// Helper to reset scroll position on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// This component handles the background color transition logic
const AnimatedRoutes = () => {
  const location = useLocation();

  // Define colors for each route to match your request
  const bgColorMap = {
    '/': '#050a19',          // Dark Indigo/Blue for Home
    '/analyze': '#05182a',    // Dark Slate for Analyze
    '/dashboard': '#565656',  // Sleek Professional Grey for Dashboard
  };

  const currentBg = bgColorMap[location.pathname] || '#ffffff';

  return (
    <motion.div 
      animate={{ backgroundColor: currentBg }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/analyze" element={<Analyze />} />
            <Route path="/dashboard" element={<Feature />} />
          </Routes>
        </AnimatePresence>
      </div>
      
      {/* Footer is placed here so it appears on every page */}
      <Footer />
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;