import { Mail, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen px-4 md:px-20 py-20">
      <div className=" p-5 lg:p-10 flex flex-col lg:flex-row gap-12">
        <div className="flex w-full flex-col lg:w-[35%] gap-10  md:items-center shadow-lg h-auto rounded-md">
          <div className="flex flex-col gap-10 border-b-4 p-8">
            <div className="flex gap-6 items-center">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#db4444] text-white">
                <Phone size={30}/>
              </div>
              <h1 className="font-medium text-[20px]">Call Us!</h1>
            </div>
            <div className="space-y-8">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +961 123456787</p>
            </div>
          </div>
          <div className="flex flex-col gap-10 p-8">
              <div className="flex gap-6 items-center">
                <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#db4444] text-white">
                  <Mail size={30}/>
                </div>
                <h1 className="font-medium text-[20px]">Write to Us!</h1>
              </div>
              <div className="space-y-8">
                <p>Fill out our form and we will contact <br /> you within 24 hours.</p>
                <p>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
              </div>
          </div>
        </div>
        <div className="w-full lg:w-[70%] rounded-lg">
          <form className="flex flex-col gap-16 items-center justify-center shadow-lg h-full p-5 rounded-lg">
            <div className="flex  flex-col w-full lg:flex-row gap-4 flex-wrap">
              <input type="text" className="py-4 px-4  bg-[#F5F5F5] border-none outline-none rounded-lg" required placeholder="Your Name"/>
              <input type="email" className="py-4 px-4 bg-[#F5F5F5] border-none outline-none rounded-lg" required placeholder="Your Email"/>
              <input type="text" className="py-4 px-4 bg-[#F5F5F5] border-none outline-none rounded-lg" required placeholder="Your Phone"/>
            </div>
            <div className="w-full">
              <textarea className="w-full h-[200px] bg-[#F5F5F5] py-6 px-6 resize-none border-none outline-none" placeholder="Message"></textarea>
            </div>
            <button className="flex self-end py-3 px-8 bg-[#db4444] rounded-md text-white text-[18px] font-medium">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  ); 
};

export default Contact;
