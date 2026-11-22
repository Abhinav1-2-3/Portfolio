import React, { useState } from 'react';
import {
  Cpu,
  Coffee,
  Database,
  CodeXml,
  Palette,
  Terminal,
  Sparkles,
  Zap,
  CheckCircle2,
  Code2,
  Layers,
  PlusCircle
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const iconMap = {
    Cpu: <Cpu size={22} />,
    Coffee: <Coffee size={22} />,
    Database: <Database size={22} />,
    CodeXml: <CodeXml size={22} />,
    Palette: <Palette size={22} />,
    Terminal: <Terminal size={22} />,
    Sparkles: <Sparkles size={22} />,
    Zap: <Zap size={22} />,
    CheckCircle2: <CheckCircle2 size={22} />
  };

  const categories = ['All', 'Languages', 'Database & Backend', 'Web Technologies', 'AI & Developer Tools', 'Core Competencies'];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="section bg-primary-red">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-tag" style={{ backgroundColor: 'var(--black)' }}>
            <span className="section-tag-dot" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-heading">
            Skills & Expertise
          </h2>
          <p className="section-subheading">
            A balanced foundation of low-level systems logic, object-oriented software engineering, modern web craft, and AI-assisted workflows.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '2.5rem'
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  backgroundColor: isActive ? 'var(--white)' : 'rgba(17, 17, 17, 0.45)',
                  color: isActive ? 'var(--black)' : 'var(--warm-off-white)',
                  border: isActive ? '1px solid var(--white)' : '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.5rem 1.15rem',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backdropFilter: 'blur(6px)'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'var(--black)';
                    e.currentTarget.style.color = 'var(--white)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'rgba(17, 17, 17, 0.45)';
                    e.currentTarget.style.color = 'var(--warm-off-white)';
                  }
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="card-dark"
              style={{
                backgroundColor: 'var(--black)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem',
                position: 'relative'
              }}
            >
              <div>
                {/* Header: Icon & Category Tag */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(169, 20, 28, 0.25)',
                      color: 'var(--white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(169, 20, 28, 0.5)'
                    }}
                  >
                    {iconMap[skill.icon] || <Code2 size={22} />}
                  </div>

                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.04em',
                    color: 'var(--white)',
                    marginBottom: '0.25rem'
                  }}
                >
                  {skill.name}
                </h3>

                {/* Level / Descriptor */}
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--primary-red-hover)',
                    marginBottom: '0.85rem'
                  }}
                >
                  {skill.level}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.55,
                    marginBottom: '1.5rem'
                  }}
                >
                  {skill.description}
                </p>
              </div>

              {/* Progress Indicator */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-dim)',
                    marginBottom: '0.4rem'
                  }}
                >
                  <span>Proficiency</span>
                  <span style={{ color: 'var(--white)', fontWeight: 600 }}>{skill.percentage}%</span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      width: `${skill.percentage}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #A9141C, #FF3B47)',
                      borderRadius: '3px',
                      transition: 'width 1s ease'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Add Skill Helper Card for Abhinav */}
          <div
            style={{
              border: '2px dashed rgba(255, 255, 255, 0.25)',
              borderRadius: 'var(--radius-md)',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              backgroundColor: 'rgba(17, 17, 17, 0.35)',
              minHeight: '220px'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--white)',
                marginBottom: '0.75rem'
              }}
            >
              <PlusCircle size={22} />
            </div>
            <div
              style={{
                fontSize: '1.1rem',
                fontFamily: 'var(--font-heading)',
                color: 'var(--white)',
                letterSpacing: '0.04em',
                marginBottom: '0.25rem'
              }}
            >
              Extensible Skills
            </div>
            <p
              style={{
                fontSize: '0.8rem',
                color: 'var(--warm-off-white)',
                opacity: 0.8,
                maxWidth: '220px',
                lineHeight: 1.4
              }}
            >
              Add Python, React, C++, or any future skill anytime in <code>src/data/portfolioData.js</code>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
