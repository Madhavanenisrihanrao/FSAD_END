import React from 'react'

const SKILLS = [
  { icon: '⚛️', name: 'React' },
  { icon: '🟨', name: 'JavaScript' },
  { icon: '🐍', name: 'Python' },
  { icon: '☕', name: 'Java' },
  { icon: '🗃️', name: 'SQL' },
  { icon: '🌿', name: 'Node.js' },
  { icon: '🎨', name: 'CSS' },
  { icon: '🐙', name: 'Git' },
  { icon: '🐋', name: 'Docker' },
  { icon: '🔥', name: 'Firebase' },
  { icon: '📐', name: 'C++' },
  { icon: '🔧', name: 'REST APIs' },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">// expertise</p>
          <h2 className="section-title">Skills &amp; <span>Technologies</span></h2>
        </div>
        <div className="skills-grid">
          {SKILLS.map(({ icon, name }) => (
            <div className="skill-card" key={name}>
              <div className="skill-card-icon">{icon}</div>
              <div className="skill-card-name">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
