import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Built with <span className="footer-heart">♥</span> by{' '}
          <strong>Srihan Rao</strong> &nbsp;·&nbsp; {year}
        </p>
      </div>
    </footer>
  )
}
