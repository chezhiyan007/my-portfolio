import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer'; // 1. IMPORT FOOTER
import ScrollToTop from './components/ScrollToTop'; // 1. IMPORT SCROLLTOTOP
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      {/* 2. This wrapper lets the footer stick to the bottom */}
      <div className="page-content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
      <Footer /> {/* 3. ADD FOOTER HERE */}
      <ScrollToTop /> {/* 3. ADD SCROLLTOTOP HERE */}
    </div>
  );
}

export default App;