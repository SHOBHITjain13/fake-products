import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const AuthWrapper = (props) => {
  const { users } = useSelector((state) => state.usersReducer)
  return users? props.children : <Navigate to="/login"/>
}

export default AuthWrapper