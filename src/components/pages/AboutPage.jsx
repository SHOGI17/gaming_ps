import React from 'react'
import './Pages.css'

const AboutPage = ({ darkMode }) => {
  return (
    <div className={`page-content ${darkMode ? 'dark' : 'light'}`}>
      <h1>About Us</h1>
      <div className="about-content">
        <p>Welcome to Gaming Platform PS - your ultimate destination for gaming news, reviews, and community.</p>
        <p>We are passionate gamers dedicated to bringing you the latest in the gaming world.</p>
        <div className="team-section">
          <h2>Our Team</h2>
          <p>Experienced gamers and industry professionals</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage