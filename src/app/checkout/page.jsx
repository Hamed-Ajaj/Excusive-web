import { cartItems } from "@/constants";
const CheckoutPage = () => {
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
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="first name" className="text-[#7D8184]">
                Company Name
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
                Street Address <span className="text-[#db4444]">*</span>
              </label>
              <input
                type="text"
                name="first name"
                id="first name"
                className="w-full py-3 px-2 border-none outline-none bg-[#F5F5F5]  rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="first name" className="text-[#7D8184] w-full">
                Apartment, floor, etc. (optional)
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
                Town/City <span className="text-[#db4444]">*</span>
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
            {cartItems.map((item) => (
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-4">
                  <img
                    src={item.productImg}
                    className="w-[60px] h-[60px]"
                    alt={item.title}
                  />
                  <h1>{item.title}</h1>
                </div>
                <p>${item.price * item.quantity}</p>
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
                  (acc, item) => acc + item.price * item.quantity + 5,
                  0
                )}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-12 w-full">
            <div className="flex justify-between items-center">
              <div className="flex gap-6">
                <input
                  type="radio"
                  name="bank"
                  id="bank"
                  className="w-8 accent-black"
                />
                <label htmlFor="">Bank</label>
              </div>
              <div>
                <img
                  src="/icons/Bank.svg"
                  className="w-full flex items-center object-cover"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="flex gap-6">
                <input
                  type="radio"
                  name="cash"
                  id="cash"s
                  className="w-8 accent-black"
                />
                <label htmlFor="">Cash on delivery</label>
              </div>
            </div>
          </div>
            <button className="bg-[#db4444] px-8 py-4 text-white">Place Order</button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
