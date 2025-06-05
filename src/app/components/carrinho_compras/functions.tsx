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
  novosAdicionais: Adicional[],
  setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>
) {
  setProdutos((prevProdutos) => {
    const produtosAtualizados = prevProdutos.map((item) => {
      if (item.idAleatorio === produto.idAleatorio) {
        // Junta os adicionais antigos com os novos
        const adicionaisAtualizados = item.adicionais
          ? [...item.adicionais, ...novosAdicionais]
          : [...novosAdicionais];

        // Recalcula o valor total baseado no preço base + soma dos adicionais
        const totalAdicionais = adicionaisAtualizados.reduce(
          (total, adicional) => total + adicional.preco,
          0
        );

        return {
          ...item,
          adicionais: adicionaisAtualizados,
          ValorTotal: item.precoFinal + totalAdicionais,
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
            adicionaisAtualizados.splice(index, 1); // Remove só 1 ocorrência
          }
        });

        const totalAdicionais = adicionaisAtualizados.reduce(
          (total, adicional) => total + adicional.preco,
          0
        );

        return {
          ...item,
          adicionais: adicionaisAtualizados,
          ValorTotal: item.precoFinal + totalAdicionais,
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
        quantidade: 1,
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



