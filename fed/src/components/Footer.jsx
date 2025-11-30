const Footer = () => {
  return (
    <footer style={{
      background: '#2c3e50',
      color: 'white',
      padding: '2rem 0',
      marginBlockStart: '3rem'
    }}>
      <div className="container" style={{
        width: '100%',
        maxWidth: '1200px',
        marginInline: 'auto',
        paddingInline: '20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          <div>
            <h3 style={{
              marginBlockEnd: '1rem',
              fontSize: '1.2rem'
            }}>
              About DonationConnect
            </h3>
            <p>
              DonationConnect is a platform designed to facilitate the donation of essential items to people in need, especially during emergencies.
            </p>
          </div>
          
          <div>
            <h3 style={{
              marginBlockEnd: '1rem',
              fontSize: '1.2rem'
            }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Home',
                'How It Works?',
                'Emergency Response',
                'Volunteer',
                'DataB'
              ].map(link => (
                <li key={link} style={{ marginBlockEnd: '0.5rem' }}>
                  <a href="#" style={{
                    color: '#ddd',
                    textDecoration: 'none'
                  }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 style={{
              marginBlockEnd: '1rem',
              fontSize: '1.2rem'
            }}>
              Contact Us
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBlockEnd: '0.5rem' }}>
                <i className="fas fa-map-marker-alt"></i> 123 Charity Ave, Help City
              </li>
              <li style={{ marginBlockEnd: '0.5rem' }}>
                <i className="fas fa-phone"></i> (555) 123-HELP
              </li>
              <li style={{ marginBlockEnd: '0.5rem' }}>
                <i className="fas fa-envelope"></i> info@donationconnect.org
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{
          textAlign: 'center',
          marginBlockStart: '2rem',
          paddingBlockStart: '1rem',
          borderBlockStart: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <p>&copy; 2025 DonationConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer