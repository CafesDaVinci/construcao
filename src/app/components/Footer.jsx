import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link";
import { faCoffee, faMapLocationDot, faShop } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import cafeteria from "../../../public/cafeteria.jpg"
import rixxer from "../../../public/rixxer.png"

const data = new Date()
const ano = data.getFullYear()

export default function Footer() {
    return (
        <div>
            <div className="flex flex-col md:flex-row relative">
                <div className="text-center md:px-16 py-10 md:w-1/2 h-96 space-y-5 bg-secondary">
                    <h2 className="uppercase text-4xl font-bebas">História</h2>
                    <p className="text-base ms:w-[80%] px-2 md:px-0">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem neque eius expedita, aspernatur aliquam nesciunt pariatur! Dolor expedita officiis vitae, nostrum dolore fugit dolores laudantium beatae quae cum impedit animi?
                    </p>
                    <p className="font-dancing">
                        Assinatura da Empresa
                    </p>
                </div>
                <div className=" text-primary flex flex-col justify-center items-center  px-5 absolute inset-0">
                    <div className="flex flex-col justify-center items-center bg-text rounded-full border border-dashed p-5">
                        <h2 className="text-sm">Desde</h2>
                        <p className="text-4xl">1930</p>
                        <FontAwesomeIcon icon={faCoffee} className="h-5 text-secondary" />
                    </div>
                </div>

                <div className="md:w-1/2 h-96">
                    <Image src={cafeteria} alt="foto da cafeteria da vinci"
                        className="h-96"
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center w-screen p-20 text-base bg-bgfooter text-primary">
                <div className="flex justify-center items-center space-x-5 border border-primary py-5 px-10 h-28 w-64">
                    <FontAwesomeIcon icon={faShop} className="h-10 text-secondary" />
                    <div className="flex flex-col">
                        <h2>Horário de Funcionamento</h2>
                        <p>9:00 - 19:00</p>
                    </div>
                </div>
                <div className="h-28 w-64 flex items-center justify-center    border-x md:border-y border-primary py-5 px-10 space-x-5"> 
                    <FontAwesomeIcon icon={faMapLocationDot} className="h-10 text-secondary" />
                    <div>
                        <h2>Localização</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur </p>
                    </div>
                </div>
                <div className="h-28 w-64 flex items-center justify-center gap-5 border border-primary py-7 px-10">
                    <Link href="#" className="transition-all duration-300 hover:text-secondary">
                        <FontAwesomeIcon icon={faInstagram} className="h-7" />
                    </Link>
                    <Link href="#" className="transition-all duration-300 hover:text-secondary">
                        <FontAwesomeIcon icon={faFacebook} className="h-7" />
                    </Link>
                </div>
            </div>
            <div className=" py-5 text-text flex flex-col items-center justify-center text-center">
                <p className="text-xs px-5">
                    Café da Vinci - CNPJ: 0000000000000000000000000 Todos os Direitos Reservados, {ano}
                </p>
                <div className="flex">
                    <p className="text-sm">Developed by &nbsp; </p>{' '}
                    <a href="" className="font-bold text-text hover:text-secondary transition ease-in-out duration-300">
                        <Image src={rixxer} alt="link do site da empresa Rixxer"
                        className="w-16"
                        />
                    </a>
                </div>
            </div>
        </div >
    )
}