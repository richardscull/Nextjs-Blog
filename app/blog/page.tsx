import { getSortedPostsData } from "@/lib/posts";
import ListItems from "./listItems";
import ListDataItems from "./listDataItems";

export default function Blog() {
  const posts = getSortedPostsData();

  if (!posts.length)
    return (
      <section className="w-full mx-auto place-content-center flex my-5">
        <p className="text-2xl">No posts found.</p>
      </section>
    );

  return (
    <main className="mx-auto mt-4 px-4 flex place-content-center">
      <div className="flex">
        {/* <nav className="md:gap-0">
          <ul className="text-2xl">
            <h1 className="text-2xl">Posts by date</h1>
            <ListDataItems key={null} posts={posts} />
          </ul>
        </nav>
        
        Note: I'm not sure if I want to keep this or not.

        */}
        <section className="place-content-left flex mx-0">
          <ul className="text-2xl ">
            {posts.map((post) => (
              <ListItems key={post.id} post={post} />
            ))}
          </ul>
          {/* TODO: add pagination */}
        </section>
      </div>
    </main>
  );
}
