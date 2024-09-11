import SideProfileNav from "@/components/SideProfileNav";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Exclusive Store | profile",
    description: "manage your profile settings",
  };

  export default function Layout({ children }) {
    return (
      <div className="flex gap-10 relative">
        <div className="w-auto absolute h-full  lg:block lg:static px-4 md:px-10 py-10">
            <SideProfileNav />
        </div>
        <div className="w-full lg:w-[80%] p-5 lg:p-0">
            {children}
        </div>
      </div>
    );
  }