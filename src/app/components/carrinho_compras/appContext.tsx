'use client'

import React, { createContext, useContext, useState, ReactNode } from "react";

type Produto = {
  id: number;
  imagem: string;
  titulo: string;
  categoria: string;
  precoOriginal: string;
  precoFinal: string;
  descricao: string;
};

type AppContextType = {
  produtos: Produto[];
  setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppContext.Provider value={{ produtos, setProdutos, isOpen, setIsOpen }}>
      {children}
    </AppContext.Provider>
  );
}
