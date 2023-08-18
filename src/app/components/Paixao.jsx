import Image from "next/image";
import xicara from "../../../public/xicara.jpg"
export default function Paixao() {
    return (
        <div className="bg-primary flex flex-col justify-center  items-center w-screen">
            <div className="bg-secondary h-32 py-5 w-px" />

            <div className="w-full flex justify-center ml-72 mt-5 items-center text-center">
                <p className="text-3xl w-96 flex justify-end items-end">UM CAFÉ GOURMET COMPARTILHADO COM UM AMIGO É FELICIDADE PROVADA E TEMPO BEM PASSADO.</p>
            </div>

            <div className="w-56 relative flex">
                <Image src={xicara} alt="xicara de café" className="w-64 right-60 -top-28 absolute" />
            </div>
            <div className="flex justify-center items-center w-full mr-[250px] my-10">
                <h2 className="uppercase text-7xl z-10"><span className="text-primary">NOSSAS </span>PAIXÕES</h2>
            </div>
            <div className="mt-44 mr-96">
                <p className="w-96">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquam commodi perspiciatis fugit autem aliquid porro doloremque ipsum ipsam eius amet soluta unde, animi cumque possimus facere. Minus, unde voluptatem!</p>
            </div>



        </div>
    )
}