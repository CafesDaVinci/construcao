'use client'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faComments,
    faPeopleGroup,
    faLock,
    faHome,
    faCoffee,
} from '@fortawesome/free-solid-svg-icons'
import logo from '../../../public/logo.png'
import chicaraProduto from '../../../public/chicaraProduto.png'

import { useState } from 'react'
import Image from 'next/image'
export default function NavMobile() {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <div className='flex justify-around md:hidden'>
            <div className=' flex justify-around items-center py-1 w-screen'>
                <div className='flex justify-center items-center'>
                    <Image src={logo} alt="logo da Fazenda Santo Antônio"
                        className="rounded-full w-16"
                    />
                </div>
                <svg
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="flex justify-center items-center cursor-pointer "
                    fill="#FFFBF4"
                    viewBox="0 0 100 50"
                    width="30"
                    height="30"
                >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="80" height="10"></rect>
                    <rect y="60" width="60" height="10"></rect>
                </svg>
            </div>

            <div
                className={`text-primary fixed  right-0 top-0 z-40 flex h-full w-[70vw]  flex-col backdrop-blur-md transition-all duration-1000 ease-in-out ${showSidebar ? 'translate-x-0 ' : 'translate-x-full'
                    }`}
            >
                <button
                    className="fixed right-10 top-6 z-50 flex cursor-pointer items-center text-4xl text-primary"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    x
                </button>
                <Link
                    href="/"
                    className=" text-yellow1 mt-20 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-secondary"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <FontAwesomeIcon icon={faHome} className="h-5 text-vermelho" />
                    <p>Início</p>
                </Link>
                <Link
                    href="quem-somos"
                    className=" text-yellow1 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-secondary"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <FontAwesomeIcon icon={faPeopleGroup} className="h-5 text-vermelho" />
                    <p>Quem somos</p>
                </Link>
                <Link
                    href="/fale-conosco"
                    className=" text-yellow1 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-secondary"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <Image src={chicaraProduto} className="h-5 w-6 text-vermelho" />
                    <p>Produto</p>
                </Link>
                
                <Link
                    href="politica-de-privacidade"
                    className=" text-yellow1  flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-secondary"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <FontAwesomeIcon icon={faCoffee} className="h-5 text-vermelho" />
                    <p>Clube do Café</p>
                </Link>
                <Link
                    href="politica-de-troca-devolucao"
                    className=" text-yellow1  flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-secondary"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <FontAwesomeIcon icon={faComments} className="h-5 text-vermelho" />
                    <p>Contato</p>
                </Link>

                <div className="flex items-center justify-center p-10">
                    <Image src={logo} alt="logo" />
                </div>
            </div>
        </div>
    )
}