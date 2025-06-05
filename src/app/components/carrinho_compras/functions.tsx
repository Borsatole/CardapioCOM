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
      const novaQuantidade = item.quatidade + 1;
      const valorBase = item.precoFinal;
      const totalAdicionais = (item.adicionais ?? []).reduce((total, adicional) => total + adicional.preco, 0);
      const precoUnitario = valorBase + totalAdicionais;

      return {
        ...item,
        quatidade: novaQuantidade,
        ValorTotal: precoUnitario * novaQuantidade,
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
      const novaQuantidade = item.quatidade - 1;
      const valorBase = item.precoFinal;
      const totalAdicionais = (item.adicionais ?? []).reduce((total, adicional) => total + adicional.preco, 0);
      const precoUnitario = valorBase + totalAdicionais;

      return {
        ...item,
        quatidade: novaQuantidade,
        ValorTotal: precoUnitario * novaQuantidade,
      };
    }
    return item;
  });

  setProdutos(produtosAtualizados);
}


export function handleEditarObservacao(
  produtos: Produto[],
  produto: Produto,
  setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>,
  novaObservacao: string
) {

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



export function handleAdicionarAdicional(
  produto: Produto,
  novosAdicionais: Adicional[],
  setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>
) {
  setProdutos((prevProdutos) => {
    const produtosAtualizados = prevProdutos.map((item) => {
      if (item.idAleatorio === produto.idAleatorio) {
        const adicionaisAtualizados = item.adicionais
          ? [...item.adicionais, ...novosAdicionais]
          : [...novosAdicionais];

        const totalAdicionais = adicionaisAtualizados.reduce(
          (total, adicional) => total + adicional.preco,
          0
        );

        const precoUnitario = item.precoFinal + totalAdicionais;
        const valorTotal = precoUnitario * item.quatidade;

        return {
          ...item,
          adicionais: adicionaisAtualizados,
          ValorTotal: valorTotal,
        };
      }
      return item;
    });

    return produtosAtualizados;
  });
}



export function handleRemoverAdicional(
  produto: Produto,
  adicionaisParaRemover: Adicional[],
  setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>
) {
  setProdutos((prevProdutos) => {
    const produtosAtualizados = prevProdutos.map((item) => {
      if (item.idAleatorio === produto.idAleatorio) {
        if (!item.adicionais) return item;

        const adicionaisAtualizados = [...item.adicionais];

        adicionaisParaRemover.forEach((remover) => {
          const index = adicionaisAtualizados.findIndex(
            (ad) => ad.id === remover.id
          );
          if (index !== -1) {
            adicionaisAtualizados.splice(index, 1);
          }
        });

        const totalAdicionais = adicionaisAtualizados.reduce(
          (total, adicional) => total + adicional.preco,
          0
        );

        const precoUnitario = item.precoFinal + totalAdicionais;
        const valorTotal = precoUnitario * item.quatidade;

        return {
          ...item,
          adicionais: adicionaisAtualizados,
          ValorTotal: valorTotal,
        };
      }

      return item;
    });

    return produtosAtualizados;
  });
}



export function agruparAdicionais(produtos: Produto[]) {
  const todosAdicionais = produtos.flatMap(produto => produto.adicionais ?? []);

  const resumo = todosAdicionais.reduce((acc, adicional) => {
    const existente = acc.find(item => item.id === adicional.id);
    if (existente) {
      existente.quantidade += 1;
    } else {
      acc.push({
        
        id: adicional.id,
        titulo: adicional.titulo,
        quantidade: 1
      });
    }
    return acc;
  }, [] as { id: number; titulo: string; quantidade: number }[]);

  return resumo;
  
}

export function buscarValorProduto(produtoId: number, produtos: Produto[]) {
  const produto = produtos.find(produto => produto.idAleatorio === produtoId);
  return produto?.ValorTotal || 0;
}



