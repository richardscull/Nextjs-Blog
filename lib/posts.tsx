import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const filesNames = fs.readdirSync(postsDirectory);
  const allPostsData = filesNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const grayMatterResult = matter(fileContents);

    return {
      id,
      title: grayMatterResult.data.title,
      tags: grayMatterResult.data.tags,
      date: grayMatterResult.data.date,
    } as Blogpost;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const grayMatterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(grayMatterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    title: grayMatterResult.data.title,
    tags: grayMatterResult.data.tags,
    date: grayMatterResult.data.date,
    contentHtml,
  } as Blogpost & { contentHtml: string };
}
