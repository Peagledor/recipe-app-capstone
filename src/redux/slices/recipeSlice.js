import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
    try {
      const response = await fetch('/recipes');  // Adjust the path as needed
      if (!response.ok) {
        throw new Error('Failed to fetch recipes: ' + response.statusText);
      }
  
      const text = await response.text();  // First, read as text to check validity
      try {
        const data = JSON.parse(text);  // Then, attempt to parse text as JSON
        return data;
      } catch (jsonError) {
        console.error('JSON parsing error:', text);  // Log the text if JSON parsing fails
        throw new Error('Failed to parse JSON');
      }
    } catch (networkError) {
      console.error('Network or other error:', networkError);
      throw networkError;
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
