import { Routes, Route } from "react-router-dom"
import { lazy } from "react"
import UnauthWrapper from "./UnauthWrapper"

const Products = lazy(() => import("../pages/Products"))
const Cart = lazy(() => import("../pages/Cart"))
const AuthWrapper = lazy(() => import("./AuthWrapper"))
const UserProfile = lazy(() => import("../pages/user/UserProfile"))
const ProductDetails = lazy(() => import("../pages/admin/ProductDetails"))
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"))
const Register = lazy(() => import("../pages/Register"))
const Login = lazy(() => import("../pages/Login"))
const PageNotFound = lazy(() => import("../pages/PageNotFound"))





const Mainroutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Products />} />

      <Route path="/login" element={<UnauthWrapper><Login /></UnauthWrapper>}/>
      <Route path="/register" element={<UnauthWrapper><Register /></UnauthWrapper>}/>


      <Route
        path="/admin/create-product"
        element={
          <AuthWrapper>
            <CreateProduct />
          </AuthWrapper>}
      />
      <Route
        path="/admin/user-profile"
        element={
          <AuthWrapper>
            <UserProfile />
          </AuthWrapper>}
      />
      <Route
        path="/product/:id"
        element={<AuthWrapper>
          <ProductDetails />
        </AuthWrapper>}
      />

      <Route
        path="/cart"
        element={
          <AuthWrapper>
            <Cart />
          </AuthWrapper>}
      />


      <Route
        path="*"
        element={<PageNotFound />}
      />
    </Routes>
  )
}

export default Mainroutes