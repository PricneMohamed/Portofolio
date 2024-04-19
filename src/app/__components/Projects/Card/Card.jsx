"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Card(props) {
  const founded = () => {
    if (props.languageTwo) {
      return (
        <span className="blackspace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
          {props.languageTwo}
        </span>
      );
    }
  };
  return (
    <article className="hover:animate-background lg:w-[400px]
    md:w-[350px]
    sm:w-[300px]
    w-[300px]
    h-fit cursor-pointer  rounded-xl bg-gradient-to-r from-green-300 via-[#ffb400] to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div className="rounded-[10px] h-[500px] bg-black p-4 !pt-20 sm:p-6">
        <Link href={props.link}>
          <Image
            className="m-auto hover:scale-110 duration-200 hover:grayscale"
            src={props.image}
            width={400}
            height={400}
            alt="My Project"
          />
        </Link>
        <time
          datetime={props.date}
          className="block mt-10 text-xs text-gray-500"
        >
          {" "}
          {props.date}{" "}
        </time>

        <Link href={props.link}>
          <h3 className="mt-0.5   text-lg font-medium text-gray-300">
            {props.text}
          </h3>
        </Link>

        <div className="mt-4 flex flex-wrap gap-1">
          <span className="blackspace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
            {props.languageOne}
          </span>
          {founded()}
        </div>
      </div>
    </article>
  );
}
