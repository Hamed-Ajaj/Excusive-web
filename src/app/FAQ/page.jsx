import { faqs } from "@/constants";
import Link from "next/link";

const FAQsPage = () => {
  return (
    <section className="min-h-screen">
      <div className="flex flex-col items-center gap-16 h-auto w-full">
        <div className="flex flex-col gap-7 justify-center items-center bg-black px-3 md:px-20 py-20 w-full">
          <p className="text-[#728c8f] text-[1.2rem] xl:text-[2rem] font-semibold">
            FAQs
          </p>
          <h1 className="text-white text-[35px] xl:text-[45px] font-semibold">
            Ask us anything
          </h1>
          <p className="text-[#728c8f] text-[1rem] xl:text-[2rem] font-semibold">
            Have any questions? We're here to assist you.
          </p>
          <input
            type="text"
            name="searchFaq"
            id="searchFaq"
            placeholder="Search here"
            className="bg-white py-3 px-4 rounded-md placeholder:text-[#728c8f] placeholder:text-[12px] lg:w-[400px] xl:w-[500px] xl:py-5 xl:px-6"
          />
        </div>
        <div className="flex justify-center items-center py-10 px-4 md:px-20 max-w-[1700px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white flex flex-col gap-5 p-6  rounded-md shadow-lg"
              >
                <div className="bg-black w-[40px] h-[40px] flex justify-center items-center rounded-full">
                  <p className="invert">{faq.icon}</p>
                </div>
                <div className="flex flex-col space-y-5">
                  <h1 className="text-[#728c8f] text-[1.2rem] font-semibold">
                    {faq.question}
                  </h1>
                  <p className="text-[#728c8f] text-[1rem] font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" mt-5 px-0 md:px-20 flex justify-center w-full max-w-[1700px] h-auto mb-10">
          <div className="flex w-full justify-between items-center py-5 px-6 rounded-[10px] bg-black">
            <div className="text-nowrap space-y-5">
              <p className="text-[#728c8f] font-semibold">
                Still have questions?
              </p>
              <p className="text-[14px] text-[#fff]">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>
            </div>
            <div>
              <Link href="/contact" as={"/contact"}>
                <button className="py-3 px-6 rounded-md bg-[#728c8f] hover:bg-[#809ea1] duration-75 text-white">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsPage;
