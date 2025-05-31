'use client';

import React from 'react';
import { Prato } from '../types/types';

interface ModalDeFinalizacaoProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  produtos: Prato[];
}

function ModalDeFinalizacao({ produtos, isOpen, setIsOpen }: ModalDeFinalizacaoProps) {

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 right-0 top-0 z-[1045] flex w-96 max-w-full flex-col border-l border-gray-200 bg-[#fff] text-neutral-700 shadow-lg dark:bg-gray-900 dark:text-white
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

      <div className="flex-grow overflow-y-auto p-4">
        {produtos.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">Nenhum produto no carrinho.</p>
        ) : (
          <ul className="space-y-3">
            {produtos.map((produto) => (
              <li key={produto.id} className="flex bg-amber-200 p-1.5 justify-between items-center pb-2 rounded-[14px]">
                <div className="flex items-center gap-2 flex-col">
                  <div className='flex gap-2'>
                  <img src={produto.imagem} alt={produto.titulo} className="w-16 h-16" />
                  <span className="font-bold">{produto.titulo}</span>
                  </div>
                  <div className='flex gap-2 '>
                    <a href="">editar</a>
                    <a href="">remover</a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ModalDeFinalizacao;
