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
          <h3>Histórico profissional</h3>
          <ul>
            <motion.li
              variants={item}
              whileHover={{ x: 5 }}
            >
              <h4> Freelancer - Desenvolvedor Web FullStack</h4>
              <p>11/2024 - Atual</p>
              <p>Desenvolvimento de interfaces web com React, aplicando boas
                 práticas de performance, usabilidade e design responsivo. Foco em
                 criação de soluções eficientes, acessíveis e bem estruturadas para
                 melhorar a experiência do usuário.
              </p>
            </motion.li>
            <motion.li
              variants={item}
              whileHover={{ x: 5 }}
            >
              <h4>Freelancer - Desenvolvedor full stack</h4>
              <p>Sistema de Notas para Professores</p>
              <p>03/2025 - Atual</p>
              <p>Desenvolvimento de um sistema web para gestão de notas, voltado
                 para professores, utilizando React, Next.js, TypeScript, TailwindCSS
                 e MongoDB. O projeto foca em usabilidade, performance e
                 escalabilidade, permitindo o cadastro, edição e consulta de notas de
                 forma intuitiva e eficiente.
                 </p>
            </motion.li>
            <motion.li
              variants={item}
              whileHover={{ x: 5 }}
            >
              <h4>Freelancer - Desenvolvedor full stack</h4>
              <p>Sistema de Monitoramento de Violência Contra idoso</p>
              <p> 03/2025 - Atual</p>
              <p> Desenvolvimento de um sistema para monitoramento da violência
                  contra idosos, utilizando React, Next.js, TypeScript, TailwindCSS e
                  MongoDB. O projeto tem como objetivo a automação da coleta e
                  análise de dados, permitindo o registro, a organização e a geração
                  de estatísticas de forma eficiente e acessível.
              </p>
            </motion.li>
            <motion.li
              variants={item}
              whileHover={{ x: 5 }}
            >
              <h4>Freelancer - Desenvolvedor front-end</h4>
              <p>Lista de Tarefas</p>
              <p> 01/2025 - 02/2025</p>
              <p> Desenvolvimento de uma aplicação web para gestão de tarefas. O
                  projeto permite a criação, edição e exclusão de tarefas,
                  proporcionando uma interface intuitiva, responsiva e otimizada
                  para melhorar a organização e produtividade do usuário.
              </p>
            </motion.li>
            <motion.li
              variants={item}
              whileHover={{ x: 5 }}
            >
              <h4> Freelancer - Desenvolvedor front-end</h4>
              <p>Premium-Cars</p>
              <p>  01/2025 - 02/2025</p>
              <p>  Desenvolvimento de um site para exibição de carros de luxo,
                   utilizando HTML, CSS e JavaScript. O projeto foca em design
                   moderno, responsividade e experiência do usuário, permitindo a
                   navegação fluida e intuitiva pelos veículos disponíveis.
              </p>
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
          <h3>Formação acadêmica</h3>
          <ul>
            <motion.li
              variants={item}
              whileHover={{ x: 5 }}
            >
              <h4>Engenharia da Computação</h4>
              <p>Faculdade Metropolitanas Unidas</p>
              <p>07/2022 - 07/2026</p>
              <p>Status - Cursando 7º semestre, conclusão em 2026</p>
            </motion.li>
            <motion.li
              variants={item}
              whileHover={{ x: 5 }}
            >
              <h4>Curso de Desenvolvimento Web Full Stack</h4>
              <p>B7Web</p>
              <p> Status - Cursando</p>
              <p>12/2023 - 12/2025</p>
            </motion.li>
            <motion.li
              variants={item}
              whileHover={{ x: 5 }}
            >
              <h4>Habilidades e competências</h4><br/>
              <h4>Hard Skills</h4><br/>
              <p> HTML5, CSS3, JavaScript, TypeScript</p>
              <p> TailwindCSS, ReactJS, NextJS, MongoDB</p><br/>
              <h4>Cursos e Especializações</h4><br/>
              <p>Decodificando a Cultura Organizacional</p>
              <p>Desafios da Liderança</p>
              <p>Líder de Líderes</p>
              <p>O líder que desenvolve talentos</p>
              <p>Comunicação efetiva</p>
              <p>Gestão e desenvolvimento de pessoas</p>
              <p>Liderança Assertiva</p>
              <p>Menos é mais</p>
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
