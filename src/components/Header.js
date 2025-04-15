// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
  const totalItems = useSelector((state) => state.cart.totalItems);
  
  const navButtonStyle = {
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    fontFamily: 'Poppins, sans-serif',
    borderRadius: '30px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    transition: 'background 0.3s ease',
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
  };

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2rem',
        background: 'linear-gradient(to right,#4caf50 30%, #1b5e20 65%)',
        color: '#white',
        alignItems: 'center',
       
      }}
    >
      <h2 style={{
        marginLeft: '35px',
        fontSize: '40px',
        fontFamily: 'Poppins, sans-serif',
        color: 'black',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)'
      }}>
        BloomingBOOM
      </h2>
      <nav style={{ marginRight:'35px', display: 'flex', alignItems: 'center', gap: '1rem',  fontSize:'25px', fontFamily:'Poppins, sans-serif'}}>
        <Link to="/"><button style={navButtonStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#222'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000'}>Home</button></Link>
        <Link to="/about"><button style={navButtonStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#222'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000'}>About</button></Link>
        <Link to="/products"><button style={navButtonStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#222'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000'}>Products</button></Link>
        <Link to="/cart"><button style={navButtonStyle} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#222'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000'}>Cart({totalItems})</button></Link>
      </nav>
    </header>
  );
}

const Footer = () => (
  <footer
    style={{
      background: '#1b5e20',
      color: 'white',
      padding: '2rem',
      textAlign: 'center',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '1rem',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
      
    }}
  >
    <p>&copy; {new Date().getFullYear()} BloomingBOOM. All rights reserved.</p>
    <p style={{ marginTop: '0.5rem' }}>Crafted with 🌿 by nature lovers.</p>
  </footer>
);

export { Header, Footer };