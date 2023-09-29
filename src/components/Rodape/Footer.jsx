import React from 'react';
import './Footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <img
          className="footer-logo"
          src="/logo.png"
          alt="MealMap"
          onClick={scrollToTop}
        />
        <p className="footer-text">© 2023 MealMap. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
