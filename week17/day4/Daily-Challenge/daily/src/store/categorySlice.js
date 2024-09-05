import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: [
    { id: '1', name: 'Work' },
    { id: '2', name: 'Personal' },
    { id: '3', name: 'Study' },
  ],
  reducers: {
    addCategory: (state, action) => {
      const newCategory = {
        id: Date.now().toString(),
        name: action.payload
      };
      state.push(newCategory);
      console.log('Added new category:', newCategory); 
    },

    editCategory: (state, action) => {
      const index = state.findIndex(category => category.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    deleteCategory: (state, action) => {
      return state.filter(category => category.id !== action.payload);
    },
  },
});

export const { addCategory, editCategory, deleteCategory } = categorySlice.actions;


export default categorySlice.reducer;