'use client'

import { Produto, Adicional } from "../types/types";
import { useEffect } from "react";

import React, { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  produtos: Produto[];
  setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  adicionais: { [key: string]: Adicional[] };
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  const [produtos, setProdutos] = useState<Produto[]>([
    
  ]);


  const [adicionais] = useState({
  "Burgers": [
    { id: 1, titulo: "Hambúrguer", imagem: "https://png.pngtree.com/png-vector/20240821/ourmid/pngtree-background-beef-burger-png-image_13353704.png", preco: 3 },

    { id: 2, titulo: "Ovo", imagem: "https://media.istockphoto.com/id/155358881/pt/foto/ovo-estrelado-tra%C3%A7ado-de-recorte.jpg?s=612x612&w=0&k=20&c=cBvEsPG3AxTakKQgR6SKK6qsiYbOk3XvIvJH3CIk3Yo=", preco: 1 },
    
    { id: 3, titulo: "Ovo", imagem: "https://media.istockphoto.com/id/155358881/pt/foto/ovo-estrelado-tra%C3%A7ado-de-recorte.jpg?s=612x612&w=0&k=20&c=cBvEsPG3AxTakKQgR6SKK6qsiYbOk3XvIvJH3CIk3Yo=", preco: 1 }
  ],
  "Porções": [
    { id: 1, titulo: "Queijo", imagem: "https://cdn.awsli.com.br/600x700/2538/2538906/produto/271465342/screenshot_16-removebg-preview-dqiwvlc1cy.png", preco: 3 },
    { id: 2, titulo: "Cebola", imagem: "https://static.vecteezy.com/system/resources/previews/029/720/435/non_2x/onion-transparent-background-png.png", preco: 3 }

  ]
});

  // toda vez que mudar o produto listar no console

  useEffect(() => {
    console.clear();
    console.log(...produtos);
  }, [produtos]);


  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppContext.Provider value={{ produtos, setProdutos, isOpen, setIsOpen, adicionais }}>
      {children}
    </AppContext.Provider>
  );
}
