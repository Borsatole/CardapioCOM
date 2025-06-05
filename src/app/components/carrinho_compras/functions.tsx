import { Produto, Adicional } from "../types/types";



export function handleDeleteProdutoDoCarrinho (produtos: Produto[], id: number, setProdutos : React.Dispatch<React.SetStateAction<Produto[]>>)  {
    setProdutos(produtos.filter(produto => produto.idAleatorio !== id));
}

export function handleAddQuantidade(
  produtos: Produto[],
  produto: Produto,
  setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>
) {
  const produtosAtualizados = produtos.map((item) => {
    if (item.idAleatorio === produto.idAleatorio) { 
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
  produtos: Produto[],
  produto: Produto,
  setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>
) {
  const produtosAtualizados = produtos.map((item) => {
    if (item.idAleatorio === produto.idAleatorio && item.quatidade > 1) {
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
  produtos: Produto[],
  produto: Produto,
  setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>
) {
  const novaObservacao = prompt("Digite a nova observação:");

  if (novaObservacao !== null) {
    const produtosAtualizados = produtos.map((item) => {
      if (item.idAleatorio === produto.idAleatorio) {
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



// adicionar uma lista de adicinais dentro do array do produto
export function handleAdicionarAdicional(
    produto: Produto,
    adicionais: Adicional[],
    setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>
) {
  
  setProdutos((prevProdutos) => {
    const produtosAtualizados = prevProdutos.map((item) => {
      if (item.idAleatorio === produto.idAleatorio) {
        return {
          ...item,
          adicionais: item.adicionais ? [...item.adicionais, ...adicionais] : adicionais,
        };
      }
      return item;
    });
    return produtosAtualizados;
  });
  
}

export function handleRemoverAdicional(
    produto: Produto,
    adicionais: Adicional[],
    setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>
) {
  
  setProdutos((prevProdutos) => {
    const produtosAtualizados = prevProdutos.map((item) => {
      if (item.idAleatorio === produto.idAleatorio) {
        return {
          ...item,
          adicionais: item.adicionais?.filter((adicional) => !adicionais.includes(adicional)),
        };
      }
      return item;
    });
    return produtosAtualizados;
  });
  
}


