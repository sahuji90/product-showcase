import './App.css';
import ProductCard from './components/ProductCard/ProductCard';
import { products } from './data/products';
  //below is example of destructuring

function App() {
  

  return (
    <div className="App">
      <header>
        <h1>Product showcase</h1>
        <p>Discover our amazing products</p>
      </header>
      
    <main className='products-grid'>
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
      </main>
    </div>
  );
}

export default App;
