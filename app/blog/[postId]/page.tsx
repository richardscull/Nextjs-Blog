import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";
import ListDataItems from "../listDataItems";

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
    <main className="flex justify-center items-center mx-auto m-auto mt-4 px-4 ">
      <div className="flex ">
        <div className="md:gap-0 mr-10 ">
          <nav>
            <ul className="text-1xl p-2 my-5 w-full">
              <h1 className="text-1xl font-bold max-w-full">Posts by date</h1>
              <ListDataItems posts={posts} />
            </ul>
          </nav>
        </div>

        <div className="prose prose-lg prose-invert ">
          <div className="border-b-2 pb-12">
            <h1 className="text-4xl my-5">{title}</h1>
            <p className="-my-3">{pubDate}</p>
          </div>
          <article>
            <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <p className="text-center text-2xl">
              {tags ? `🔗 Tags: ${tags?.join(", ")}` : ""}
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
