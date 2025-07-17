import { useEffect } from "react"
import Nav from "./components/Nav"
import Mainroutes from "./routes/Mainroutes"
import { asynccurrentuser } from "./store/actions/userActions"
import { useDispatch } from "react-redux"
import { asyncloadproduct } from "./store/actions/productActions"


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asynccurrentuser());
    dispatch(asyncloadproduct());

  }, [])
  return (
    <div className="overflow-auto px-[10%] text-white font-thin w-screen h-screen bg-gray-800">
      <Nav />
      <Mainroutes /></div>
  )
}

export default App