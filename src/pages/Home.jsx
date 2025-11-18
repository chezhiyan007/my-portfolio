import { Github, Linkedin, Download, Send, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- ANIMATION VARIANTS ---

// For the whole section
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// For the skill tile grid
const gridContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 } 
  }
};

const gridItemVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

// For the academic cards
const academicVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({ 
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" }
  })
};

function Home() {
  // List of skills to make the code cleaner and apply animation to all
  const skills = [
    "React", "JavaScript", "Java", "ML OPS", 
    "Firebase", "Git & GitHub", "Node.js", "Python", 
    "Flask", "Figma"
  ];

  return (
    <div className="page-container"> 

      {/* (Hero Section) */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-text">
          <h1>Hi, I'm <span className="hero-name">Chezhiyan</span> 👋</h1>
          <h2>Python Developer</h2>
          <p className="hero-bio">
            Python and AI development is my space, where I create smart systems that
             learn and adapt. I specialize in ML models, data processing, and 
             automation pipelines. I’m driven by curiosity, innovation, and solving meaningful problems.
          </p>
          <div className="social-links">
            <a href="https://github.com/chezhiyan007" target="_blank" rel="noreferrer" title="GitHub">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/elanchezhiyan-e-a6036334a/" target="_blank" rel="noreferrer" title="LinkedIn">
              <Linkedin size={28} />
            </a>
          </div>
          <div className="cta-buttons">
            <a href="/resume.pdf" download="Chezhiyan-Resume.pdf" className="cta-button primary">
              <Download size={18} /> Resume
            </a>
            <Link to="/contact" className="cta-button secondary">
              Contact Me <Send size={18} />
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <img src="/my-photo.png" alt="Chezhiyan" className="hero-image" />
        </div>
      </motion.section>


      {/* === 3D TILT SKILLS SECTION (UPDATED) === */}
      <motion.section 
        className="skills-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <h2 className="section-title">My Tech Stack</h2>
        <motion.div 
          className="skills-grid"
          variants={gridContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Mapping through skills to apply the HOVER effect to all of them */}
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-tile" 
              variants={gridItemVariant}
              // THIS IS THE ANIMATION FIX:
              whileHover={{ 
                y: -5, // Moves up
                backgroundColor: "#7c3aed", // Purple Background
                color: "#ffffff", // White Text
                borderColor: "#7c3aed", // Purple Border
                boxShadow: "0 4px 15px rgba(124, 58, 237, 0.3)", // Glow Shadow
                cursor: "pointer"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill}
            </motion.div>
          ))}
          
        </motion.div>
      </motion.section>

      {/* === ACADEMICS SECTION === */}
      <motion.section 
        className="academics-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <h2 className="section-title">Academics</h2>
        <div className="academics-grid">

          {/* Card 1 */}
          <motion.div 
            className="academic-card"
            custom={1}
            variants={academicVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="academic-icon"><BookOpen /></div>
            <h3>B.TECH- Artificial Intelligence And Data Science</h3>
            <p className="academic-college">Vel Multi Tech Engineering College</p>
            <span className="academic-years">2022 - 2027 </span>
            <p className="academic-cgpa">CGPA: 8.3 (Till 4th Sem)</p>
            <div className="academic-skills-list">
              <p>Key Courses:</p>
              <ul>
                <li>Data Structures</li>
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="academic-card"
            custom={2}
            variants={academicVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="academic-icon"><BookOpen /></div>
            <h3>HSC (12th Standard)</h3>
            <p className="academic-college">Kalaimagal Matric Hr Sec School</p>
            <span className="academic-years">2021 - 2022</span>
            <p className="academic-cgpa">Percentage: 88.8%</p>
            <div className="academic-skills-list">
              <p>Key Subjects:</p>
              <ul>
                <li>Chemistry</li>
                <li>Mathematics</li>
                <li>Physics</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </motion.section>

    </div>
  );
}

export default Home;