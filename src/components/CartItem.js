import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const blackButtonStyle = {
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
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
      <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
      <div style={{ flexGrow: 1 }}>
        <h4>{item.name}</h4>
        <p>${item.price.toFixed(2)}</p>
        <p style={{ marginBottom: '0.5rem' }}>Quantity: {item.quantity}</p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
            style={blackButtonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#222')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#000')}
          >
            +
          </button>
          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
            disabled={item.quantity === 1}
            style={{
              ...blackButtonStyle,
              opacity: item.quantity === 1 ? 0.5 : 1,
              cursor: item.quantity === 1 ? 'not-allowed' : 'pointer'
            }}
            onMouseEnter={(e) => {
              if (item.quantity > 1) e.currentTarget.style.backgroundColor = '#222';
            }}
            onMouseLeave={(e) => {
              if (item.quantity > 1) e.currentTarget.style.backgroundColor = '#000';
            }}
          >
            --
          </button>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            style={blackButtonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#222')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#000')}
          >
             Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;