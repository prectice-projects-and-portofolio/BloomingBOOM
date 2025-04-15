import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

function ShoppingCartPage() {
  const { items, totalItems, totalCost } = useSelector((state) => state.cart);

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #d0f0c0 0%, #ffffff 100%)',
      minHeight: '100vh',
      padding: '4rem 2rem',
      fontFamily: 'Poppins, sans-serif',
      color: '#black'
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#000' }}> Shopping Cart</h2>

      <div style={{ marginBottom: '2rem' }}>
        <p style={{ fontSize: '1.1rem' }}>Total Items: {totalItems}</p>
        <p style={{ fontSize: '1.1rem' }}>Total Cost: ${totalCost.toFixed(2)}</p>
      </div>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => alert('Coming Soon!')}
          style={{
            padding: '0.5rem 1.25rem',
            fontSize: '1rem',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '30px',
            fontWeight: '500',
            fontFamily: 'Poppins, sans-serif',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
            transition: 'background 0.3s ease',
            
          }}
        >
          Checkout
        </button>
        <Link to="/products">
          <button
            style={{
              padding: '0.5rem 1.25rem',
              fontSize: '1rem',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '30px',
              fontWeight: '500',
              fontFamily: 'Poppins, sans-serif',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
              transition: 'background 0.3s ease'
            }}
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartPage;