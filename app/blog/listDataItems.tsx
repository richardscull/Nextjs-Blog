"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

type Props = {
  posts: Blogpost[];
};
export default function ListDataItems({ posts }: Props) {
  const [openYears, setOpenYears] = useState<{ [year: number]: boolean }>({});
  const [openMonths, setOpenMonths] = useState<{ [month: string]: boolean }>(
    {}
  );

  const handleYearClick = (year: number) => {
    setOpenYears((prevOpenYears) => ({
      ...prevOpenYears,
      [year]: !prevOpenYears[year],
    }));
  };
  const handleMonthClick = (year: number, month: string) => {
    setOpenMonths((prevOpenMonths) => ({
      ...prevOpenMonths,
      [`${year}-${month}`]: !prevOpenMonths[`${year}-${month}`],
    }));
  };

  const PostsYears = posts
    .map((post) => new Date(post.date).getFullYear())
    .filter((year, index, self) => self.indexOf(year) === index);

  return (
    <>
      {PostsYears.map((year) => (
        <li key={year} className="my-2 mx-fit whitespace-normal text-right">
          <label
            className="text-1xl justify-between flex items-center justify-items-start flex-auto"
            onClick={() => handleYearClick(year)}
          >
            <h1>{year}</h1>
            <span className="p-2 justify-end ml-32">
              <AiOutlineArrowDown />
            </span>
          </label>

          {openYears[year] && (
            <ul className="block">
              {getYearsMonths(year, posts).map((month) => (
                <li
                  key={month}
                  className="my-2 mx-3 whitespace-normal text-left"
                >
                  <label
                    className="text-1xl justify-between flex flex-auto items-center justify-items-start "
                    onClick={() => handleMonthClick(year, month.toString())}
                  >
                    <h1>{monthName(month)}</h1>
                    <span className="p-2 flex-row justify-items-end ">
                      <AiOutlineArrowDown />
                    </span>
                  </label>
                  {openMonths[`${year}-${month}`] && (
                    <ul className="block">
                      {getMonthsPosts(year, month, posts).map((post) => (
                        <li
                          key={post.id}
                          className="my-2 mx-3 whitespace-normal text-left"
                        >
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );
}

function monthName(month: number): string {
  const getMonth = new Date(`0001-${month}-01`).toLocaleDateString("ru-RU", {
    month: "long",
  });
  return getMonth.charAt(0).toUpperCase() + getMonth.slice(1);
}

function getYearsMonths(year: number, posts: Blogpost[]) {
  const PostsMonths = posts
    .filter((post) => new Date(post.date).getFullYear() === year)
    .map((post) => new Date(post.date).getMonth() + 1)
    .filter((month, index, self) => self.indexOf(month) === index);

  return PostsMonths;
}

function getMonthsPosts(year: number, month: number, posts: Blogpost[]) {
  const PostsMonths = posts
    .filter((post) => new Date(post.date).getFullYear() === year)
    .filter((post) => new Date(post.date).getMonth() === month - 1)
    .map((post) => {
      return {
        id: post.id,
        title: post.title,
      };
    });

  return PostsMonths;
}
