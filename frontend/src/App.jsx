import { useEffect } from "react"
import Nav from "./components/Nav"
import Mainroutes from "./routes/Mainroutes"
import { useDispatch, useSelector } from "react-redux"
import { asynccurrentuser } from "./store/actions/userActions"


function App() {

  const {users} = useSelector((state) => state.usersReducer)
  const dispatch = useDispatch()


    useEffect(() => {
     !users && dispatch(asynccurrentuser())
  }, [users])


  return (
    <div className=" py-10 px-[10%] text-white font-thin w-screen bg-gray-800">
      <Nav />
      <Mainroutes /></div>
  )
}

export default App