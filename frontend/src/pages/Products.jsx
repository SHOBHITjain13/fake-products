import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { asynccurrentuser, asyncupdateuser } from "../store/actions/userActions"
import { useEffect, useState } from "react"
import axios from "../api/axiosconfig"
import InfiniteScroll from "react-infinite-scroll-component"

const Products = () => {

  const dispatch = useDispatch()
  const users = useSelector((state) => state.usersReducer.users)
  // const products = useSelector((state) => state.productReducer.products)
    const [products, setproducts] = useState([])
    const [hasMore, sethasMore] = useState(true)

    const fetchproducts = async() => {
      try{
        const {data} = await axios.get(`/products?_limit=6&_start=${products.length}`)
        if(data){
          sethasMore(true)
          setproducts([...products, ...data])
        }else{
          sethasMore(false)
        }
      } catch (error) {
        console.assertlog(error)
      }
    }

    useEffect(() => {
      fetchproducts()
    }, [])

  const AddtoCartHandler = (product) => {
    const copyuser = { ...users, cart: [...users.cart] };
    const x = copyuser.cart.findIndex((c) => c?.product?.id == product.id)

    if (x == -1) {
      copyuser.cart.push({ product, quantity: 1 })
    } else {
      copyuser.cart[x] = { product, quantity: copyuser.cart[x].quantity + 1, }

    }
    dispatch(asyncupdateuser(copyuser.id, copyuser))
  }


  const renderproduct = products.map((product) => {

    return <div className="w-[31%] mr-3 mb-3 border shadow" key={product.id}>
      <img className="w-full h-[30vh] object-cover" src={product.image} alt="" />
      <h1>{product.title}</h1>
      <small>{product.description.slice(0, 100)}...</small>
      <div className="p-3 mt-3 flex justify-between items-center">
        <p>{product.price}</p>

        <button
          onClick={() => AddtoCartHandler(product)}>
          Add to Cart
        </button>
      </div>

      <Link
        className="block m-auto w-1/2 "
        to={`/product/${product.id}`}>More Info</Link>
    </div>
  })


  return products.length > 0 ? (
      
      <InfiniteScroll className="overflow-auto flex flex-wrap" 
      dataLength={products.length} 
      next={fetchproducts} 
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>}>
      
      {renderproduct}

  </InfiniteScroll>

) : ( "Loding...")
}

export default Products