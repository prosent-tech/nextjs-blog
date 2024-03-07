import RichEditor from "../RichEditor";
import styles from "./index.module.css";

export default function Topic({ topic }: any) {
  console.log(topic);
  // TODO: カスタムフィールドの種類によって表示を変える
  return (
    <>
      {topic?.map((topic: any, index: any) => (
        <div key={index}>
          {topic?.fieldId === "text" && <p>{topic.text}</p>}
          {topic?.fieldId === "richEditor" && (
            <RichEditor content={topic.richEditor} />
          )}
          {topic?.fieldId === "html" && <RichEditor content={topic.html} />}
        </div>
      ))}
    </>
  );
}
