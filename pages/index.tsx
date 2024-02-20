import { client } from "../libs/microcms";

export async function getStaticProps() {
  const data = await client.get({
    endpoint: "news",
    queries: { limit: 10 },
  });
  console.log(data.contents);
  return {
    props: {
      news: data.contents,
    },
  };
}

export default function Index() {
  return <div></div>;
}
