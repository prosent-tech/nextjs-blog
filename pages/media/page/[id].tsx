import Layout from "@/components/Layout";
import Divider from "@/components/Divider";
import { client } from "../../../libs/microcms";
import Aside from "@/components/Aside";
import Ad from "@/components/Ad";
import Ranking from "@/components/Ranking";
import Category from "@/components/Category";
import Tag from "@/components/Tag";
import { Contents } from "@/components/Contents";

const PER_PAGE = 5;

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "news",
    queries: { offset: (id - 1) * 5, limit: 5 },
  });
  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount,
    },
  };
};

export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: "news" });
  const range = (start: any, end: any) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/media/page/${repo}`,
  );
  return { paths, fallback: false };
};

export default function MediaId({ news, totalCount }: any) {
  console.log(news);
  return (
    <Layout>
      <Divider>
        <Contents contents={news} totalCount={totalCount} />
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
