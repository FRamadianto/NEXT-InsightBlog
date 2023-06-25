import React from "react";
import styles from "./portfolio.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <div className={styles.mainTitle}>Our Works</div>
      {children}
    </div>
  );
};

export default Layout;
