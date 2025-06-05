import React, { useState, useEffect } from 'react';
import { useAppContext } from "./appContext";
import { Produto, Adicional } from "../types/types";
import { handleAdicionarAdicional, handleRemoverAdicional } from "./functions";

type Props = {
  quantidade: number;
  produtoParaEditar?: Produto | null;
  adicional?: Adicional;
};

function EditarQuantidadeAdicional({ quantidade, produtoParaEditar, adicional }: Props) {
  const {  setProdutos } = useAppContext();
  const [value, setValue] = useState(quantidade || 0);

  useEffect(() => {
    setValue(quantidade || 0);
  }, [quantidade]);

  const increment = () => {
    setValue((prev) => prev + 1);
    handleAdicionarAdicional(produtoParaEditar!, [adicional!], setProdutos!);
  };

  const decrement = () => {
    if (value > 0) {
      setValue((prev) => prev - 1);
      handleRemoverAdicional(produtoParaEditar!, [adicional!], setProdutos!);
    }
  };


  return (
    <div className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700">
      <div className="flex items-center gap-x-1.5">
        <button
          type="button"
          onClick={decrement}
          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800"
        >
          <svg className="shrink-0 size-3.5" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>


        <input
          className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white focus-visible:outline-0"
          type="number"
          value={value}
          readOnly = {true}
          aria-roledescription="Number field"
          style={{ MozAppearance: "textfield" }}
        />

        <button
          type="button"
          onClick={increment}
          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800"
        >
          <svg className="shrink-0 size-3.5" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default EditarQuantidadeAdicional;
