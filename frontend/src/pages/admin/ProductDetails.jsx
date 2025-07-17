import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

const ProductDetails = () => {

  const { id } = useParams()
  const products = useSelector((state) => state.productReducer.products)
  const product = products?.find((product) => product.id == id)
  console.log(product)


  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
    image: product?.image,
    title: product?.title,
    price: product?.price,
    category: product?.category,
    description: product?.description
    }
  });
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const UpdateProductHandler = (product) => {

    console.log(product)
    dispatch(asyncupdateproduct(product));
  }


  return product? (
    <div className="">
      <div className="w-full flex">

        <img className="w-1/2 h-1/2 object-cover" src={product.image} alt="" />

        <div className=" px-3 w-1/2 h-1/2">

          <h1 className="font-thin text-5xl">{product.title}</h1>
          <h2 className="mb-5 text-2xl text-green-400">${product.price}</h2>
          <p>{product.description}</p>
          <button>Add to cart</button>

          <div>
            <button></button>
          </div>
        </div>
      </div>
      <hr />

      <form onSubmit={handleSubmit(UpdateProductHandler)} 
      className="w-full flex flex-col justify-start items-start" action="">
        <input
          {...register("image")}
          className="mb-3 outline-0 border-b p-2 text-4xl"
          type="url"
          placeholder="image-url" />

        <input
          {...register("title")}
          className="mb-3 outline-0 border-b p-2 text-4xl"
          type="text"
          placeholder="title" />

        <input
          {...register("price")}
          className="mb-3 outline-0 border-b p-2 text-4xl"
          type="number"
          placeholder="0.00" />

        <textarea
          {...register("description")}
          className="mb-3 outline-0 border-b p-2 text-4xl"
          type="password"
          placeholder="Enter description here...">
        </textarea>

        <input
          {...register("category")}
          className="mb-3 outline-0 border-b p-2 text-4xl"
          type="text"
          placeholder="category" />

        <button className="mt-5 px-4 py-2 bg-blue-400 rounded">Update Prodct</button>

      </form>

    </div>
  ): ( "loading...")
}

export default ProductDetails