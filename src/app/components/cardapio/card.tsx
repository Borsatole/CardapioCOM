import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { useAppContext } from '../carrinho_compras/appContext';
interface CardPratoProps {
  id: number;
  imagem: string;
  titulo: string;
  categoria: string;
  precoOriginal: string;
  precoFinal: string;
  descricao: string;
}

const CardPrato: React.FC<CardPratoProps> = ({
  id,
  imagem,
  titulo,
  categoria,
  precoOriginal,
  precoFinal,
  descricao,
}) => {
  
  const {produtos, setProdutos } = useAppContext();

  const isInCart = produtos.some((produto) => produto.id === id);

  const handleAddToCart = () => {
    if (isInCart) {
      alert('O prato já está no carrinho de compras.');
      return;
    }

    const novoProduto = { id, imagem, titulo, categoria, precoOriginal, precoFinal, descricao };
    setProdutos([...produtos, novoProduto]);
    
  };

  return (
    <div className="flex items-center justify-center px-2">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Imagem */}
        <div
          className="h-[236px] w-full"
          style={{
            backgroundImage: `url(${imagem})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Conteúdo */}
        <div className="p-4 sm:p-6 flex flex-col justify-between min-h-[300px]">
          <div>
            <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
              {`${id} - ${titulo}` || 'Nome do prato'}
            </p>
            <div className="flex flex-row">
              <p className="text-[#3C3C4399] text-[17px] mr-2 line-through">{precoOriginal}</p>
              <p className="text-[17px] font-bold text-[#0FB478]">{precoFinal}</p>
            </div>
            <p className="text-[#7C7C80] text-[15px] mt-4">
              {descricao || 'Descrição do prato'}
            </p>
          </div>

          {/* Botão */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleAddToCart()}
            className="block text-white mt-6 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#a90e0e] rounded-[14px] hover:bg-amber-600 focus:outline-none focus:ring cursor-pointer"
          >
            <div className='flex items-center justify-center gap-2'>
              <FaCartArrowDown size={15}/>
              Adicionar ao carrinho
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPrato;
