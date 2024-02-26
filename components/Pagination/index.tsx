import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

const PER_PAGE = 5;

export default function Pagination({
  totalCount,
  // currentPage,
}: {
  totalCount: number;
  // currentPage: number;
}) {
  // console.log("currentPage", currentPage);

  const range = (start: any, end: any) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const rangeArray = range(1, Math.ceil(totalCount / PER_PAGE));

  console.log(rangeArray);

  return (
    <div className={styles.pagination}>
      <ul className={styles.pager}>
        <li className={`${styles.page} ${styles.arrow}`}>
          <Link href="/media/1">
            <Image
              src="https://blog.microcms.io/images/icon_arrow_left.svg"
              width="20"
              height="24"
              alt=""
            />
          </Link>
        </li>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <li key={index} className={`${styles.page} ${styles.active}`}>
            <Link href={`/media/page/${number}`}>{number}</Link>
          </li>
        ))}
        <li className={styles.omission}>...</li>
        <li className={`${styles.page} ${styles.arrow}`}>
          <Link href="/media/1">
            <Image
              src="https://blog.microcms.io/images/icon_arrow_right.svg"
              width="20"
              height="24"
              alt=""
            />
          </Link>
        </li>
      </ul>
      {/* <ul className={styles.pager}>
        <li className={`${styles.page} ${styles.active}`}>
          <Link href="/media/1">1</Link>
        </li>
        <li className={styles.page}>
          <Link href="/media/1">2</Link>
        </li>
        <li className={styles.page}>
          <Link href="/media/1">3</Link>
        </li>
        <li className={styles.omission}>...</li>
        <li className={styles.page}>
          <Link href="/media/1">38</Link>
        </li>
      </ul> */}
    </div>
  );
}
