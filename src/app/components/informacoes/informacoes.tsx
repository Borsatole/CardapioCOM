import "./informacoes.css";
import { PiToteSimpleBold } from "react-icons/pi";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { LuWalletMinimal } from "react-icons/lu";


import React from 'react'

export default function Informacoes() {
  return (
    <>
    <div className="w-full h-auto bg-white flex justify-center items-center gap-10 
    md:flex-row flex-col md:h-96
    ">

        <CardVantagens 

            icone={<PiToteSimpleBold color="#A90E0E" size={100} />} 
            titulo="Escolha os produtos" 
            descricao="Escolha todos os produtos que deseja comprar clicando no botão Adicionar." 
        />

        <CardVantagens 

            icone={<HiOutlineCheckBadge color="#A90E0E" size={100} />} 
            titulo="Verifique o carrinho" 
            descricao="Verifique se todos os produtos estão no carrinho de compras." 
        />

        <CardVantagens 
            icone={<LuWalletMinimal color="#A90E0E" size={100} />} 
            titulo="Envie o pedido" 
            descricao="Após verificar os itens, você enviará o pedido no WhatsApp da lanchonete com um simples clique." 
        />
        

    </div>

    <div className="w-full flex justify-center flex-col 
    items-center bg-gray-100 h-96">
        <div className="w-full md:w-2/3 flex flex-col gap-5 justify-center text-center">
            <h1 className="text-5xl font-bold text-gray-800">Cardápio online</h1>
            <p className="text-gray-800">Seja bem-vindo ao cardápio online da lanchonete <strong>SPACE BURGER</strong>!<br/>
            Este aplicativo web tem o intuito de facilitar os pedidos, possibilitando uma seleção prática e rápida dos produtos desejados e enviando-os para o WhatsApp da lanchonete, aumentando seu conforto e simplificando o pedido!</p>
        </div>

    </div>
    
    </>
  )
}

interface CardVantagensProps {
    icone: React.ReactNode;
    titulo: string;
    descricao: string;
}

export function CardVantagens({icone, titulo, descricao} : CardVantagensProps) {
  return (
    <div className="card  h-70 flex items-baseline">
            <div className="flex flex-col 
            gap-5 justify-center items-center
            w-3xs p-4">
                {icone}
                <h1 className="text-1xl font-bold">{titulo}</h1>
                <p className="text-center text-sm text-gray-800">{descricao}</p>
            </div>
    </div>
  )
}
