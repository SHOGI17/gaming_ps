import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './Pages.css'

const GameDetailsPage = ({ darkMode }) => {
  const { gameId } = useParams()
  const navigate = useNavigate()
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchGameDetails()
  }, [gameId])

  const fetchGameDetails = async () => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=4032143f42c84f39b7a79a56d7cb2e3d`)
      const data = await response.json()
      setGame(data)
    } catch (error) {
      console.error('Error fetching game details:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleBack = () => {
    navigate(-1)
  }

  if (loading) {
    return (
      <div className={`page-content ${darkMode ? 'dark' : 'light'}`}>
        <div className="loading">Loading game details...</div>
      </div>
    )
  }

  if (!game) {
    return (
      <div className={`page-content ${darkMode ? 'dark' : 'light'}`}>
        <div className="no-games">Game not found</div>
        <button className="back-button" onClick={handleBack}>Go Back</button>
      </div>
    )
  }

  return (
    <div className={`page-content ${darkMode ? 'dark' : 'light'}`}>
      <button className="back-button" onClick={handleBack}>← Back</button>
      
      <div className="game-details">
        <div className="game-details-header">
          <img src={game.background_image} alt={game.name} className="game-details-image" />
          <div className="game-details-info">
            <h1>{game.name}</h1>
            <div className="game-meta">
              <span className="rating">⭐ {game.rating}</span>
              <span className="released">Released: {game.released}</span>
            </div>
          </div>
        </div>

        <div className="game-details-content">
          <div className="game-description" dangerouslySetInnerHTML={{ __html: game.description }} />
          
          <div className="game-details-grid">
            <div className="detail-section">
              <h3>Platforms</h3>
              <div className="platforms">
                {game.platforms?.map(platform => (
                  <span key={platform.platform.id} className="platform-tag">
                    {platform.platform.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h3>Genres</h3>
              <div className="genres">
                {game.genres?.map(genre => (
                  <span key={genre.id} className="genre-tag">
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h3>Additional Info</h3>
              <div className="additional-info">
                <p><strong>Metacritic:</strong> {game.metacritic || 'N/A'}</p>
                <p><strong>Playtime:</strong> {game.playtime} hours</p>
                <p><strong>Website:</strong> 
                  {game.website ? (
                    <a href={game.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
                  ) : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameDetailsPage