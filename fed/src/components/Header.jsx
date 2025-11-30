import { useState } from 'react'

const Header = () => {
  const [activeNav, setActiveNav] = useState('home')

  return (
    <header style={{
      background: 'linear-gradient(135deg, #2c3e50, #3498db)',
      color: 'white',
      paddingBlock: '1rem 0',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="container" style={{
        width: '100%',
        maxWidth: '1200px',
        marginInline: 'auto',
        paddingInline: '20px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            <i className="fas fa-hands-helping" style={{ fontSize: '2rem' }}></i>
            <span>DonationConnect</span>
          </div>
          
          <nav>
            <ul style={{
              display: 'flex',
              listStyle: 'none',
              gap: '20px',
              margin: 0,
              padding: 0
            }}>
              {[
                { id: 'home', icon: 'fas fa-home', text: 'Home' },
                { id: 'dashboard', icon: 'fas fa-tachometer-alt', text: 'Dashboard' },
                { id: 'donate', icon: 'fas fa-heart', text: 'Donate' },
                { id: 'request', icon: 'fas fa-hand-holding-heart', text: 'Request' },
                { id: 'contact', icon: 'fas fa-phone', text: 'Contact' }
              ].map(item => (
                <li key={item.id}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveNav(item.id)
                    }}
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      transition: 'background 0.3s',
                      background: activeNav === item.id ? 'rgba(255,255,255,0.25)' : 'transparent'
                    }}
                  >
                    <i className={item.icon}></i> {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <button style={{
              padding: '10px 18px',
              fontSize: '1rem',
              borderRadius: '10px',
              minWidth: '110px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              letterSpacing: '0.4px',
              fontWeight: '700',
              background: '#e74c3c',
              color: 'white',
              border: 'none',
              boxShadow: '0 4px 10px rgba(231, 76, 60, 0.4)',
              cursor: 'pointer',
              transition: 'transform .16s ease, box-shadow .16s ease'
            }}>
              <i className="fas fa-sign-in-alt"></i> Login / Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header