import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Products = () => {
  const products = useSelector((state)=>state.productReducer.products)
  console.log(products)


  const renderproduct = products.map((product) => {
    return <div className="w-[23%] h-[50%] mr-3 mb-3 border shadow" key={product.id}>
      <img className="w-full h-[50%] object-cover" src={product.image} alt=""/>
      <h1>{product.title}</h1>
      <small>{product.description.slice(0, 100)}...</small>
      <div className="p-3 mt-3 flex justify-between items-center">
        <p>{product.price}</p>
        <button>Add to Cart</button>
      </div>
      <Link to={`/product/${product.id
        
      }`}>More Info</Link>
    </div>
  })


  return products.length > 0 ? <div 
  className="w-screen h-screen overflow-auto flex flex-wrap">{renderproduct}
  
  </div> : "Loding..."
}

export default Products