import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const AuthWrapper = (props) => {
  const { users } = useSelector((state) => state.usersReducer)
  console.log(props.children)
  return users? props.children : <Navigate to="/login"/>
}

export default AuthWrapper