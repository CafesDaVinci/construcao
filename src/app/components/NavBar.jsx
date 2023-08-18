import Image from "next/image";
import logo from "../../../public/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";



const CustonLink = ({ title, link, icon }) => {
    return (
        <Link href={link} className="flex text-primary flex-col justify-center items-center hover:text-light transition-all duration-300">
            {title}
            <FontAwesomeIcon icon={icon} className="h-5" />
        </Link>
    )
}

export default function NavBar() {
    return (
        <div>
            <nav className="absolute top-5 flex justify-center items-center h-36 text-primary z-10 drop-shadow-dark1 font-bold w-screen">
                <div className="flex items-center justify-center space-x-5">
                    <CustonLink
                        link="/"
                        title="Início"
                    />
                    <CustonLink
                        link="/quem-somos"
                        title="Quem Somos"
                    />
                </div>
                <Link href="/">
                    <Image src={logo} width={150} alt="logo cafeteria Davinci"
                        className="rounded-full hidden md:block mx-20 drop-shadow-drop1"
                    />
                </Link>
                <div className="flex gap-5 w-40">
                    <CustonLink
                        link='#'

                        icon={faInstagram}

                    />
                    <CustonLink
                        link='#'

                        icon={faFacebook}
                    />
                </div>
            </nav>
        </div>
    )
}