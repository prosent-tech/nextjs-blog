import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

export default function Ad() {
  return (
    <div className={styles.wrapper}>
      <Link href="" className={styles.link}>
        <picture>
          <source />
          <Image
            src="https://images.blog.microcms.io/assets/f5d83e38f9374219900ef1b0cc4d85cd/05a106c56c3049a5bccfe3667af54c14/templates.png"
            alt="news1"
            width={600}
            height={500}
            className={styles.ogimage}
          />
        </picture>
      </Link>
    </div>
  );
}
