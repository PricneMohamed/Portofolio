import Image from "next/image";
import React from "react";
import Contact from "../__components/Contact/Contact";
export const metadata = {
  title: "Contact",
  description: "Welcome in Contact Section",
};
export default function contact() {
  return (
    <div className="contact">
        <Contact />
    </div>
  );
}
