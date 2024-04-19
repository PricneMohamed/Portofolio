import Image from "next/image";
import Link from "next/link";

export default function Footer() {
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
    <footer className="bg-gray-900">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <button
            className="inline-block rounded-full bg-[#ffb400] p-2 text-white shadow transition hover:bg-[#ffb400] sm:p-3 lg:p-4"
        onClick={
          ()=>{
            window.scrollTo({
              top:0,
              behavior:"smooth"
            })
          }
        }
>
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-[#ffb400] lg:justify-start">
              <Image
                src={require("../img/nikola tesla.png")}
                className="rounded-lg"
                width={66}
                height={100}
                alt="Nikola tesla"
              />
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              Hello , My Name is Mohamed, I&apos;m front end developer.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
          {linkText.map(ele=>{
            return(
              <Link href={ele.href} key={ele.id}>
                {ele.name}
              </Link>
            )
          })}
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
