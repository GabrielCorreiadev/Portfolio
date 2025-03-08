import { motion, Variants } from 'framer-motion';

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

const AboutSection: React.FC = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h2 variants={item}>About Me</motion.h2>
      
      <motion.div 
        className="card about-card"
        variants={item}
        whileHover={{ scale: 1.02 }}
      >
        <p>
          Com seis anos de experiência no mercado de trabalho, sendo os últimos três anos e meio como 
          Técnico de Segurança do Trabalho, estou em transição para a área de tecnologia. Atualmente, 
          curso Engenharia da Computação na FMU e ampliei meus conhecimentos por 
          meio de estudos autodidatas e projetos práticos.
        </p>
        
        <p>
          Tenho experiência em HTML, CSS, JavaScript, Reactjs e entre outras tecnologias, além de estar me aprofundando 
          em Next.js. Minha motivação vem da busca por soluções eficientes e da vontade de continuar a enfrentar desafios
          reais por meio da tecnologia. Com pensamento analítico e facilidade
          para trabalhar em equipe, estou sempre em busca de aprendizado contínuo e inovação.
        </p>

        <p>
          Estou aberto a oportunidades que me permitam crescer
          profissionalmente e contribuir para projetos impactantes no mundo da tecnologia.
        </p>
      </motion.div>

      <motion.div className="card-grid" variants={container}>
        <motion.div 
          className="card"
          variants={item}
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}
        >
          <h3>Experience</h3>
          <ul>
            <motion.li
              variants={item}
              whileHover={{ x: 5 }}
            >
              <h4>Freelance Developer</h4>
              <p>2023 - Present</p>
              <p>Building web applications for clients using modern technologies</p>
            </motion.li>
            <motion.li
              variants={item}
              whileHover={{ x: 5 }}
            >
              <h4>Safety Technician</h4>
              <p>2020 - 2023</p>
              <p>Ensuring workplace safety and compliance</p>
            </motion.li>
          </ul>
        </motion.div>

        <motion.div 
          className="card"
          variants={item}
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}
        >
          <h3>Education</h3>
          <ul>
            <motion.li
              variants={item}
              whileHover={{ x: 5 }}
            >
              <h4>Computer Engineering</h4>
              <p>Faculdade Metropolitanas Unidas</p>
              <p>2022 - 2026 (Expected)</p>
            </motion.li>
            <motion.li
              variants={item}
              whileHover={{ x: 5 }}
            >
              <h4>Safety Engineering</h4>
              <p>Previous Education</p>
              <p>Completed</p>
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
