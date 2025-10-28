import React from 'react'
import './Pages.css'

const NewsPage = ({ darkMode }) => {
  const news = [
    { title: 'New Game Release', date: '2024-01-15', content: 'Exciting new game coming next month!' },
    { title: 'Update Patch Notes', date: '2024-01-10', content: 'Latest patch brings new features and bug fixes.' },
    { title: 'Esports Tournament', date: '2024-01-05', content: 'Major tournament announced with $1M prize pool.' }
  ]

  return (
    <div className={`page-content ${darkMode ? 'dark' : 'light'}`}>
      <h1>Gaming News</h1>
      <div className="news-list">
        {news.map((item, index) => (
          <div key={index} className="news-item">
            <h3>{item.title}</h3>
            <span className="news-date">{item.date}</span>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsPage