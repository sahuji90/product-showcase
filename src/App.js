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
    <Section title="Our products">
        {products.map(product=> (
          <ProductCard
            key={product.id}
            {...product }
           /*  name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            isOnSale={product.isOnSale} */
          />
        ))}
      </Section>
    </div>
  );
}

export default App;
