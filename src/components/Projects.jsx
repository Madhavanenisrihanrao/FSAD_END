import React from 'react'

const PROJECTS = [
  {
    icon: '🛒',
    name: 'E-Commerce Platform',
    desc: 'A full-stack online shopping platform with authentication, cart management, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    icon: '📊',
    name: 'Data Dashboard',
    desc: 'Interactive analytics dashboard visualizing real-time data with dynamic charts and filters.',
    tags: ['React', 'D3.js', 'Python', 'FastAPI'],
  },
  {
    icon: '🤖',
    name: 'AI Chat Assistant',
    desc: 'Conversational AI assistant powered by large language models with context-aware responses.',
    tags: ['Python', 'LLM', 'WebSockets', 'React'],
  },
  {
    icon: '🏆',
    name: 'CP Problem Tracker',
    desc: 'Personal competitive programming tracker syncing with CodeChef and Codeforces to log solved problems.',
    tags: ['React', 'Firebase', 'REST API'],
  },
  {
    icon: '📝',
    name: 'Blog CMS',
    desc: 'Headless CMS-powered blog platform with rich-text editing, tagging, and SEO optimization.',
    tags: ['Next.js', 'Contentful', 'Tailwind'],
  },
  {
    icon: '🔐',
    name: 'Auth Microservice',
    desc: 'Secure authentication service featuring JWT, OAuth2, and role-based access control.',
    tags: ['Node.js', 'JWT', 'OAuth2', 'PostgreSQL'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">// portfolio</p>
          <h2 className="section-title">Featured <span>Projects</span></h2>
        </div>
        <div className="projects-grid">
          {PROJECTS.map(({ icon, name, desc, tags }) => (
            <div className="project-card" key={name}>
              <div className="project-icon">{icon}</div>
              <div className="project-name">{name}</div>
              <p className="project-desc">{desc}</p>
              <div className="project-tags">
                {tags.map(tag => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
