import { useState } from 'react'

const FeedbackWidget = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = () => {
    if (!formData.message.trim()) {
      alert('Please enter your feedback.')
      return
    }

    alert('Thank you! Your feedback has been submitted')
    setFormData({ name: '', email: '', message: '' })
    setIsVisible(false)
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '130px',
      right: '30px',
      zIndex: 9999
    }}>
      <div
        style={{
          background: '#3498db',
          color: 'white',
          width: '65px',
          height: '65px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '28px',
          cursor: 'pointer',
          boxShadow: '0px 4px 18px rgba(0,0,0,0.25)',
          transition: '0.2s ease'
        }}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <i className="fas fa-comment-dots"></i>
      </div>

      {isVisible && (
        <div style={{
          position: 'absolute',
          bottom: '80px',
          right: '0',
          width: '290px',
          background: 'white',
          padding: '16px',
          borderRadius: '12px',
          boxShadow: '0px 8px 20px rgba(0,0,0,0.18)',
          animation: 'fadeIn 0.2s ease-in-out'
        }}>
          <h3 style={{
            marginBottom: '10px',
            fontSize: '1.1rem',
            color: '#2c3e50'
          }}>
            Your feedback is most valuable
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            style={{
              width: '100%',
              marginBottom: '10px',
              padding: '8px',
              borderRadius: '6px',
              border: '1px solid #ddd'
            }}
          />

          <input
            type="email"
            placeholder="Email (optional)"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            style={{
              width: '100%',
              marginBottom: '10px',
              padding: '8px',
              borderRadius: '6px',
              border: '1px solid #ddd'
            }}
          />

          <textarea
            placeholder="Write feedback..."
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
            style={{
              width: '100%',
              marginBottom: '10px',
              padding: '8px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              minHeight: '60px',
              resize: 'vertical'
            }}
          />

          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              padding: '10px',
              background: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  )
}

export default FeedbackWidget