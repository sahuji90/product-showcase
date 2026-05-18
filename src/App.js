import './App.css';

  //below is example of destructuring
function ProductCard({name, image, description, price, isOnSale=false,salePrice=price} ){
  return (
    <div className='product-card'>
      <img src={image} alt={name}/>
      <h3>{name}
        {isOnSale && <span className="sale-badge">SALE</span>}
      </h3>
      <p>{description}</p>
      <span className="price">{isOnSale ? (<>
        <span className='original-price'>${price}</span>
        <span className='sale-price'>${salePrice}</span>
      </>):(`$${price}`)}</span>
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
        isOnSale={true}
        price={1299}
        salePrice={1099}
        image="/images/laptop.jpg"/>

        <ProductCard
        name="Smartphone ultra"
        description="high performance smartphone with camera"
        price={899}
        image="/images/mobile.jpg"/>

        <ProductCard
        name="wireless headphones pro"
        description="high performance earphones with enc"
        price={299}
        image="/images/earphones.jpg"/>
    </div>
  );
}

export default App;
