import './ProductCard.css'
import Card from '../Card/Card';
function ProductCard({name, image, description, price, isOnSale=false,salePrice=price} ){
  return (
    <Card className='product-card'>
      <img src={image} alt={name}/>
      <div className='product-info'>
      <h3>{name}
        {isOnSale && <span className="sale-badge">SALE</span>}
      </h3>
      <p>{description}</p>
      <span className="price-section">{isOnSale ? (<>
        <span className='original-price'>${price}</span>
        <span className='sale-price'>${salePrice}</span>
      </>):(<span className='price'>${price}</span>)}</span>
      <button className='add-to-cart' onClick={()=> alert(`Added ${name} to cart`)}>Add to Cart</button>
      </div>
    </Card>
  )
}
export default ProductCard;