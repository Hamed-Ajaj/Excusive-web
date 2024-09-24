"use client"
import Link from "next/link"
import { useCart } from "../context/cartContext"
import { auth } from "../firebase/firebase"
import { Minus, Plus, Trash } from "lucide-react"
import EmptyCart from "@/components/EmptyCart"

const CartPage = () => {

  const {cart,handleRemoveItem,increaseQuantity,decreaseQuantity,addItemToCheckout} = useCart()

  const handleAddToCheckout = () => {
    addItemToCheckout(cart)
  }
  if(!auth.currentUser){
    return (
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-[1.5rem] font-medium">Please Login to view your cart</h1>
        <Link href={"/sign-in"}><button className="bg-[#db4444] text-white font-medium rounded-md py-4 px-12 mt-4">Login</button></Link>
      </div>
    )
  }
  if(!cart.length){
    return (
      <EmptyCart />
    )
  }
  return (
    <div className='min-h-screen py-20 px-4 md:px-20 m-auto max-w-[1600px]'>
      <div className="hidden md:grid grid-cols-4 gap-10 place-items-center p-5 shadow-lg rounded-md mb-10">
        <h1>product</h1>
        <h1>price</h1>
        <h1>Quantity</h1>
        <h1>Subtotal</h1>
      </div>
      {cart?.map((item) => (
        <div key={item.id} className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center p-5 shadow-md rounded-md mb-10">
          <div className="flex items-center gap-6 w-full  group">
            <div className="relative">  
              <img src={item.thumbnail} className="min-w-[55px] " width={55} height={55} alt={item.title} />
              <span className="absolute hidden group-hover:flex cursor-pointer group-hover:justify-center group-hover:items-center py-2 px-2 rounded-full -top-2 -right-2 w-[10px] h-[10px] bg-red-600 text-white" onClick={()=> handleRemoveItem(item.id)}>
                -
              </span>
            </div>
            <Link href={`/products/${item.id}`}>
              <h1 className="text-wrap min-w-[80px]">{item.title}</h1>
            </Link>
          </div>
            <div>
              <h1>{item.priceAfterDisc.toFixed(2)}$</h1>
            </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center">
              <button className="bg-gray-200 fle justify-center items-center px-2 py-1 rounded-md"
              onClick={() => decreaseQuantity(item.id)}
              >
                {item.quantity === 1 ? <Trash size={20}/> : <Minus size={20}/>}
              </button>
              <span className="px-2 flex items-center">{item.quantity}</span>
              <button className="bg-gray-200 px-2 py-1 rounded-md"
              onClick={() => increaseQuantity(item.id)}
              >
                <Plus size={20}/>
              </button>
            </div>
          </div>
          <h1>{(item.priceAfterDisc * item.quantity).toFixed(2)}$</h1>
      </div>
      ))}
      <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row justify-center sm:justify-between sm:items-center">
        <Link href={"/"}><button className="bg-transparent rounded-md font-medium py-4 px-12 flex items-center justify-center border-2 border-black w-full md:w-auto">Return To Shop</button></Link>
        <button className="bg-transparent rounded-md font-medium py-4 px-12 flex items-center justify-center border-2 border-black">Update Cart</button>
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:justify-between gap-10 py-10  mt-10">
       
        <div className="w-full md:w-[400px] lg:w-[500px] h-[350px] p-2 border-2 gap-5 border-black rounded-md flex flex-col justify-center items-start">
          <h1 className="text-[1.2rem] font-medium">Cart Total</h1>
          <div className="flex w-full justify-between items-center border-b-2 border-b-black border-spacing-8 py-4">
            <div>
              <p>Total:</p>
            </div>
            <p>${
              cart?.reduce((acc, item) =>  (acc +Number((item.priceAfterDisc * item.quantity).toFixed(1))), 0)
            }</p>
          </div>
          <div className="flex justify-between items-center w-full border-b-2 border-b-black border-spacing-8 py-4">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <Link href="/checkout" target="_blank" className="flex justify-center items-center w-full">
            <button className="py-4 px-16 mt-2 bg-[#db4444] text-white font-medium rounded-md" onClick={handleAddToCheckout}>
              Process To Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartPage