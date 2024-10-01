"use client";
import { createContext, useContext, useEffect, useState } from "react";

import { auth, db } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useToast } from "@chakra-ui/react";
import Loader from "@/components/Loader";
import Link from "next/link";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [orders, setOrders] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const addToCart = async ({
    id,
    title,
    thumbnail,
    images,
    priceAfterDisc,
  }) => {
    try {
      setLoading(true);
      if (!auth.currentUser) {
        toast({
          title: "Please login to add to cart",
          description: <p>
            You need to login to add items to cart. If you don't have an account.
            <Link href="/sign-up">
              <button
                className="text-blue-500 hover:underline"
              >
                Sign up
              </button>
            </Link>
          </p>,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      if (cart.some((item) => item.id === id)) {
        const item = cart.find((item) => item.id === id);
        await updateDoc(
          doc(db, "users", auth?.currentUser?.uid, "cart", String(id)),
          {
            // id,
            // title,
            // priceAfterDisc,
            // thumbnail,
            // images,
            quantity: item.quantity + 1,
          }
        );
        setCart(
          cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      } else {
        await setDoc(
          doc(db, "users", auth?.currentUser?.uid, "cart", String(id)),
          {
            id,
            title,
            priceAfterDisc,
            thumbnail,
            images,
            quantity: 1,
          }
        );
        toast({
          title: "Added to cart",
          description: "Check your cart to view the item",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setCart([
          ...cart,
          {
            id,
            title,
            priceAfterDisc,
            thumbnail,
            images,
            quantity: 1,
          },
        ]);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const getCart = async () => {
    try {
      setLoading(true);
      const cartDoc = await getDocs(
        collection(db, "users", auth?.currentUser?.uid, "cart")
      );
      setCart(cartDoc.docs.map((doc) => doc.data()));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleRemoveItem = async (id) => {
    try {
      setLoading(true);
      await deleteDoc(
        doc(db, "users", auth?.currentUser?.uid, "cart", String(id))
      );
      toast({
        title: "Item removed",
        description: "Item has been removed from cart",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setCart(cart.filter((item) => item.id !== id));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const increaseQuantity = async (id) => {
    const item = cart.find((item) => item.id === id);
    await updateDoc(
      doc(db, "users", auth?.currentUser?.uid, "cart", String(id)),
      {
        quantity: item.quantity + 1,
      }
    );
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = async (id) => {
    const item = cart.find((item) => item.id === id);
    await updateDoc(
      doc(db, "users", auth?.currentUser?.uid, "cart", String(id)),
      {
        quantity: item.quantity - 1,
      }
    );
    if (item.quantity === 1) {
      return handleRemoveItem(id);
    }
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // !recently viewed functions

  const addRecentlyViewed = async (data) => {
    // console.log(data);
    // console.log(recentlyViewed);
    if (!auth.currentUser) {
      return;
    }
    if (
      recentlyViewed.some((item) => String(item.id) === String(data.productId))
    ) {
      return;
    } else {
      try {
        // setLoading(true);
        await setDoc(
          doc(
            db,
            "users",
            auth?.currentUser?.uid,
            "recentlyViewed",
            String(data.id)
          ),
          {
            id: data?.productId,
            productId: data?.id,
            title: data?.title,
            thumbnail: data?.thumbnail,
            discountPercentage: data?.discountPercentage,
            images: data?.images,
            rating: data?.rating,
            price: data?.price,
            stock: data?.stock,
            tags: data?.tags,
            availabilityStatus: data?.availabilityStatus,
            reviews: data?.reviews,
          }
        );
        setRecentlyViewed([
          ...recentlyViewed,
          {
            id: data?.productId,
            productId: data?.id,
            title: data?.title,
            thumbnail: data?.thumbnail,
            discountPercentage: data?.discountPercentage,
            images: data?.images,
            rating: data?.rating,
            price: data?.price,
            stock: data?.stock,
            tags: data?.tags,
            availabilityStatus: data?.availabilityStatus,
            reviews: data?.reviews,
          },
        ]);
        // setLoading(false);
      } catch (error) {
        console.log(error);
        // setLoading(false);
      }
    }
  };

  //   ! Addresses context functions

  const addAddress = async (data) => {
    try {
      setLoading(true);
      await setDoc(
        doc(db, "users", auth?.currentUser?.uid, "addresses", data.id),
        {
          id: data.id,
          firstName: data.data.fname,
          lastName: data.data.lname,
          address: data.data.address,
          phoneNumber: data.data.phoneNumber,
        }
      );
      toast({
        title: "Address added",
        description: "Address added successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setAddresses([
        ...addresses,
        {
          id: data.id,
          firstName: data.data.fname,
          lastName: data.data.lname,
          address: data.data.address,
          phoneNumber: data.data.phoneNumber,
        },
      ]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getAddresses = async () => {
    try {
      setLoading(true);
      const addressesDoc = await getDocs(
        collection(db, "users", auth?.currentUser?.uid, "addresses")
      );
      setAddresses(addressesDoc.docs.map((doc) => doc.data()));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getAddressById = (id) => {
    return addresses.find((address) => address.id === id);
  };

  const deleteAddress = async (id) => {
    try {
      setLoading(true);
      await deleteDoc(
        doc(db, "users", auth?.currentUser?.uid, "addresses", id)
      );
      toast({
        title: "Address deleted",
        description: "Address deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setAddresses(addresses.filter((address) => address.id !== id));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const editAddress = async (id, data) => {
    try {
      setLoading(true);
      await updateDoc(
        doc(db, "users", auth?.currentUser?.uid, "addresses", id),
        {
          firstName: data.fname,
          lastName: data.lname,
          address: data.address,
          phoneNumber: data.phoneNumber,
        }
      );
      toast({
        title: "Address updated",
        description: "Address updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setAddresses(
        addresses.map((address) =>
          address.id === id
            ? {
                ...address,
                firstName: data.fname,
                lastName: data.lname,
                address: data.address,
                phoneNumber: data.phoneNumber,
              }
            : address
        )
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //   ! Orders context functions
  const addOrder = async (orderData) => {
    try {
      setLoading(true);
      await setDoc(
        doc(db, "users", auth?.currentUser?.uid, "orders", orderData.id),
        {
          id: orderData.id,
          from: "Exclusive",
          to: orderData.to,
          status: orderData.status,
          items: orderData.items,
        }
      );
      toast({
        title: "Order placed",
        description: "Order placed successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setOrders([
        ...orders,
        {
          id: orderData.id,
          from: "Exclusive",
          to: orderData.to,
          status: orderData.status,
          items: orderData.items,
        },
      ]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const cancelOrder = async (id) => {
    try {
      setLoading(true);
      await updateDoc(doc(db, "users", auth?.currentUser?.uid, "orders", id), {
        status: "cancelled",
      });
      toast({
        title: "Order cancelled",
        description: "Order cancelled successfully",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      setOrders(
        orders.map((order) =>
          order.id === id ? { ...order, status: "cancelled" } : order
        )
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //   ! checkout functions

  const addItemToCheckout = async (data) => {
    try {
      setLoading(true);
      await addDoc(
        collection(db, "users", auth?.currentUser?.uid, "checkout"),
        data
      );
      setCheckoutItems([...checkoutItems, data]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  // ! initializer functions

  async function initializeCart(user) {
    if (user) {
      // Fetch cart from firestore
      setLoading(true);
      try {
        const cartDoc = await getDocs(
          collection(db, "users", auth?.currentUser?.uid, "cart")
        );
        setCart(cartDoc.docs.map((doc) => doc.data()));

        // ?Fetch recently viewed from firestore

        const recentlyViewedDoc = await getDocs(
          collection(db, "users", auth?.currentUser?.uid, "recentlyViewed")
        );
        setRecentlyViewed(recentlyViewedDoc.docs.map((doc) => doc.data()));

        // ?Fetch addresses from firestore

        const addressesDoc = await getDocs(
          collection(db, "users", auth?.currentUser?.uid, "addresses")
        );
        setAddresses(addressesDoc.docs.map((doc) => doc.data()));

        // ?Fetch orders from firestore

        const ordersDoc = await getDocs(
          collection(db, "users", auth?.currentUser?.uid, "orders")
        );
        setOrders(ordersDoc.docs.map((doc) => doc.data()));

        // ?Fetch checkout items from firestore

        const checkoutItemsDoc = await getDocs(
          collection(db, "users", auth?.currentUser?.uid, "checkout")
        );
        setCheckoutItems(checkoutItemsDoc.docs.map((doc) => doc.data()));
      } catch (error) {
        console.error(error);
      }
    } else {
      setCart([]);
      setRecentlyViewed([]);
      setAddresses([]);
      setOrders([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeCart);
    return unsubscribe;
  }, [auth.currentUser]);

  const values = {
    cart,
    loading,
    addToCart,
    getCart,
    handleRemoveItem,
    increaseQuantity,
    decreaseQuantity,
    addRecentlyViewed,
    recentlyViewed,
    addAddress,
    getAddressById,
    getAddresses,
    editAddress,
    deleteAddress,
    addresses,
    addOrder,
    cancelOrder,
    orders,
    addItemToCheckout,
    checkoutItems,
  };

  return (
    <CartContext.Provider value={values}>
      {loading ? <Loader /> : children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
