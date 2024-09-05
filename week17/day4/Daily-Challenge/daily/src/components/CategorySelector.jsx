import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../store/selectors';

const CategorySelector = ({ selectedCategory, onSelectCategory }) => {
  const categories = useSelector(selectCategories);
  console.log('Categories in selector:', categories);

  return (
    <select value={selectedCategory} onChange={e => onSelectCategory(e.target.value)}>
      <option key="all" value="">All Categories</option>
      {categories.map(category => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default React.memo(CategorySelector);
