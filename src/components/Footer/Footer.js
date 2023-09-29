import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
  return (
    <footer>
      <nav>
        <div>
          <ul>
            <li><Link to="/quem-somos">Quem Somos</Link></li>
            <li><Link to="/empresas">Empresas</Link></li>
            <li><Link to="/noticias">Noticias</Link></li>
            <li><Link to="/cadastro-login">Cadastro/Login</Link></li>
          </ul>
        </div>
        <Link to="/"><img className="logo" src="/logo.png" alt="MealMap" /></Link>
        <div className="contact">
          <li>RM96685: Bruno Barbosa Braga dos Santos</li>
          <li>RM97161: Giovanna Tricerri André Niacaris</li>
          <li>RM96793: Lucas Alves Quintela</li>
          <li>RM97166: Guilherme Raul Varella da Silva</li>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;