import Image from "next/image";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} ${styles.wrapper}`}>
        <h1 className={styles.headerLogo}>
          <Image
            src="/logo.svg"
            alt="Mimipo Logo"
            width={98}
            height={28}
            priority
          />
        </h1>
      </div>
    </header>
  );
}
