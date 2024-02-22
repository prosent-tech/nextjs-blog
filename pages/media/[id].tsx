import Layout from "@/components/Layout";
import Divider from "@/components/Divider";
import { client } from "../../libs/microcms";
import Aside from "@/components/Aside";
import Ad from "@/components/Ad";
import Ranking from "@/components/Ranking";
import Category from "@/components/Category";
import Tag from "@/components/Tag";
import Content from "@/components/Content";

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const newsData = await client.get({
    endpoint: "news",
    contentId: id,
  });
  const categoryData = await client.get({ endpoint: "categories" });
  const tagData = await client.get({ endpoint: "tags" });
  return {
    props: {
      news: newsData,
      category: categoryData.contents,
      tag: tagData.contents,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });
  const paths = data.contents.map((content: any) => `/media/${content.id}`);
  return { paths, fallback: false };
};

export default function MediaId({ news, category, tag }: any) {
  return (
    <Layout>
      <Divider>
        <Content content={news} />
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
