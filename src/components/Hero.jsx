import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">// Hello, World!</p>
            <h1 className="hero-name">
              I'm <span>Srihan Rao</span>
            </h1>
            <p className="hero-role">Full-Stack Developer &amp; Competitive Coder</p>
            <p className="hero-desc">
              Passionate about building elegant, high-performance web applications
              and solving complex algorithmic problems. I love turning ideas into
              reality through clean, efficient code.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                View Projects ↓
              </a>
              <a href="#connect" className="btn btn-outline">
                Let's Connect →
              </a>
            </div>
          </div>

          <div className="hero-avatar" aria-hidden="true">
            <div className="hero-avatar-ring" />
            <div className="hero-avatar-inner">👨‍💻</div>
          </div>
        </div>
      </div>
    </section>
  )
}
