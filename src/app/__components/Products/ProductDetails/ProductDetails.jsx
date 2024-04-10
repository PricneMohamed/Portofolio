"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { produceFetch } from "@/app/rtk/ProductSlice";
import { addCart } from "@/app/rtk/cartSlice";
import { Bounce, toast } from "react-toastify";
 
export default function ProductDetails(props) {
  const [product, setProduct] = useState({});
  useEffect(() => {
    productDetailsFetching();
  }, []);
  const productDetailsFetching = async () => {
    const res = await fetch(`https://dummyjson.com/products/${props.prams}`);    
    const data = await res.json();
    setProduct(data)
  };
  const dispatch = useDispatch();
  const products = useSelector(state=>state.product);
  useEffect(()=>{
    dispatch(produceFetch())
  },[])
if(product){
  return (
    <>
        <div className="ProductDetails">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    {product.title}
                  </h2>

                  <p className="mt-4 text-gray-500">
                  {product.description}
                  </p>
                </header>

                <button
                onClick={
                  ()=>{
                    dispatch(addCart(product))
                    toast.success(`${product.title} is in the cart now`, {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                      transition: Bounce,
                    });
                  }
                }
                  className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <Link href="#" className="group block">
                  {product?.images && (
              <img
                src={product.images[0]}
                alt=""
                className="aspect-square w-full rounded object-cover"
              />
            )}

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        {product.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">${product.price}</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="#" className="group block">
                  {product.images && (
              <img
                src={product.images[1]}
                alt=""
                className="aspect-square w-full rounded object-cover"
              />
            )}

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        {product.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">${product.price}</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
                    <h1 className="text-3xl my-10 font-bold px-20" style={{direction:"rtl"}}>Other things</h1>
                    <div className="flex justify-evenly flex-wrap gap-10 m-10">
            {products?.products?.map(ele=>{
              if(ele.category === product.category){
                return(
                  <div className="product h-[500px] bg-gray-100 
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
                className="rounded-t-md h-[200px] m-auto"
                  alt=""
              />
              <div className="description">
                  <h1 className="p-4 font-bold text-xl tracking-[3px] ">
                  {ele?.title}
                  </h1>
                  <p className="text-lg px-6 line-clamp-2">
                          {ele?.description }
                  </p>
              </div>
              <h3 className="font-bold text-2xl m-3">
                  ${ele?.price }
              </h3>
              </Link>
              <button 
              onClick={
                ()=>{
                  dispatch(addCart(ele))
                  toast.success(`${ele.title} is in the cart now`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                  });
                }
              }
              className="bg-sky-600 flex justify-center items-center
                      px-6 gap-2
                      py-3 tracking-wider hover:bg-sky-700 duration-100
                      rounded-md font-bold text-white m-7">Add To Cart</button>
                  </div>
                )
              }
            })}
        </div>
    </>
  );
}else{
  return <Loader />
}
}
