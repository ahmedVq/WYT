'use client';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 40); }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <a href="#top" className="nav__logo">WYT<span className="tag">Fine&nbsp;Finishes</span></a>
        <div className="nav__links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#studio">Studio</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav__cta">
          <a href="#consult" className="btn btn-primary">Request a Consultation <span className="arr">→</span></a>
          <button className="nav__burger" onClick={toggleMenu} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#process" onClick={closeMenu}>Process</a>
        <a href="#studio" onClick={closeMenu}>Studio</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="#consult" className="btn btn-primary" onClick={closeMenu}>
          Request a Consultation <span className="arr">→</span>
        </a>
      </div>
    </>
  );
}
