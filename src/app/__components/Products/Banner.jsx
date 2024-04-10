"use client";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Welcome to the products section
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Welcome, sir, to the products section. Here you will find all the
            products you are thinking of. We care about you and your time. Do
            not forget to contact us. We are waiting for you.
          </p>

          <div className="mt-4 md:mt-8">
            <button
              onClick={() => {
                window.scrollTo({
                  top: "1000",
                  behavior: "smooth",
                });
              }}
              className="inline-block rounded capitalize bg-sky-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-sky-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Go shopping now
            </button>
          </div>
        </div>
      </div>

      <Image
        alt=""
        src={require("./img/wallpaperflare.com_wallpaper (1).jpg")}
        className="h-56 w-full object-cover sm:h-full"
      />
    </section>
  );
}
