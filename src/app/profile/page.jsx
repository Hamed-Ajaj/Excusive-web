"use client";
import React, { useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "jhon@gmail.com",
    address: "street,123,London",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section className="min-h-screen max-w-[1600px] px-4 md:px-20 py-20">
      <div className="flex justify-center gap-[120px] items-start w-full">
        <aside className="space-y-4 px-3 hidden lg:block">
          <div className="">
            <h1 className="font-medium mb-2">Manage My Account</h1>
            <ul className="px-6 py-2 text-[#9e9c9c] space-y-[8px] ">
              <li>My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
          </div>
          <div>
            <h1 className="font-medium">My Orders</h1>
            <ul className="px-5 py-2 text-[#9e9c9c]">
              <li>My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
          </div>
          <div>
            <h1 className="font-medium">My Wishlist</h1>
            <ul className="px-5 py-2 text-[#9e9c9c]">
              <li>My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
          </div>
        </aside>
        <div className=" p-5 md:p-10 flex justify-center w-full  shadow-lg rounded-sm">
          <form className="w-full flex  md:px-5 py-5 flex-col lg:w-[900px] gap-10 " onSubmit={handleSubmit}>
            <h1 className="text-[20px] font-medium text-[#db4444] text-nowrap">
              Edit Your Profile
            </h1>
            <div>
              <div className="flex flex-col md:flex-row gap-10 w-full">
                <div className="flex flex-col gap-6 w-full md:w-[50%]">
                  <div className="flex flex-col gap-2 ">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      type="text"
                      name="first-name"
                      className="bg-[#f5f5f5] py-4 px-5 rounded-md w-full"
                      id="first-name"
                      value={user.firstName}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="bg-[#f5f5f5] py-4 px-5 rounded-md w-full"
                      id="email"
                      value={user.email}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6 w-full md:w-[50%]">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      type="text"
                      name="last-name"
                      className="bg-[#f5f5f5] py-4 px-5 rounded-md w-full"
                      id="last-name"
                      value={user.lastName}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="address">First Name</label>
                    <input
                      type="text"
                      name="address"
                      className="bg-[#f5f5f5] py-4 px-5 rounded-md w-full"
                      id="address"
                      value={user.address}
                    />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-medium">Password Changes</h1>
              <input
                type="password"
                name="current-pass"
                placeholder="Current password"
                className="bg-[#f5f5f5] py-4 px-5 rounded-md w-full"
              />
              <input
                type="password"
                name="new-pass"
                placeholder="New Password"
                className="bg-[#f5f5f5] py-4 px-5 rounded-md w-full"
              />
              <input
                type="password"
                name="confirm-pass"
                placeholder="Confirm New Password"
                className="bg-[#f5f5f5] py-4 px-5 rounded-md w-full"
              />
            </div>
            <div className="flex justify-end items-center gap-6">
              <button className="font-medium">Cancel</button>
              <button className="py-4 rounded-md px-8 bg-[#db4444] hover:opacity-90 active:opacity-85 text-white font-medium">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
