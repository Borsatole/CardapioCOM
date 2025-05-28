"use client";

import React from 'react';
import { useState } from 'react';


function Cardapio() {
    const listaCategorias = ['Tudo', 'Paes', 'Salgados', 'Doces', 'Sobremesas', 'Bebidas'];
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Tudo');
    

  return (
    <div className='w-full flex flex-col gap-5 bg-gray-50 h-screen'>
        <h1 className="text-5xl font-bold text-gray-800 text-center">Cardápio</h1>

        <div id='categorias' className='w-full'>
            <ul className='flex justify-center items-center gap-10'>
                {listaCategorias.map((categoria, index) => (
                <li
                    key={index}
                    onClick={() => setCategoriaSelecionada(categoria)}
                    className={`text-xl font-bold text-gray-800 cursor-pointer pb-2 ${
                    categoria === categoriaSelecionada ? 'border-b-2  border-amber-500' : ''
                    }`}
                >
                    {categoria}
                </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Cardapio