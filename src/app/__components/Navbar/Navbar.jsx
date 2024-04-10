"use client"
import Image from 'next/image';
import Link from 'next/link'
import { FaOpencart } from "react-icons/fa";
import { useSelector } from 'react-redux';

export default function Navbar() {
  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Products', href: '/product', current: false },
    { name: 'Cart', href: '/cart', current: false },
    { name: 'Connect', href: 'https://portfolio-eight-mu-24.vercel.app/', current: false },
  ]
  const cart = useSelector(state=>state.cart)
  let turn = 0; 
  return (
<header className="sticky h-16 top-0 mt-1 z-50 backdrop-blur-md">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <Link  className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
      <Image src={require("../img/1.png")} width={200} height={200}
       className='mt-2 w-[300px]'
      />
        </Link >
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            {navigation.map(ele=>{
              return(
                <Link href={ele.href} key={ele.id} className='text-gray-500 transition hover:text-gray-500/75'>
                  {ele.name}
                </Link>
              )
            })}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
              <span className='flex items-center'>
      <FaOpencart className='text-3xl mr-5 ml-4' />
              {cart.length}
              </span>
        <div className="sm:flex sm:gap-4">
          <Link 
            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="#"
          >
            Login
          </Link >

          <div className="hidden sm:flex">
            <Link 
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
              href="#"
            >
              Register
            </Link >
          </div>
        </div>

        <div className="block md:hidden">
          <button
          onClick={
            ()=>{
              document.querySelector(".menu").style.transition="1s"

              if(turn === 0){
                document.querySelector(".menu").style.transform="translate(0px)";
                turn =1
              }else{
                document.querySelector(".menu").style.transform="translate(-1300px)";
                turn = 0
              }


            }
          }
          className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Menu */}
  <div className="flex h-screen z-50 menu translate-x-[-1300px] lg:hidden md:hidden  flex-col justify-between border-e bg-white">
  <div className="px-4 py-6">
    <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
      <Image  src={require("../img/1.png")} width={200} height={200} />
    </span>

    <ul className="mt-6 space-y-1 flex flex-col gap-6">
            {navigation.map(ele=>{
              return(
                <Link
                onClick={
                  ()=>{
                    document.querySelector(".menu").style.transform="translate(-1300px)"
                  }
                }
                href={ele.href} className='block rounded-lg bg-gray-100 hover:bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700' key={ele.id}>
                  {ele.name}
                </Link>
              )
            })}
    </ul>
  </div>

  <div className="sticky p-7 inset-x-0 bottom-0 border-t border-gray-100">
      <div>
            <h1 className='text-2xl font-bold'>Thank You For Visted Our Shop</h1>
      </div>
  </div>
</div>
</header>  )
}
