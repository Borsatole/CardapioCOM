import "./hero.css";

import React from 'react'

export default function Hero() {
  return (
    <div className="hero w-full flex justify-center items-center  text-white h-screen">
        <div className="w-2/3 flex justify-center items-center ">
        <div className="max-w-1/2 flex flex-col gap-5">

            <h1 className="text-5xl font-bold max-w-3/4">Um universo de <span className="text-amber-500">sabores</span>.</h1>

            <p className="max-w-3/4">Que tal experimentar lanches deliciosos por um preço que cabe no seu bolso? Clique no botão abaixo e peça já!</p>

            <button className="bg-amber-500 pt-2 pb-2 pl-5 pr-5 max-w-max">Cardapio</button>
        </div>

        <div className="max-w-1/2">
            <img src="https://viniciuslimaan.github.io/onlineMenu/img/burger.png" alt="" />
        </div>
    </div>
    </div>
  )
}
