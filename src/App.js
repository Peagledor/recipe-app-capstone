import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "login", element: <Login /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} >
      <div>
        <NavBar />
        <Footer />
      </div>
      </RouterProvider >
    </>
  );
}

export default App;
