import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";
import classes from "./Root.module.css";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
