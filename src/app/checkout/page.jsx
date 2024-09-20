"use client"
import { cartItems } from "@/constants";
import { useState } from "react";
import { useCart } from "../context/CartContext";
const CheckoutPage = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const totalPrice = 0
  const {checkoutItems} = useCart();
  console.log(checkoutItems)
  return (
    <section className="py-20 px-4 md:px-20 min-h-screen">
      <div className="flex flex-col p-5 justify-center md:flex-row md:justify-between gap-12 md:items-center">
        <div className="flex flex-col gap-10 w-full md:w-[40%]">
          <h1 className="text-[36px] font-medium">Billing Details</h1>
          <form className="flex flex-col gap-5 w-full  text-nowrap">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="first name" className="text-[#7D8184]">
                First Name <span className="text-[#db4444]">*</span>
              </label>
              <input
                type="text"
                name="first name"
                id="first name"
                className="w-full py-3 px-2 border-none outline-none bg-[#F5F5F5]  rounded-md"
              />
            </div>
            {/* <div className="flex flex-col gap-2 w-full">
              <label htmlFor="first name" className="text-[#7D8184]">
                Company Name
              </label>
              <input
                type="text"
                name="first name"
                id="first name"
                className="w-full py-3 px-2 border-none outline-none bg-[#F5F5F5]  rounded-md"
              />
            </div> */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="first name" className="text-[#7D8184] w-full">
                Last Name <span className="text-[#db4444]">*</span>
              </label>
              <input
                type="text"
                name="Last name"
                required
                id="Last name"
                className="w-full py-3 px-2 border-none outline-none bg-[#F5F5F5]  rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="first name" className="text-[#7D8184]">
                Address  Town/City, floor, etc <span className="text-[#db4444]">*</span>
              </label>
              <input
                type="text"
                name="first name"
                id="first name"
                className="w-full py-3 px-2 border-none outline-none bg-[#F5F5F5]  rounded-md"
              />
            </div>
            {/* <div className="flex flex-col gap-2 w-full">
              <label htmlFor="first name" className="text-[#7D8184]">
                Town/City <span className="text-[#db4444]">*</span>
              </label>
              <input
                type="text"
                name="first name"
                id="first name"
                className="w-full py-3 px-2 border-none outline-none bg-[#F5F5F5]  rounded-md"
              />
            </div> */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="first name" className="text-[#7D8184]">
                Phone Number <span className="text-[#db4444]">*</span>
              </label>
              <input
                type="text"
                name="first name"
                id="first name"
                className="w-full py-3 px-2 border-none outline-none bg-[#F5F5F5]  rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="first name" className="text-[#7D8184]">
                Email Address <span className="text-[#db4444]">*</span>
              </label>
              <input
                type="text"
                name="first name"
                id="first name"
                className="w-full py-3 px-2 border-none outline-none bg-[#F5F5F5] rounded-md"
              />
            </div>
          </form>
        </div>
        <div className=" flex flex-col gap-12 md:w-[40%]">
          <div className="flex flex-col gap-6">
          {/* so whenever we click place older we will put the items or item in a state and put the in the orders page */}
          {/* we have to use the context api or redux to get the items from cart or from direct buy ex:product detail buy  */}
          {/* it's not necessary to use backend but it's better (firebase) */}
            {checkoutItems[0]?.items?.map((item) => (
              <div className="flex justify-between items-center w-full" key={item.id}>
                <div className="flex items-center gap-4">
                  <img
                    src={item.thumbnail}
                    className="w-[60px] h-[60px]"
                    alt={item.title}
                  />
                  <h1>{item.title}</h1>
                </div>
                <p>${(item.priceAfterDisc * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className=" flex flex-col justify-center items-start">
            <h1 className="text-[1.2rem] font-medium">Cart Total</h1>
            <div className="flex w-full justify-between items-center border-b-2 border-b-black border-spacing-8 py-4">
              <div>
                <p>Subtotal:</p>
              </div>
              <p>
                $
                {cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}
              </p>
            </div>
            <div className="flex justify-between items-center w-full border-b-2 border-b-black border-spacing-8 py-4">
              <p>Shipping:</p>
              <p>10$</p>
            </div>
            <div className="flex w-full justify-between items-center border-b-2 border-b-black border-spacing-8 py-4">
              <div>
                <p>Total:</p>
              </div>
              <p>
                $
                {cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  totalPrice+10
                )}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 w-full">
            <ul className="py-2  space-y-4 accent-black">
              {/* create two radio button in stock and out of stock */}
              <div className="flex gap-3 items-center">
                <input
                  type="radio"
                  name="status"
                  id="inStock"
                  className="h-5 w-5"
                  defaultChecked
                  onClick={() => setSelectedPayment("cash")}
                />
                <label htmlFor="inStock">Cash On delivery</label>
              </div>
              <div className="flex gap-3 justify-between items-center ">
              <div className="flex gap-3 items-center">
                <input
                  type="radio"
                  name="status"
                  id="outOfStock"
                  className="h-5 w-5"
                  onClick={() => setSelectedPayment("bank")}

                />
                <label htmlFor="outOfStock">Bank</label>
              </div>
              <div>
                <img src="/icons/Bank.svg" alt="" />
              </div>
              </div>
            </ul>
            {selectedPayment === "bank" && (
              <div className="flex flex-col gap-2 w-full">

                <label htmlFor="first name" className="text-[#7D8184]">
                  Card Number <span className="text-[#db4444]">*</span>
                </label>
                <input
                  type="password"
                  name="card-number"
                  id="card-number"
                  className="w-full py-3 px-2 border-none outline-none bg-[#F5F5F5]  rounded-md"
                  placeholder="**** **** **** ****"
                  c
                />
                <div className="flex w-full space-x-8 justify-between">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="first name" className="text-[#7D8184]">
                      Expiry Date <span className="text-[#db4444]">*</span>
                    </label>
                    <input
                      type="text"
                      name="expiry-date"
                      id="expiry-date"
                      className="w-full py-3 px-3 border-none outline-none bg-[#F5F5F5]  rounded-md"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="first name" className="text-[#7D8184]">
                      Card Security Code <span className="text-[#db4444]">*</span>
                    </label>
                    <input
                      type="password"
                      name="cvv"
                      id="cvv"
                      className="w-full py-3 px-3 border-none outline-none bg-[#F5F5F5]  rounded-md"
                      placeholder="CSC"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-full flex justify-between flex-col md:flex-row gap-4">
            <button className="bg-[#db4444] px-8 py-4 font-medium text-[18px] text-white w-full md:w-1/2">Place Order</button>
            <button className="bg-transparent border-2 border-black px-8 py-4 font-medium text-[18px] text-black w-full md:w-1/2">Cancel</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
