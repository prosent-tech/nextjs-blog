import Image from "next/image";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footerContainer} ${styles.wrapper}`}>
        <div className={styles.footerLogo}>
          <Image
            src="/logo.svg"
            alt="Mimipo Logo"
            width={264}
            height={76}
            priority
          />
        </div>
        <div className={styles.footerLinks}>
          <a
            href="https://service.mimipo.jp/policy"
            className={styles.link}
            target="_blank"
          >
            利用規約
          </a>
          <br />
          <a
            href="https://www.prosent.co.jp/privacy-policy"
            className={styles.link}
            target="_blank"
          >
            プライバシーポリシー
          </a>
          <br />
          <a
            href="https://mimipo.jp/commerce"
            className={styles.link}
            target="_blank"
          >
            特定商取引法
          </a>
        </div>
        <small className={styles.small}>
          &copy; 2024 Prosent inc. All Rights <br />
          Reserved. Mimipo.
        </small>
      </div>
    </footer>
  );
}
