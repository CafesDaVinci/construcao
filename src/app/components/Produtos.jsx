import Image from "next/image";
import graos from "../../../public/graos.jpg";
import { motion } from "framer-motion";
import CardCafe from "./CardCafe";

export default function Produtos() {
  return (
    <div>
      <div className=" mt-[450px] z-20 relative bg-primary">
        <Image src={graos} alt="fundo cafeteria " className="md:h-80 h-40" />
        <div className=" w-full top-5 flex flex-col justify-center items-center absolute ">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-4xl md:text-6xl text-secondary font-bebas pt-2"
          >
            Nossa
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-5xl md:text-[200px] md:-mt-5 -mb-14 uppercase font-bold tracking-widest font-bebas md:py-5"
          >
            Loja
          </motion.h2>
        </div>
        <div className="w-screen flex justify-center items-center">
          <div className="p-16 flex flex-wrap justify-center items-center md:w-[1170px]">
            {/*   <CardCafe foto={pacote} titulo="Café" preco="90,00" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
