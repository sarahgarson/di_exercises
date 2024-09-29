import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchRecipes } from '../features/dataSlice';
import { Recipe } from '../types/types';

const DataFetcher: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>loading...</div>;
  }

  if (status === 'failed') {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <h1>Recepies</h1>
      {data?.results.map((recipe: Recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
          <p>Portions: {recipe.servings}</p>
        </div>
      ))}
    </div>
  );
};

export default DataFetcher;


