enum Restricao {
  GLUTEN, LACTOSE
}

export interface AdicionarProduto {
  nome: string;
  descricao: string;
  restricao: Restricao;
  origem: string;
  marca: string;
  tipoProduto: string;
  imagem: File;
}
