import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = 'home';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 50;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${activeSection}`}>
      <ul className="nav-list">
        <li><a href="#home" className={activeSection === 'home' ? 'active-link' : ''}>Home</a></li>
        <li><a href="#about" className={activeSection === 'about' ? 'active-link' : ''}>About</a></li>
        <li><a href="#services" className={activeSection === 'services' ? 'active-link' : ''}>Services</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'active-link' : ''}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
