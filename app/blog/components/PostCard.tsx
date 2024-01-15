import { Pin } from "lucide-react";
import Link from "next/link";

interface PostCardData {
  id: string;
  title: string;
  slug: string;
  fixed: boolean;
  createdAt: string;
}

export const PostCard = ({
  createdAt,
  id,
  slug,
  title,
  fixed,
}: PostCardData) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg border-b-2 border-b-blue-600  md:shadow-xl hover:scale-110 ease-in duration-300 hover:cursor-pointer">
      <Link href={`/blog/${slug}`}>
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="h-36 w-full object-cover"
        />
        <div className="p-4">
          <div className="flex w-full justify-between">
            <time dateTime={createdAt} className="block text-xs text-gray-500">
              {new Intl.DateTimeFormat("pt-BR").format(new Date(createdAt))}
            </time>
            {fixed ? (
              <Pin color="black" size={20} className="rotate-45" />
            ) : (
              <></>
            )}
          </div>

          <h3 className="mt-0.5 text-lg text-gray-900 hover:text-blue-600">
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
};
