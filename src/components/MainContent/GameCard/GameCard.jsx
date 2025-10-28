import React from 'react'
import { useNavigate } from 'react-router-dom'
import './GameCard.css'

const GameCard = ({ game, darkMode }) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/game/${game.id}`)
  }

  return (
    <div className={`game-card ${darkMode ? 'dark' : 'light'}`} onClick={handleCardClick}>
      <div className="game-image">
        <img src={game.background_image || '/api/placeholder/300/200'} alt={game.name} />
      </div>
      <div className="game-info">
        <h3 className="game-title">{game.name}</h3>
        <div className="game-meta">
          <span className="game-rating">⭐ {game.rating || 'N/A'}</span>
          <span className="game-released">{game.released || 'Coming Soon'}</span>
        </div>
      </div>
    </div>
  )
}

export default GameCard