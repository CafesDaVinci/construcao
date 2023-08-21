import Image from "next/image";
import { motion } from "framer-motion";

export default function CardCafe({ foto, titulo, preco }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-72 h-[454px] md:mr-8 mb-8 group flex flex-col justify-center items-center "
      >
        <Image src={foto} alt={titulo} className="w-72" />
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold font-bebas mt-10">{titulo}</h2>
          <p className="text-lg">R${preco}</p>
          <button className="bg-text text-primary py-4 px-8 font-bebas mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
            Adicioar ao Carrinho
          </button>
        </div>
      </motion.div>
    </div>
  );
}
