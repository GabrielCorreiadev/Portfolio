import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import PremiusCarImg from '../assets/PremiusCarImg.jpeg'
import PorfolioImg from '../assets/Portfolio.jpeg'

// Definindo o tipo para os projetos
interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  codeLink: string;
  liveDemoLink: string;
}

// Tipagem para as props do componente
interface ProjectsSectionProps {
  projects: Project[];
}

// Definindo as animações
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>
      
      <motion.div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ 
              y: -10,
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}
          >
            <motion.div 
              className="project-image-container"
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
            </motion.div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <motion.div 
                className="skills-list"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {project.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    className="skill-tag"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'var(--primary-hover)'
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
              
              <div className="project-links">
                <motion.a
                  href={project.codeLink}
                  className="project-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                  Code
                </motion.a>
                <motion.a
                  href={project.liveDemoLink}
                  className="project-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

// Dados de projetos de exemplo para passar como props
const projects: Project[] = [
  {
    title: 'Gabriel Correia - Portfólio',
    description: 'Um site de portfólio responsivo criado com React, TypeScript, Framer Motion e estilizado com técnicas modernas de CSS.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'CSS', 'Lucide React'],
    image: PorfolioImg,
    codeLink: 'https://github.com/GabrielCorreiadev/Portfolio.git',
    liveDemoLink: 'https://gabrielcorreia.vercel.app/',
  },
  {
    title: 'Premium-Cars',
    description: 'Loja virtual de carros de luxo criada com HTML, CSS e JavaScript. Oferece uma experiência de navegação responsiva e interativa, com design elegante e funcionalidades que destacam a exclusividade dos veículos.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: PremiusCarImg,
    codeLink: 'https://github.com/GabrielCorreiadev/Premium-Cars.git',
    liveDemoLink: 'https://premiumcars.vercel.app/',
  },
  {
    title: 'Premium-Cars',
    description: 'Loja virtual de carros de luxo criada com HTML, CSS e JavaScript. Oferece uma experiência de navegação responsiva e interativa, com design elegante e funcionalidades que destacam a exclusividade dos veículos.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: PremiusCarImg,
    codeLink: 'https://github.com/GabrielCorreiadev/Premium-Cars.git',
    liveDemoLink: 'https://premiumcars.vercel.app/',
  },
];

// Exemplo de renderização do componente
const App = () => {
  return (
    <ProjectsSection projects={projects} />
  );
};

export default App;
