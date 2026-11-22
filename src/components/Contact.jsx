import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Copy, Check, AlertCircle, ArrowUpRight, MessageSquare } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [copiedField, setCopiedField] = useState(null);
  const [formStatus, setFormStatus] = useState(null); // null | 'success' | 'error'

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a subject.';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject should be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (formStatus) setFormStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setFormStatus('success');
    } else {
      setFormStatus('error');
    }
  };

  const handleOpenMailto = () => {
    const mailtoUrl = `mailto:${personalData.socialLinks.email}?subject=${encodeURIComponent(
      `[Portfolio] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleCopyContact = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="section bg-primary-red">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-tag" style={{ backgroundColor: 'var(--black)' }}>
            <span className="section-tag-dot" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="section-heading">
            Let's Connect.
          </h2>
          <p className="section-subheading">
            Whether you want to discuss a project, collaborate on code, or connect about tech opportunities, I'd love to hear from you.
          </p>
        </div>

        {/* Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Links & Details */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Email Card */}
              <div
                className="card-dark"
                style={{
                  backgroundColor: 'var(--black)',
                  padding: '1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(169, 20, 28, 0.3)',
                      color: 'var(--white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--border-red)'
                    }}
                  >
                    <Mail size={22} />
                  </div>
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
                      Email Address
                    </div>
                    <a
                      href={`mailto:${personalData.socialLinks.email}`}
                      style={{
                        color: 'var(--white)',
                        fontWeight: 600,
                        fontSize: '1rem',
                        textDecoration: 'none'
                      }}
                    >
                      {personalData.socialLinks.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopyContact(personalData.socialLinks.email, 'email')}
                  aria-label="Copy email address"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: 'var(--white)',
                    padding: '0.5rem',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer'
                  }}
                  title="Copy to clipboard"
                >
                  {copiedField === 'email' ? <Check size={18} color="#22c55e" /> : <Copy size={18} />}
                </button>
              </div>

              {/* GitHub Card */}
              <div
                className="card-dark"
                style={{
                  backgroundColor: 'var(--black)',
                  padding: '1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      color: 'var(--white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    <Github size={22} />
                  </div>
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
                      GitHub Profile
                    </div>
                    <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '1rem' }}>
                      {personalData.socialLinks.github.replace('https://', '')}
                    </div>
                  </div>
                </div>

                <a
                  href={personalData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub Profile"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: 'var(--white)',
                    padding: '0.5rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none'
                  }}
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              {/* LinkedIn Card */}
              <div
                className="card-dark"
                style={{
                  backgroundColor: 'var(--black)',
                  padding: '1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(169, 20, 28, 0.3)',
                      color: 'var(--white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--border-red)'
                    }}
                  >
                    <Linkedin size={22} />
                  </div>
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
                      LinkedIn Profile
                    </div>
                    <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '1rem' }}>
                      {personalData.socialLinks.linkedin.replace('https://', '')}
                    </div>
                  </div>
                </div>

                <a
                  href={personalData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn Profile"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: 'var(--white)',
                    padding: '0.5rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none'
                  }}
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            {/* Note on Response Time */}
            <div
              style={{
                marginTop: '1.75rem',
                padding: '1.25rem',
                backgroundColor: 'rgba(17, 17, 17, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                color: 'var(--warm-off-white)'
              }}
            >
              <span style={{ fontWeight: 700, color: 'var(--white)' }}>Response Time: </span>
              Usually active during weekday evenings & weekends. Feel free to ping via email or LinkedIn for prompt replies.
            </div>
          </div>

          {/* Right Column: Contact Form with Validation */}
          <div
            className="card-dark"
            style={{
              backgroundColor: 'var(--black)',
              padding: '2.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <h3
              style={{
                fontSize: '1.8rem',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.04em',
                color: 'var(--white)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem'
              }}
            >
              <MessageSquare size={22} color="#FF3B47" />
              <span>Send A Direct Message</span>
            </h3>

            <form onSubmit={handleSubmit} noValidate>
              {/* Name Field */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    marginBottom: '0.4rem'
                  }}
                >
                  Your Name <span style={{ color: '#FF3B47' }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--black-surface-elevated)',
                    border: errors.name ? '1px solid #FF3B47' : '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--white)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                />
                {errors.name && (
                  <p style={{ color: '#FF3B47', fontSize: '0.8rem', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <AlertCircle size={14} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    marginBottom: '0.4rem'
                  }}
                >
                  Your Email <span style={{ color: '#FF3B47' }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--black-surface-elevated)',
                    border: errors.email ? '1px solid #FF3B47' : '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--white)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                />
                {errors.email && (
                  <p style={{ color: '#FF3B47', fontSize: '0.8rem', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <AlertCircle size={14} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="subject"
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    marginBottom: '0.4rem'
                  }}
                >
                  Subject <span style={{ color: '#FF3B47' }}>*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Collaboration on AI Project"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--black-surface-elevated)',
                    border: errors.subject ? '1px solid #FF3B47' : '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--white)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                />
                {errors.subject && (
                  <p style={{ color: '#FF3B47', fontSize: '0.8rem', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <AlertCircle size={14} />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    marginBottom: '0.4rem'
                  }}
                >
                  Message <span style={{ color: '#FF3B47' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your thoughts or project details here..."
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--black-surface-elevated)',
                    border: errors.message ? '1px solid #FF3B47' : '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--white)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s ease'
                  }}
                />
                {errors.message && (
                  <p style={{ color: '#FF3B47', fontSize: '0.8rem', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <AlertCircle size={14} />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-secondary"
                style={{ width: '100%', padding: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}
              >
                <Send size={18} />
                Validate & Dispatch Message
              </button>
            </form>

            {/* Validation & Transparent Delivery Feedback */}
            {formStatus === 'success' && (
              <div
                style={{
                  marginTop: '1.75rem',
                  padding: '1.25rem',
                  backgroundColor: 'rgba(34, 197, 94, 0.12)',
                  border: '1px solid rgba(34, 197, 94, 0.4)',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4ade80', fontWeight: 700, marginBottom: '0.5rem' }}>
                  <Check size={20} />
                  <span>Validation Passed! Ready to Send.</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--warm-off-white)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  Since this site runs as a static client without a third-party backend relay, click below to open your pre-formatted message in your default email client, or copy the content directly to your clipboard.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <button
                    onClick={handleOpenMailto}
                    className="btn btn-primary btn-sm"
                    style={{ backgroundColor: 'var(--primary-red)' }}
                  >
                    <Mail size={16} />
                    Open in Email App
                  </button>
                  <button
                    onClick={() =>
                      handleCopyContact(
                        `From: ${formData.name} <${formData.email}>\nSubject: ${formData.subject}\n\n${formData.message}`,
                        'fullMessage'
                      )
                    }
                    className="btn btn-outline-white btn-sm"
                  >
                    {copiedField === 'fullMessage' ? <Check size={16} /> : <Copy size={16} />}
                    {copiedField === 'fullMessage' ? 'Copied!' : 'Copy Full Draft'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
