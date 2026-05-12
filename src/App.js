import './App.css';

  //below is example of destructuring
function ProductCard({name, image, description, price, isOnSale=false,salePrice=price} ){
  return (
    <div className='product-card'>
      <img src={image} alt={name}/>
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="price">${price}</span>
      <button onClick={()=> alert(`Added ${name} to cart`)}>Add to Cart</button>
    </div>
  )
}
function App() {

  return (
    <div className="App">
      <h1>Product showcase</h1>
      <ProductCard
        name="gaming laptop pro"
        description="high performance laptop for gaming"
        price={1299}
        image="/images/lapotp.jpg"/>
    </div>
  );
}

export default App;
