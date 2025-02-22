import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ContactSection: React.FC = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h2 variants={item}>Get in Touch</motion.h2>
      
      <motion.div className="contact-grid" variants={container}>
        <motion.div 
          className="card contact-card"
          variants={item}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}
        >
          <Mail className="icon" size={24} />
          <h3>Email</h3>
          <p>gabriel.correa@example.com</p>
        </motion.div>
        
        <motion.div 
          className="card contact-card"
          variants={item}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}
        >
          <Phone className="icon" size={24} />
          <h3>Phone</h3>
          <p>+55 (11) 98765-4321</p>
        </motion.div>
        
        <motion.div 
          className="card contact-card"
          variants={item}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}
        >
          <MapPin className="icon" size={24} />
          <h3>Location</h3>
          <p>São Paulo, Brazil</p>
        </motion.div>
      </motion.div>

      <motion.div 
        className="card contact-form-card"
        variants={item}
        whileHover={{ 
          scale: 1.02,
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}
      >
        <h3>Send me a message</h3>
        
        <form>
          <div className="form-row">
            <motion.div 
              className="form-group"
              variants={item}
            >
              <label htmlFor="name">Name</label>
              <motion.input
                type="text"
                id="name"
                placeholder="Your name"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>
            
            <motion.div 
              className="form-group"
              variants={item}
            >
              <label htmlFor="email">Email</label>
              <motion.input
                type="email"
                id="email"
                placeholder="your@email.com"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>
          </div>

          <motion.div 
            className="form-group"
            variants={item}
          >
            <label htmlFor="subject">Subject</label>
            <motion.input
              type="text"
              id="subject"
              placeholder="Message subject"
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>

          <motion.div 
            className="form-group"
            variants={item}
          >
            <label htmlFor="message">Message</label>
            <motion.textarea
              id="message"
              placeholder="Your message"
              rows={4}
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>
          </motion.div>

          <motion.button 
            type="submit"
            className="submit-button"
            variants={item}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'var(--primary-hover)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <Send size={20} />
            </motion.span>
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;
