import React, { useState } from 'react';
import { ArrowDown, Code2, Sparkles, ExternalLink, Terminal, ChevronRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  const [visualMode, setVisualMode] = useState('editorial'); // 'editorial' | 'abstract'

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--primary-red)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '6.5rem',
        paddingBottom: '3rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Subtle Typography Watermark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '5%',
          right: '-5%',
          fontSize: 'clamp(8rem, 22vw, 24rem)',
          fontFamily: 'var(--font-heading)',
          fontWeight: 900,
          color: 'rgba(0, 0, 0, 0.12)',
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 0.8,
          zIndex: 1,
          letterSpacing: '0.05em'
        }}
      >
        DEV
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '3.5rem',
            minHeight: '68vh'
          }}
          className="hero-grid"
        >
          {/* Left Column: Typography & Content */}
          <div style={{ maxWidth: '640px' }}>
            {/* Tag / Live Status */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                backgroundColor: 'var(--black)',
                color: 'var(--warm-off-white)',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                marginBottom: '1.75rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#22c55e',
                  borderRadius: '50%',
                  display: 'inline-block',
                  boxShadow: '0 0 10px #22c55e'
                }}
              />
              <span>CSE Student &middot; Ready to Build</span>
            </div>

            {/* Reference Inspired Headline: "I am ABHINAV" */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                  color: 'var(--white)',
                  letterSpacing: '0.04em',
                  lineHeight: 1,
                  textTransform: 'none'
                }}
              >
                {personalData.prefix}
              </div>
              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(5rem, 13vw, 10.5rem)',
                  color: 'var(--black)',
                  letterSpacing: '0.03em',
                  lineHeight: 0.88,
                  textTransform: 'uppercase',
                  margin: '0.15rem 0 0.5rem 0',
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                  WebkitTextStroke: '1px rgba(0, 0, 0, 0.1)'
                }}
              >
                {personalData.name}
              </h1>
            </div>

            {/* Subtitles */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h2
                style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                  fontWeight: 800,
                  color: 'var(--white)',
                  letterSpacing: '-0.01em',
                  marginBottom: '0.4rem',
                  fontFamily: 'var(--font-display)'
                }}
              >
                "{personalData.tagline}"
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--warm-off-white)',
                  opacity: 0.9,
                  letterSpacing: '0.02em'
                }}
              >
                {personalData.role}
              </p>
            </div>

            {/* Introduction Paragraph */}
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: 'var(--warm-off-white)',
                marginBottom: '2.5rem',
                fontWeight: 400,
                maxWidth: '560px',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
              }}
            >
              {personalData.heroBio}
            </p>

            {/* Call to Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                alignItems: 'center'
              }}
            >
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="btn btn-primary"
                style={{
                  padding: '1rem 2.2rem',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                Explore My Work
                <ChevronRight size={18} />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="btn btn-outline-white"
                style={{
                  padding: '1rem 2.2rem',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column: Creative Visual / Illustration */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {/* Visual Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '460px',
                aspectRatio: '4 / 5',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: 'var(--black)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5), 0 0 50px rgba(169, 20, 28, 0.35)',
                transition: 'transform 0.4s ease'
              }}
              className="hero-visual-card"
            >
              {/* Editorial Mode: Inspired by uploaded reference */}
              {visualMode === 'editorial' ? (
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <img
                    src="/assets/reference-portrait.jpg"
                    alt="Abhinav Developer Persona - Editorial Anime Aesthetic"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      filter: 'contrast(1.08) saturate(1.05)'
                    }}
                  />
                  {/* Subtle Red & Dark Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(17, 17, 17, 0.88) 0%, rgba(169, 20, 28, 0.15) 50%, transparent 100%)',
                      pointerEvents: 'none'
                    }}
                  />
                </div>
              ) : (
                /* Abstract Digital Tech Visual Mode */
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'var(--black-deep)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Abstract Grid & Concentric Rings */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage:
                        'radial-gradient(circle at center, rgba(169, 20, 28, 0.45) 0%, transparent 70%), linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
                      backgroundSize: '100% 100%, 30px 30px, 30px 30px'
                    }}
                  />

                  {/* Geometric Code Sphere / Core */}
                  <div
                    style={{
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      border: '2px dashed rgba(255, 255, 255, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      boxShadow: '0 0 60px var(--primary-red-glow)'
                    }}
                    className="animate-float"
                  >
                    <div
                      style={{
                        width: '130px',
                        height: '130px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary-red)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--white)',
                        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.4)'
                      }}
                    >
                      <Terminal size={56} />
                    </div>
                  </div>

                  <div
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      marginTop: '2rem',
                      textAlign: 'center'
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2rem',
                        letterSpacing: '0.08em',
                        color: 'var(--white)'
                      }}
                    >
                      CODE &middot; LOGIC &middot; CREATION
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        marginTop: '0.5rem'
                      }}
                    >
                      while(learning) &#123; buildMeaningfulTech(); &#125;
                    </div>
                  </div>
                </div>
              )}

              {/* Floating Tech HUD Badges */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(17, 17, 17, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.4rem 0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--white)'
                }}
              >
                <Code2 size={14} color="#ff4d5a" />
                <span>CSE_STUDENT_CORE</span>
              </div>

              {/* Bottom Card Snippet */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  right: '1rem',
                  backgroundColor: 'rgba(17, 17, 17, 0.88)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.85rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-dim)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}
                  >
                    Current Mode
                  </div>
                  <div
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--white)'
                    }}
                  >
                    Designing, Coding & Innovating
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: 'var(--primary-red)',
                    color: 'var(--white)',
                    padding: '0.3rem 0.6rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  v2.0
                </div>
              </div>
            </div>

            {/* Toggle visual mode button */}
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <button
                onClick={() => setVisualMode(visualMode === 'editorial' ? 'abstract' : 'editorial')}
                style={{
                  background: 'rgba(17, 17, 17, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: 'var(--white)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--black)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(17, 17, 17, 0.5)')}
                title="Toggle between editorial visual and abstract tech canvas"
              >
                <Sparkles size={13} />
                Switch Visual: {visualMode === 'editorial' ? 'Anime Persona' : 'Digital HUD'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats / Highlights Bar (Exact Inspiration from Reference Image Footer) */}
        <div
          style={{
            marginTop: '4rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center'
          }}
          className="hero-highlights-bar"
        >
          {personalData.stats.map((stat, idx) => (
            <div
              key={stat.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                position: 'relative'
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: 'var(--white)',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.04em'
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--warm-off-white)',
                    opacity: 0.85,
                    marginTop: '0.15rem'
                  }}
                >
                  {stat.detail}
                </div>
              </div>

              {/* Vertical divider bar matching reference image style */}
              {idx < personalData.stats.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '15%',
                    bottom: '15%',
                    width: '1px',
                    backgroundColor: 'rgba(255, 255, 255, 0.35)'
                  }}
                  className="stat-divider"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stat-divider {
            display: none !important;
          }
          .hero-highlights-bar {
            grid-template-columns: 1fr 1fr !important;
            gap: 1.5rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
