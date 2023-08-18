"use client"
import Image from "next/image";
import cafe from "../../public/cafebg.jpg"
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div>
      <Image src={cafe} alt="café" className="h-full absolute top-0 -z-10" />
      <motion.div
       
        className="h-full flex flex-col justify-center items-center drop-shadow-dark1"
      >
        <p className=" text-4xl text-secondary">
          O Poder do
        </p>
        <h2 className="text-white text-9xl uppercase font-bold">Café</h2>
        <p className="text-white uppercase">&#42; Desde 1930 &#42;</p>
      </motion.div>
    </div>
  )
}
