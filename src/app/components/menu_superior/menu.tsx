import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import "./menu.css";





function Menu() {
  return (

    <div className="flex justify-center corPrincipal text-white p-5 h-20 fixed w-full">
        <div className='w-2/3 flex justify-between items-center gap-4'>
        <a className='title font-bold'><span>SPACE BURGER</span></a>

        {/* versao desktop */}
        
        <ul className='flex gap-10'>
            <li>Sobre</li>
            <li>Cardápio</li>
            <li>Promoçoes</li>
            <li>Atendimento</li>
        </ul>
        
        <div className='icons flex gap-5'>
            <TiShoppingCart size={30} />
            <FaWhatsapp size={30} />
        </div>

        {/* versao mobile */}
        <div className='btnMobile hidden'>
            <button>Menu</button>

        </div>
    </div>
    </div>
  )
}

export default Menu



