import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = ({ darkMode, setDarkMode, setShowAuthModal, setSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
    setSearchResults(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      try {
        console.log('Searching for:', searchQuery)
        const response = await fetch(`https://api.rawg.io/api/games?key=4032143f42c84f39b7a79a56d7cb2e3d&search=${encodeURIComponent(searchQuery)}&page_size=12`)
        const data = await response.json()
        console.log('Search results:', data.results)
        
        if (setSearchResults) {
          setSearchResults(data.results || [])
          navigate('/')
        } else {
          alert(`Found ${data.results?.length || 0} games for: ${searchQuery}`)
        }
      } catch (error) {
        console.error('Search error:', error)
        alert('Search failed. Please try again.')
      }
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e)
    }
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={handleLogoClick}>
          <img 
            src="/logo.png" 
            alt="PS Logo" 
            className="logo-image"
          />
          PS
        </div>
        
        <div className="search-container">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              🔍
            </button>
          </form>
        </div>

        <div className="header-controls">
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <div className="auth-buttons">
            <button 
              className="auth-btn"
              onClick={() => setShowAuthModal(true)}
            >
              Sign Up / Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header