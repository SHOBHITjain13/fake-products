import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"


const Nav = () => {

  const user = useSelector((state) => state.usersReducer.users)


  return (
    <nav className="mb-10 flex justify-center items-center gap-x-5 p-5">

      <NavLink to="/">Home</NavLink>

      {user ? (
        <>
          {user && user?.isAdmin &&
            <NavLink to="/admin/create-product">Create Product</NavLink>}



          <NavLink to="/admin/user-profile">settings</NavLink>

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