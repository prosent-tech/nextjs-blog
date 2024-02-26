import Layout from "@/components/Layout";
import Divider from "@/components/Divider";
import { client } from "../../../libs/microcms";
import Aside from "@/components/Aside";
import Ad from "@/components/Ad";
import Ranking from "@/components/Ranking";
import Category from "@/components/Category";
import Tag from "@/components/Tag";
import { Articles } from "@/components/Articles";

const PER_PAGE = 5;

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const newsData = await client.get({
    endpoint: "news",
    queries: { offset: (id - 1) * 5, limit: 5 },
  });
  const categoryData = await client.get({ endpoint: "categories" });
  const tagData = await client.get({ endpoint: "tags" });
  return {
    props: {
      news: newsData.contents,
      category: categoryData.contents,
      tag: tagData.contents,
      totalCount: newsData.totalCount,
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

export default function MediaId({ news, category, tag, totalCount }: any) {
  console.log(news);
  return (
    <Layout>
      <Divider>
        <Articles articles={news} totalCount={totalCount} />
        <Aside>
          <Ad />
          <Ranking />
          <Category category={category} />
          <Tag tag={tag} />
        </Aside>
      </Divider>
    </Layout>
  );
}
