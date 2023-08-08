"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AiFillBook,
  AiFillExperiment,
  AiFillHome,
  AiOutlineMenu,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-neutral-800 p-3 sticky z-10">
      {/* Logo and text */}
      <div className="flex items-center mx-auto place-content-center logo-text">
        <link rel="icon" href="/favicon.ico" />
        <div className="mx-3">
          <Image
            src="/images/HuTaoLogo.png"
            alt="logo"
            width={90}
            height={90}
          />
        </div>
        <div className="">
          <p className="font-bold tracking-tight">Richard&apos;s blog</p>
          <p className="font-normal italic items-center logo-small ">
            by <a href="https://github.com/richardscull">richardscull</a>
          </p>
        </div>
        {/* Mobile button */}
        <button
          onClick={handleNav}
          className="block sm:hidden z-10 fixed justify-end right-5 text-3xl"
        >
          <AiOutlineMenu />
        </button>
        {/* Mobile nav menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-20 sm:hidden"
            onClick={handleNav}
          ></div>
        )}
        <div
          className={`transform transition-transform duration-300 sm:hidden ${
            isMenuOpen ? "translate-x-none" : "translate-x-full"
          } fixed top-0 right-0 w-64 bg-neutral-800 h-screen z-30`}
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

          <ul className="p-4 mx-auto">
            <li className="mb-4" onClick={handleNav}>
              <Link href="/" className="text-xl flex items-center">
                <div className="p-2">
                  <AiFillHome />
                </div>
                Main Menu
              </Link>
            </li>
            <li className="mb-4" onClick={handleNav}>
              <Link href="/blog" className="text-xl flex items-center">
                <div className="p-2">
                  <AiFillBook />
                </div>
                Blog
              </Link>
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
      </div>
      {/* Navigation buttons */}
      <div className="items-center mx-auto place-content-center hidden sm:flex">
        <p className="font-bold items-center text-lg">
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
