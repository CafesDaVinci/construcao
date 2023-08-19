"use client"
import Image from "next/image";
import cafe from "../../public/cafebg.jpg"
import { motion } from "framer-motion"
import Paixao from "./components/Paixao";
import Teste from "./components/teste";
export default function Home() {
  return (
    <div>
      <div className="h-screen text-text">
        <div className=" w-full h-full absolute top-0 -z-10 bg-black/20"></div>
        <Image src={cafe} alt="café" className=" h-full absolute top-0 -z-20" />
        <div
          className="h-full flex flex-col justify-center items-center drop-shadow-dark1"
        >
          <motion.p 
          initial={{ opacity: 0, y:100 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 0.5, delay:0.5 }}
          className=" text-6xl text-secondary font-dancing">
            O Poder do
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-[200px] -mt-5 -mb-14 uppercase font-bold ">
            Café
          </motion.h2>

          <motion.p 
          initial={{ opacity: 0, y:-100 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 0.5, delay:0.5 }}
          className="text-primary text-xl uppercase">
            &#42; Desde 1930 &#42;
            </motion.p>
        </div>
      </div>
      <Paixao />
    </div>
  )
}
