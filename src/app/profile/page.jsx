"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import {
  Box,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useToast,
} from "@chakra-ui/react";
import { logOut } from "../firebase/auth";
import { LogOut } from "lucide-react";
import Loader from "@/components/Loader";
const ProfilePage = () => {
  const toast = useToast();
  // const { isOpen, onToggle, onClose } = useDisclosure();
  const initRef = useRef();

  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [user, setUser] = useState({
    first: "",
    last: "",
    email: "",
  });
  if (auth.currentUser) {
    const usersCollection = doc(db, "users", auth?.currentUser?.uid);
    const getUserInfo = async () => {
      const userinfo = await getDoc(usersCollection);
      setUser({
        first: userinfo.data()?.first,
        last: userinfo.data()?.last,
        email: userinfo.data()?.email,
        address: userinfo.data()?.address,
      });
    };
    useEffect(() => {
      getUserInfo();
    }, []);
  }

  const router = useRouter();

  if (!auth.currentUser) {
    router.push("/");
    // return (
    //   <div className="min-h-screen p-20 flex flex-col  items-center gap-8">
    //     <h1 className="text-[40px] font-semibold">You Have to be authenticated to open this page!</h1>
    //     <button onClick={() => router.push("/sign-in")}
    //     className="bg-[#db4444] text-white font-medium py-3 px-6 rounded-md"
    //     >please Login!</button>
    //   </div>
    // )
  }


  const handleUserChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleDocUpdate = async () => {
    setIsEditing(false);
    await updateDoc(doc(db, "users", auth?.currentUser?.uid), {
      first: user.first,
      last: user.last,
      email: user.email,
      address: user?.address,
    });
    toast({
      title: "Details Updated",
      description: "We've updated you're account details.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleAccountDeletion = async () => {
    try {
      await deleteDoc(doc(db, "users", auth?.currentUser?.uid));
      await auth?.currentUser?.delete();
      logOut();
      toast({
        title: "Account Deleted",
        description: "We've deleted your account.",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      router.push("/");
    } catch (error) {
      console.log;
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

  const handleLogout = async () => {
    // load the window
    location.reload()
    await logOut();
    toast({
      title: "Logged Out",
      description: "You've been logged out.",
      status: "success",
      duration: 9000,
      isClosable: true,
    })
  }
  return (
    <Suspense fallback={<Loader />}>
    <section className="min-h-screen  md:px-20 py-5 lg:py-20">
        <div className=" p-5 md:p-10 flex flex-col justify-center w-full gap-10  shadow-lg rounded-sm">
          <div>
            <form
              className="flex  flex-col w-full gap-10 "
              onSubmit={handleFormSubmit}
            >
              <div className="flex justify-between items-center">
                <h1 className="text-[20px] font-medium text-[#db4444] text-nowrap">
                  Edit Your Profile
                </h1>
                <button
                  className="bg-[#db4444] text-white font-medium py-3 px-6 rounded-md"
                  onClick={() => setIsEditing(true)}
                  type="button"
                >
                  Edit
                </button>
              </div>
              <div>
                <div className="flex flex-col md:flex-row gap-10 w-full">
                  <div className="flex flex-col gap-6 w-full md:w-[50%]">
                    <div className="flex flex-col gap-2 ">
                      <label htmlFor="first-name">First Name</label>
                      <input
                        type="text"
                        name="first"
                        placeholder="First Name"
                        disabled={!isEditing}
                        {...register("first", { required: true })}
                        className={`${
                          isEditing ? "text-black" : "text-gray-300"
                        } bg-[#f5f5f5] py-4 px-5 rounded-md w-full`}
                        id="first-name"
                        onChange={handleUserChange}
                        value={user.first}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        disabled={!isEditing}
                        {...register("email", { required: true })}
                        className={`${
                          isEditing ? "text-black" : "text-gray-300"
                        } bg-[#f5f5f5] py-4 px-5 rounded-md w-full`}
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
                        name="last"
                        placeholder="Last Name"
                        disabled={!isEditing}
                        {...register("last", { required: true })}
                        className={`${
                          isEditing ? "text-black" : "text-gray-300"
                        } bg-[#f5f5f5] py-4 px-5 rounded-md w-full`}
                        id="last-name"
                        onChange={handleUserChange}
                        value={user.last}
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        name="address"
                        disabled={!isEditing}
                        className={`${
                          isEditing ? "text-black" : "text-gray-300"
                        } bg-[#f5f5f5] py-4 px-5 rounded-md w-full`}
                        {...register("address", { required: true })}
                        id="address"
                        placeholder="Address"
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
                <div className="flex justify-end items-center gap-6 mt-5">
                  <button
                    className="font-medium"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="py-4 rounded-md px-8 bg-[#db4444] hover:opacity-90 active:opacity-85 text-white font-medium"
                    onClick={() => handleDocUpdate()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
          <hr className="w-full h-[2px] bg-[#ccc]" />
          {/* delete account section */}
          <div className=" flex flex-col gap-5 md:flex-row md:gap-0 justify-between mt-5 items-center w-full">
            <div className="w-full md:w-auto">
              <h1 className="text-[20px] font-medium text-[#db4444] text-nowrap">
                Delete Account
              </h1>
            </div>
            <div className="w-full md:w-auto">
              <Popover
                closeOnBlur={false}
                placement="top"
                initialFocusRef={initRef}
              >
                {({ isOpen, onClose }) => (
                  <>
                    <PopoverTrigger>
                      <button
                        className="bg-[#db4444] w-full text-white font-medium py-4 md:w-[150px] rounded-md"
                      >
                        {isOpen ? "Cancel" : "Delete"}
                      </button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverBody>
                          <Box>
                            Are you sure you want to delete your account?
                          </Box>
                          <button
                            className="bg-[#db4444] text-white hover:opacity-90 font-medium mt-2 py-2 px-4 rounded-md"
                            onClick={handleAccountDeletion}
                          >
                            delete
                          </button>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </>
                )}
              </Popover>
            </div>
          </div>
          <hr className="w-full h-[2px] bg-[#ccc]" />
          {/* sign out section */}
          <div className="flex flex-col gap-5 md:flex-row md:gap-0 justify-between mt-5 items-center w-full">
            <div className="w-full md:w-auto">
              <h1 className="text-[20px] font-medium text-[#db4444] text-nowrap">
                Sign Out
              </h1>
            </div>
            <div className="w-full md:w-auto">
              <button
                className="bg-[#db4444] flex justify-center items-center gap-2 text-white font-medium w-full md:w-[150px] py-4  rounded-md"
                onClick={handleLogout}
                
              >
                <LogOut size={20}/>
                Sign Out
              </button>
            </div>
        </div>
      </div>
    </section>
    </Suspense>
  );
};

export default ProfilePage;
