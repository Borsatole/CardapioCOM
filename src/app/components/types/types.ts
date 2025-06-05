export interface Prato {
  id: number;
  imagem: string;
  titulo: string;
  categoria: string;
  quatidade: number;
  precoOriginal: number;
  precoFinal: number;
  descricao: string;
}

export interface Produto {
  id: number;
  imagem: string;
  titulo: string;
  categoria: string;
  quatidade: number;
  observacao: string;
  precoOriginal: number;
  precoFinal: number;
  descricao: string;
  idAleatorio?: number;
  adicionais?: Adicional[];
}

export interface Adicional {
  id: number;
  titulo: string;
  imagem: string;
  quantidade?: number;
  preco: number;
}