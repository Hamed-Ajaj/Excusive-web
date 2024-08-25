import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { ReduxProvider } from "./global-redux/Provider";
import { AuthProvider } from "./context/authContext";
import { UseQueryProvider } from "@/lib/UseQueryProvider";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
export const metadata = {
  title: "Exclusive Store",
  description: "E-commerce store for all your needs",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
          <UseQueryProvider>
            <AuthProvider>
              <ReduxProvider>
                  <Header />
                  {children}
                  <ReactQueryDevtools />
                  <Footer />
              </ReduxProvider>
            </AuthProvider>
          </UseQueryProvider>
      </body>
    </html>
  );
}
