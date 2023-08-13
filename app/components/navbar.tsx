"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AiFillBook,
  AiFillExperiment,
  AiFillHome,
  AiOutlineMenu,
  AiOutlineMenuUnfold,
} from "react-icons/ai";

type Post = {
  title: string;
  date: string;
  id: string;
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const handleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBlog = () => {
    setIsBlogOpen(!isBlogOpen);
  };

  const closeAllNav = () => {
    setIsMenuOpen(false);
    setIsBlogOpen(false);
  };

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/getPosts");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <nav className="bg-neutral-800 p-3 sticky z-10 ">
      {/* Logo and text */}
      <div className="flex items-center mx-auto place-content-center logo-text">
        <div className="mx-3">
          <Link href="/">
            <Image
              src="/images/HuTaoLogo.png"
              alt="logo"
              width={90}
              height={90}
            />
          </Link>
        </div>
        <div>
          <a href="/" className="font-bold tracking-tight flex">
            Richard&apos;s blog
          </a>
          <p className="font-normal italic items-center logo-small ">
            by <a href="https://github.com/richardscull">richardscull</a>
          </p>
        </div>
        {/* Mobile button */}
        <button
          onClick={handleNav}
          className="block sm:hidden z-10 justify-end right-5 text-3xl absolute top-10"
        >
          <AiOutlineMenu />
        </button>
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-20 sm:hidden"
            onClick={closeAllNav}
          ></div>
        )}
        {/* Mobile nav menu */}
        <div
          className={`transform transition-transform duration-300 sm:hidden ${
            isMenuOpen ? "translate-x-none" : "translate-x-full"
          } fixed top-0 right-0 w-64 bg-neutral-800 h-screen z-30 `}
        >
          <div className="flex items-center mx-auto place-content-center logo-text bg-neutral-900 p-2">
            <div className="mx-3">
              <Image
                src="/images/HuTaoNavigation.png"
                alt="logo"
                width={50}
                height={50}
              />
            </div>
            <p className="font-bold tracking-tight">Navigation</p>
            <button
              onClick={handleNav}
              className="block sm:hidden fixed justify-end right-2 text-3xl mx-1"
            >
              <AiOutlineMenuUnfold />
            </button>
          </div>

          <ul className="p-4 mx-auto ">
            <li className="mb-4 " onClick={handleNav}>
              <Link href="/" className="text-xl flex items-center">
                <div className="p-2 ">
                  <AiFillHome />
                </div>
                Main Menu
              </Link>
            </li>

            <li className="mb-4" onClick={handleBlog}>
              <label className="text-xl flex items-center">
                <div className="p-2">
                  <AiFillBook />
                </div>
                Blog
                <span className="mdi mdi-chevron-right justify-end ml-32"></span>
              </label>
            </li>
            <li className="mb-4" onClick={handleNav}>
              <Link href="/lagtrain" className="text-xl flex items-center">
                <div className="p-2">
                  <AiFillExperiment />
                </div>
                Lagtrain
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile blog menu */}
        <div
          className={`transform transition-transform duration-300 sm:hidden ${
            isBlogOpen ? "translate-x-none" : "translate-x-full"
          } fixed top-0 right-0 w-64 bg-neutral-800 h-screen z-30`}
        >
          <div className="flex items-center mx-auto place-content-center logo-text bg-neutral-900 p-2">
            <div className="mx-3">
              <Image
                src="/images/XingqiuPosts.png"
                alt="logo"
                width={50}
                height={50}
              />
            </div>
            <p className="font-bold tracking-tight">Posts</p>
            <button
              onClick={handleBlog}
              className="block sm:hidden fixed justify-end right-2 text-3xl mx-1"
            >
              <span className="mdi mdi-arrow-u-left-bottom"></span>
            </button>
          </div>

          <ul className="p-4 mx-auto">
            {/* TODO: Make nested lists by date  */}
            {posts.map((post) => (
              <li key={post.id} onClick={closeAllNav}>
                <Link href={`/blog/${post.id}`} className="text-xl flex ">
                  <span className="mdi mdi-chevron-right"></span>

                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Full screen Navigation labels */}
      <div className="items-center mx-auto place-content-center hidden sm:flex">
        <p className="font-bold items-center text-lg text-center">
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
