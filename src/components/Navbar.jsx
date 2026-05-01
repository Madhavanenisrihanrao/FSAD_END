import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container">
        <a href="#hero" className="navbar-logo">&lt;SrR /&gt;</a>
        <ul className="navbar-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#connect">Connect</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
    </nav>
  )
}
