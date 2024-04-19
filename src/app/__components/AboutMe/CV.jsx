"use client"
import Image from 'next/image'
export default function CV() {
  return (
    <div className='CV m-20 flex justify-center flex-col items-center'>
        <Image className='cv' src={require("./CV.jpg")}
        height={400}
        width={400}
        />
<button className="group downloadCv mt-20 relative inline-block focus:outline-none focus:ring"
        onClick={() => {
          const image = document.querySelector(".cv");
          const urlcsv = image.src;
          let aelement = document.createElement("a");
          aelement.href = urlcsv;
          aelement.download = "cv.png";
          aelement.click();
        }}
        >
  <span
    className="absolute inset-0 translate-x-0 translate-y-0 bg-[#ffb400] transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
  ></span>

  <span
    className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
  >
    Download
  </span>
</button>
    </div>
  )
}
