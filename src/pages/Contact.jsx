import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';

// Animation for sliding in
const cardVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({ // i is a custom index
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" }
  })
};

function Contact() {
  return (
    <motion.div 
      className="page-container" // This fixes the alignment
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* This is the new clean layout */}
      <div className="contact-clean">
        <h2 className="section-title">Get In Touch</h2>
        <p>
          I'm currently looking for new opportunities. My inbox is always open,
          whether you have a question or just want to say hi!
        </p>
        
        {/* This is a simple "mail-to" button */}
        <a href="mailto:e.chezhiyan007@gmail.com" className="cta-button primary" style={{margin: '1.5rem 0'}}>
          Say Hello
        </a>
        
        {/* This is your existing info, re-styled */}
        <motion.div 
          className="contact-info-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="contact-info-item" custom={1} variants={cardVariant}>
            <Phone />
            <span>+91 6374907038</span>
          </motion.div>
          <motion.div className="contact-info-item" custom={2} variants={cardVariant}>
            <MapPin />
            <span>Chennai, India</span>
          </motion.div>
          
        </motion.div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />

    </motion.div>
  );
}

export default Contact;