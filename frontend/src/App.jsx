import { useEffect } from "react"
import Nav from "./components/Nav"
import Mainroutes from "./routes/Mainroutes"
import { asynccurrentuser } from "./store/actions/userActions"
import { useDispatch, useSelector } from "react-redux"
import { asyncloadproducts } from "./store/actions/productActions"


function App() {

  const dispatch = useDispatch()
  const {users} = useSelector((state) => state.usersReducer)
  const {products} = useSelector((state) => state.productReducer)


    useEffect(() => {
     !users && dispatch(asynccurrentuser())
  }, [users])


  useEffect(() => {
    products.length == 0 &&  dispatch(asyncloadproducts());
  }, [products])

  return (
    <div className="overflow-auto px-[10%] text-white font-thin w-screen h-screen bg-gray-800">
      <Nav />
      <Mainroutes /></div>
  )
}

export default App