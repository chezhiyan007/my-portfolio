import React from 'react';
import '../App.css'; 

const Projects = () => {
  return (
    <div className="page-container">
      
      {/* ==========================
          SECTION 1: MY PROJECTS 
         ========================== */}
      <h2 className="section-title">My Projects</h2>
      <div className="project-grid">
        
        {/* Project 1 */}
        <div className="project-card">
          <div className="project-card-content">
            <h3>💼 My Portfolio</h3>
            <p>You're looking at it! Built with React, Vite, and hosted on Firebase.</p>
            <div className="project-tags">
              <span className="project-tag">React</span>
              <span className="project-tag">Firebase</span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-card-content">
            <h3>🏗️ Construction Site</h3>
            <p>A website for "Kalpataru" construction company to showcase their services.</p>
            <div className="project-tags">
              <span className="project-tag">React</span>
              <span className="project-tag">UI/UX</span>
            </div>
          </div>
        </div>

        {/* Project 3 (New) */}
        <div className="project-card">
          <div className="project-card-content">
            <h3>🎓 College Dashboard</h3>
            <p>A dashboard for managing student attendance, marks, and assignments.</p>
            <div className="project-tags">
              <span className="project-tag">MERN</span>
              <span className="project-tag">Education</span>
            </div>
          </div>
        </div>

        {/* Project 4 (New) */}
        <div className="project-card">
          <div className="project-card-content">
            <h3>🚀 Future AI Project</h3>
            <p>Working on a Generative AI model for detecting fake images.</p>
            <div className="project-tags">
              <span className="project-tag">Python</span>
              <span className="project-tag">AI/ML</span>
            </div>
          </div>
        </div>

      </div>


      {/* ==========================
          SECTION 2: CERTIFICATIONS
         ========================== */}
      <h2 className="section-title" style={{ marginTop: '4rem' }}>Certifications</h2>
      <div className="project-grid">
        
        {/* Certification 1 */}
        <div className="project-card">
          <div className="project-card-content">
            <h3>📜 Python for Data Science</h3>
            <p>Completed the comprehensive course on Python programming for data analysis.</p>
            <div className="project-tags">
              <span className="project-tag">Coursera</span>
              <span className="project-tag">2024</span>
            </div>
          </div>
        </div>

        {/* Certification 2 */}
        <div className="project-card">
          <div className="project-card-content">
            <h3>📜 Qualcomm AI Upskilling </h3>
            <p>A beginner-friendly Qualcomm course that builds solid fundamentals in AI</p>
            <div className="project-tags">
              <span className="project-tag">Qualcomm</span>
              <span className="project-tag">2025</span>
            </div>
          </div>
        </div>

      </div>


      {/* ==========================
          SECTION 3: EXPERIENCE
         ========================== */}
      <h2 className="section-title" style={{ marginTop: '4rem' }}>Experience</h2>
      <div className="project-grid">
        
        {/* Experience 1 */}
        <div className="project-card">
          <div className="project-card-content">
            <h3>👨‍💻 UI/UX Intern And Tutor</h3>
            <p>Assisted in building responsive frontend components using React.</p>
            <div className="project-tags">
              <span className="project-tag">Vlog Inoovations</span>
              <span className="project-tag">2 Months</span>
            </div>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="project-card">
          <div className="project-card-content">
            <h3>🔌 Embedded Systems Lead</h3>
            <p>Led a college team in designing an 8051 microcontroller-based keypad interface.</p>
            <div className="project-tags">
              <span className="project-tag">College Team</span>
              <span className="project-tag">Project Lead</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Projects;