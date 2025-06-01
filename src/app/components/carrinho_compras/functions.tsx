import { Prato } from "../types/types";



export function handleDeleteProdutoDoCarrinho (produtos: Prato[], id: number, setProdutos : React.Dispatch<React.SetStateAction<Prato[]>>)  {
    setProdutos(produtos.filter(produto => produto.id !== id));
}