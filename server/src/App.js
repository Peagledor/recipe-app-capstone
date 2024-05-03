import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Posts from "./pages/RecipePosts";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddRecipe from "./pages/AddRecipe";
import Favorites from "./pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "login", element: <Login /> },
      { path: "profile", element: <Profile /> },
      { path: "recipes", element: <Posts /> },
      { path: "add-recipe", element: <AddRecipe /> },
      { path: "favorites", element: <Favorites /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <div>
          <NavBar />
          <Footer />
        </div>
      </RouterProvider>
    </Provider>
  );
}

export default App;
