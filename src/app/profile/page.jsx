"use client";
import React, { useState } from "react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    firstName: "Hamed",
    lastName: "Ajaj",
    email: "hamed@gmail.com",
    address: "123,miryata,zgharta",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  console.log(isEditing)


  const handleUserChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <section className="min-h-screen px-4 md:px-20 py-20">
      <div className="flex justify-center gap-[120px] items-start w-full">
        {/* <aside className="space-y-4 px-3 hidden lg:block text-nowrap">
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
        </aside> */}
        <div className=" p-5 md:p-10 flex justify-center w-full  shadow-lg rounded-sm">
          <form className="w-full flex  md:px-5 py-5 flex-col lg:w-[1300px] gap-10 "  onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <h1 className="text-[20px] font-medium text-[#db4444] text-nowrap">
              Edit Your Profile
            </h1>
            <button className="bg-[#db4444] text-white font-medium py-3 px-6 rounded-md" onClick={() => setIsEditing(true)}>Edit</button>
          </div>
            <div>
              <div className="flex flex-col md:flex-row gap-10 w-full">
                <div className="flex flex-col gap-6 w-full md:w-[50%]">
                  <div className="flex flex-col gap-2 ">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      disabled={!isEditing}
                      className="bg-[#f5f5f5] py-4 px-5 rounded-md w-full"
                      id="first-name"
                      onChange={handleUserChange}
                      value={user.firstName}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      disabled={!isEditing}
                      className="bg-[#f5f5f5] py-4 px-5 rounded-md w-full"
                      id="email"
                      onChange={handleUserChange}
                      value={user.email}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6 w-full md:w-[50%]">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      disabled={!isEditing}
                      className="bg-[#f5f5f5] py-4 px-5 rounded-md w-full"
                      id="last-name"
                      onChange={handleUserChange}
                      value={user.lastName}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      name="address"
                      disabled={!isEditing}
                      className="bg-[#f5f5f5] py-4 px-5 rounded-md w-full"
                      id="address"
                      onChange={handleUserChange}
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
                disabled={!isEditing}
                placeholder="Current password"
                className="bg-[#f5f5f5] py-4 px-5 rounded-md w-full"
              />
              <input
                type="password"
                name="new-pass"
                disabled={!isEditing}
                placeholder="New Password"
                className="bg-[#f5f5f5] py-4 px-5 rounded-md w-full"
              />
              <input
                type="password"
                name="confirm-pass"
                disabled={!isEditing}
                placeholder="Confirm New Password"
                className="bg-[#f5f5f5] py-4 px-5 rounded-md w-full"
              />
            </div>
            <div className="flex justify-end items-center gap-6">
              <button className="font-medium">Cancel</button>
              <button className="py-4 rounded-md px-8 bg-[#db4444] hover:opacity-90 active:opacity-85 text-white font-medium" onClick={() => setIsEditing(false)}>
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
