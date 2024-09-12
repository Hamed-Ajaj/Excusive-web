"use client";
import { useState } from "react";
import ShopNow from "./ShopNow";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { links, profileMenuItems } from "@/constants";
import { useSelector } from "react-redux";
import {
  Heart,
  MenuIcon,
  Outdent,
  ShoppingBag,
  ShoppingCartIcon,
  User,
  User2,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { auth } from "@/app/firebase/firebase";
import { logOut } from "@/app/firebase/auth";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const pathname = usePathname();
  const user = true;
  const handleLogout = () => {
    window.location.reload();
    logOut();
  };
  const cart = useSelector((state) => state.cart.items);
  return (
    <header className="border-b ">
      <ShopNow />
      <nav className="flex justify-between items-center m-auto p-3 lg:p-10 max-w-[1600px]">
        <Link href={"/"}>
          <div className="flex items-center gap-2 justify-center">
            <img src="/icons/transparent_logo.png" width={50} height={50} />
            <h1 className="text-[19px] md:text-[24px] font-bold ">Exclusive</h1>
          </div>
        </Link>
        <div className="hidden lg:flex gap-4 md:gap-6 lg:gap-12 items-center">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              <span
                className={`text-xl  font-normal text-black ${
                  pathname === link.href ? "underline" : ""
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href={"/products"}>
            <span
              className={`text-xl font-normal text-black ${
                pathname === "/products" ? "underline" : ""
              }`}
            >
              Products
            </span>
          </Link>
        </div>
        <div className="flex gap-4 sm:gap-8 items-center ">
          <div className="block lg:hidden relative">
            <MenuIcon
              className="cursor-pointer"
              width={35}
              height={35}
              onClick={() => setShowMenu(!showMenu)}
            />
            {showMenu && (
              <div className="flex flex-col gap-4 absolute top-12 -right-0 border border-white bg-black p-4 rounded-lg z-20">
                {links.map((link, index) => (
                  <Link href={link.href} key={index}>
                    <span
                      className={`text-xl font-normal text-white ${
                        pathname === link.href ? "underline" : ""
                      }`}
                      onClick={() => setShowMenu(false)}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
                <Link href={"/products"}>
                  <span
                    className={`text-xl font-normal text-white ${
                      pathname === ("/products")
                        ? "underline"
                        : ""
                    }`}
                    onClick={() => setShowMenu(false)}
                  >
                    Products
                  </span>
                </Link>
              </div>
            )}
          </div>
          {/* SearchBar component */}
          <SearchBar />
          {user ? (
            <div className="flex items-center gap-3 md:gap-10">
              <div className="flex justify-center items-center relative">
                <Link href="/cart">
                  <ShoppingCartIcon
                    size={30}
                    className={`cursor-pointer hover:text-gray-600 `}
                  />
                </Link>
                <div className="text-white bg-[#db4444] absolute -top-1 -right-2 py-2 px-2 w-4 h-4 rounded-full flex justify-center items-center text-[12px]">
                  {cart.length}
                </div>
              </div>
              <div
                className="flex justify-center gap-2 items-center relative"
                
              >
              {auth.currentUser ? (
                <div>
                  <User
                    className="cursor-pointer hover:text-gray-500"
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    size={32}
                  />
                </div>
              ):
              ( 
                <Link href="/sign-up">
                  <div className="flex items-center gap-2 group">
                    <User
                      className="cursor-pointer group-hover:text-gray-500"
                      // onClick={() => setShowProfileMenu(!showProfileMenu)}
                      size={32}
                    />
                    <h1
                      className="text-[14px] text-nowrap lg:text-[18px] hidden md:block text-black font-semibold cursor-pointer group-hover:text-gray-500"
                    >Sign Up</h1>
                  </div>
                </Link>
              )
              }

                
                  {auth.currentUser&& (showProfileMenu && (
                    <div className="flex flex-col w-[200px] md:w-[220px] h-auto gap-4 absolute top-12 -right-0 transparent-black-gradient-blur p-1 md:p-3 rounded-lg text-white z-20">
                      {profileMenuItems.map((item, index) => (
                        <Link href={item?.href} key={index}>
                          <div className="flex gap-4 md:gap-6 text-[14px] text-nowrap items-center" 
                          onClick={
                            ()=>setShowProfileMenu(false)
                          }>
                            <div>{item.img}</div>
                            <div>{item.name}</div>
                          </div>
                        </Link>
                      ))}
                      <div className="flex gap-4 md:gap-6 text-[14px] items-center">
                        <div>
                          <Outdent size={25} />
                        </div>
                        <button type="submit" onClick={handleLogout}>
                          Log Out
                        </button>
                      </div>
                    </div>
                  ))
                  }
              </div>
            </div>
          ) : (
            <></>
          )}

          {/* Menu Icon */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
