// Importação dos hooks e bibliotecas necessárias
import { useState, useEffect, useRef } from "react"; // Hooks para estado e manipulação de DOM
import { motion, Variants } from "framer-motion"; // Biblioteca para animações
import { Mail, Phone, MapPin, Send } from "lucide-react"; // Ícones para exibir informações de contato

// Definição das variantes de animação para o container principal
const container: Variants = {
  hidden: { opacity: 0 }, // Começa invisível
  show: {
    opacity: 1, // Torna visível
    transition: { staggerChildren: 0.2 }, // Aplica um pequeno atraso entre os elementos filhos
  },
};

// Definição das variantes para cada item individual (campos, cartões, etc.)
const item: Variants = {
  hidden: { opacity: 0, y: 20 }, // Começa invisível e deslocado para baixo
  show: { opacity: 1, y: 0 }, // Aparece gradualmente e sobe suavemente
};

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null); // Criando referência para a seção

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Estado para indicar se o formulário está sendo enviado
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Função chamada quando o usuário digita nos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Função chamada quando o usuário clica no botão de enviar
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificação se todos os campos estão preenchidos
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    setIsSubmitting(true);

    // Envia os dados para o Formspree
    const response = await fetch("https://formspree.io/f/manqkreq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Aguarda 0,5 segundo antes de redirecionar para a página inicial
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    } else {
      alert("Erro ao enviar mensagem novamente.");  




      
    }

    setIsSubmitting(false);
  };

  return (
    <motion.div ref={sectionRef} variants={container} initial="hidden" animate="show">
      <motion.h2 variants={item}>Entre em contato</motion.h2>
      <motion.div className="contact-grid" variants={container}>
        <motion.div className="card contact-card" variants={item}>
          <Mail className="icon" size={24} />
          <h3>Email</h3>
          <p>gabrielcorreiadsv@gmail.com</p>
        </motion.div>
        <motion.div className="card contact-card" variants={item}>
          <Phone className="icon" size={24} />
          <h3>Telefone</h3>
          <p>+55 (13) 98158-5294</p>
        </motion.div>
        <motion.div className="card contact-card" variants={item}>
          <MapPin className="icon" size={24} />
          <h3>Localização</h3>
          <p>São Paulo, Brasil</p>
        </motion.div>
      </motion.div>
      <motion.div className="card contact-form-card" variants={item}>
        <h3>Me envie uma mensagem</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <motion.div className="form-group" variants={item}>
              <label htmlFor="name">Nome</label>
              <motion.input type="text" id="name" value={formData.name} onChange={handleChange} required />
            </motion.div>
            <motion.div className="form-group" variants={item}>
              <label htmlFor="email">E-mail</label>
              <motion.input type="email" id="email" value={formData.email} onChange={handleChange} required />
            </motion.div>
          </div>
          <motion.div className="form-group" variants={item}>
            <label htmlFor="subject">Assunto</label>
            <motion.input type="text" id="subject" value={formData.subject} onChange={handleChange} required />
          </motion.div>
          <motion.div className="form-group" variants={item}>
            <label htmlFor="message">Mensagem</label>
            <motion.textarea id="message" value={formData.message} onChange={handleChange} rows={4} required />
          </motion.div>
          <motion.button type="submit" className="submit-button" variants={item} disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
              <Send size={20} />
            </motion.span>
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;
