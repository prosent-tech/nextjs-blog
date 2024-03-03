import styles from "./index.module.css";

export default function RichEditor({ content }: any) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: content,
      }}
      className={styles.post}
      suppressHydrationWarning={true}
    />
  );
}
