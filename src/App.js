import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Product showcase</h1>
      <div className='product-card'>
        <img src="" alt="gaming laptop"/>
        <h3>Gaming Laptop Pro</h3>
        <p>High performance laptop for gaming</p>
        <span className='price'>$1,299</span>
        <button>Add to Cart</button>
      </div>
      <div className='product-card'>
        <img src="" alt="smart phone"/>
        <h3>Gaming Laptop Pro</h3>
        <p>High performance laptop for gaming</p>
        <span className='price'>$1,299</span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default App;
