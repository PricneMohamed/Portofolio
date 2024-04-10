import Link from 'next/link'
import React from 'react'

export default function Banner() {
  return (
<section
  className="relative bg-[url(https://c0.wallpaperflare.com/preview/807/935/664/apparel-black-and-white-boutique-close-up.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Let us find your

        <strong className="block font-extrabold text-sky-700 capitalize"> favorite products
. </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
      Welcome, sir. Here you will find all the products you need. We are waiting for you to contact us. Do not hesitate

      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link
          href="/product"
          className="block w-full rounded bg-sky-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-700 focus:outline-none focus:ring active:bg-sky-500 sm:w-auto"
        >
          Go Shopping Now

        </Link>

        <Link
          href="/cart"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-sky-600 shadow hover:text-sky-700 focus:outline-none focus:ring active:text-sky-500 sm:w-auto"
        >
          Go To Cart
        </Link>
      </div>
    </div>
  </div>
</section>  )
}
