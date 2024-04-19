"use client";
import "./style/Homepage.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function HomePage() {
  const h1variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const spanvariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const h2variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const text = "I'M MOHAMED HANAFI.";
  const text2 = "FRONT END DEVELOPER.";
  return (
    <div
      className="HomePage h-[100vh] flex lg:justify-between md:justify-center md:flex-col lg:flex-row sm:justify-center sm:items-center sm:flex-col
    md:items-center
    text-white flex-wrap"
    >
      <motion.div
        className="imagediv m-auto"
        initial={{ x: -1200, opacity: 0.3 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <Image
          src={require("./img/WhatsApp Image 2023-10-12 at 20.44.24_3a53d47f.jpg")}
          className="rounded-[50%] lg:h-[400px] m-20
        lg:w-[400px] z-50 md:w-[300px] md:h-[300px] sm:w-[300px] sm:h-[300px] h-[250px] w-[250px] flex-col
        object-cover m-auto"
          width={500}
          height={500}
        />
      </motion.div>
      <div
        className={`
            lg:absolute -z-40 lg:top-0 bg-[#fbb400]
        lg:h-[100vh] mt-20 rounded-r-full rounded-b-none 
        lg:w-[300px] hidden lg:block bdesign
            `}
      ></div>
      <div
        className="text
        text-center
        p-5 flex justify-center gap-10 items-center flex-col lg:flex-1 mr-4
            "
      >
        <motion.h1
          variants={h1variants}
          initial="hidden"
          animate="visible"
          className="lg:text-5xl md:text-4xl
                sm:text-3xl
                text-2xl
                "
        >
          {text.split("").map((ele, index) => {
            return (
              <motion.span variants={spanvariants} key={index}>
                {ele}
              </motion.span>
            );
          })}
        </motion.h1>
        <motion.h2
          variants={h2variants}
          initial="hidden"
          animate="visible"
          className="lg:text-4xl md:text-3xl
                sm:text-2xl
                text-xxl text-[#ffb400]"
        >
          {text2.split("").map((ele, index) => {
            return (
              <motion.span variants={spanvariants} key={index}>
                {ele}
              </motion.span>
            );
          })}
        </motion.h2>
        <h3 className="text-[20px] lg:w-[600px] sm:w-[100%]">
          I am an Egyptian front-end developer. I'm 19 years old. I study At
          Alexandria Advanced Military Technical School in Alexandria. Don't
          forget to see more of my work.
        </h3>
        <Link
          className="group relative inline-flex items-center overflow-hidden rounded bg-[#ffb400] px-8 py-3 text-white focus:outline-none focus:ring active:bg-[#ffb300dd]"
          href="/projects"
        >
          <span className="absolute -end-full transition-all group-hover:end-4">
            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span className="text-sm font-medium transition-all group-hover:me-4">
            {" "}
            My Project{" "}
          </span>
        </Link>
      </div>
    </div>
  );
}
