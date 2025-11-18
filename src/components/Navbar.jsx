// src/components/Navbar.jsx

import { NavLink, Link } from 'react-router-dom'; // 1. Import NavLink
import { Home, Briefcase, Mail } from 'lucide-react';

function Navbar() {
  return (
    <nav>
      {/* This Link stays the same */}
      <Link to="/" className="nav-brand-text">
        Chezhiyan <span>✧</span>
      </Link>
      
      <div className="nav-links">
        {/* 2. Change all <Link> to <NavLink> here */}
        
        <NavLink 
          to="/"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <Home size={18} /> Home
        </NavLink>
        
        <NavLink 
          to="/projects"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <Briefcase size={18} /> Projects
        </NavLink>
        
        <NavLink 
          to="/contact"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <Mail size={18} /> Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;