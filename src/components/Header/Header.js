import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src="/logo.png" alt="MealMap" />
          </Link>
        </div>
        <div className="nav-links">
          <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
          <ul className={`menu-items ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/quem-somos">Quem Somos</Link></li>
            <li><Link to="/Tecnologia">Tecnologia</Link></li>
            <li><Link to="/Contato">Contato</Link></li>
            <li><Link to="/empresas">Empresas</Link></li>
            <li><Link to="/noticias">Noticias</Link></li>
            <li><Link to="/cadastro-login">Cadastro/Login</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
