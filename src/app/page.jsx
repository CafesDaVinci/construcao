"use client";
import Image from "next/image";
import cafe from "../../public/cafebg.jpg";
import logoCafeNome from "../../public/logoCafeNome.png";
import desde from "../../public/1930.png";
import { motion } from "framer-motion";
import Paixao from "./components/Paixao";
import Produtos from "./components/Produtos";
export default function Home() {
  return (
    <div>
      <div className="h-screen text-text">
        <div className=" w-full h-full absolute top-0 -z-10 bg-black/20"></div>
        <Image
          src={cafe}
          alt="café"
          className=" h-screen absolute top-0 -z-20"
        />
        <div className="h-full flex flex-col justify-center items-center drop-shadow-dark1">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className=" text-6xl text-secondary font-dancing"
          >
            O Poder do
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-primary text-[200px] uppercase font-bold tracking-widest font-bebas "
          >
            <Image src={logoCafeNome} alt="logo da Cafeteria da Vinci"/>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-primary text-xl uppercase font-bebas"
          >
             <Image src={desde} width={300} alt="logo da Cafeteria da Vinci"/>
          </motion.p>
        </div>
      </div>
      <Paixao />
      <Produtos />
    </div>
  );
}
