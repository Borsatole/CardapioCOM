import { Prato } from "../types/types";



export function handleDeleteProdutoDoCarrinho (produtos: Prato[], id: number, setProdutos : React.Dispatch<React.SetStateAction<Prato[]>>)  {
    setProdutos(produtos.filter(produto => produto.id !== id));
}

export function handleAddQuantidade(
  produtos: Prato[],
  produto: Prato,
  setProdutos: React.Dispatch<React.SetStateAction<Prato[]>>
) {
  const produtosAtualizados = produtos.map((item) => {
    if (item.id === produto.id) { // Remove a condição "quatidade > 1"
      // Calcula o preço unitário correto dividindo pelo quantidade atual
      const precoUnitario = item.precoFinal / item.quatidade;
      const novaQuantidade = item.quatidade + 1;

      return {
        ...item,
        quatidade: novaQuantidade,
        precoFinal: precoUnitario * novaQuantidade,
      };
    }
    return item;
  });

  setProdutos(produtosAtualizados);
}

export function handleRemoveQuantidade(
  produtos: Prato[],
  produto: Prato,
  setProdutos: React.Dispatch<React.SetStateAction<Prato[]>>
) {
  const produtosAtualizados = produtos.map((item) => {
    if (item.id === produto.id && item.quatidade > 1) {
      const precoUnitario = item.precoFinal / item.quatidade;
      const novaQuantidade = item.quatidade - 1;

      return {
        ...item,
        quatidade: novaQuantidade,
        precoFinal: precoUnitario * novaQuantidade,
      };
    }
    return item;
  });

  setProdutos(produtosAtualizados);
}

