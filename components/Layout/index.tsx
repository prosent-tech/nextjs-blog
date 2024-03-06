import Header from "../Header";
import Footer from "../Footer";
import { Noto_Sans_JP } from "next/font/google";

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className={notojp.className}>{children}</div>
      <Footer />
    </>
  );
}
