import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

import { TiShoppingCart } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import "./menu.css";





function Menu() {
  return (

    <div className="flex justify-center corPrincipal text-white p-5 h-20 fixed w-full">

        <div className='container md:w-10/12 flex justify-between items-center gap-4'>


        <a className='title font-bold'><span>SPACE BURGER</span></a>

        {/* versao desktop */}
        
        <ul className='hidden md:flex gap-10'>
            <li>Sobre</li>
            <li>Cardápio</li>
            <li>Promoçoes</li>
            <li>Atendimento</li>
        </ul>
        
        <div className='hidden md:flex icons gap-5'>
            <TiShoppingCart size={30} />
            <FaWhatsapp size={30} />
        </div>

        {/* versao mobile */}
        <div className='btnMobile md:hidden border-1 p-2'>
            <GiHamburgerMenu />



        </div>
    </div>
    </div>
  )
}

export default Menu



