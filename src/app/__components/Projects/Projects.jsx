"use client";
import React from "react";
import Card from "./Card/Card";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="Projects flex flex-col items-center">
      <h1 className="mt-20 text-5xl font-bold tracking-[5px] p-4 ">
        My Project
      </h1>
      {/* <hr className='bg-[#ffb400] w-[400px] h-[3px]'/> */}
      <hr className="lg:w-[400px]
      md:w-[400px] sm:w-[300px]
      w-[250px]
      text-[#ffb400] bg-[#ffb400] p-[2px] border-none" />
      <motion.div
        initial={{ y: 1200 }}
        animate={{ y: 0 }}
        className="w-[100%] my-20 flex flex-wrap gap-10 justify-center
        items-center
        "
      >
        <Card
          date="10 Apr, 2024"
          image={require("./image/wallpaperflare.com_wallpaper (1).jpg")}
          languageOne="React"
          languageTwo="Next js"
          text="An online store ready to receive your order    "
          link="https://product-store-nine.vercel.app/"
        />
        <Card
          date="Jan 15, 2024"
          image={require("./image/wallpaperflare.com_wallpaper (2).jpg")}
          languageOne="python"
          languageTwo="Web Scriping"
          text="Do you want to know the results of the matches and add them to Link db file?"
          link="https://github.com/PricneMohamed/Yalla-Kora.git"
        />
        <Card
          date="10 Mar, 2024"
          image={require("./image/wallpaperflare.com_wallpaper (3).jpg")}
          languageOne="React"
          languageTwo="Tailwind"
          text="Do you want to know the prayer times, so let's go to Link Muslim project?
    "
          link="https://muslim-app-nine.vercel.app/"
        />
        <Card
          date="Dec 14, 2023"
          image={require("./image/wallpaperflare.com_wallpaper (4).jpg")}
          languageOne="python"
          text="Do you want to know Link person’s data from the national ID number? Welcome to my project.
    "
          link="https://github.com/PricneMohamed/Narional_id.git"
        />
        <Card
          date="Jan 28, 2024"
          image={require("./image/wallpaperflare.com_wallpaper (5).jpg")}
          languageOne="React"
          languageTwo="Tailwind"
          text="Do you want to check if the user is online or not? Let's try this.
    "
          link="https://online-or-offline-zeta.vercel.app/"
        />
        <Card
          date="22 Dec, 2023"
          image={require("./image/wallpaperflare.com_wallpaper (6).jpg")}
          languageOne="javascript"
          languageTwo="Tailwind"
          text="Do you want to have some fun and spend some time playing Link game with your friend, then welcome to the x o game?
    "
          link="https://pricnemohamed.github.io/-X-O/"
        />
        <Card
          date="31 Jan, 2024"
          image={require("./image/wallpaperflare.com_wallpaper (7).jpg")}
          languageOne="python"
          text="Do you want to read Link specific file in csv format, then welcome to my program?
    "
          link="https://github.com/PricneMohamed/readCsv.git"
        />
        <Card
          date="Dec 17, 2023"
          image={require("./image/wallpaperflare.com_wallpaper (8).jpg")}
          languageOne="python"
          text="Do you want to generate Password of any length? Welcome to my project in Python.
    "
          link="https://github.com/PricneMohamed/Create_password.git"
        />
        <Card
          date="Dec 18, 2023"
          image={require("./image/wallpaperflare.com_wallpaper (9).jpg")}
          languageOne="python"
          text="Do you want any number of fake data then welcome to my Python project that you can store?"
          link="https://github.com/PricneMohamed/Fake_data.git"
        />
        <Card
          date="Dec 9, 2023"
          image={require("./image/wallpaperflare.com_wallpaper.jpg")}
          languageOne="python"
          text="Do you want to measure your internet download and upload speed? So welcome to my project.
    "
          link="https://github.com/PricneMohamed/Speed_Test.git"
        />
      </motion.div>
      <Link
        className="group relative my-10 inline-block text-sm font-medium text-[#ffb400] focus:outline-none focus:ring active:text-red-500"
        href="https://github.com/PricneMohamed"
      >
        <span className="absolute inset-0 border border-current"></span>
        <span className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
          More
        </span>
      </Link>
    </div>
  );
}
