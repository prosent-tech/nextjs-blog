import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function Cards() {
  return (
    <ul className="">
      <li className={styles.list}>
        <Link href="/news/1" className={styles.link}>
          <picture>
            <source />
            <Image
              src="https://images.blog.microcms.io/assets/f5d83e38f9374219900ef1b0cc4d85cd/a88aad6de9a1462291d876147b218d74/2S_0123_2.jpg?w=670&fm=webp"
              alt="news1"
              width={1200}
              height={630}
              className={styles.ogimage}
            />
          </picture>
          <dl className={styles.content}>
            <dt className={styles.title}>
              【セレッソ大阪様】Jリーグチームで断トツの読み込み速度を誇るウェブサイトに
            </dt>
            <dd>
              <div className={styles.upper}>
                <span className={styles.category}>最新情報</span>
              </div>
              <div className={styles.meta}>
                <span className={styles.timestamp}>
                  {/* <img src="/images/icon_clock.svg" width="20" height="20" alt="" data-v-0883ea54=""> */}
                  <time dateTime="2021-08-01">2021/08/01</time>
                </span>
                <span className={styles.author}>
                  {/* <img src="/images/icon_author.svg" width="20" height="21" alt="" data-v-0883ea54=""> */}
                  山岡朋樹
                </span>
              </div>
            </dd>
          </dl>
        </Link>
      </li>
    </ul>
  );
}
