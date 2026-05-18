import './App.css';

function Section({title, children}){
  return (
    <section className="section">
      <h2 className='section-title'>{title}</h2>
      <div className='section-content'>
        {children}
      </div>
    </section>
  )
}
function Card({children,className=""}){
  return(
    <div className={`card${className}`}>
      {children}
    </div>
  )
}
  //below is example of destructuring
function ProductCard({name, image, description, price, isOnSale=false,salePrice=price} ){
  return (
    <Card className='product-card'>
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
    </Card>
  )
}
function App() {
  const products = [
    {
      id:1,
      name: "Gaming laptop pro",
      description: "High performance gaming laptop for gaming and professional use",
      price : 1299,
      image : "/images/laptop.jpg",
      isOnSale : false
    },
    {
      id:2,
      name: "Smartphone ultra",
      description: "latest smartphone with amazing camera and long battery life",
      price : 799,
      image : "/images/mobile.jpg",
      isOnSale : true,
      salePrice : 699
    },
     {
      id:3,
      name: "Earphones",
      description: "Noise cancelling earphones",
      price : 299,
      image : "/images/earphone.jpg",
      isOnSale : true,
      salePrice:199
    }
  ]

  return (
    <div className="App">
      <h1>Product showcase</h1>
    <Section title="Products on Sale">
      <ProductCard
        name="gaming laptop pro"
        description="high performance laptop for gaming"
        isOnSale={true}
        price={1299}
        salePrice={1099}
        image="/images/laptop.jpg"/>
        </Section>
      <Section title="Featured Products">
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
      </Section>
    </div>
  );
}

export default App;
