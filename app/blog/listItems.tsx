import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Props = {
  post: Blogpost;
};
export default function ListItems({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="my-2 mx-fit whitespace-normal text-center" key={id}>
      <Link href={`/blog/${id}`}>{title}</Link>
      <br />
      <small className="text-gray-500">↳ {formattedDate}</small>
    </li>
  );
}
