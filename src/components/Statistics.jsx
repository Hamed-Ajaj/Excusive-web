import ServiceCard from "./ServiceCard"
import StatisticCard from "./StatisticCard"
import { statistics } from "@/constants"
function Statistics() {
  return (
    <div  className="py-10 my-10">
      <div className="flex flex-wrap justify-center items-center  gap-12 ">
        {statistics.map((statistic) => (
          <div key={statistic.id} className="flex flex-col border rounded-md w-[300px] p-10 gap-8 justify-center items-center group hover:bg-[#db4444] hover:text-white">
            <div>
              <div>
                <img src={statistic.img} alt="" className={`${statistic.id !== 2?"invert":"filter-none"} group-hover:${statistic.id !== 2?"filter-none":"invert"}`} />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[32px] font-bold">{statistic.numb}</h1>
              <p className="w-full text-center mt-2">{statistic.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Statistics
