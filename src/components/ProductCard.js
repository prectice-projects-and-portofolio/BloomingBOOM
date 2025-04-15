import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const inCart = items.some(item => item.id === plant.id);

  const handleAdd = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div
      style={{
        borderRadius: '16px',
        padding: '1rem',
        width: '100%',
        maxWidth: '240px',
        background: 'linear-gradient(to bottom, #1b5e20 4%, #4caf50 100%)',
        color: '#e1f5e1',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img
        src={plant.image}
        alt={plant.name}
        style={{ width: '100%', borderRadius: '12px', marginBottom: '0.5rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)' }}
      />
      <h4 style={{ color: 'black' }}>{plant.name}</h4>
      <p style={{ fontSize: '0.9rem', margin: '0.5rem 0', color:'black' }}>{plant.description}</p>
      <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginTop: '0.5rem', color:'black',}}>${plant.price.toFixed(2)}</p>
      <button
        onClick={handleAdd}
        disabled={inCart}
        style={{
          backgroundColor: inCart ? '#333' : '#000',
          color: '#fff',
          marginTop: '0.75rem',
          padding: '0.5rem 1rem',   
          fontSize: '0.9rem',
          fontFamily: 'Poppins, sans-serif',
          border: 'none',
          borderRadius: '30px',
          cursor: inCart ? 'not-allowed' : 'pointer',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
          opacity: inCart ? 0.8 : 1,
        }}
        onMouseEnter={(e) => {
          if (!inCart) e.currentTarget.style.backgroundColor = '#222';
        }}
        onMouseLeave={(e) => {
          if (!inCart) e.currentTarget.style.backgroundColor = '#000';
        }}
      >
        {inCart ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductCard;