import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { fetchData } from '../api/api';
import { ApiResponse } from '../types/types';

interface DataState {
  data: ApiResponse | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const initialState: DataState = {
  data: null,
  status: 'idle',
  error: null,
};

const mockData: ApiResponse = {
  results: [
    { id: 1, title: 'Receita Mock 1', image: 'https://via.placeholder.com/150', servings: 4 },
    { id: 2, title: 'Receita Mock 2', image: 'https://via.placeholder.com/150', servings: 2 },
    
  ]
};

export const fetchRecipes = createAsyncThunk(
  'data/fetchRecipes',
  async (_, { rejectWithValue }) => {
    try {
      const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch';
      const options: AxiosRequestConfig = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '932816fd9bmshbb970dc7797651ap10b298jsnf962a9991538',
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        },
        params: {
          number: '10'
        }
      };
      
      return await fetchData<ApiResponse>(url, options);
    }  catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 429) {
          return rejectWithValue('Limite de requisições atingido. Tente novamente mais tarde.');
        }
      }
      return rejectWithValue('Ocorreu um erro ao buscar as receitas.');
    }
  }
);


const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipes.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Algo deu errado';
      });
  },
});

export default dataSlice.reducer;

