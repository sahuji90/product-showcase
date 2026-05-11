import './App.css';


function ProductCard(props){
  return (
    <div className='product-card'>
      <img src={props.image} alt={props.name}/>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <span className="price">${props.price}</span>
      <button onClick={()=> alert(`Added ${props.name} to cart`)}>Add to Cart</button>
    </div>
  )
}
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
      <ProductCard
        name="gaming laptop pro"
        description="high performance laptop for gaming"
        price={1299}
        image="/images/lapotp.jpg"/>


        <ProductCard
        name="gaming laptop pro"
        description="high performance laptop for gaming"
        price={1299}
        image="/images/lapotp.jpg"/>

        <ProductCard
        name="gaming laptop pro"
        description="high performance laptop for gaming"
        price={1299}
        image="/images/lapotp.jpg"/>
    </div>
  );
}

export default App;
