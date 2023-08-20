"use client";
import Image from "next/image";
import logo from "../../../public/logoCafe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const CustonLink = ({ title, link }) => {
  return (
    <Link
      href={link}
      className="flex text-primary text-2xl font-bebas tracking-widest flex-col justify-center items-center hover:text-light transition-all duration-300"
    >
      {title}
    </Link>
  );
};

export default function NavBar() {
  return (
    <div>
      <nav className="absolute top-5 flex justify-center items-center h-36 text-primary z-10 drop-shadow-dark1 font-bold w-screen">
        <div className=" flex items-center justify-center space-x-5">
          <CustonLink link="/" title="Início" />
          <CustonLink link="/quem-somos" title="Quem Somos" />
        </div>
        <Link href="/">
          <Image
            src={logo}
            width={150}
            alt="logo cafeteria Davinci"
            className="hidden md:block mx-20 mt-5 drop-shadow-drop1"
          />
        </Link>
        <div className="flex justify-center items-center gap-8 ">
          <CustonLink link="/" title="Clube do Café" />
          <div className="flex gap-5">
            <Link href="#">
              <FontAwesomeIcon icon={faInstagram} className="h-7" />
            </Link>
            <Link href="#">
              <FontAwesomeIcon icon={faFacebook} className="h-7" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
