export class Produto {
    nome: string;
    descricao: string;
    restricao: string;
    origem: string;
    marca: string;
    tipoProduto: string;

    constructor(nome: string, descricao: string, restricao: string, origem: string, marca: string, tipoProduto: string) {   
        this.nome = nome;   
        this.descricao = descricao; 
        this.restricao = restricao;
        this.origem = origem;
        this.marca = marca;
        this.tipoProduto = tipoProduto;
    }



}