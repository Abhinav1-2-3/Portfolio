import React from 'react';
import { GraduationCap, Brain, Code2, Compass, Sparkles, Terminal, ArrowRight } from 'lucide-react';
import { personalData, aboutHighlights } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    GraduationCap: <GraduationCap size={24} />,
    Brain: <Brain size={24} />,
    Code2: <Code2 size={24} />,
    Compass: <Compass size={24} />
  };

  return (
    <section id="about" className="section bg-dark-surface">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Identity & Direction</span>
          </div>
          <h2 className="section-heading">
            {personalData.aboutHeading}
          </h2>
          <p className="section-subheading">
            Crafting code with intention, continuous curiosity, and an engineering-first mindset.
          </p>
        </div>

        {/* Content Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
          className="about-grid"
        >
          {/* Left Column: Narrative & Philosophy */}
          <div>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '2.5rem',
                position: 'relative',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--primary-red-hover)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Terminal size={16} />
                <span>bio_summary.md</span>
              </div>

              {/* Exact Paragraphs Specified by User */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {personalData.aboutParagraphs.map((para, idx) => (
                  <p
                    key={idx}
                    style={{
                      fontSize: '1.125rem',
                      lineHeight: 1.8,
                      color: 'var(--warm-off-white)',
                      fontWeight: 400
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Quote / Guiding Principle */}
              <div
                style={{
                  marginTop: '2rem',
                  paddingTop: '1.75rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--white)',
                    flexShrink: 0
                  }}
                >
                  <Sparkles size={18} />
                </div>
                <div style={{ fontSize: '0.925rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  "Great software isn't just about writing code; it's about solving real problems with empathy and relentless precision."
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Focus Pillars & Capability Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {aboutHighlights.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="card-dark card-red-accent"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  padding: '1.5rem',
                  backgroundColor: 'var(--black-surface)'
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(169, 20, 28, 0.15)',
                    color: 'var(--white)',
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid var(--border-red)'
                  }}
                >
                  {iconMap[pillar.icon] || <Code2 size={24} />}
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontFamily: 'var(--font-heading)',
                      letterSpacing: '0.04em',
                      color: 'var(--white)',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.925rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
