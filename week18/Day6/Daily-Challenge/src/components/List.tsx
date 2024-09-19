import React from 'react';

// Interface para as props do componente List
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

// Componente genérico List
function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default List;

// Notas para mua:
// Interface para as props do componente List
// T é um tipo genérico que será definido quando o componente for usado

// Componente genérico List
// Usa o tipo T para os itens e a função renderItem
