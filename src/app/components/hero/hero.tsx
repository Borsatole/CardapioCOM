import "./hero.css";
import Image from 'next/image';

import React from 'react'

export default function Hero() {
  return (
    <div className="hero w-full flex justify-center items-center pt-60 text-white h-screen md:pt-20">
        <div className="w-10/12 flex justify-center items-center flex-col md:flex-row">

        <div className="w-full flex flex-col gap-5 md:max-w-1/2">

            <h1 className="text-5xl text-center font-bold w-full
            md:max-w-3/4 md:text-left
            ">Um universo de <span className="text-amber-500">sabores</span>.</h1>

            <p className="text-center md:max-w-3/4 md:text-left">Que tal experimentar lanches deliciosos por um preço que cabe no seu bolso? Clique no botão abaixo e peça já!</p>

            <div className="flex justify-center md:justify-start">
            <button className="bg-amber-500 pt-2 pb-2 pl-5 pr-5 max-w-max hover:bg-amber-600 transition-all cursor-pointer">Cardapio</button>
            </div>
        </div>

        <div className="w-full md:max-w-1/2 p-10">
          <Image
            src="/images/burguer.png"
            alt="Hambúrguer"
            width={500}
            height={500}
          />
        </div>
    </div>
    </div>
  )
}
