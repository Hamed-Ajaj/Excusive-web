import Link from "next/link"


const ShopNow = () => {
  return (
    <div className="w-full hidden sm:flex p-1 sm:p-4  justify-around items-center bg-black text-white">
      <div></div>
      <div className="text-[0.6rem] sm:text-[1rem]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link href={"/products"} className="underline text-[0.8rem] font-semibold">Shop-now</Link></div>
      <div>
        <p className="text-[0.8rem]">English </p>
      </div>
    </div>
  )
}

export default ShopNow
