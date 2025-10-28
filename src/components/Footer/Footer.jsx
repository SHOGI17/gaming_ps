// src/components/Footer/Footer.jsx
import React, { useState } from 'react'
import './Footer.css'

const Footer = ({ darkMode }) => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      alert(`Thank you for subscribing with: ${email}`)
      setEmail('')
    }
  }

  return (
    <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
      <div className="footer-content">
        <div className="newsletter-section">
          <h3>STAY UPDATED WITH OUR NEWSLETTER</h3>
          <p>Get the latest gaming news and exclusive offers</p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter-input"
            />
            <button type="submit" className="subscribe-btn">
              SUBSCRIBE
            </button>
          </form>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h4>Gaming Platform</h4>
            <a href="#about">About Us</a>
            <a href="#careers">Careers</a>
            <a href="#press">Press</a>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <a href="#help">Help Center</a>
            <a href="#contact">Contact Us</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Gaming Platform PS. All rights reserved.</p>
          <div className="social-links">
            <span>Follow us: </span>
            <a href="#twitter">Twitter</a>
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#youtube">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer