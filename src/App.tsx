import  { useState, useEffect } from 'react';
import { Home, FolderGit2, User, Mail, Github, Linkedin, Moon, Sun, Menu, X } from 'lucide-react';
import HomeSection from './Components/HomeSection';
import ProjectsSection from './Components/ProjectsSection';
import AboutSection from './Components/AboutSection';
import ContactSection from './Components/ContactSection';
import perfil from './assets/perfil.jpg';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection onNavigateToProjects={() => handleNavigation('projects')} />;
      case 'projects':
        return <ProjectsSection />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <button 
        className="mobile-menu-button"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div 
        className={`menu-overlay ${isMobileMenuOpen ? 'visible' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <nav className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="profile">
            <img
              src={perfil}
              alt="Gabriel Correia"
              className="profile-image"
            />
            <h2 className="profile-name">Gabriel Correia</h2>
            <p className="profile-title">Desenvolvedor de Software</p>
            
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <ul className="nav-menu">
            <li className="nav-item">
              <button
                onClick={() => handleNavigation('home')}
                className={`nav-button ${activeSection === 'home' ? 'active' : ''}`}
              >
                <Home size={20} />
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleNavigation('projects')}
                className={`nav-button ${activeSection === 'projects' ? 'active' : ''}`}
              >
                <FolderGit2 size={20} />
                Projects
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleNavigation('about')}
                className={`nav-button ${activeSection === 'about' ? 'active' : ''}`}
              >
                <User size={20} />
                About
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleNavigation('contact')}
                className={`nav-button ${activeSection === 'contact' ? 'active' : ''}`}
              >
                <Mail size={20} />
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div className="theme-toggle-container">
          <button
            onClick={toggleDarkMode}
            className="theme-toggle"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;