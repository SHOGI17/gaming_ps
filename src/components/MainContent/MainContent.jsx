import React, { useState, useEffect } from 'react'
import GameCard from './GameCard/GameCard'
import './MainContent.css'

const MainContent = ({ games, darkMode, searchResults }) => {
  const [currentSlides, setCurrentSlides] = useState([0, 0, 0, 0, 0])
  const [allGames, setAllGames] = useState([])
  const [currentYoutubeSlide, setCurrentYoutubeSlide] = useState(0)
  const cardsPerSlide = 4

  const youtubeVideos = [
    "https://www.youtube.com/embed/VQRLujxTm3c?si=v_C2-K7JXEaWNVWC",
    "https://www.youtube.com/embed/Umw-SKuh0LY?si=P6_0IGy2FJ_vZ-nY", 
    "https://www.youtube.com/embed/9txkGBj_trg?si=KfOj0cM63FHRSHod",
    "https://www.youtube.com/embed/UZ6eFEjFfJ0?si=5u28n4AT6hq4_gWT"
  ]

  useEffect(() => {
    if (searchResults && searchResults.length > 0) {
      const duplicatedSearchResults = [...searchResults, ...searchResults.slice(0, 4)]
      setAllGames(duplicatedSearchResults)
    } else if (games.length > 0) {
      const duplicatedGames = [...games, ...games, ...games, ...games, ...games.slice(0, 4)]
      setAllGames(duplicatedGames)
    }
  }, [games, searchResults])

  const nextSlide = (rowIndex) => {
    setCurrentSlides(prev => {
      const newSlides = [...prev]
      const maxSlides = Math.floor(allGames.length / cardsPerSlide) - 1
      newSlides[rowIndex] = newSlides[rowIndex] >= maxSlides ? 0 : newSlides[rowIndex] + 1
      return newSlides
    })
  }

  const prevSlide = (rowIndex) => {
    setCurrentSlides(prev => {
      const newSlides = [...prev]
      const maxSlides = Math.floor(allGames.length / cardsPerSlide) - 1
      newSlides[rowIndex] = newSlides[rowIndex] <= 0 ? maxSlides : newSlides[rowIndex] - 1
      return newSlides
    })
  }

  const nextYoutubeSlide = () => {
    setCurrentYoutubeSlide(prev => (prev + 1) % youtubeVideos.length)
  }

  const prevYoutubeSlide = () => {
    setCurrentYoutubeSlide(prev => prev <= 0 ? youtubeVideos.length - 1 : prev - 1)
  }

  const getGamesForRow = (rowIndex) => {
    const startIndex = currentSlides[rowIndex] * cardsPerSlide
    return allGames.slice(startIndex, startIndex + cardsPerSlide)
  }

  const rowTitles = [
    "Featured Games",
    "Popular Games", 
    "New Releases",
    "Top Rated",
    "Coming Soon"
  ]

  if (searchResults && searchResults.length > 0) {
    return (
      <main className="main-content">
        <div className="youtube-player">
          <div className="youtube-container">
            <button className="youtube-slide-btn prev" onClick={prevYoutubeSlide}>
              ‹
            </button>
            <div className="youtube-video">
              <iframe
                src={youtubeVideos[currentYoutubeSlide]}
                title="Gaming Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <button className="youtube-slide-btn next" onClick={nextYoutubeSlide}>
              ›
            </button>
          </div>
        </div>

        <div className="games-section">
          <div className="games-row">
            <h3 className="row-title">Search Results</h3>
            <div className="row-container">
              <button className="row-slide-btn prev" onClick={() => prevSlide(0)}>
                ‹
              </button>
              <div className="games-grid">
                {getGamesForRow(0).map((game, index) => (
                  <GameCard key={`${game.id}-search-${index}`} game={game} darkMode={darkMode} />
                ))}
              </div>
              <button className="row-slide-btn next" onClick={() => nextSlide(0)}>
                ›
              </button>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="main-content">
      <div className="youtube-player">
        <div className="youtube-container">
          <button className="youtube-slide-btn prev" onClick={prevYoutubeSlide}>
            ‹
          </button>
          <div className="youtube-video">
            <iframe
              src={youtubeVideos[currentYoutubeSlide]}
              title="Gaming Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button className="youtube-slide-btn next" onClick={nextYoutubeSlide}>
            ›
          </button>
        </div>
      </div>

      <div className="games-section">
        {rowTitles.map((title, rowIndex) => (
          <div key={rowIndex} className="games-row">
            <h3 className="row-title">{title}</h3>
            <div className="row-container">
              <button className="row-slide-btn prev" onClick={() => prevSlide(rowIndex)}>
                ‹
              </button>
              <div className="games-grid">
                {getGamesForRow(rowIndex).map((game, index) => (
                  <GameCard key={`${game.id}-${rowIndex}-${index}`} game={game} darkMode={darkMode} />
                ))}
              </div>
              <button className="row-slide-btn next" onClick={() => nextSlide(rowIndex)}>
                ›
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default MainContent