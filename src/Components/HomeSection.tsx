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
        Sou Supervisor de segurança do trabalho e estou em transição de carreira 
        para a área de tecnologia, desenvolvedor Full Stack com especialização em Front-end, experiência em
        criação de aplicações web responsivas e interativas. Altônomo na implementação de soluções, desde o desing
        interface até a lógica de negócios no back-end. Experiência com React, Typescript, Tailwind, next.js e integração de APIs.
        Comprometido com a performace, acessibilidade e código escalável.
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
            {['HTML', 'CSS', 'Git/GitHub', 'JavaScript', 'TailwindCSS', 'TypeScript', 'ReactJs',
              'Next.js', 'MongoDB'].map((skill, index) => (
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
            {['Liderança', 'Comunicação', 'Gestão de pessoas', 'Desenvolvimento de talentos', 'Tomada de decisão', 
              'Trabalho em equipe', 'Inteligência emocional', 'Resolução de conflitos', 'Pensamento estratégico', 
              'Adaptabilidade', 'Escuta Ativa', 'Proatividade', 'Gestão de Tempo', 'Altoconfiança', 'Influência Positiva',
              'Flexibilidade', 'Motivação', 'Autogestão' , 'Capacidade de Inspirar', 'Foco em Resultados' ].map((skill, index) => (
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
          <h5> - Engenharia da Computação </h5> FMU (7° semestre, conclusão em 2026)<br/>
          <h5>- Curso em Desenvolvimento Web Full Stack </h5>B7Web (Em andamento) <br/>
            <h5>- Cursos de Liderança</h5> Decodificando a Cultura Organizacional / Desafios da Liderança / Líder de Líderes / O Líder que desenvolver Talentos 
            / Comunicação Efetiva / Gestão e Desenvolvimento de Pessoas / Liderança Assertiva / Menos é Mais<br/>
            <h5>- Inglês</h5>Básico <br/>
            <h5>- Português</h5> Nativo <br/>
            <h5> Certificações:</h5>  HTML / CSS / GIT/GitHub / Javascript / TailWindCSS / Typescript / ReactJs / Next.js <br/>
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
