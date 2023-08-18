"use client"
import Image from "next/image";
import cafe from "../../public/cafebg.jpg"
import { motion } from "framer-motion"
import Paixao from "./components/Paixao";
export default function Home() {
  return (
    <div>
      <div>
        <div className=" w-full h-full absolute top-0 -z-10 bg-black/20"></div>
        <Image src={cafe} alt="café" className=" h-full absolute top-0 -z-20" />
        <motion.div
          
          className="h-full flex flex-col justify-center items-center drop-shadow-dark1"
        >
          <p className=" text-4xl text-secondary font-dancing">
            O Poder do
          </p>
          <h2 className="text-primary text-[200px] uppercase font-bold ">Café</h2>
          <p className="text-primary uppercase">&#42; Desde 1930 &#42;</p>
        </motion.div>
      </div>
      <Paixao/>
    </div>
  )
}
