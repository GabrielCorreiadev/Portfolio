import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import PremiusCarImg from '../assets/PremiusCarImg.jpeg'
import PorfolioImg from '../assets/Portfolio.jpeg'
import ListaDeTarefasImg from '../assets/lista de tarefas.jpeg'
import ChatSimplesImg from '../assets/chatsimples.jpeg'
import SmviImage from '../assets/smvi.jpeg'

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
    title: 'SMVI Sistema de Monitoramento de Violência Contra o Idoso',
    description: 'SMVI é um sistema de monitoramento de violência contra o idoso, desenvolvido para coletar, gerenciar e gerar relatórios detalhados sobre denúncias registradas pelo Disque 100. O sistema permite o preenchimento de formulários, análise de dados com gráficos interativos, e fornece uma visão geral sobre os locais e perfis envolvidos, contribuindo para o combate à violência contra a população idosa. (Em Desenvolvimento)',
    tech: ['NextJs', 'TypeScript', 'Framer Motion', 'TailwindCSS', 'Lucide React'],
    image: SmviImage,
    codeLink: 'https://github.com/GabrielCorreiadev/SMVI-Sistema-de-Monitoramento-de-Violencia-Contra-o-Idoso',
  },
  {
    title: 'Gabriel Correia - Portfólio',
    description: 'Portfólio interativo e dinâmico, que exibe meus projetos de desenvolvimento e soluções criativas de forma destacada. Com um design moderno e otimizado para diversos dispositivos, oferece uma navegação fluida e intuitiva, permitindo que os visitantes explorem facilmente as minhas competências e abordagens inovadoras em cada projeto, proporcionando uma experiência envolvente e profissional.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'CSS', 'Lucide React'],
    image: PorfolioImg,
    codeLink: 'https://github.com/GabrielCorreiadev/Portfolio.git',
    liveDemoLink: 'https://gabrielcorreia.vercel.app/',
  },

  {
    title: 'Premium-Cars',
    description: 'Loja virtual de carros de luxo que oferece aos usuários uma experiência exclusiva de compra. O site apresenta uma navegação fluída e interativa, permitindo explorar veículos de alto padrão com imagens detalhadas, descrições refinadas e funcionalidades que destacam a sofisticação e a exclusividade dos modelos, proporcionando uma experiência única aos amantes de carros de luxo.',
    tech: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    image: PremiusCarImg,
    codeLink: 'https://github.com/GabrielCorreiadev/Premium-Cars.git',
    liveDemoLink: 'https://premiumcars.vercel.app/',
  },
  {
    title: 'Chat Simples',
    description: 'Chat simples e interativo, projetado para proporcionar uma experiência fluida e dinâmica entre o usuário e o bot. A interface foi desenvolvida para ser intuitiva, permitindo uma troca de mensagens clara e eficiente em uma única tela, com foco em usabilidade e rapidez nas interações.',
    tech: ['Next.js', 'TypeScript', 'Context API', 'Reducer', 'Tailwind CSS'],
    image: ChatSimplesImg, 
    codeLink: 'https://github.com/GabrielCorreiadev/Chat-Simples',
    liveDemoLink: 'https://chatsimples.vercel.app/',
  },
  {
    title: 'Lista de Tarefas',
    description: 'Aplicação de gerenciamento de tarefas, oferecendo uma forma prática e eficiente de organizar suas atividades. Com funcionalidades de adicionar, editar, concluir e excluir tarefas, proporciona uma experiência fluida e intuitiva para o usuário, facilitando o controle e acompanhamento das tarefas diárias.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    image: ListaDeTarefasImg, 
    codeLink: 'https://github.com/GabrielCorreiadev/Lista-de-Tarefas',
    liveDemoLink: 'https://tasksgc.vercel.app/',
  },
];

// Exemplo de renderização do componente
const App = () => {
  return (
    <ProjectsSection projects={projects} />
  );
};

export default App;
