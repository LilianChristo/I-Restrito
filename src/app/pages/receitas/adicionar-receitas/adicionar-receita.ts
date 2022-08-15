enum Restricao {
  GLUTEN, LACTOSE
}

export interface AdicionarReceita {
  titulo: string;
  ingredientes: string;
  modo_de_fazer: string;
  rendimento: string;
  tempo_de_preparo: string;
  imagem: File;
}
