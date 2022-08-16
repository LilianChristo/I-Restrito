enum Restricao {
    GLUTEN, LACTOSE, CASEINA
  }

export interface EditaProdutos {

    id: number;
    nome: string;
    descricao: string;
    restricao: Restricao;
    origem: string;
    marca: string;
    tipoProduto: string;
    imagem: File;


}

export interface RecuperaProduto {
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



