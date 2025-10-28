import React from 'react'
import './Pages.css'

const ComingSoonPage = ({ darkMode }) => {
  const upcomingGames = [
    { name: 'Cyber Odyssey', release: '2024-03-15', platform: 'PC, PS5, Xbox' },
    { name: 'Ancient Legends', release: '2024-04-20', platform: 'All Platforms' },
    { name: 'Space Frontier', release: '2024-05-10', platform: 'PC, Xbox' }
  ]

  return (
    <div className={`page-content ${darkMode ? 'dark' : 'light'}`}>
      <h1>Coming Soon</h1>
      <div className="coming-soon-list">
        {upcomingGames.map((game, index) => (
          <div key={index} className="game-upcoming">
            <h3>{game.name}</h3>
            <p><strong>Release Date:</strong> {game.release}</p>
            <p><strong>Platforms:</strong> {game.platform}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComingSoonPage