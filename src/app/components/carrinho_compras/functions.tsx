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

export function handleEditarObservacao(
  produtos: Prato[],
  produto: Prato,
  setProdutos: React.Dispatch<React.SetStateAction<Prato[]>>
) {
  const novaObservacao = prompt("Digite a nova observação:");

  if (novaObservacao !== null) {
    const produtosAtualizados = produtos.map((item) => {
      if (item.id === produto.id) {
        return {
          ...item,
          observacao: novaObservacao,
        };
      }
      return item;
    });

    setProdutos(produtosAtualizados);
  }
}

