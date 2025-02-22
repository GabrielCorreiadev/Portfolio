import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// Definindo o tipo para os projetos
interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
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
                  href="#"
                  className="project-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                  Code
                </motion.a>
                <motion.a
                  href="#"
                  className="project-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
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
    title: 'E-commerce Dashboard',
    description: 'A React-based dashboard for managing online store inventory and sales analytics.',
    tech: ['React', 'JavaScript', 'CSS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&auto=format&fit=crop&q=80',
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with modern web technologies.',
    tech: ['React', 'Framer Motion', 'CSS'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&auto=format&fit=crop&q=80',
  },
];

// Exemplo de renderização do componente
const App = () => {
  return (
    <ProjectsSection projects={projects} />
  );
};

export default App;
