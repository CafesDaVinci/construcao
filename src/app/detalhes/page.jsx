"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CarrosselDetalhes from '../components/CarrosselDetalhes';
import { useState } from 'react';
import image from "../../../public/cafee.png"
import bgcafe from "../../../public/bgcafe.jpg";
import Image from "next/image";

export default function Detalhes() {

  const [count, setCount] = useState(0)

  return (
    <div className="bg-text pt-48">
      <div className="w-screen ">
        <Image
          src={bgcafe}
          className="w-screen  opacity-5 absolute "
        />
      </div>
      <div className="flex justify-center items- rounded-lg z-10 pt-20">
        <div className="flex items-center justify-center  h-full">
           <CarrosselDetalhes primeira={image} segunda={image} terceira={image} title="foto de um foguete" /> 
        </div>
        <div className=" w-[40%] text-primary z-20">
          <h2 className="text-5xl pb-2 border-b-2 border-secondary font-bold">Café</h2>
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faStar} className="w-4 text-yellow-500 py-5" />
            <FontAwesomeIcon icon={faStar} className="w-4 text-yellow-500 py-5" />
            <FontAwesomeIcon icon={faStar} className="w-4 text-yellow-500 py-5" />
            <FontAwesomeIcon icon={faStar} className="w-4 text-yellow-500 py-5" />
            <FontAwesomeIcon icon={faStar} className="w-4 text-yellow-500 py-5" />
          </div>
          <p className='text-secondary/75'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure beatae quod cumque numquam possimus dolorum dicta voluptates facere eaque, minima cum quidem odit officiis magni rerum quis tempore dolores vero.</p>
          <div className='flex justify-start items-center gap-2 py-10'>
            <p className='text-2xl line-through'>$372.00 </p><span className='text-tertiary font-bold text-3xl text-secondary '>$334.80</span>
          </div>
          <div className='flex gap-5'>
            <div className="flex w-28 items-center justify-center gap-5 ">
              <button
                className="text-3xl border  text-white w-full h-full bg-text hover:text-text hover:bg-secondary transition-all duration-300"
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
              <p className="text-xl text-vermelho">{count}</p>
              <button
                className="text-3xl border  text-white w-full h-full bg-text hover:text-text hover:bg-secondary transition-all duration-300"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
            <button className='bg-secondary px-5 py-2 border  text-text hover:bg-text hover:text-primary font-bold transition-all duration-300'>
              Comprar
            </button>
          </div>
        </div>
      </div>
      <div className='p-10 text-primary'>
        <h2 className='text-primary font-bold text-xl py-5'>Descrição Completa</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, sit. Eligendi, obcaecati similique. Pariatur rem dolore ut eius, suscipit nam laboriosam, consequatur, nostrum earum obcaecati quas nemo odit sapiente cumque.
        </p><br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, sit. Eligendi, obcaecati similique. Pariatur rem dolore ut eius, suscipit nam laboriosam, consequatur, nostrum earum obcaecati quas nemo odit sapiente cumque.
        </p><br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, sit. Eligendi, obcaecati similique. Pariatur rem dolore ut eius, suscipit nam laboriosam, consequatur, nostrum earum obcaecati quas nemo odit sapiente cumque.
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, sit. Eligendi, obcaecati similique. Pariatur rem dolore ut eius, suscipit nam laboriosam, consequatur, nostrum earum obcaecati quas nemo odit sapiente cumque.
        </p><br />
      </div>
      
    </div>
  )
}