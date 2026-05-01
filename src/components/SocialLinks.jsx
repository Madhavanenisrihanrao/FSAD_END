import React from 'react'

const SOCIAL_LINKS = [
  {
    id: 'github',
    platform: 'GitHub',
    handle: '@msrihanrao',
    icon: '🐙',
    url: 'https://github.com/msrihanrao',
    className: 'github',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    handle: 'msrihanrao',
    icon: '💼',
    url: 'https://www.linkedin.com/in/msrihanrao',
    className: 'linkedin',
  },
  {
    id: 'codechef',
    platform: 'CodeChef',
    handle: 'msrihanrao',
    icon: '🍴',
    url: 'https://www.codechef.com/users/msrihanrao',
    className: 'codechef',
  },
]

export default function SocialLinks() {
  return (
    <section id="connect">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">// connect</p>
          <h2 className="section-title">Find Me <span>Online</span></h2>
        </div>

        <div className="links-grid">
          {SOCIAL_LINKS.map(({ id, platform, handle, icon, url, className }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-card ${className}`}
              aria-label={`Visit ${platform} profile`}
              id={`link-${id}`}
            >
              <div className="social-icon">{icon}</div>
              <div className="social-info">
                <div className="social-title">{platform}</div>
                <div className="social-handle">{handle}</div>
              </div>
              <span className="social-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
