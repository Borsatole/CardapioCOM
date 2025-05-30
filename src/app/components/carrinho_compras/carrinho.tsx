'use client'
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { handleClick } from "./functions";
import ModalDeFinalizacao from "./modal_finalizacao";

function CarrinhoDeCompras() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [produtos] = useState([
    {
    id: 1,
    imagem: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$ksXb0fyM/200/200/original?country=br',
    titulo: 'Combo Clássico',
    categoria: 'Combos',
    precoOriginal: 'R$ 39,90',
    precoFinal: 'R$ 34,90',
    descricao: 'Hambúrguer clássico, batata média e refrigerante.',
  },
  ]);

  return (
    <>
    <div className="relative cursor-pointer" onClick={() => handleClick({isOpen, setIsOpen})}>
        <TiShoppingCart size={30}/>
        {produtos.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500
             text-white text-xs font-bold  
             px-1.5 py-0.5 rounded-full">

                {produtos.length || 0}
            </span>
        )}
        
    </div>

    {isOpen && 
    <ModalDeFinalizacao 
    produtos={produtos} 
    isOpen={isOpen} 
    setIsOpen={setIsOpen} 
    />}


    </>
  )
}

export default CarrinhoDeCompras