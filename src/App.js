import './App.css';

function App() {

  const productName = "gaming laptop pro";
  const productPrice = 1299;
  const productDescription = "High - performance laptop";
  const isOnSale = true;
  const productImage = "/images/laptop.jpg";
  const productId = "laptop-001";
  return (
    <div className="App">
      <h1>Product showcase</h1>
      <div className='product-card' id={productId}>
        <img src={productImage} alt={productName}
          title={`Click to view ${productName} details`}/>
        <h3>{productName}</h3>
        <p>{productDescription}</p>
        <span className='price'>${productPrice}</span>
        <button>Add to Cart</button>
      </div>
      
    </div>
  );
}

export default App;
