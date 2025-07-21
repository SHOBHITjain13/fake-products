import { useDispatch, useSelector } from "react-redux"


const Cart = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.usersReducer.users)
    const products = useSelector((state) => state.productReducer.products)

    const IncreaseQuantityHandler = (index, product) => {
        const copyuser = { ...users, cart: [...users.cart] };

        copyuser.cart[index] = {
            product,
            quantity: copyuser.cart[index].quantity + 1,
        }
        console.log(copyuser)
        // dispatch(asyncupdateuser(copyuser.id, copyuser))
    }


    const DecreaseQuantityHandler = () => {

    }

    const cartItems = users.cart.map((c, index) => {

        return (
            <li className="flex items-center justify-between mb-10 bg-gray-700 p-2 rounded" key={c.product.id}>
                <img
                    className="mr-10 w-[7vmax] h-[7vmax] object-cover"
                    src={c.product.image}
                    alt="" />
                <span>{c.product.title}</span>
                <span> {c.product.price}</span>
                <p>
                    <button
                        onClick={() => DecreaseQuantityHandler(index, c)}
                        className="text-xl">-</button >
                    <span className="mx-3 p-1 rounded bg-gray-700">
                        {" "}
                        {c.quantity}{" "}
                    </span>
                    <button
                        onClick={() => IncreaseQuantityHandler(index, c)}
                        className="text-lg">+</button>
                </p>


            </li>
        )
    })

    return <ul>{cartItems}</ul>

}

export default Cart