import Link from "next/link";



const NotFound = () => {
  return (
    <section className="min-h-screen px-5 py-20 md:px-20">
      <div className="md:p-10 gap-10 flex flex-col justify-center items-center">
            <div className="text-center">
                <h1 className="text-[100px] font-medium">404 Not Found</h1>
                <p className="">Your visited page not found. You may go home page.</p>
            </div>
            <div>
                <Link href="/">
                    <button className="py-4 px-12 rounded-md bg-[#db4444] text-white">
                            Back to Home page
                    </button>
                </Link>
            </div>
      </div>
    </section>
  );
};

export default NotFound;
