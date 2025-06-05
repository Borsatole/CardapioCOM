import { useEffect, useState, useCallback } from "react";
import { Produto, Adicional } from "../types/types";
import { useAppContext } from "./appContext";
import EditarQuantidadeAdicional from "./quantidadeEditarPedido";
import {agruparAdicionais, buscarValorProduto} from "./functions";

interface ModalEditarProdutoProps {
  isOpen: boolean;
  produtoParaEditar: Produto | null;

  onClose: () => void;
}

function ModalEditarProduto({ isOpen, onClose, produtoParaEditar }: ModalEditarProdutoProps) {
    const [pulsar, setPulsar] = useState(false);
    const {adicionais, produtos} = useAppContext();
    const [adicionaisFiltrados, setAdicionaisFiltrados] = useState<Adicional[]>([]);
    
    const handlebuscarAdicionais = useCallback((categoria: string) => {
    const filtrados = adicionais[categoria] ?? [];
    setAdicionaisFiltrados(filtrados);
    }, [adicionais]);
    

    useEffect(() => {
      if (produtoParaEditar) {
        handlebuscarAdicionais(produtoParaEditar.categoria);
      }
    }, [produtoParaEditar, handlebuscarAdicionais]);

    useEffect(() => {
          if (produtos.length > 0) {
            setPulsar(true);
            const timeout = setTimeout(() => setPulsar(false), 300);
            return () => clearTimeout(timeout);
          }
      }, [produtos]);




  const AdicionaisAgrupados = agruparAdicionais(produtos);
    if (!produtoParaEditar?.idAleatorio) return null;

    const ValorProdutoComAdicionais = buscarValorProduto(produtoParaEditar.idAleatorio, produtos);



    if (!isOpen) return null;
    
  return (
    <div className="fixed inset-0 z-[101] bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl max-w-lg w-full shadow-lg">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">Editar</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-neutral-400 dark:hover:text-white">
            ✕
          </button>
        </div>

        <div className="flex items-center justify-between gap-3">
                  {/* Imagem */}
                  <div className='bg-white border border-gray-200 rounded p-1'>

                    <div className="w-16 h-16" style={{
                        backgroundImage: `url(${produtoParaEditar?.imagem})`,
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center', 
                    }}>

                    </div>
                    
                    
                  </div>

                  {/* Infos do produto */}
                  <div className="flex flex-col flex-1">
                    <span className="font-semibold text-gray-500 text-sm">{produtoParaEditar?.titulo}</span>

                    {produtoParaEditar && ValorProdutoComAdicionais > produtoParaEditar?.precoFinal ? (
                      <div className="flex gap-2">
                        <span className="text-xs text-gray-500 line-through">
                          {produtoParaEditar?.precoFinal?.toFixed(2)}
                        </span>


                        <span className={`text-xs text-green-600 font-semibold ${pulsar ? 'efeitopulsar' : ''}`}>
                          {ValorProdutoComAdicionais.toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-700 font-semibold">
                        {produtoParaEditar?.precoFinal?.toFixed(2)}
                      </span>
                    )}



                    
                    
                  </div>

            </div>

            

            {/* Adicionais */}
 {adicionaisFiltrados.length > 0 && (
  <div className="mt-4">
    <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Turbine</h3>

    <ul className="space-y-3">
      {adicionaisFiltrados.map((adicional) => {
        const adicionalEncontrado = AdicionaisAgrupados.find(
          (a) => a.id === adicional.id
        );
        const quantidade = adicionalEncontrado?.quantidade ?? 0;

        return (
          <li key={adicional.id} className="flex items-center justify-between gap-3.5">
            <div
              className="w-14 h-14 bg-white border border-gray-200 rounded"
              style={{
                backgroundImage: `url(${adicional.imagem})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <span className="text-sm text-gray-600 dark:text-gray-200 w-13">
              {adicional.titulo}
            </span>

            <span>
              <EditarQuantidadeAdicional
                quantidade={quantidade}
                produtoParaEditar={produtoParaEditar}
                adicional={adicional}
              />
            </span>

            <span className="text-sm font-semibold text-gray-600 dark:text-gray-200">
              {`R$ ${adicional.preco.toFixed(2)}`}
            </span>
          </li>
        );
      })}
    </ul>
  </div>
)}



            {/* Observacao */}

            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Observação</h3>
              <textarea className="text-stone-500 w-full p-2 border border-gray-200 rounded" placeholder="Observação"
              defaultValue={produtoParaEditar?.observacao}></textarea>
            </div>






        <div className="flex justify-end mt-6 gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 dark:bg-neutral-700 dark:hover:bg-neutral-600">
            Fechar
          </button>
          <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalEditarProduto;
