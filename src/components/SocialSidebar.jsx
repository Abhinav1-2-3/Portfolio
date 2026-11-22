import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function SocialSidebar() {
  const socials = [
    {
      name: 'GitHub',
      icon: <Github size={19} />,
      url: personalData.socialLinks.github
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={19} />,
      url: personalData.socialLinks.linkedin
    },
    {
      name: 'Twitter / X',
      icon: <Twitter size={19} />,
      url: personalData.socialLinks.twitter
    },
    {
      name: 'Email',
      icon: <Mail size={19} />,
      url: `mailto:${personalData.socialLinks.email}`
    }
  ];

  return (
    <>
      <aside
        className="social-sidebar"
        style={{
          position: 'fixed',
          left: '2rem',
          bottom: '0',
          zIndex: 80,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              title={item.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(17, 17, 17, 0.45)',
                color: 'var(--white)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.25s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--black)';
                e.currentTarget.style.color = 'var(--white)';
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                e.currentTarget.style.borderColor = 'var(--white)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(17, 17, 17, 0.45)';
                e.currentTarget.style.color = 'var(--white)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              }}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Vertical Rail Line */}
        <div
          style={{
            width: '1px',
            height: '80px',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4), transparent)'
          }}
        />
      </aside>

      <style>{`
        @media (max-width: 900px) {
          .social-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
