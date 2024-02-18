import styles from "./index.module.css";

export default function Aside({ children }: { children: React.ReactNode }) {
  return <div className={styles.aside}>{children}</div>;
}
