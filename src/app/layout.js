import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { ReduxProvider } from "./global-redux/Provider";
import { AuthProvider } from "./context/authContext";
import { UseQueryProvider } from "@/lib/UseQueryProvider";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ChakraProvider } from '@chakra-ui/react'
import { CartProvider } from "./context/cartContext";
import { AddressesProvider } from "./context/addressesContext";
import { auth } from "./firebase/firebase";
export const metadata = {
  title: "Exclusive Store",
  description: "E-commerce store for all your needs",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-full overflow-x-hidden`}>
        <ChakraProvider>
          <UseQueryProvider>
            <AuthProvider>
              <CartProvider>
                <AddressesProvider>
                  <ReduxProvider>
                      <Header />
                      {children}
                      <Footer />
                  </ReduxProvider>
                </AddressesProvider>
              </CartProvider>
            </AuthProvider>
          </UseQueryProvider>
          </ChakraProvider>
      </body>
    </html>
  );
}
