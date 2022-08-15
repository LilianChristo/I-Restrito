export interface ListaProdutos {

    id: number;
    descricao: string;
    foto: string;
    marca: string;
    nome: string;
    origem: string;
    restricao: string;
    tipoProduto: string;
    usuario: number;
}

    export type Produtos = Array<ListaProdutos>;