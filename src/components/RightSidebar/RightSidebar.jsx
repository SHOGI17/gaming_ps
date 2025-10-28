// src/components/RightSidebar/RightSidebar.jsx
import React from 'react'
import './RightSidebar.css'

const RightSidebar = ({ darkMode }) => {
  const ads = [
    {
      id: 1,
      type: 'youtube',
      embed: 'https://www.youtube.com/embed/0Ab-F7Y3IXc?si=rfRSWx4FWNrWXWdc',
      title: 'Featured Game Trailer'
    },
    {
      id: 2,
      type: 'image',
      src: '/api/placeholder/300/200',
      title: 'Special Offer - 50% OFF'
    },
    {
      id: 3,
      type: 'youtube', 
      embed: 'https://www.youtube.com/embed/w73QvOPEKm8?si=3Vn02boS-c5u2SdQ',
      title: 'New Release Gameplay'
    }
  ]

  return (
    <aside className={`right-sidebar ${darkMode ? 'dark' : 'light'}`}>
      <h3 className="sidebar-title">ADVERTISEMENTS</h3>
      <div className="ads-container">
        {ads.map(ad => (
          <div key={ad.id} className="ad-item">
            {ad.type === 'youtube' ? (
              <div className="video-container">
                <iframe
                  src={ad.embed}
                  title={ad.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="image-ad">
                <div className="ad-placeholder">
                  🎮 {ad.title}
                </div>
              </div>
            )}
            <div className="ad-label">ADVERTISEMENT</div>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default RightSidebar