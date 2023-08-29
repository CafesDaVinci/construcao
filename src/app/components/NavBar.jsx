"use client";
import Image from "next/image";
import logo from "../../../public/logoCafe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import NavMobile from "./NavMobile";

const CustonLink = ({ title, link }) => {
  return (
    <Link
      href={link}
      className="flex text-primary text-2xl font-bebas tracking-widest flex-col justify-center items-center transition-all duration-300 hover:text-secondary "
    >
      {title}
    </Link>
  );
};

export default function NavBar() {
  return (
    <div>
      <NavMobile/>
      <nav className="hidden absolute md:flex justify-center items-center text-primary z-10 drop-shadow-dark1 font-bold w-screen">
        <div className=" flex items-center justify-center space-x-5 w-96">
          <CustonLink link="/" title="Início" />
          <CustonLink link="/quem-somos" title="Quem Somos" />
          <CustonLink link="/produtos" title="Produtos" />
        </div>
        <Link href="/">
          <Image
            src={logo}
            alt="logo cafeteria Davinci"
            className="hidden md:block mx-20 w-auto h-44 drop-shadow-drop1"
          />
        </Link>
        <div className="flex justify-center items-center gap-8 w-96 ">
          <CustonLink link="/" title="Clube do Café" />
          <CustonLink link="/" title="Contato" />
          <div className="flex gap-5">
            <Link href="#" className="transition-all duration-300 hover:text-secondary">
              <FontAwesomeIcon icon={faInstagram} className="h-7" />
            </Link>
            <Link href="#" className="transition-all duration-300 hover:text-secondary">
              <FontAwesomeIcon icon={faFacebook} className="h-7" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
