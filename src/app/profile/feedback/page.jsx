"use client";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@chakra-ui/react";

const FeedBackPage = () => {
  const form = useRef();
  const toast = useToast();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0ovh42s", "template_6vhqkhh", form.current, {
        publicKey: "HTuVWjs1Ce5qLNRs5",
      })
      .then(
        () => {
          e.target.reset();
          toast({
            title: "Email sent successfully",
            status: "success",
            duration: 5000,
            isClosable: true,
          })
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast({
            title: "Email not sent",
            status: "error",
            duration: 5000,
            isClosable: true,
          })
        }
      );
  };
  return (
    <section className="flex flex-col gap-10 items-center py-10 md:px-10 h-full mb-28">
      <h1 className="text-center text-[40px] font-bold">Feedback Form</h1>
      <div className="w-[340px] sm:w-[400px] md:w-[600px] h-auto p-5 md:p-14 border-2 shadow-lg rounded-lg">
        <form
          className="flex flex-col w-full gap-4 items-start"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col gap-1 items-start w-full">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Enter your name"
              className="border-2 w-full border-gray-300 px-2 py-4 rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-1 items-start w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="Enter your email"
              className="border-2 w-full border-gray-300 px-2 py-4 rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-1 items-start w-full">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="user_subject"
              placeholder="Enter your subject"
              className="border-2 w-full border-gray-300 px-2 py-4 rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-1 items-start w-full">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              id="message"
              name="user_message"
              rows={5}
              placeholder="Enter your Message"
              className="border-2 resize-none w-full border-gray-300 px-2 py-4 rounded-2xl"
            />
          </div>

          <div className="flex justify-center items-center w-full">
            <button
              type="submit"
              className="bg-[#db4444] text-white py-4 px-10 hover:opacity-90  mt-4 rounded-full"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FeedBackPage;
