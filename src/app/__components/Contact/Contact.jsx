import Image from "next/image";
import Link from "next/link";
import React from "react";
import {motion} from "framer-motion"
export default function Contact() {
  return (
    <div className="contact flex justify-evenly items-center flex-wrap gap-10 h-[100vh] ">
      <Link href={"https://www.facebook.com/prince.ieee.802.11?mibextid=ZbWKwL"}>
        <Image
          src={require("./image/IMG-20240417-WA0065.jpg")}
          className="hover:scale-150
        hover:w-[100px]
        duration-150"
          width={100}
          height={100}
        />
      </Link>
      <Link href={"https://www.instagram.com/prince.ieee.802.11?igsh=bDhuZXcwZDh5aTQ0"}>
        <Image
          className="hover:scale-150
        hover:w-[100px]

        duration-150"
          src={require("./image/IMG-20240417-WA0066.jpg")}
          width={100}
          height={100}
        />
      </Link>
      <Link href={"https://wa.link/wz9358"}>
        <Image
          className="hover:scale-150
        hover:w-[100px]

        duration-150"
          src={require("./image/IMG-20240417-WA0067.jpg")}
          width={100}
          height={100}
        />
      </Link>
      <Link href={"https://github.com/PricneMohamed"}>
        <Image
          className="hover:scale-150
        hover:w-[100px]

        duration-150"
          src={require("./image/IMG-20240417-WA0068.jpg")}
          width={100}
          height={100}
        />
      </Link>
      <Link href={"princeyt8708@gmail.com"}>
        <Image
          className="hover:scale-150
        hover:w-[100px]

        duration-150"
          src={require("./image/IMG-20240417-WA0069.jpg")}
          width={100}
          height={100}
        />
      </Link>
    </div>
  );
}
