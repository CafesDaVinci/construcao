"use client";
import Image from "next/image";
import cafe from "../../public/cafebg.jpg";
import logoCafeNome from "../../public/logoCafeNome.png";
import graos from "../../public/graos-de-cafe.jpg";
import desde from "../../public/1930.png";
import { motion } from "framer-motion";
import Paixao from "./components/Paixao";
import Produtos from "./components/Produtos";
export default function Home() {
  return (
    <div>
      <div className="h-[420px] md:h-screen text-text">
      <div className="h-full w-full -z-10 absolute top-0 bg-black/20"/>
        <Image
          src={cafe}
          alt="café"
          className="hidden md:flex w-screen h-[500px] md:h-screen absolute -z-20 top-0"
        />
        
        <Image
          src={graos}
          alt="café"
          className=" md:hidden w-screen h-[545px] md:h-screen absolute top-0 -z-20"
        />
        <div className=" pt-20 md:pt-0 md:h-full flex flex-col justify-center items-center drop-shadow-dark1 md:mt-10">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className=" text-4xl md:text-6xl text-secondary font-dancing"
          >
            O Poder do
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image src={logoCafeNome} alt="logo da Cafeteria da Vinci"
              className="w-64 md:w-96"
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-primary text-xl uppercase font-bebas"
          >
            <Image src={desde} alt="desde 1930" className="w-52 md:w-[300px]" />
          </motion.p>
        </div>
      </div>
      <Paixao />
      <Produtos />
    </div>
  );
}
