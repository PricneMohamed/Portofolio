"use client"
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Welcome , Sir.
            <strong className="font-extrabold text-sky-700 sm:block">
              {" "}
              You are now in a section of the cart .{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            You can now see the products you have added, confirm them, and
            modify them
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
            onClick={
              ()=>{
                window.scrollTo({
                  top:"2000",
                  behavior:"smooth"
                })
              }
            }
              className="block w-full rounded bg-sky-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-700 focus:outline-none focus:ring active:bg-sky-500 sm:w-auto"
            >
              Show My Cart
            </button>

            <Link
              className="block w-full rounded px-12 py-3 text-sm font-medium text-sky-600 shadow hover:text-sky-700 focus:outline-none focus:ring active:text-sky-500 sm:w-auto"
              href="/product"
            >
              Go Shopping Now

            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
