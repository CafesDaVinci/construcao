import Image from "next/image";
import xicara from "../../../public/xicara.jpg";
import garotaTomandoCafe from "../../../public/jovem-comendo.jpg";
import bgcafe from "../../../public/bgcafe.jpg";
import { motion } from "framer-motion";

export default function Paixao() {
  return (
    <div className=" flex flex-col justify-center  items-center w-screen">
      <div className="w-screen">
        <Image
          src={bgcafe}
          className="w-screen h-[1040px] opacity-5 absolute -z-10"
        />
      </div>

      <div className="bg-secondary h-32 py-20 w-px mt-10" />
      <div className="w-full flex justify-center ml-[500px] mt-5 items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl w-[600px] flex justify-end items-end font-bebas"
        >
          UM CAFÉ GOURMET COMPARTILHADO COM UM AMIGO É FELICIDADE PROVADA E
          TEMPO BEM PASSADO.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-80 relative flex"
      >
        <Image
          src={xicara}
          alt="xicara de café"
          className="w-80 right-72 -top-48 absolute"
        />
      </motion.div>
      <div className="flex justify-center items-center w-full mr-[250px] my-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase text-8xl z-10 font-bebas"
        >
          <span className="text-primary">NOSSAS </span>PAIXÕES
        </motion.h2>
      </div>
      <div className="mt-36 mr-[550px]">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[450px] text-text/75 text-xl"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorum
          laudantium quisquam facere molestiae? Dicta sed illum explicabo ea,
          obcaecati quaerat ipsam eaque assumenda fuga totam dolorem minima
          aperiam voluptate. Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </motion.p>
        <div className="bg-secondary h-px w-44 my-5" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-dancing my-4">Assinatura da Empresa</p>
          <p>CEO & FOUNDER CRAFT COFFEE</p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[600px] relative -mt-96 ml-[650px]"
      >
        <Image
          src={garotaTomandoCafe}
          alt="garota tomando cafe"
          className=" absolute"
        />
      </motion.div>
    </div>
  );
}
