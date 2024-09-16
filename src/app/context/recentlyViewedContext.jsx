"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import Loader from "@/components/Loader";

const RecentlyViewedContext = createContext();

export const RecentlyViewedProvider = ({ children }) => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [loading, setLoading] = useState(null);

  const addRecentlyViewed = async ({
    id,
    productId,
    title,
    thumbnail,
    priceAfterDisc,
    discountPercentage,
    images,
    rating,
    price,
    stock,
    tags,
    brand,
    availabilityStatus,
    reviews
  }) => {
    if (recentlyViewed.some((item) => item.id === id)) {
      return;
    } else {
      try {
        setLoading(true);
        await setDoc(
          doc(db, "users", auth?.currentUser?.uid, "recentlyViewed", String(id)),
          {
            id: id,
            productId:productId,
            title: title,
            thumbnail: thumbnail,
            priceAfterDisc: price - (price * discountPercentage/100),
            images: images,
            rating: rating,
            price: price,
            stock: stock,
            tags: tags,
            brand: brand,
            availabilityStatus: availabilityStatus,
            reviews: reviews
          }
        );
        setRecentlyViewed([
          ...recentlyViewed,
          {
            id: id,
            productId:productId,
            title: title,
            thumbnail: thumbnail,
            priceAfterDisc: price - (price * discountPercentage/100),
            images: images,
            rating: rating,
            price: price,
            stock: stock,
            tags: tags,
            brand: brand,
            availabilityStatus: availabilityStatus,
            reviews: reviews
          },
        ]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  const initializeAddresses = async (user) => {
    if (user) {
      try {
        const recentlyViewedDoc = await getDocs(
          collection(db, "users", auth?.currentUser?.uid, "recentlyViewed")
        );

        setRecentlyViewed(recentlyViewedDoc.docs.map((doc) => doc.data()));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setRecentlyViewed([]);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeAddresses);
    return unsubscribe;
  }, []);
  const values = {
    recentlyViewed,
    loading,
    addRecentlyViewed
  };

    return (
        <RecentlyViewedContext.Provider value={values}>
            {children}
        </RecentlyViewedContext.Provider>
    );
};

export const useRecentlyViewed = () => {
  return useContext(RecentlyViewedContext);
};