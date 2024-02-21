import styles from "./index.module.css";

export default function Divider({ children }: { children: React.ReactNode }) {
  return <div className={styles.divider}>{children}</div>;
}
