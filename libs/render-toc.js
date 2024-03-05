import * as cheerio from "cheerio";

export const renderToc = (body) => {
  const $ = cheerio.load(body);
  const headings = $("h1, h2, h3").toArray();
  const toc = headings.map((data) => ({
    id: data.attribs.id,
    name: data.name,
    text: data.children[0].children[0].data,
  }));
  return toc;
};
