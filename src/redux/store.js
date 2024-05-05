import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import recipesReducer from './slices/recipeSlice'

const store =  configureStore({
  reducer: {
    user: userReducer,
    recipes: recipesReducer
  },
});

export default store;