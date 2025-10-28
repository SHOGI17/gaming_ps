import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LeftSidebar.css'

const LeftSidebar = ({ darkMode }) => {
  const navigate = useNavigate()
  
  const categories = [
    { name: 'CATEGORIES', path: '/categories' },
    { name: 'NEWS', path: '/news' }, 
    { name: 'COMING SOON', path: '/coming-soon' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CONTACT US', path: '/contact' }
  ]

  const handleCategoryClick = (path) => {
    navigate(path)
  }

  return (
    <aside className={`left-sidebar ${darkMode ? 'dark' : 'light'}`}>
      <nav className="sidebar-nav">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`nav-item ${darkMode ? 'dark' : 'light'}`}
            onClick={() => handleCategoryClick(category.path)}
          >
            {category.name}
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default LeftSidebar