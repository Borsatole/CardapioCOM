import React from 'react'

import { FaWhatsapp } from "react-icons/fa";
import "./menu.css";
import CarrinhoDeCompras from '../carrinho_compras/carrinho';





function Menu() {
  return (

    <div className="flex justify-center corPrincipal text-white p-5 h-20 fixed w-full">

        <div className='container md:w-10/12 flex justify-between items-center gap-4'>


        <div className='w-[90px] h-[150%] cursor-pointer hover:scale-110 transition-all'
        
        style={{
          backgroundImage: `url('/images/logo.png')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'

        }}>
          
        </div>

        {/* versao desktop */}
        
        <ul className='hidden md:flex gap-10 '>
            <li className='selectefeito'>Sobre</li>
            <li className='selectefeito'>Cardápio</li>
            <li className='selectefeito'>Promoçoes</li>
            <li className='selectefeito'>Atendimento</li>
        </ul>
        
        <div className='md:flex icons gap-5'>
            <CarrinhoDeCompras />
            <FaWhatsapp size={30} className='hidden md:flex'/>
        </div>

        
    </div>
    </div>
  )
}

export default Menu



