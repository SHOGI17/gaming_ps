import React, { useState, useEffect } from 'react'
import GameCard from '../MainContent/GameCard/GameCard'
import './Pages.css'

const CategoriesPage = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [categoryGames, setCategoryGames] = useState([])
  const [loading, setLoading] = useState(false)

  const categories = [
    { id: 'action', name: 'Action', slug: 'action' },
    { id: 'adventure', name: 'Adventure', slug: 'adventure' },
    { id: 'rpg', name: 'RPG', slug: 'role-playing-games-rpg' },
    { id: 'strategy', name: 'Strategy', slug: 'strategy' },
    { id: 'sports', name: 'Sports', slug: 'sports' },
    { id: 'racing', name: 'Racing', slug: 'racing' },
    { id: 'shooter', name: 'Shooter', slug: 'shooter' },
    { id: 'indie', name: 'Indie', slug: 'indie' }
  ]

  const fetchCategoryGames = async (categorySlug) => {
    setLoading(true)
    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=4032143f42c84f39b7a79a56d7cb2e3d&genres=${categorySlug}&page_size=12`)
      const data = await response.json()
      setCategoryGames(data.results || [])
    } catch (error) {
      console.error('Error fetching category games:', error)
      setCategoryGames([])
    } finally {
      setLoading(false)
    }
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    fetchCategoryGames(category.slug)
  }

  const handleBackToCategories = () => {
    setSelectedCategory(null)
    setCategoryGames([])
  }

  // თუ კატეგორია არჩეულია, გამოვაჩინოთ თამაშები
  if (selectedCategory) {
    return (
      <div className={`page-content ${darkMode ? 'dark' : 'light'}`}>
        <div className="category-header">
          <button className="back-button" onClick={handleBackToCategories}>
            ← Back to Categories
          </button>
          <h1>{selectedCategory.name} Games</h1>
          <p className="games-count">{categoryGames.length} games found</p>
        </div>

        {loading ? (
          <div className="loading">Loading games...</div>
        ) : categoryGames.length > 0 ? (
          <div className="category-games-grid">
            {categoryGames.map((game) => (
              <GameCard key={game.id} game={game} darkMode={darkMode} />
            ))}
          </div>
        ) : (
          <div className="no-games">No games found in this category.</div>
        )}
      </div>
    )
  }

  // თუ კატეგორია არ არის არჩეული, გამოვაჩინოთ კატეგორიების ჩამონათვალი
  return (
    <div className={`page-content ${darkMode ? 'dark' : 'light'}`}>
      <h1>Game Categories</h1>
      <p className="page-description">Choose a category to explore games</p>
      <div className="categories-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategoryClick(category)}
          >
            <h3>{category.name}</h3>
            <p>Explore {category.name.toLowerCase()} games</p>
            <div className="category-icon">
              {getCategoryIcon(category.id)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// კატეგორიების იკონები
const getCategoryIcon = (categoryId) => {
  const icons = {
    action: '⚔️',
    adventure: '🗺️',
    rpg: '🧙',
    strategy: '♟️',
    sports: '⚽',
    racing: '🏎️',
    shooter: '🔫',
    indie: '🎨'
  }
  return icons[categoryId] || '🎮'
}

export default CategoriesPage