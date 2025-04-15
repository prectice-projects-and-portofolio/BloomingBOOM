import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

function LandingPage() {
  const featured = products.slice(0, 3); // show 3 plants

  return (
    <div style={{
      fontFamily: 'Poppins, sans-serif',
      color: '#1a3d1a',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #d0f0c0 0%, #ffffff 100%)'
    }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: 'linear-gradient(rgba(20,70,20,0.6), rgba(20,70,20,0.6)), url(/images/backgeound.jpg)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '13rem 2rem',
          textAlign: 'center',
          color: '#fff',
          textShadow: '1px 1px 4px rgba(0,0,0,0.4)',
        }}
      >
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', textShadow: '2px 2px 9px rgba(0, 0, 0, 0.9)', color:'#c7ddb5' }}>Welcome to BloomingBOOM</h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '700px', margin: '0 auto 2rem', color:'#c7ddb5' ,textShadow: '2px 2px 2px rgba(0, 0, 0, 0.9)' }}>
          Breathe life into your space with easy-care, air-purifying plants.
        </p>
        <Link to="/products">
          <button
            style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: '500',
              fontFamily: 'Poppins, sans-serif',
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              transition: 'background 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#222'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000'}
          >
            Shop Now
          </button>
        </Link>
      </section>
     

      <section style={{ background: 'linear-gradient(to bottom, #d0f0c0 75%, #ffffff 100%)', padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{
          fontSize: '2rem',
          color: '#000',
          marginBottom: '0.5rem',
          textShadow: '2px 2px 9px rgba(0, 0, 0, 0.4)'
        }}>
          Featured Plants
        </h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '1.5rem', marginBottom: '5rem' }}>
          {featured.map((plant) => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
        <hr style={{ border: 'none', borderTop: '2px dashed #a5d6a7', margin: '4rem 0' }} />
        <h2 style={{
          fontSize: '2rem',
          color: '#000',
          marginBottom: '2.5rem',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)'
        }}>
          What Our Customers Say
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <blockquote style={{
            fontStyle: 'italic',
            margin: '1.5rem auto',
            maxWidth: '600px'
          }}>
            "I love my ZZ plant from BloomingBOOM! It's thriving and looks amazing on my desk."
          </blockquote>
          <p style={{ marginBottom: '3rem' }}>– Maria D., Verified Plant Lover</p>
        </div>
        <hr style={{ border: 'none', borderTop: '2px dashed #a5d6a7', margin: '2rem 0' }} />
        <h2 style={{ fontSize: '2rem', color: '#000', marginBottom: '0.5rem', textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>Stay in the Loop </h2>
        <p>Subscribe to get care tips, discounts, and fresh arrivals.</p>
        <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: '1rem' }}>
          <input
            type="email"
            placeholder="you@email.com"
            required
            style={{ padding: '0.5rem', borderRadius: '5px', width: '250px', marginRight: '0.5rem' }}
          />
          <button
            type="submit"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '1rem',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500',
              fontFamily: 'Poppins, sans-serif',
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              transition: 'background 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#222'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000'}
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}

export default LandingPage;