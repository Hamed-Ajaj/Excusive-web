import SideProfileNav from "@/components/SideProfileNav";
export const metadata = {
    title: "Exclusive Store",
    description: "manage your profile settings",
  };

  export default function Layout({ children }) {
    return (

        <div className="flex flex-col lg:flex-row lg:gap-10 relative">
          <div className="w-auto  h-auto lg:h-full  lg:block lg:static lg:px-4 md:px-10 py-2 lg:py-10 lg:border-r">
              <SideProfileNav />
          </div>
          <div className="w-full lg:w-[80%] p-2 lg:p-0">
              {children}
          </div>
        </div>

    );
  }