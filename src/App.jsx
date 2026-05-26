import { useState } from 'react'

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedDress, setSelectedDress] = useState(null); // Tracks which dress is being viewed in the modal

  const [dresses] = useState([
    { 
      id: 1, 
      name: "Classic Crimson Gown", 
      price: "$145", 
      img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80",
      desc: "An elegant, floor-length silk gown perfect for formal galas and evening celebrations."
    },
    { 
      id: 2, 
      name: "Floral Meadow Sun Dress", 
      price: "$89", 
      img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
      desc: "Lightweight cotton featuring a vibrant, hand-painted floral pattern. Perfect for sunny afternoons."
    },
    { 
      id: 3, 
      name: "Midnight Cocktail Dress", 
      price: "$120", 
      img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
      desc: "A sleek, modern silhouette designed to turn heads at any evening social event."
    },
    { 
      id: 4, 
      name: "Ivory Lace Midi", 
      price: "$110", 
      img: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=600&q=80",
      desc: "Delicate lace embroidery combined with a breathable premium linen lining."
    }
  ]);

  return (
    <div style={{ fontFamily: '"Segoe UI", Roboto, sans-serif', color: '#2d3748', backgroundColor: '#f7fafc', minHeight: '100vh' }}>
      
      {/* Premium Header */}
      <header style={{ backgroundColor: '#fff', padding: '20px 40px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 10 }}>
        <h1 style={{ margin: 0, color: '#b83280', fontSize: '26px', fontWeight: '800', letterSpacing: '1px' }}>VELVET & VINE</h1>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
          <span style={{ cursor: 'pointer', fontWeight: '500', color: '#4a5568' }}>New Arrivals</span>
          <span style={{ cursor: 'pointer', fontWeight: '500', color: '#4a5568' }}>Collections</span>
          <div style={{ backgroundColor: '#b83280', color: '#fff', padding: '8px 18px', borderRadius: '30px', fontWeight: 'bold', fontSize: '14px', boxShadow: '0 4px 6px rgba(184, 50, 128, 0.2)' }}>
            🛒 Cart ({cartCount})
          </div>
        </nav>
      </header>

      {/* Styled Hero Section */}
      <div style={{ textAlign: 'center', padding: '80px 20px', backgroundColor: '#fed7e2', backgroundImage: 'linear-gradient(135deg, #fed7e2 0%, #fbb6ce 100%)' }}>
        <h2 style={{ fontSize: '42px', marginBottom: '15px', color: '#4a154b', fontWeight: '700' }}>The Summer Collection</h2>
        <p style={{ fontSize: '19px', color: '#6b46c1', maxWidth: '600px', margin: '0 auto', fontWeight: '500' }}>Bring high-fashion runway styles straight into your everyday wardrobe.</p>
      </div>

      {/* Grid Display */}
      <main style={{ padding: '50px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          {dresses.map((dress) => (
            <div key={dress.id} style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)', border: '1px solid #edf2f7' }}>
              {/* Image Container with Quick View Trigger */}
              <div style={{ position: 'relative', height: '340px', backgroundColor: '#edf2f7', overflow: 'hidden', cursor: 'pointer' }} onClick={() => setSelectedDress(dress)}>
                <img src={dress.img} alt={dress.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'rgba(255,255,255,0.9)', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', color: '#b83280' }}>
                  🔎 Quick View
                </div>
              </div>
              
              {/* Product Info */}
              <div style={{ padding: '20px' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '600' }}>{dress.name}</h4>
                <p style={{ color: '#b83280', fontWeight: '700', fontSize: '20px', margin: '0 0 15px 0' }}>{dress.price}</p>
                <button 
                  onClick={() => setCartCount(cartCount + 1)}
                  style={{ backgroundColor: '#b83280', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', width: '100%', fontSize: '14px' }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* THE UNIQUE FEATURE: Quick View Modal Overlay */}
      {selectedDress && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100 }} onClick={() => setSelectedDress(null)}>
          <div style={{ backgroundColor: '#fff', width: '90%', maxWidth: '700px', borderRadius: '24px', display: 'flex', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', animation: 'fadeIn 0.3s' }} onClick={(e) => e.stopPropagation()}>
            {/* Left side: Modal Image */}
            <div style={{ width: '50%', height: '450px' }}>
              <img src={selectedDress.img} alt={selectedDress.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {/* Right side: Details */}
            <div style={{ width: '50%', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '24px', fontWeight: '700' }}>{selectedDress.name}</h3>
                  <button onClick={() => setSelectedDress(null)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#a0aec0' }}>✕</button>
                </div>
                <p style={{ color: '#b83280', fontSize: '24px', fontWeight: '700', margin: '0 0 20px 0' }}>{selectedDress.price}</p>
                <p style={{ color: '#718096', lineHeight: '1.6', fontSize: '14px' }}>{selectedDress.desc}</p>
                
                {/* Size Selector Mock */}
                <h5 style={{ margin: '20px 0 10px 0', color: '#4a5568' }}>Select Size</h5>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {['S', 'M', 'L', 'XL'].map(size => (
                    <span key={size} style={{ border: '1px solid #cbd5e0', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', cursor: 'pointer', fontWeight: '600' }}>{size}</span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => { setCartCount(cartCount + 1); setSelectedDress(null); }}
                style={{ backgroundColor: '#b83280', color: '#fff', border: 'none', padding: '14px 20px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}
              >
                Add To Cart & Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default App