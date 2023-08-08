import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { postId: string };
}) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post)
    return {
      title: "Not found",
    };

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) return notFound();

  const { title, date, tags, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="px-3 prose prose-base prose-invert mx-auto">
      <h1 className="text-4xl my-5 text-center">{title}</h1>
      <p className="text-center">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p className="text-center text-2xl">
          {tags ? `🔗 Tags: ${tags?.join(", ")}` : ""}
        </p>
      </article>
    </main>
  );
}
