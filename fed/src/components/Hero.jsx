const Hero = () => {
  return (
    <section style={{
      background: 'linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.9)), url("https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '4rem 0',
      textAlign: 'center'
    }}>
      <div className="container" style={{
        width: '100%',
        maxWidth: '1200px',
        marginInline: 'auto',
        paddingInline: '20px'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBlockEnd: '1rem'
        }}>
          Connecting Generosity with Need
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '700px',
          margin: '0 auto 2rem'
        }}>
          DonationConnect is a platform that facilitates the donation of essential items like food and clothing, especially during emergencies. Join us in making a difference.
        </p>
        
        <div style={{
          marginBlockStart: '18px',
          display: 'flex',
          gap: '12px',
          justifyContent: 'center'
        }}>
          <button style={{
            padding: '12px 26px',
            fontSize: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            background: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'all 0.3s'
          }}>
            <i className="fas fa-user-plus"></i> Get Started
          </button>
        </div>

        <div style={{
          maxWidth: '900px',
          margin: '26px auto 0',
          color: '#f0f6ff',
          textAlign: 'start',
          background: 'rgba(255,255,255,0.03)',
          padding: '18px',
          borderRadius: '10px'
        }}>
          <h3 style={{
            color: '#fff',
            margin: '0 0 8px 0'
          }}>
            DonationConnect:
          </h3>
          
          <p style={{
            color: '#e8eef8',
            margin: '0 0 8px 0'
          }}>
            DonationConnect streamlines the process of collecting, tracking and delivering donated items. The platform provides secure donor and recipient profiles,
            transparent tracking for every donation, and tools for logistics coordinators to plan pickups and deliveries efficiently.
          </p>
          
          <p style={{
            color: '#e8eef8',
            margin: '0 0 0 0'
          }}>
            Built for NGOs, community groups, and local governments, DonationConnect focuses on accessibility, auditability and quick deployment during emergencies.
          </p>

          <div style={{ marginBlockStart: '12px' }}>
            <button style={{
              background: 'transparent',
              border: '1px solid white',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s'
            }}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero