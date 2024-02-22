import { client } from "../../libs/microcms";
import Layout from "../../components/Layout";
import { Contents } from "../../components/Contents";

import { ContentsProps } from "../../components/Contents";

import Divider from "../../components/Divider";
import Aside from "../../components/Aside";
import Ad from "../../components/Ad";
import Ranking from "@/components/Ranking";
import Category from "@/components/Category";
import Tag from "@/components/Tag";

export async function getStaticProps() {
  const data = await client.get({
    endpoint: "news",
    queries: { limit: 10 },
  });
  return {
    props: {
      news: data.contents,
    },
  };
}

export default function Home({ news }: any) {
  console.log(news);
  return (
    <Layout>
      <Divider>
        <Contents contents={news} />
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
