"use client"

import { removeCart } from "@/app/rtk/cartSlice";
import { useDispatch, useSelector } from "react-redux"
import { Bounce, toast } from "react-toastify";

export default function Tables() {
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart)
    
    const total = cart.reduce((acc,input)=>{
      acc += input.price* input.quantity
    return acc;
    },0)
    return (
    <>
        <h1 className='text-4xl font-bold p-7 mr-10'
        
        style={{direction:"rtl"}}>Your Cart</h1>
      <h1 className="text-4xl font-bold p-4 m-7">
        Total: $<span className="text-rose-600">{total}</span>
      </h1>
    <div className="overflow-x-auto rounded-lg border mb-20 border-gray-200">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">description</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">quantity</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">option</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
        {cart.map(ele=>{
            return(
                <tr className='text-center p-3' key={ele.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{ele.title}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{ele.description}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{ele.quantity}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">${ele.price}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <button
                onClick={
                    ()=>{
                        dispatch(removeCart(ele))
                    }
                }
  className="group relative inline-block text-sm font-medium rounded-md text-white focus:outline-none focus:ring"
>
  <span className="absolute inset-0 border border-red-600 rounded-md group-active:border-red-500"></span>
  <button
  onClick={
    ()=>{
      toast.success(`Deleted successfully`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
  }
    className="block border border-red-600 bg-red-600 px-5 rounded-md py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
  >
    Delete
  </button>
</button>
<button
  className="group relative ml-10 inline-block text-sm font-medium text-white focus:outline-none focus:ring"
  href="#"
>
  <span className="absolute inset-0 rounded-md border  border-green-600 group-active:border-green-500"></span>
  <button
  onClick={
    ()=>{
      toast.success(`Confirmed Successfully`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    }
  }
    className="block border border-green-600 rounded-md bg-green-600 px-4 py-3 transition-transform active:border-green-500 active:bg-green-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
  >
confirmation
  </button>
</button>


                </td>
              </tr>
            )
        })}
    </tbody>
  </table>
</div>
    </>
  )
}
