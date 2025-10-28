import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import AuthModal from './components/AuthModal/AuthModal'
import MainContent from './components/MainContent/MainContent'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import RightSidebar from './components/RightSidebar/RightSidebar'
import Footer from './components/Footer/Footer'
import CategoriesPage from './components/pages/CategoriesPage'
import NewsPage from './components/pages/NewsPage'
import ComingSoonPage from './components/pages/ComingSoonPage'
import AboutPage from './components/pages/AboutPage'
import ContactPage from './components/pages/ContactPage'
import GameDetailsPage from './components/pages/GameDetailsPage'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchResults, setSearchResults] = useState(null)

  useEffect(() => {
    fetchGames()
  }, [])

  const fetchGames = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://api.rawg.io/api/games?key=4032143f42c84f39b7a79a56d7cb2e3d&page_size=12')
      const data = await response.json()
      setGames(data.results)
    } catch (error) {
      console.error('Error fetching games:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className={`loading-screen ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="loading-spinner"><img src="logo.png" alt="" /></div>
        <p>Loading games...</p>
      </div>
    )
  }

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
          setShowAuthModal={setShowAuthModal}
          setSearchResults={setSearchResults}
        />
        <div className="main-container">
          <LeftSidebar darkMode={darkMode} />
          <Routes>
            <Route path="/" element={
              <MainContent 
                games={games} 
                darkMode={darkMode} 
                searchResults={searchResults}
              />
            } />
            <Route path="/categories" element={<CategoriesPage darkMode={darkMode} />} />
            <Route path="/news" element={<NewsPage darkMode={darkMode} />} />
            <Route path="/coming-soon" element={<ComingSoonPage darkMode={darkMode} />} />
            <Route path="/about" element={<AboutPage darkMode={darkMode} />} />
            <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
            <Route path="/game/:gameId" element={<GameDetailsPage darkMode={darkMode} />} />
          </Routes>
          <RightSidebar darkMode={darkMode} />
        </div>
        <Footer darkMode={darkMode} />
        {showAuthModal && (
          <AuthModal 
            setShowAuthModal={setShowAuthModal}
            darkMode={darkMode}
          />
        )}
      </div>
    </Router>
  )
}

export default App