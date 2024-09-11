"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { signUp} from "../firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { collection, addDoc, getDoc, setDoc, doc } from "firebase/firestore";
import { auth, db,provider } from "../firebase/firebase";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import { useToast } from "@chakra-ui/react";
import InputsError from "@/components/InputsError";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  if (auth.currentUser) router.push("/");
  // const usersCollection = collection(db,"users")

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await signUp(data.email, data.password);
      await setDoc(doc(db, "users", auth?.currentUser?.uid), {
        first: data.fname,
        last: data.lname,
        email: data.email,
      });
      toast({
        title: 'Account Created',
        description: "You've successfully created an account with us.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      setLoading(false);
      router.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
    
  };

  const handleGoogleSignUp = async () => {
      try {
        
        await signInWithPopup(auth, provider)
        await setDoc(doc(db, "users", auth?.currentUser?.uid), {
          first: auth?.currentUser?.displayName,
          last: "ajaj",
          email: auth?.currentUser?.email,
        });
        
        router.push('/')
      } catch (error) {
        console.log(error)
      }
  }
  
  return (
    <section className="flex justify-center items-center p-10 gap-10">
      <div className="hidden md:block w-[45%] h-[750px] ">
        <img
          src="/signup.svg"
          alt="sign-up"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-[45%] gap-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="min-w-[350px] max-w-[450px] flex flex-col gap-12 p-4  items-start"
        >
          <div className="space-y-[24px] text-start ">
            <h1 className="text-[28px] sm:text-[2.3rem] font-medium">
              Create an Account
            </h1>
            <p>Enter Your details below.</p>
          </div>
          <div className="flexCol w-full">
            {/* <label htmlFor="name">Name</label> */}
            <input
              placeholder="FirstName"
              className="py-2 outline-none border-b-2 border-black w-full"
              id="fname"
              {...register("fname", { required: true, maxLength: 30 })}
            />
            {errors.fname && <InputsError error={errors?.fname} errorName={"First Name"} />}

          </div>
          <div className="flexCol w-full">
            {/* <label htmlFor="name">Name</label> */}
            <input
              placeholder="LastName"
              className="py-2 outline-none border-b-2 border-black w-full"
              id="lname"
              {...register("lname", { required: true, maxLength: 30 })}
            />
            {errors.lname && <InputsError error={errors?.lname} errorName={"Last Name"} />}

          </div>
          <div className="flexCol w-full">
            {/* <label htmlFor="email">Email or Phone Number</label> */}
            <input
              placeholder="Email or Phone Number"
              className="py-2 outline-none border-b-2 border-black w-full"
              id="email"
              type="email"
              {...register("email", { required: true, maxLength: 30 })}
            />
            {errors.email && <InputsError error={errors?.email} errorName={"Email"} />}
          </div>
          <div className="flexCol w-full">
            {/* <label htmlFor="password">Password</label> */}
            <input
              placeholder="Password"
              id="password"
              className="py-2 outline-none border-b-2 border-black w-full"
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 30,
              })}
            />
            {errors.password && <InputsError error={errors.password} errorName={"Password"} />}
          </div>

              

              {/* {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> }  */}
          <div className="flex flex-col justify-center items-center gap-8 w-full">
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "bg-[#fb6f6f]" : "bg-[#DB4444]"
              } flex justify-center items-center px-[10px] py-[16px] w-full text-white font-medium rounded-md`}
            >
              {loading ? <Loader /> : "Create Account"}
            </button>
            <button className="flex gap-4 items-center justify-center bg-transparent px-[10px] py-[16px] w-full text-black font-medium rounded-md border-2 border-black" onClick={handleGoogleSignUp}>
              <img src="/icons/google.svg" className="w-4 h-4" alt="" /> Sign up
              with Google
            </button>
          </div>
          <p className="text-center">
            Already Have an Account?{" "}
            <Link href="/sign-in" className="text-blue-500 underline">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUpPage;
