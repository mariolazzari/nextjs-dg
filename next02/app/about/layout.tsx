import { ReactNode } from "react";
import styles from "./styles.module.css";

const AboutLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav>about layout nav</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default AboutLayout;
