import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import {useState} from 'react'
import store from "./redux/store";

import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import RecipePosts from "./pages/RecipePosts";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddRecipe from "./pages/AddRecipe";
import Favorites from "./pages/Favorites";
import Modal from './components/Modal'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "login", element: <Login /> },
      { path: "profile", element: <Profile /> },
      { path: "recipes", element: <RecipePosts /> },
      { path: "add-recipe", element: <AddRecipe /> },
      { path: "favorites", element: <Favorites /> },
    ],
  },
]);

function App() {
  const [isAddRecipeOpen, setIsAddRecipeOpen] = useState(false)

  const toggleAddRecipeModal = () => {
    console.log("Toggling Add Recipe Modal: ", !isAddRecipeOpen);
    setIsAddRecipeOpen(!isAddRecipeOpen);
};

  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        
        <NavBar onAddRecipeClick={toggleAddRecipeModal} />
            <Modal isOpen={isAddRecipeOpen} onClose={() => setIsAddRecipeOpen(false)}>
                <AddRecipe />
            </Modal>
          <Footer />
        
      </RouterProvider>
    </Provider>
  );
}

export default App;
