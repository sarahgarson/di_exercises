// Definição dos tipos
type User = {
  type: 'user';
  name: string;
  age: number;
};

type Product = {
  type: 'product';
  id: number;
  price: number;
};

type Order = {
  type: 'order';
  orderId: string;
  amount: number;
};

// Tipo união para os dados
type Data = User | Product | Order;

// Função para processar os dados
function handleData(data: Data[]): string[] {
  return data.map((item) => {
    // Type guard para User
    if (item.type === 'user') {
      // Retorna uma mensagem de saudação para o usuário
      return `Hey ${item.name}, you are ${item.age} years old.`;
    }
    
    // Type guard para Product
    if (item.type === 'product') {
      // Retorna uma mensagem com o ID e preço do produto
      return `Product ID: ${item.id}, Price: $ ${item.price.toFixed(2)}`;
    }
    
    // Type guard para Order
    if (item.type === 'order') {
      // Retorna um resumo do pedido
      return `Order ID: ${item.orderId}, Amount: R$ ${item.amount.toFixed(2)}`;
    }
    
    // Caso inesperado
    return 'Unknown data type';
  });
}

// Teste da função
const testData: Data[] = [
  { type: 'user', name: 'John', age: 30 },
  { type: 'product', id: 1, price: 29.99 },
  { type: 'order', orderId: 'ABC123', amount: 100.50 },
  { type: 'user', name: 'Maria', age: 25 },
];

const results = handleData(testData);

// Imprime os resultados
results.forEach((result, index) => {
  console.log(`Result ${index + 1}:`, result);
});
