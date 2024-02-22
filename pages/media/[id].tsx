import Layout from "@/components/Layout";
import Divider from "@/components/Divider";
import { client } from "../../libs/microcms";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Aside from "@/components/Aside";
import Ad from "@/components/Ad";
import Ranking from "@/components/Ranking";
import Category from "@/components/Category";
import Tag from "@/components/Tag";
import Content from "@/components/Content";

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "news",
    contentId: id,
  });

  return {
    props: {
      news: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });
  const paths = data.contents.map((content: any) => `/media/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};

export default function NewsId({ news }: any) {
  return (
    <Layout>
      <Divider>
        <Content content={news} />
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
