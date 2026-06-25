'use client'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo" aria-label="Clear Sky Coaching — home" onClick={closeMenu}>
          <svg width="38" height="38" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="120" height="120" rx="4" fill="#8B3028"/>
            <rect x="7" y="7" width="106" height="106" rx="1" fill="none" stroke="#F0DDD5" strokeWidth="1.6"/>
            <rect x="12" y="12" width="96" height="96" fill="none" stroke="#F0DDD5" strokeWidth="0.7" opacity="0.7"/>
            <polyline points="12,24 12,12 24,12" fill="none" stroke="#F0DDD5" strokeWidth="1.6" strokeLinecap="square"/>
            <polyline points="96,12 108,12 108,24" fill="none" stroke="#F0DDD5" strokeWidth="1.6" strokeLinecap="square"/>
            <polyline points="12,96 12,108 24,108" fill="none" stroke="#F0DDD5" strokeWidth="1.6" strokeLinecap="square"/>
            <polyline points="108,96 108,108 96,108" fill="none" stroke="#F0DDD5" strokeWidth="1.6" strokeLinecap="square"/>
            <line x1="60" y1="13" x2="60" y2="107" stroke="#F0DDD5" strokeWidth="0.5" opacity="0.25"/>
            <line x1="13" y1="60" x2="107" y2="60" stroke="#F0DDD5" strokeWidth="0.5" opacity="0.25"/>
            <text x="37" y="37" fontFamily="'Noto Serif SC',serif" fontSize="31" fill="#F7E8E0" textAnchor="middle" dominantBaseline="central">雨</text>
            <text x="83" y="37" fontFamily="'Noto Serif SC',serif" fontSize="31" fill="#F7E8E0" textAnchor="middle" dominantBaseline="central">过</text>
            <text x="37" y="83" fontFamily="'Noto Serif SC',serif" fontSize="31" fill="#F7E8E0" textAnchor="middle" dominantBaseline="central">天</text>
            <text x="83" y="83" fontFamily="'Noto Serif SC',serif" fontSize="31" fill="#F7E8E0" textAnchor="middle" dominantBaseline="central">晴</text>
          </svg>
          <div className="nav-logo-text">
            <span className="nav-logo-name">Clear Sky Coaching</span>
            <span className="nav-logo-tagline">Clarity after the rain.</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#recognition">Who This Is For</a></li>
          <li><a href="#approach">Approach</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact" className="nav-cta">Begin the Conversation</a></li>
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <ul>
          <li><a href="#" onClick={closeMenu}>Home</a></li>
          <li><a href="#recognition" onClick={closeMenu}>Who This Is For</a></li>
          <li><a href="#approach" onClick={closeMenu}>Approach</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li>
            <a href="#contact" className="mobile-menu-cta" onClick={closeMenu}>
              Begin the Conversation
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
