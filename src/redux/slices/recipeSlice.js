// src/redux/slices/recipesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching recipes
export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
    const response = await fetch('/api/recipes'); // Adjust URL as needed
    const data = await response.json();
    return data;
});

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null
    },
    reducers: {
        recipeAdded: (state, action) => {
            state.recipes.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.recipes = action.payload;
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { recipeAdded } = recipesSlice.actions;

export default recipesSlice.reducer;
