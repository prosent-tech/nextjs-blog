import styles from "./index.module.css";
import { useEffect } from "react";
import styled from "styled-components";

declare global {
  var twttr: any;
  var instgrm: any;
  var iframely: any;
}

export default function RichEditor({ content }: any) {
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
    <RichEditorStyled
      dangerouslySetInnerHTML={{
        __html: content,
      }}
      className={styles.post}
      suppressHydrationWarning={true}
    />
  );
}

// ref: https://blog.microcms.io/custom-class-examples/
const RichEditorStyled = styled.div`
  // ハイライト
  p {
    > span.highlight {
      font-weight: bold;
      background: linear-gradient(
        transparent 50%,
        #fcff52 60% 90%,
        transparent 90%
      );
    }
  }

  // テキスト(大)
  p {
    > span.text-large {
      font-size: 24px;
      font-weight: bold;
    }
  }

  p {
    > span.callout {
      display: flex;
      align-items: flex-start;
      padding: 20px 20px 20px 10px;
      border-radius: 8px;
      font-size: 16px;

      &::before {
        position: relative;
        top: -10px;
        transform: scale(0.6);
      }

      &.memo {
        background-color: #e8f3d6;
        &::before {
          content: url("../icon_info.svg");
        }
      }

      &.caution {
        background-color: #f3d6d6;
        &::before {
          content: url("../icon_warning.svg");
        }
      }
    }
  }

  
`;
