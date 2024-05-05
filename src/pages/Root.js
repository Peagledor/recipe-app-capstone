import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import classes from "./Root.module.css";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main className={classes.content}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
