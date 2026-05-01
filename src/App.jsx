import React from 'react'

export default function App() {
  return (
    <>
      {/* Navbar */}
      <nav>
        <a href="#hero" className="logo">Portfolio</a>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#connect">Connect</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section id="hero">
        <h1>Srihan Rao</h1>
        <p className="subtitle">Full-Stack Developer &amp; Competitive Coder</p>
        <p>
          Passionate about building web applications and solving algorithmic problems.
          I turn ideas into reality through clean and efficient code.
        </p>
      </section>

      {/* Social Links */}
      <section id="connect">
        <h2>Connect With Me</h2>
        <div className="social-links">
          <a
            href="https://github.com/Madhavanenisrihanrao"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span className="platform">GitHub</span>
            <span className="url">github.com/msrihanrao</span>
          </a>

          <a
            href="https://www.linkedin.com/in/srihan-rao-madhavaneni-b777b8350/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span className="platform">LinkedIn</span>
            <span className="url">linkedin.com/in/msrihanrao</span>
          </a>

          <a
            href="https://www.codechef.com/users/crowd_spark_13"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span className="platform">CodeChef</span>
            <span className="url">codechef.com/users/msrihanrao</span>
          </a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Java', 'C++', 'SQL', 'Node.js', 'Git'].map(s => (
            <span className="skill-tag" key={s}>{s}</span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2>Projects</h2>
        <p><strong>E-Commerce Platform</strong> — Full-stack shopping app with cart and payment integration. (React, Node.js, MongoDB)</p>
        <p><strong>CP Problem Tracker</strong> — Tracks competitive programming progress synced with CodeChef. (React, Firebase)</p>
        <p><strong>Blog CMS</strong> — Headless CMS-powered blog with SEO optimization. (Next.js, Contentful)</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Srihan Rao</p>
      </footer>
    </>
  )
}
