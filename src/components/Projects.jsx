import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Sparkles, Terminal, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="section bg-dark-surface">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Showcase & Work</span>
          </div>
          <h2 className="section-heading">
            Featured Projects
          </h2>
          <p className="section-subheading">
            Real-world applications, engineering tools, and intelligent agent concepts designed with precision.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem'
          }}
          className="projects-grid"
        >
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              className="card-dark card-red-accent"
              style={{
                backgroundColor: 'var(--black-surface)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.25rem',
                position: 'relative'
              }}
            >
              <div>
                {/* Header: Project Index & Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.75rem',
                      color: 'rgba(255, 255, 255, 0.25)',
                      letterSpacing: '0.04em'
                    }}
                  >
                    0{index + 1}
                  </span>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--warm-off-white)',
                      backgroundColor: 'rgba(169, 20, 28, 0.35)',
                      border: '1px solid var(--border-red)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3
                  style={{
                    fontSize: '2.2rem',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.03em',
                    color: 'var(--white)',
                    lineHeight: 1.05,
                    marginBottom: '0.35rem'
                  }}
                >
                  {project.title}
                </h3>

                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--primary-red-hover)',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-display)'
                  }}
                >
                  {project.subtitle}
                </div>

                {/* Short Description */}
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.65,
                    color: 'var(--text-muted)',
                    marginBottom: '1.75rem'
                  }}
                >
                  {project.description}
                </p>

                {/* Technologies List */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '2rem'
                  }}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: 'var(--warm-off-white)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Links */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-subtle)',
                  gap: '0.75rem'
                }}
              >
                {/* Details Button */}
                <button
                  onClick={() => setActiveModalProject(project)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--white)',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.4rem 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-red-hover)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white)')}
                >
                  <span>Project Specs</span>
                  <ArrowUpRight size={16} />
                </button>

                {/* External Links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    title="GitHub Repository"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      color: 'var(--white)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      transition: 'all 0.2s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--white)';
                      e.currentTarget.style.color = 'var(--black)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color = 'var(--white)';
                    }}
                  >
                    <Github size={17} />
                  </a>

                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo for ${project.title}`}
                    title="Live Demo"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--primary-red)',
                      color: 'var(--white)',
                      border: '1px solid var(--border-bright)',
                      transition: 'all 0.2s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary-red-hover)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary-red)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <ExternalLink size={17} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
