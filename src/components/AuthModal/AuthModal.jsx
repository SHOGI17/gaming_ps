import React, { useState } from 'react'
import './AuthModal.css'

const AuthModal = ({ setShowAuthModal, darkMode }) => {
  const [activeTab, setActiveTab] = useState('signin')
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData, activeTab)
  }

  return (
    <div className="modal-overlay" onClick={() => setShowAuthModal(false)}>
      <div className={`modal-content ${darkMode ? 'dark' : 'light'}`} onClick={(e) => e.stopPropagation()}>
        <button 
          className="close-btn"
          onClick={() => setShowAuthModal(false)}
        >
          ×
        </button>
        
        <div className="modal-split">
          <div className="modal-section">
            <h2 
              className={activeTab === 'signin' ? 'active' : ''}
              onClick={() => setActiveTab('signin')}
            >
              SIGN IN
            </h2>
            {activeTab === 'signin' && (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  placeholder="USERNAME"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button type="submit" className="submit-btn">SIGN IN</button>
              </form>
            )}
          </div>
          
          <div className="divider"></div>
          
          <div className="modal-section">
            <h2 
              className={activeTab === 'signup' ? 'active' : ''}
              onClick={() => setActiveTab('signup')}
            >
              SIGN UP
            </h2>
            {activeTab === 'signup' && (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  placeholder="USERNAME"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="CONFIRM PASSWORD"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                <button type="submit" className="submit-btn">SIGN UP</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthModal