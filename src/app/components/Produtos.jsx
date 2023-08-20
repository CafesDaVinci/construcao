import Image from "next/image";
import graos from "../../../public/graos.jpg";
import pacote from "../../../public/pacote.jpg";
import { motion } from "framer-motion";
import CardCafe from "./CardCafe";

export default function Produtos() {
  return (
    <div>
      <div className=" mt-[450px] z-20 relative">
        <Image src={graos} alt="fundo cafeteria " className="absolute -z-10" />
        <div className="z-20 w-screen flex flex-col py-20 justify-center items-center">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className=" text-6xl text-secondary font-bebas"
          >
            Sua
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-[200px] -mt-5 -mb-14 uppercase font-bold tracking-widest font-bebas "
          >
            Loja
          </motion.h2>
        </div>
        <div className="w-screen flex justify-center items-center">
          <div className="p-16 flex flex-wrap justify-center items-center w-[1170px]">
            <CardCafe foto={pacote} titulo="Café" preco="90,00" />
            <CardCafe foto={pacote} titulo="Café" preco="90,00" />
            <CardCafe foto={pacote} titulo="Café" preco="90,00" />
            <CardCafe foto={pacote} titulo="Café" preco="90,00" />
            <CardCafe foto={pacote} titulo="Café" preco="90,00" />
            <CardCafe foto={pacote} titulo="Café" preco="90,00" />
            <CardCafe foto={pacote} titulo="Café" preco="90,00" />
            <CardCafe foto={pacote} titulo="Café" preco="90,00" />
            <CardCafe foto={pacote} titulo="Café" preco="90,00" />
          </div>
        </div>
      </div>
    </div>
  );
}