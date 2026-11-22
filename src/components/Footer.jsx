import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { personalData, navigationLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--black-deep)',
        borderTop: '1px solid rgba(255, 255, 255, 0.12)',
        padding: '4rem 0 2.5rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Top Tier */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Brand Info */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                color: 'var(--white)',
                letterSpacing: '0.06em',
                lineHeight: 1
              }}
            >
              {personalData.name}
            </div>
            <div
              style={{
                fontSize: '0.875rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                marginTop: '0.4rem'
              }}
            >
              Computer Science & Engineering &middot; Developer in Progress
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  color: 'var(--warm-off-white)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-red-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--warm-off-white)')}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary-red)',
              color: 'var(--white)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.backgroundColor = 'var(--primary-red-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'var(--primary-red)';
            }}
            title="Return to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        {/* Bottom Tier */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.825rem',
            color: 'var(--text-dim)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} {personalData.fullName}. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Built with React, Modern CSS & Passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
