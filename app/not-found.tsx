import { AiFillHome } from "react-icons/ai";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="prose prose-base prose-invert mx-auto ">
      <Image
        src="/images/notFound.gif"
        alt="Not Found"
        width={300}
        height={300}
        className="mx-auto"
      />
      <h1 className="text-4xl my-5 text-center">404 - Not found</h1>
      <article>
        <section>
          <p className="text-center text-2xl flex mx-auto items-center place-content-center ">
            <AiFillHome className="inline-block " />
            <a href="/" className="no-underline mx-3">
              Go home
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
