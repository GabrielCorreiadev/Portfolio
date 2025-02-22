import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

// Definindo o tipo das props
interface HomeSectionProps {
  onNavigateToProjects: () => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ onNavigateToProjects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="home-section"
    >
      <motion.h1 variants={item}> Olá, Eu sou Gabriel Correia 👋</motion.h1>

      <motion.p variants={item} className="intro-text">
        Sou Supervisor de segurança do trabalho e estou fazendo a transição de carreira 
        para a área de tecnologia, buscando aprender e aplicar novos conhecimentos em soluções digitais.
      </motion.p>

      <motion.div variants={container} className="card-grid">
        <motion.div
          variants={item}
          className="card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3>Skills</h3>
          <motion.div
            className="skills-list"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {['HTML', 'CSS', 'Git/GitHub', 'JavaScript', 'TailwindCSS', 'TypeScript', 'ReactJs'].map((skill, index) => (
              <motion.span
                key={skill}
                className="skill-tag"
                variants={item}
                whileHover={{ scale: 1.1, backgroundColor: 'var(--primary-hover)' }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div><br/>

          <h3>Soft skills</h3>
          <motion.div
            className="skills-list"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {['Comunicação', 'Liderança', 'Trabalho em equipe', 'Adaptabilidade', 'Empatia', 'Resolução de problemas', 'Gestão de tempo', 'Aprendizado Rápido'].map((skill, index) => (
              <motion.span
                key={skill}
                className="skill-tag"
                variants={item}
                whileHover={{ scale: 1.1, backgroundColor: 'var(--primary-hover)' }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          className="card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 600 }}
        >
          <h3>Educação</h3>
          <p>
            - Engenharia da Computação - Graduação (Junho 2026)<br/>
            - 8 Cursos de Liderança<br/>
            - Inglês - básico <br/>
            - HTML / CSS / GIT/GitHub / Javascript <br/>
            - TailWindCSS / Typescript / ReactJs<br/>
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={item}
        className="highlight-card"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h2>Procurando por novas oportunidades</h2>
        <p>
          Atualmente estou disponível para trabalho freelance e aberto a posições de tempo integral em desenvolvimento de software.
        </p>
        <motion.button
          className="cta-button"
          onClick={onNavigateToProjects}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Veja meus projetos
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <ArrowRight size={20} />
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HomeSection;
