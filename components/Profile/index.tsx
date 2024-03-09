import Image from "next/image";
import styles from "./index.module.css";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.profileTitle}>
        <Image
          src="https://www.mimipo.jp/facecare/assets/img/ogp.jpg"
          width={1024}
          height={700}
          alt="プロフィール背景画像"
        />
        <p className={styles.profileName}>Mimipoオンラインクリニック</p>
      </div>
      <div className={styles.profileDetail}>
        Mimipoオンラインクリニックは、皮膚治療の先進的なサービスを提供しています。イソトレチノインを含む効果的な治療法をオンラインで提供し、ニキビや他の皮膚問題に悩む患者に役立ちます。個々の状況に応じた最適な治療計画を提供し、皮膚の健康を改善するお手伝いをします。
      </div>
    </div>
  );
}
