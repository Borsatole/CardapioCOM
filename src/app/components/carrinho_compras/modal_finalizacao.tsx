'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { Produto } from '../types/types';
import InputQuantidade from './quantidadeInput';
import { handleDeleteProdutoDoCarrinho } from './functions';
import { LuBadgeInfo } from "react-icons/lu";
import ModalEditarProduto from './modal_editar_produto';



interface ModalDeFinalizacaoProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  produtos: Produto[];
  setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>
}

function ModalDeFinalizacao({ produtos, setProdutos, isOpen, setIsOpen }: ModalDeFinalizacaoProps) {
  const [pulsar, setPulsar] = useState(false);
  const [EditarProdutoModal, setEditarProdutoModalOpen] = useState(false);
  const [produtoParaEditar, setProdutoParaEditar] = useState<Produto | null>(null);


  const handleEditarProduto = (produto: Produto) => {
    setProdutoParaEditar(produto);
    setEditarProdutoModalOpen(true);
  };


  useEffect(() => {
      if (produtos.length > 0) {
        setPulsar(true);
        const timeout = setTimeout(() => setPulsar(false), 300);
        return () => clearTimeout(timeout);
      }
    }, [produtos]);


  if (!isOpen) {
    return null;
  }


  

  return (
    <>
    <div
      className="fixed bottom-0 right-0 top-0 z-[100] flex w-96 max-w-full flex-col border-l border-gray-200 bg-[#fff] text-neutral-700 shadow-lg dark:bg-gray-900 dark:text-white
      opacity-100
      "
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h5 className="mb-0 text-lg font-semibold">Carrinho</h5>
        <button
            type="button"
            className="cursor-pointer box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300 "
            onClick={() => setIsOpen(false)}
          >
            <span className="h-6 w-6 inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
        </button>
      </div>
      {/* produtos do carrinho */}
      <div className="flex-grow overflow-y-auto p-4">
        {produtos.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">Nenhum produto no carrinho.</p>
        ) : (
          <ul className="space-y-3">
            {produtos.map((produto: Produto) => (
              <li
                key={produto.idAleatorio}
                className="flex flex-col bg-amber-50 p-2 rounded-[14px] shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  {/* Imagem */}
                  <div className=" w-16 h-16 bg-white border border-gray-200 rounded" style={{
                        backgroundImage: `url(${produto.imagem})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}></div>

                  {/* Infos do produto */}
                  <div className="flex flex-col flex-1">
                    <span className="font-semibold text-sm">{produto.titulo}</span>
                    <span className="text-xs text-gray-500">
                      {(typeof produto.ValorTotal === 'number' 
                        ? produto.ValorTotal 
                        : produto.precoFinal
                      ).toFixed(2)}
                    </span>
                    
                    
                  </div>
                  

                  {/* Quantidade */}
                  <div className="w-28">
                    <InputQuantidade 
                      quantidade={produto.quatidade}
                      produto={produto}
                      produtos={produtos}
                      setProdutos={setProdutos}
                    />
                  </div>
                </div>

                
                
                {produto.observacao &&
                <div className="text-xs mt-2.5 text-gray-500 flex gap-1 flex-col ">
                  <span className='flex gap-1 items-center font-semibold'>
                    <LuBadgeInfo size={16}/> observacao:
                  </span>

                  <span>{produto.observacao}</span>

                </div>
                }



                {/* Ações */}
                <div className="flex justify-end gap-3 mt-1 text-sm text-blue-600">
                  <button onClick={() => handleEditarProduto(produto)}>Editar</button>
                  <button
                    onClick={() =>
                      handleDeleteProdutoDoCarrinho(produtos, Number(produto.idAleatorio), setProdutos)
                    }
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>

        )}
      </div>

      {/* Total */}
      <div className="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700">
        
        <span className="text-sm font-semibold dark:text-white">Total:</span>
        <span className={`text-lg font-semibold dark:text-white ${pulsar ? 'efeitopulsar' : ''}`}>

          {produtos.reduce((total, produto) => {
              const preco = produto.ValorTotal || produto.precoFinal;
              return total + preco;
            }, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
          }
        
        </span>
      </div>


    </div>

    {EditarProdutoModal && (
      <ModalEditarProduto
      isOpen={EditarProdutoModal}
      
      produtoParaEditar={produtoParaEditar}
      onClose={() => setEditarProdutoModalOpen(false)}

  />
    )}
    </>
  );
}

export default ModalDeFinalizacao;
