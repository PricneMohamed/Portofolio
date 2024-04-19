"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";

export default function Hobbies() {
  const [scrollele, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        setScroll(true);
      }
    });
  });
  return (
    <motion.div
    initial={{y:1200,opacity:0}}
    animate={scrollele === true?{y:0,opacity:1}:null}
      className="Hobbies w-[100%] h-[100vh] flex justify-between mt-20 flex-wrap md:justify-center
    items-center
    "
    >
      <Image
        src={require("./image/WhatsApp Image 2024-04-17 at 08.09.39_7432011a.jpg")}
        height={500}
        width={500}
      />
      <h1
      className="lg:text-5xl
      md:text-5xl
      sm:text-4xl
      text-3xl
      flex-1 p-4 ml-10">
        Be an introvert, this is the secret of invention. Be alone, this is the
        way to generate ideas.
      </h1>
    </motion.div>
  );
}
