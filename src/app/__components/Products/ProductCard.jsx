"use client";
import { produceFetch } from "@/app/rtk/ProductSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { FiShoppingCart } from "react-icons/fi";
import { addCart } from "@/app/rtk/cartSlice";
import { Bounce, ToastContainer, toast } from "react-toastify";

export default function ProductCard() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(produceFetch());
  }, []);
  const productDetails = product.products;
  if (productDetails) {
    return (
      <div className="flex justify-evenly flex-wrap gap-10 m-10">
        {productDetails?.map((ele) => {
          return (
            <div
              className="food h-[500px] bg-gray-100 
                  shadow-lg
                  hover:shadow-xl
                  hover:border-[0.4px] border-sky-600 duration-75
                  hover:cursor-pointer
                  rounded-md lg:w-[350px] md:w-[350px] sm:w-[400px] w-[400px] 
                   flex justify-center flex-col items-center p-3"
              key={ele.id}
            >
              <Link href={`/product/${ele.id}`}>
                <img
                  src={ele?.images[0]}
                  className="rounded-t-md h-[180px] m-auto overflow-hidden "
                  alt={ele.title}
                />
                <div className="description">
                  <h1 className="p-4 font-bold text-xl tracking-[3px] ">
                    {ele?.title}
                  </h1>
                  <p className="text-lg px-6 line-clamp-2">
                    {ele?.description}
                  </p>
                </div>
                <h3 className="font-bold text-2xl m-3">${ele?.price}</h3>
              </Link>
              <button
                onClick={() => {
                  dispatch(addCart(ele));
                  toast.success(`${ele.title} has been added to the cart`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    });                }}
                className="bg-sky-600 flex justify-center items-center
                      px-6 gap-2
                      py-3 tracking-wider hover:bg-sky-700 duration-100
                      rounded-md font-bold text-white m-7"
              >
                <FiShoppingCart className="text-xxl" /> Add To Cart 

              </button>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center w-[100%]">
        <Loader />
      </div>
    );
  }
}
