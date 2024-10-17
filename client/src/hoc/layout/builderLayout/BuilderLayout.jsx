import { Outlet } from "react-router-dom";

import BuilderHeader from "../../../pages/UserPage/Main/Builder/BuilderHeader/BuilderHeader";

import styles from "./BuilderLayout.module.css";

const BuilderLayout = () => {
  return (
    <div className={styles.container}>
      <BuilderHeader />
      <Outlet />
    </div>
  );
};

export default BuilderLayout;
