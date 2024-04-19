"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const param = usePathname().split("/");
  console.log();
  let turn = 0;
  const linkText = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Project",
      href: "/projects",
    },
    {
      name: "About Me ",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <header className="bg-gray-800 sticky top-0 mt-1 z-50 h-[60px]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-[#ffb400]" href="/">
              <span className="sr-only">Home</span>
              <Image
                src={require("../img/nikola tesla.png")}
                width={66}
                height={100}
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {linkText.map((ele) => {
                  return (
                    <Link
                      className="text-white transition hover:text-gray-200"
                      key={ele.id}
                      href={ele.href}
                    >
                      {ele.name}
                    </Link>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="block md:hidden">
              <button
                onClick={() => {
                  if (turn === 0) {
                    document.querySelector(".navbarSide").style.transform =
                      "translate(0px)";
                    document.querySelector(".navbarSide").style.transition =
                      "0.6s";
                    turn = 1;
                  } else if (turn === 1) {
                    document.querySelector(".navbarSide").style.transform =
                      "translate(-1200px)";
                    document.querySelector(".navbarSide").style.transition =
                      "0.6s";
                    turn = 0;
                  }
                }}
                className="rounded bg-black p-2 text-white transition hover:text-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-2 rounded-md h-screen translate-x-[-1200px] w-[300px] flex-col justify-between border-e bg-[#ffb400] lg:hidden
      md:hidden sm:block block navbarSide
      sm:border-r-black"
      >
        {/* ################ */}
        <div className="px-4 py-6">
          <Link className="block text-[#ffb400]" href="/">
            <span className="sr-only">Home</span>
            <Image
              src={require("../img/nikola tesla.png")}
              width={66}
              height={100}
            />
          </Link>

          <ul className="mt-6 space-y-1">
            <li className="flex flex-col mt-20 gap-10 p-3 font-[500]">
              {linkText.map((ele) => {
                return (
                  <Link
                    className={
                      ele.href.split("/")[1] === param[1]
                        ? "text-gray-100 font-bold"
                        : "text-black linking transition hover:text-gray-200"
                    }
                    onClick={() => {
                      document.querySelector(".navbarSide").style.transform =
                        "translate(-1200px)";
                    }}
                    key={ele.id}
                    href={ele.href}
                  >
                    {ele.name}
                  </Link>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
