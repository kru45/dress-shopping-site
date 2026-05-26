import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([]); // Array to store full items added to cart
  const [isCartOpen, setIsCartOpen] = useState(false); // Controls cart drawer visibility
  const [selectedDress, setSelectedDress] = useState(null); // Tracks modal item
  const [selectedSize, setSelectedSize] = useState(null); // Tracks size choice inside modal
  const [activeCategory, setActiveCategory] = useState('All'); // Category filter state

  const [dresses] = useState([
    { 
      id: 1, 
      name: "Classic Crimson Gown", 
      price: 145, 
      category: "Collections",
      img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80",
      desc: "An elegant, floor-length silk gown perfect for formal galas and evening celebrations."
    },
    { 
      id: 2, 
      name: "Floral Meadow Sun Dress", 
      price: 89, 
      category: "New Arrivals",
      img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
      desc: "Lightweight cotton featuring a vibrant, hand-painted floral pattern. Perfect for sunny afternoons."
    },
    { 
      id: 3, 
      name: "Midnight Cocktail Dress", 
      price: 120, 
      category: "Collections",
      img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
      desc: "A sleek, modern silhouette designed to turn heads at any evening social event."
    },
    { 
      id: 4, 
      name: "Ivory Lace Midi", 
      price: 110, 
      category: "New Arrivals",
      img: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=600&q=80",
      desc: "Delicate lace embroidery combined with a breathable premium linen lining."
    }
  ]);

  // Helper function to handle adding items with specified sizes
  const handleAddToCart = (dress, size = 'M') => {
    setCart([...cart, { ...dress, chosenSize: size, uniqueId: Date.now() }]);
  };

  // Filter items dynamically based on navigation selection
  const displayedDresses = activeCategory === 'All' 
    ? dresses 
    : dresses.filter(d => d.category === activeCategory);

  const totalCartPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ fontFamily: '"Segoe UI", Roboto, sans-serif', color: '#2d3748', backgroundColor: '#f7fafc', minHeight: '100vh', position: 'relative' }}>
      
      {/* Premium Header */}
      <header style={{ backgroundColor: '#fff', padding: '20px 40px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 10 }}>
        <h1 style={{ margin: 0, color: '#b83280', fontSize: '26px', fontWeight: '800', letterSpacing: '1px', cursor: 'pointer' }} onClick={() => setActiveCategory('All')}>VELVET & VINE</h1>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
          <span style={{ cursor: 'pointer', fontWeight: activeCategory === 'New Arrivals' ? 'bold' : '500', color: activeCategory === 'New Arrivals' ? '#b83280' : '#4a5568' }} onClick={() => setActiveCategory('New Arrivals')}>New Arrivals</span>
          <span style={{ cursor: 'pointer', fontWeight: activeCategory === 'Collections' ? 'bold' : '500', color: activeCategory === 'Collections' ? '#b83280' : '#4a5568' }} onClick={() => setActiveCategory('Collections')}>Collections</span>
          <div 
            onClick={() => setIsCartOpen(true)}
            style={{ backgroundColor: '#b83280', color: '#fff', padding: '8px 18px', borderRadius: '30px', fontWeight: 'bold', fontSize: '14px', boxShadow: '0 4px 6px rgba(184, 50, 128, 0.2)', cursor: 'pointer' }}
          >
            🛒 Cart ({cart.length})
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#fed7e2', backgroundImage: 'linear-gradient(135deg, #fed7e2 0%, #fbb6ce 100%)' }}>
        <h2 style={{ fontSize: '38px', marginBottom: '10px', color: '#4a154b', fontWeight: '700' }}>
          {activeCategory === 'All' ? 'The Summer Collection' : activeCategory}
        </h2>
        <p style={{ fontSize: '17px', color: '#6b46c1', maxWidth: '600px', margin: '0 auto', fontWeight: '500' }}>
          Showing premium curated luxury wardrobe pieces.
        </p>
      </div>

      {/* Grid Display */}
      <main style={{ padding: '50px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          {displayedDresses.map((dress) => (
            <div key={dress.id} style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)', border: '1px solid #edf2f7' }}>
              <div style={{ position: 'relative', height: '340px', backgroundColor: '#edf2f7', overflow: 'hidden', cursor: 'pointer' }} onClick={() => { setSelectedDress(dress); setSelectedSize('M'); }}>
                <img src={dress.img} alt={dress.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'rgba(255,255,255,0.9)', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', color: '#b83280' }}>
                  🔎 Quick View
                </div>
              </div>
              <div style={{ padding: '20px' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '600' }}>{dress.name}</h4>
                <p style={{ color: '#b83280', fontWeight: '700', fontSize: '20px', margin: '0 0 15px 0' }}>${dress.price}</p>
                <button 
                  onClick={() => handleAddToCart(dress, 'M')}
                  style={{ backgroundColor: '#b83280', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', width: '100%', fontSize: '14px' }}
                >
                  Add to Cart (Size M)
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal View Component with Working Size Buttons */}
      {selectedDress && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100 }} onClick={() => setSelectedDress(null)}>
          <div style={{ backgroundColor: '#fff', width: '90%', maxWidth: '700px', borderRadius: '24px', display: 'flex', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ width: '50%', height: '450px' }}>
              <img src={selectedDress.img} alt={selectedDress.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '50%', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '24px', fontWeight: '700' }}>{selectedDress.name}</h3>
                  <button onClick={() => setSelectedDress(null)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#a0aec0' }}>✕</button>
                </div>
                <p style={{ color: '#b83280', fontSize: '24px', fontWeight: '700', margin: '0 0 20px 0' }}>${selectedDress.price}</p>
                <p style={{ color: '#718096', lineHeight: '1.6', fontSize: '14px' }}>{selectedDress.desc}</p>
                
                {/* Active Size Selector */}
                <h5 style={{ margin: '20px 0 10px 0', color: '#4a5568' }}>Select Size</h5>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {['S', 'M', 'L', 'XL'].map(size => (
                    <span 
                      key={size} 
                      onClick={() => setSelectedSize(size)}
                      style={{ 
                        border: '1px solid #cbd5e0', 
                        padding: '6px 14px', 
                        borderRadius: '8px', 
                        fontSize: '12px', 
                        cursor: 'pointer', 
                        fontWeight: '600',
                        backgroundColor: selectedSize === size ? '#b83280' : 'transparent',
                        color: selectedSize === size ? '#fff' : '#2d3748'
                      }}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => { handleAddToCart(selectedDress, selectedSize); setSelectedDress(null); }}
                style={{ backgroundColor: '#b83280', color: '#fff', border: 'none', padding: '14px 20px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}
              >
                Add Size {selectedSize} to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Slide-out Cart Drawer Panel */}
      {isCartOpen && (
        <div style={{ position: 'fixed', top: 0, right: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 200 }} onClick={() => setIsCartOpen(false)}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '100%', backgroundColor: '#fff', boxShadow: '-10px 0 20px rgba(0,0,0,0.1)', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} onClick={(e) => e.stopPropagation()}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #edf2f7', paddingBottom: '15px' }}>
                <h3 style={{ margin: 0, fontSize: '22px', fontWeight: '700' }}>Your Shopping Bag</h3>
                <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer' }}>✕</button>
              </div>

              {/* Cart Items Loop */}
              <div style={{ marginTop: '20px', overflowY: 'auto', maxHeight: '60vh' }}>
                {cart.length === 0 ? (
                  <p style={{ color: '#a0aec0', textAlign: 'center', marginTop: '40px' }}>Your bag is currently empty.</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.uniqueId} style={{ display: 'flex', gap: '15px', marginBottom: '20px', borderBottom: '1px solid #f7fafc', paddingBottom: '15px' }}>
                      <img src={item.img} alt={item.name} style={{ width: '60px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
                      <div style={{ flexGrow: 1 }}>
                        <h5 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>{item.name}</h5>
                        <p style={{ margin: 0, fontSize: '13px', color: '#718096' }}>Size: <b style={{ color: '#b83280' }}>{item.chosenSize}</b></p>
                        <p style={{ margin: '4px 0 0 0', fontWeight: '700', color: '#2d3748' }}>${item.price}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Check Out Calculation Footer */}
            <div style={{ borderTop: '1px solid #edf2f7', paddingTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontWeight: '700', fontSize: '18px' }}>
                <span>Subtotal</span>
                <span style={{ color: '#b83280' }}>${totalCartPrice}</span>
              </div>
              <button 
                onClick={() => alert(`Proceeding to checkout with total payment of: $${totalCartPrice}`)}
                disabled={cart.length === 0}
                style={{ backgroundColor: cart.length === 0 ? '#cbd5e0' : '#b83280', color: '#fff', border: 'none', padding: '16px 20px', borderRadius: '30px', cursor: cart.length === 0 ? 'not-allowed' : 'pointer', fontWeight: 'bold', width: '100%', fontSize: '16px' }}
              >
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default App