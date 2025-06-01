'use client'
import { TiShoppingCart } from "react-icons/ti";
import { useEffect, useState } from "react";

import { useAppContext } from "./appContext";

import ModalDeFinalizacao from "./modal_finalizacao";


function CarrinhoDeCompras() {

  const {produtos, setProdutos,  isOpen, setIsOpen} = useAppContext();
  const [pulsar, setPulsar] = useState(false);

  useEffect(() => {
    if (produtos.length > 0) {
      setPulsar(true);
      const timeout = setTimeout(() => setPulsar(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [produtos]);

  
  return (
    <>
        <div className="relative cursor-pointer" onClick={() => setIsOpen(true)}>
            <TiShoppingCart size={30}/>
            {produtos.length > 0 && (
                <span
            className={`
              absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold  
              px-1.5 py-0.5 rounded-full transition-transform
              ${pulsar ? 'efeitopulsar' : ''}
            `}
          >
            {produtos.length}
          </span>
        )}
            
        </div>

        {isOpen && 
        <ModalDeFinalizacao 
        produtos={produtos} 
        setProdutos={setProdutos}
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        />}
    </>
  )
}

export default CarrinhoDeCompras