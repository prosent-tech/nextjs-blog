import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function Cards() {
  return (
    <div className={styles.contents}>
      {/* パンクズ */}
      <ul className={styles.breadcrumb}>
        <li className={styles.breadcrumbList}>
          <a href="">記事一覧</a>
        </li>
      </ul>
      <ul className="">
        {/* 記事一覧 */}
        <li className={styles.list}>
          <Link href="/news/1" className={styles.link}>
            <picture>
              <source />
              <Image
                src="https://www.mimipo.jp/facecare/assets/img/ogp.jpg"
                alt="news1"
                width={1200}
                height={630}
                className={styles.ogimage}
              />
            </picture>
            <dl className={styles.content}>
              <dt className={styles.title}>
                【Mimipoオンランクリニック】メディカルダイエットを開始しました
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
        <li className={styles.list}>
          <Link href="/news/1" className={styles.link}>
            <picture>
              <source />
              <Image
                src="https://www.mimipo.jp/facecare/assets/img/ogp.jpg"
                alt="news1"
                width={1200}
                height={630}
                className={styles.ogimage}
              />
            </picture>
            <dl className={styles.content}>
              <dt className={styles.title}>
                【Mimipoオンランクリニック】メディカルダイエットを開始しました
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
        <li className={styles.list}>
          <Link href="/news/1" className={styles.link}>
            <picture>
              <source />
              <Image
                src="https://www.mimipo.jp/facecare/assets/img/ogp.jpg"
                alt="news1"
                width={1200}
                height={630}
                className={styles.ogimage}
              />
            </picture>
            <dl className={styles.content}>
              <dt className={styles.title}>
                【Mimipoオンランクリニック】メディカルダイエットを開始しました
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
        <li className={styles.list}>
          <Link href="/news/1" className={styles.link}>
            <picture>
              <source />
              <Image
                src="https://www.mimipo.jp/facecare/assets/img/ogp.jpg"
                alt="news1"
                width={1200}
                height={630}
                className={styles.ogimage}
              />
            </picture>
            <dl className={styles.content}>
              <dt className={styles.title}>
                【Mimipoオンランクリニック】メディカルダイエットを開始しました
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
        <li className={styles.list}>
          <Link href="/news/1" className={styles.link}>
            <picture>
              <source />
              <Image
                src="https://www.mimipo.jp/facecare/assets/img/ogp.jpg"
                alt="news1"
                width={1200}
                height={630}
                className={styles.ogimage}
              />
            </picture>
            <dl className={styles.content}>
              <dt className={styles.title}>
                【Mimipoオンランクリニック】メディカルダイエットを開始しました
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
        <li className={styles.list}>
          <Link href="/news/1" className={styles.link}>
            <picture>
              <source />
              <Image
                src="https://www.mimipo.jp/facecare/assets/img/ogp.jpg"
                alt="news1"
                width={1200}
                height={630}
                className={styles.ogimage}
              />
            </picture>
            <dl className={styles.content}>
              <dt className={styles.title}>
                【Mimipoオンランクリニック】メディカルダイエットを開始しました
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
      {/* ページネーション */}
      <div className={styles.pagination}>
        <ul className={styles.pager}>
          <li className={`${styles.page} ${styles.active}`}>
            <Link href="/news/1">1</Link>
          </li>
          <li className={styles.page}>
            <Link href="/news/1">2</Link>
          </li>
          <li className={styles.page}>
            <Link href="/news/1">3</Link>
          </li>
          <li className="omission">...</li>
          <li className={styles.page}>
            <Link href="/news/1">38</Link>
          </li>
          <li className={`${styles.page} ${styles.arrow}`}>
            <Link href="/news/1">
              <Image
                src="https://blog.microcms.io/images/icon_arrow_right.svg"
                width="20"
                height="24"
                alt=""
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
