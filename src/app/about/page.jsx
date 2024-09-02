import { services } from "@/constants"
import ServiceCard from "@/components/ServiceCard"
import Statistics from "@/components/Statistics"
import { Suspense } from "react"
const AboutPage = () => {
  return (
    <section className='min-h-screen space-y-5 px-4 py-10 md:px-20'>
        <div className="flex flex-col gap-6 lg:flex-row justify-between h-auto mb-10 p-10">
          <div className="w-full lg:w-[45%] flex flex-col justify-center gap-12 leading-7 md:p-8">
            <h1 className="text-[40px] text-nowrap sm:text-[48] md:text-[54px] font-semibold">Our Story</h1>
            <p>
              Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging  from consumer.
            </p>
          </div>
          <div className="w-full lg:w-[45%] h-[500px]">
            <img src="/AboutUsImg.jpg" alt="shopping" className="w-full h-full object-cover"/>
          </div>
        </div>
          <div>
            <Statistics />
          </div>
        {/* <div></div> */}
          <div className="flex justify-center items-center flex-wrap gap-12 ">
            <Suspense fallback={<p>Loading...</p>}>
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
            </Suspense>
          </div>
    </section>
  )
}

export default AboutPage
