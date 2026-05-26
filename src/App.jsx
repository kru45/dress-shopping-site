import { useState } from 'react'

function App() {
  // Your store's dress collection data
  const [dresses] = useState([
    { id: 1, name: "Classic Evening Gown", price: "$120", img: "👗" },
    { id: 2, name: "Floral Summer Dress", price: "$85", img: "👗" },
    { id: 3, name: "Elegant Party Wear", price: "$150", img: "👗" },
    { id: 4, name: "Casual Cotton Dress", price: "$60", img: "👗" }
  ]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#fcf8f8', minHeight: '100vh' }}>
      {/* Navbar Header */}
      <header style={{ backgroundColor: '#fff', padding: '20px 40px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, color: '#ff69b4', fontSize: '28px', fontWeight: 'bold' }}>✨ Velvet & Vine Boutique</h1>
        <nav>
          <span style={{ margin: '0 15px', cursor: 'pointer', fontWeight: '500' }}>New Arrivals</span>
          <span style={{ margin: '0 15px', cursor: 'pointer', fontWeight: '500' }}>Collections</span>
          <span style={{ margin: '0 15px', cursor: 'pointer', fontWeight: '500' }}>Sale 🛍️</span>
        </nav>
      </header>

      {/* Hero Banner */}
      <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#ffe4e1' }}>
        <p style={{ fontSize: '18px', color: '#666' }}>Curated premium designs for your most unforgettable moments. ✨</p>
        <p style={{ fontSize: '18px', color: '#666' }}>Discover premium designs crafted for your unforgettable moments.</p>
      </div>

      {/* Product Display Section */}
      <main style={{ padding: '40px' }}>
        <h3 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>Our Best Sellers</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {dresses.map((dress) => (
            <div key={dress.id} style={{ backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '64px', marginBottom: '10px' }}>{dress.img}</div>
              <h4 style={{ margin: '10px 0 5px 0', fontSize: '18px' }}>{dress.name}</h4>
              <p style={{ color: '#ff69b4', fontWeight: 'bold', margin: '0 0 15px 0' }}>{dress.price}</p>
              <button style={{ backgroundColor: '#ff69b4', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App