import styles from "./index.module.css";

export default function Content({ children }: { children: React.ReactNode }) {
  return <div className={styles.content}>{children}</div>;
}
