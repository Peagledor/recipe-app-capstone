import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRecipes } from '../../controllers/recipesController'

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
    try {
        const data = await getRecipes();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch recipes: ' + error.message);
    }
});
  

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [],
        status: 'idle',
        error: null
    },
    reducers: {
        recipeAdded: (state, action) => {
            state.recipes.push(action.payload);
        },
        recipeDeleted: (state, action) => {
            state.recipes = state.recipes.filter(recipe => recipe.id !== action.payload);
        },
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

export const { recipeAdded, recipeDeleted } = recipesSlice.actions;
export default recipesSlice.reducer;
