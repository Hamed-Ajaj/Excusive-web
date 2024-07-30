import { cartItems } from "@/constants"
import Link from "next/link"

const CartPage = () => {
  return (
    <div className='min-h-screen py-20 px-4 md:px-20'>
      <div className="hidden md:grid grid-cols-4 gap-10 place-items-center p-5 shadow-lg rounded-md mb-10">
        <h1>product</h1>
        <h1>price</h1>
        <h1>Quantity</h1>
        <h1>Subtotal</h1>
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center p-5 shadow-md rounded-md mb-10">
          <div className="flex items-center gap-6 w-full  group">
            <div className="relative">
              <img src={item.productImg} className="min-w-[55px] " width={55} height={55} alt={item.title} />
              <span className="absolute hidden group-hover:flex cursor-pointer justify-center items-center py-2 px-2 rounded-full -top-2 -right-2 w-[10px] h-[10px] bg-red-600 text-white">x</span>
            </div>
            <h1 className="text-wrap min-w-[80px]">{item.title}</h1>
          </div>
            <div>
              <h1>{item.price}$</h1>
            </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div>
              <button className="bg-gray-200 px-2 py-1 rounded-md">-</button>
              <span className="px-2">{item.quantity}</span>
              <button className="bg-gray-200 px-2 py-1 rounded-md">+</button>
            </div>
          </div>
          <h1 className="hidden md:block">{item.price * item.quantity}$</h1>
      </div>
      ))}
      <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row justify-center sm:justify-between sm:items-center">
        <button className="bg-transparent rounded-md font-medium py-4 px-12 flex items-center justify-center border-2 border-black">Return To Shop</button>
        <button className="bg-transparent rounded-md font-medium py-4 px-12 flex items-center justify-center border-2 border-black">Update Cart</button>
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:justify-between gap-10 py-10  mt-10">
       
        <div className="w-[350px] md:w-[400px] lg:w-[500px] h-[350px] p-2 border-2 gap-5 border-black rounded-md flex flex-col justify-center items-start">
          <h1 className="text-[1.2rem] font-medium">Cart Total</h1>
          <div className="flex w-full justify-between items-center border-b-2 border-b-black border-spacing-8 py-4">
            <div>
              <p>Total:</p>
            </div>
            <p>${
              cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
            }</p>
          </div>
          <div className="flex justify-between items-center w-full border-b-2 border-b-black border-spacing-8 py-4">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <Link href="/checkout">
            <button className="py-4 px-16 mt-2 bg-[#db4444] text-white font-medium rounded-md">
            Process To Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartPage