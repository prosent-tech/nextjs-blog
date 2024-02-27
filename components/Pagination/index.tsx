import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

const PER_PAGE = 5;

export default function Pagination({
  totalCount,
  currentPage,
}: {
  totalCount: number;
  currentPage: number;
}) {
  const range = (start: any, end: any) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const ranges = range(1, Math.ceil(totalCount / PER_PAGE));
  const finalPage = ranges.length;

  let rangeArray = [];
  if (finalPage < 5) {
    rangeArray = range(1, finalPage);
  } else if (currentPage === 1) {
    rangeArray = range(1, 3).concat(["...", finalPage]);
  } else if (currentPage === 2) {
    rangeArray = range(1, 3).concat(["...", finalPage]);
  } else if (currentPage === finalPage - 1) {
    rangeArray = [1, "..."].concat(range(finalPage - 2, finalPage));
  } else if (currentPage === finalPage) {
    rangeArray = [1, "..."].concat(range(finalPage - 2, finalPage));
  } else {
    rangeArray = [1, "..."].concat(range(currentPage - 1, currentPage + 1), [
      "...",
      finalPage,
    ]);
  }

  return (
    <div className={styles.pagination}>
      <ul className={styles.pager}>
        {currentPage !== 1 ? (
          <li className={`${styles.page} ${styles.arrow}`}>
            <Link href={`/media/page/${currentPage - 1}`}>
              <Image
                src="https://blog.microcms.io/images/icon_arrow_left.svg"
                width="20"
                height="24"
                alt=""
              />
            </Link>
          </li>
        ) : null}

        {rangeArray.map((number, index) =>
          number !== "..." ? (
            <li
              key={index}
              className={`${styles.page} ${currentPage === number ? `${styles.active}` : ""}`}
            >
              <Link href={`/media/page/${number}`}>{number}</Link>
            </li>
          ) : (
            <li key={index} className={styles.omission}>
              ...
            </li>
          ),
        )}

        {currentPage !== finalPage ? (
          <li className={`${styles.page} ${styles.arrow}`}>
            <Link href={`/media/page/${currentPage + 1}`}>
              <Image
                src="https://blog.microcms.io/images/icon_arrow_right.svg"
                width="20"
                height="24"
                alt=""
              />
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
