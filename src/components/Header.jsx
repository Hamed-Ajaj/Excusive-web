"use client";
import { useState } from "react";
import ShopNow from "./ShopNow";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { links, profileMenuItems } from "@/constants";
import {
  Heart,
  MenuIcon,
  ShoppingBag,
  ShoppingCartIcon,
  User,
  User2,
} from "lucide-react";
import { usePathname } from "next/navigation";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const pathname = usePathname();
  const user = true;
  return (
    <header className="border-b ">
      <ShopNow />
      <nav className="flex justify-between items-center p-4 sm:p-12">
        <div className="flex items-center">
          <h1 className="text-[19px] md:text-[24px] font-bold">
            <Link href={"/"}>Exclusive</Link>
          </h1>
        </div>
        <div className="hidden lg:flex gap-12 items-center">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              <span
                className={`text-xl font-normal text-black ${
                  pathname === link.href ? "underline" : ""
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
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
              </div>
            )}
          </div>
          {/* SearchBar component */}
          <SearchBar />
          {user ? (
            <div className="flex items-center gap-3 md:gap-10">
              <div className="justify-center items-center relative hidden md:flex ">
                <Link href={"/Wishlist"}>
                  <Heart
                    size={30}
                    className="cursor-pointer hover:text-gray-600"
                  />
                </Link>
                <div className="text-white bg-[#db4444] absolute -top-1 -right-2 py-2 px-2 w-5 h-5 rounded-full flex justify-center items-center text-[12px]">
                  2
                </div>
              </div>
              <div className="hidden sm:flex justify-center items-center relative">
                <Link href="/cart">
                  <ShoppingCartIcon
                    size={30}
                    className="cursor-pointer hover:text-gray-600"
                  />
                </Link>
                <div className="text-white bg-[#db4444] absolute -top-1 -right-2 py-2 px-2 w-5 h-5 rounded-full flex justify-center items-center text-[12px]">
                  4
                </div>
              </div>
              <div
                className="flex justify-center items-center relative"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                <User
                  className="cursor-pointer hover:text-gray-500"
                  size={30}
                />
                {showProfileMenu && (
                  <div className="flex flex-col min-w-[280px] h-auto gap-4 absolute top-12 -right-0 transparent-black-gradient-blur p-3 rounded-lg text-white z-20">
                    {profileMenuItems.map((item, index) => (
                      <Link href={item?.href} key={index}>
                        <div className="flex gap-6 items-center">
                          <div>{item.img}</div>
                          <div>{item.name}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
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
