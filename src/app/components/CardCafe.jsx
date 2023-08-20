import Image from "next/image";
import { motion } from "framer-motion";

export default function CardCafe({ foto, titulo, preco }) {
  return (
    <div>
      <div className=" w-72 h-[454px] mr-8 mb-8 group ">
        <Image src={foto} alt={titulo} className="w-72" />
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold font-bebas mt-10">{titulo}</h2>
          <p className="text-lg">R${preco}</p>
          <button className="bg-text text-primary py-4 px-8 font-bebas mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
            Adicioar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
