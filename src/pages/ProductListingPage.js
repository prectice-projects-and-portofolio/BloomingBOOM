import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

function ProductListingPage() {
  const categories = ['Low Light', 'Easy Care', 'Air Purifying'];

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #d0f0c0 0%, #ffffff 100%)',
      minHeight: '100vh',
      padding: '5rem 2rem',
      fontFamily: 'Poppins, sans-serif',
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '3rem',
        marginBottom: '3rem',
        color: '#000',
        fontWeight: '600',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
      }}>Shop Our Plants</h2>

      {categories.map((cat) => (
        <div key={cat} style={{ marginBottom: '4rem' }}>
          <hr style={{ border: 'none', borderTop: '2px dashed #a5d6a7', marginBottom: '1.5rem' }} />
          <h3 style={{
            textAlign: 'center',
            fontSize: '2rem',
            marginBottom: '2rem',
            color: '#000',
            paddingBottom: '0.5rem',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)'
          }}>{cat}</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 220px)',
            gap: '2.5rem',
            justifyContent: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
           
          }}>
            {products
              .filter((plant) => plant.category === cat)
              .map((plant) => (
                <ProductCard key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListingPage;