import Ad from "@/components/Ad";
import Aside from "@/components/Aside";
import Category from "@/components/Category";
import Divider from "@/components/Divider";
import Layout from "@/components/Layout";
import Ranking from "@/components/Ranking";
import Tag from "@/components/Tag";

export default function Home() {
  return (
    <Layout>
      <Divider>
        <div>Hello</div>
        <Aside>
          <Ad />
          <Ranking />
          <Category />
          <Tag />
        </Aside>
      </Divider>
    </Layout>
  );
}
