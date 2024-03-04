import { useRouter } from "next/router";
import styles from "./index.module.css";
import { useEffect } from "react";

declare global {
  var twttr: any;
  var instgrm: any;
  var iframely: any;
}

export default function RichEditor({ content }: any) {
  const { asPath } = useRouter();
  console.log(asPath);

  useEffect(() => {
    try {
      window.twttr.widgets.load();
      window.iframely.load();
      window.instgrm.Embeds.process();
    } catch (e) {
      console.log(e);
    }
  }, []);

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
