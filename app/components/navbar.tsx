import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-neutral-800 p-3 sticky z-10">
      <div className="flex items-center mx-auto place-content-center">
        <link rel="icon" href="/favicon.ico" />
        <div className="mx-3">
          <Image
            src="/images/HuTaoLogo.png"
            alt="logo"
            width={90}
            height={90}
          />
        </div>
        <div>
          <p className="font-bold text-3xl tracking-tight">
            Richard&apos;s blog
          </p>
          <p className="text-2xl font-normal italic items-center">
            by <a href="https://github.com/richardscull">richardscull</a>
          </p>
        </div>
      </div>
      <div className="flex items-center mx-auto place-content-center">
        <p className="text-1xl font-bold items-center mx-3">
          <a href="/" className="mx-3">
            Main page
          </a>
          <a href="/blog" className="mx-3">
            Blog
          </a>
          <a href="/lagtrain" className="mx-3">
            Lagtrain
          </a>
        </p>
      </div>
    </nav>
  );
}
