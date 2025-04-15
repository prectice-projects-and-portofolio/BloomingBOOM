import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', color: '#black', background: 'linear-gradient(180deg, #d0f0c0 0%, #ffffff 100%)' }}>
      <div style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>About BloomingBOOM</h1>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.8', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          BloomingBOOM was born from a love of nature and a belief that plants make people happier, healthier, and more inspired.
          We handpick every plant to ensure it fits a modern lifestyle — whether you’re a green thumb or just getting started.
        </p>

        <p style={{ fontSize: '1.15rem', marginTop: '2rem', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          Our mission is simple: make it easy for anyone to welcome greenery into their home.
          We focus on low-maintenance, air-purifying plants delivered straight to your door — fast, safe, and beautifully packaged.
        </p>

        <hr style={{ margin: '4rem 0', border: 'none', borderTop: '2px dashed #cde4cd' }} />

        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#black', fontWeight: '600' }}>Our Values </h2>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {[
            {title: 'Sustainability', desc: 'We source responsibly and use recyclable packaging.' },
            {title: 'Simplicity', desc: 'Beginner-friendly plants with easy care instructions.' },
            {title: 'Care', desc: 'We support every plant parent with helpful tips and love.' },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              style={{
                background: 'linear-gradient(to bottom, #1b5e20 1%, #4ccf61 100%)',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                padding: '1.5rem',
                flex: '1 1 220px',
                maxWidth: '280px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,128,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
              }}
            >
              <h3 style={{ marginBottom: '0.5rem' }}>{icon} {title}</h3>
              <p style={{ fontSize: '0.95rem' }}>{desc}</p>
            </div>
          ))}
        </div>
        <hr style={{ margin: '4rem 0', border: 'none', borderTop: '2px dashed #cde4cd' }} />
        <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#black', fontWeight: '600' }}>Our Story So Far </h2>
        <ul style={{ listStyle: 'none', paddingLeft: 0, lineHeight: '2', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
          <li><strong>2023:</strong> BloomingBOOM launched </li>
          <li><strong>2024:</strong> Expanded to 20+ cities </li>
          <li><strong>2025:</strong> 10,000+ happy plants delivered </li>
        </ul>

        <blockquote style={{
          fontStyle: 'italic',
          textAlign: 'center',
          marginTop: '3rem',
          fontSize: '1.5rem',
          color: '#1b5e20',
          borderLeft: '6px solid #81c784',
          backgroundColor: '#f1f8e9',
          padding: '1.2rem 1.5rem',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        }}>
          “Plants don’t just grow. They bloom — like people do.” 🌸
        </blockquote>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/products">
            <button style={{
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
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2e7d32'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#388e3c'}>
              Discover Our Plants
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
