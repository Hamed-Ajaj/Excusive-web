"use client";
import FilterComponent from "@/components/FilterComponent";
import ProductCard from "@/components/ProductCard";
import ProductsPageHeader from "@/components/ProductsPageHeader";
import { products, sorting , api} from "@/constants";
import { SortDescIcon, Filter } from "lucide-react";
import axios from "axios";
import  { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const ProductsPage = () => {
  const [sortingIsOpen, setSortingIsOpen] = useState(false);
  // const [itemsPosition, setItemsPosition] = useState('grid');
  // const [fakeProducts, setFakeProducts] = useState();
  const [sort, setSort] = useState(null);
  const [search,setSearch] = useState("")
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const handleSort = (sort) => {
    setSort(sort)
    setSortingIsOpen(false)
  }
  // make it fetch when the search change

  const { data, isLoading,isFetching, isError,refetch } = useQuery({
    queryKey: ['products'],
    // https://dummyjson.com/products?sortBy=price&order=desc&/search?q=food
    queryFn: () => axios.get(`https://dummyjson.com/products${search&&`/search?q=${search}`}`), 
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    }
  }
  )

  useEffect(() => {
    refetch()
  },[search,sort])

  




  // console.log(data.data.products)

  // useEffect(() => {
  //   axios.get(`https://dummyjson.com/products${search&&`/search?q=${search}`}`)
  //   .then((response) => {
  //     setFakeProducts(response.data)
  //     setLoading(false)
  //   })
  //   .catch((error) => {
  //     setError(error)
  //   })
  // },[search,sort])

  // if(isLoading) return <p>products...</p>
  if(isError) return <p>Error...</p>
  // if(isFetching) return <p>Fetching...</p>
  return (
    <section className=" h-full min-h-[100vh] mb-10   ">
      <div className="flex flex-col  items-center  gap-10 ]">
        <div className="w-full flex justify-center items-center">
          <ProductsPageHeader search={search} setSearch={setSearch}/>
        </div>
        <div className="flex gap-10 h-full justify-between items-start px-5 sm:px-10 lg:px-4 max-w-[1600px]">
          <aside className="hidden w-[250px] min-h-screen md:flex  ">
            <FilterComponent />
          </aside>
          <div className="flex h-full w-full  flex-col gap-10 lg:px-5 py-4 items-center">
            <div className="flex justify-between items-center w-full relative">
              {search&&<div className="flex flex-col gap-4 items-start md:flex-row md:items-center">
                <h1 className="sm:text-[20px] italic lg:text-[30px] font-medium">“{search}”</h1>
                <span className="hidden md:block">____</span>
                <p className="sm:text-[18px] italic">{data?.data?.products?.length} Results</p>
              </div>}
              <div className="flex w-full items-center gap-3 md:gap-6 justify-end">
                {/* <div className="flex gap-5 items-center">
                  <div 
                  className={`flex gap-2 items-center text-[20px] py-3 px-2 cursor-pointer ${itemsPosition==='grid'&& 'bg-slate-200'} rounded-md`} 
                  onClick={() => setItemsPosition("grid")}
                  >
                  <Grid /> Grid
                  </div>
                  <div 
                  className={`flex gap-2 items-center text-[20px] py-3 px-2 cursor-pointer ${itemsPosition==='list'&& 'bg-slate-200'} rounded-md`}
                    onClick={() => setItemsPosition("list")}
                  ><List /> List</div>
                </div> */}
                <button className="flex gap-3 md:hidden items-center font-medium md:text-[20px]"> <Filter size={25}/> Filter</button>
                <hr className="h-[40px] md:hidden w-[2px] bg-black"/>
                <button
                  className="flex  items-center gap-1 md:bg-[#ECEFF1] py-2 md:text-[20px] md:px-4 rounded-md relative"
                  onClick={() => setSortingIsOpen(!sortingIsOpen)}
                >
                  <SortDescIcon /> Sort by
                </button>
                <div className="absolute top-16 right-0 z-10">
                  {sortingIsOpen && (
                    <div className="bg-white flex flex-col border border-black rounded-sm shadow-md ">
                      {sorting.map((sort) => (
                        <div
                          key={sort.id}
                          className="flex duration-100  gap-2 p-3 items-center cursor-pointer hover:bg-slate-300 w-full"
                          onClick={() => handleSort(sort)}
                        >
                          <div className="">
                            <p>{sort.name}</p>
                        </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2  sm:flex sm:justify-start md:justify-center  sm:flex-wrap gap-4 sm:gap-10 md:gap-4 ">
              {isLoading?"...loading": (data?.data?.products?.map((product) => {
                return(
                <ProductCard key={product.id} {...product} />
                )
              }) 
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
