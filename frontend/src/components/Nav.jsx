import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

const Nav = () => {
  const user = useSelector((state) => state.usersReducer.users)

  return (
    <nav className="mb-10 flex justify-center items-center gap-x-5 p-5">

      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      {user ? (
        <>
          <NavLink to="/admin/create-product">Create Product</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>
      )}





    </nav>
  )
}

export default Nav