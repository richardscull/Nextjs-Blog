import { getSortedPostsData } from "@/lib/posts";
import ListItems from "./listItems";

export default function Blog() {
  const posts = getSortedPostsData();

  if (!posts.length)
    return (
      <section className="w-full mx-auto place-content-center flex my-5">
        <p className="text-2xl">No posts found.</p>
      </section>
    );

  return (
    <section className="w-full mx-auto place-content-center flex my-5">
      <ul className="text-2xl">
        {posts.map((post) => (
          <ListItems key={post.id} post={post} />
        ))}
      </ul>
      {/* TODO: add pagination */}
    </section>
  );
}
