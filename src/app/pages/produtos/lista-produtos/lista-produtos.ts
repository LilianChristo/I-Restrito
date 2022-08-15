export interface ListaProdutos extends Produto {
content: Produto[];

}

export interface Produto {

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



