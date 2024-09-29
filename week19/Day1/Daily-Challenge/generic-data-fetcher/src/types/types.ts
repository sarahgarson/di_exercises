//Definição de tipos para os dados da API
export interface Recipe {
  id: number;
  title: string;
  image: string;
  servings: number;
}

export interface ApiResponse {
  results: Recipe[];
}
