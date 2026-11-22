import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--black-surface)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '2.5rem',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 50px rgba(169, 20, 28, 0.3)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: 'var(--white)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--primary-red)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
        >
          <X size={20} />
        </button>

        {/* Badge & Subtitle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <span
            style={{
              backgroundColor: 'var(--primary-red)',
              color: 'var(--white)',
              fontSize: '0.75rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            {project.badge}
          </span>
          <span
            style={{
              color: 'var(--text-dim)',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            {project.subtitle}
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontFamily: 'var(--font-heading)',
            color: 'var(--white)',
            letterSpacing: '0.04em',
            lineHeight: 1,
            marginBottom: '1rem'
          }}
        >
          {project.title}
        </h2>

        {/* Tagline */}
        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--primary-red-hover)',
            fontWeight: 600,
            marginBottom: '1.5rem',
            lineHeight: 1.5
          }}
        >
          {project.tagline}
        </p>

        {/* Full Description */}
        <div
          style={{
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--warm-off-white)',
            marginBottom: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)'
          }}
        >
          {project.description}
        </div>

        {/* Key Architectural Highlights */}
        {project.highlights && (
          <div style={{ marginBottom: '2rem' }}>
            <h4
              style={{
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--text-muted)',
                marginBottom: '1rem'
              }}
            >
              Key Engineering Features
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {project.highlights.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="#FF3B47" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.95rem', color: 'var(--warm-off-white)', lineHeight: 1.5 }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h4
            style={{
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text-muted)',
              marginBottom: '0.75rem'
            }}
          >
            Technologies & Tools
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  backgroundColor: 'var(--black-surface-elevated)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: 'var(--white)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ flex: 1, minWidth: '160px' }}
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-white"
            style={{ flex: 1, minWidth: '160px' }}
          >
            <Github size={18} />
            View Repository
          </a>
        </div>
      </div>
    </div>
  );
}
