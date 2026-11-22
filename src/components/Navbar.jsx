import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navigationLinks, personalData } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(17, 17, 17, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        padding: isScrolled ? '1rem 0' : '1.75rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.4rem',
            cursor: 'pointer'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              color: 'var(--white)',
              letterSpacing: '0.08em',
              lineHeight: 1
            }}
          >
            {personalData.name}
          </span>
          <span
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--white)',
              borderRadius: '50%',
              display: 'inline-block'
            }}
          />
        </a>

        {/* Desktop Navigation Links (matching clean top-right navigation from inspiration) */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2.5rem'
          }}
          className="desktop-nav"
        >
          {navigationLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? 'var(--white)' : 'rgba(255, 255, 255, 0.78)',
                  letterSpacing: '0.04em',
                  position: 'relative',
                  padding: '0.3rem 0',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? 'var(--white)' : 'rgba(255, 255, 255, 0.78)')}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: 'var(--white)',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </a>
            );
          })}

          {/* Quick CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn btn-sm"
            style={{
              backgroundColor: 'var(--black)',
              color: 'var(--white)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              marginLeft: '0.5rem'
            }}
          >
            Get In Touch
            <ArrowUpRight size={15} />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--black)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'var(--white)',
            width: '42px',
            height: '42px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
          className="mobile-nav-toggle"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '72px',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(17, 17, 17, 0.98)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            zIndex: 99
          }}
        >
          {navigationLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  textDecoration: 'none',
                  fontSize: '1.35rem',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.06em',
                  color: isActive ? 'var(--white)' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <span>{link.name}</span>
                {isActive && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--white)' }} />}
              </a>
            );
          })}
          <div style={{ paddingTop: '1rem' }}>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn btn-secondary"
              style={{ width: '100%' }}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}

      {/* Responsive media query injected for desktop-nav display */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
