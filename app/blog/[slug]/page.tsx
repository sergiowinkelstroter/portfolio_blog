"use server";
import ReactMarkdown from "react-markdown";
import { getPost } from "@/app/_services/notion";
import { ArrowLeft, Ban } from "lucide-react";
import Link from "next/link";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return (
    <>
      <div className="w-full hidden sm:block  min-h-screen px-4 md:px-14 py-4">
        <header className="flex items-center justify-between">
          <Link href={"/blog"} className="hover:opacity-75">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl uppercase">meu blog</h1>
          <div></div>
        </header>
        <div className="mt-16  px-6 min-h-screen">
          <h1 className="text-3xl text-center mb-6">{post.title}</h1>
          <div className="w-full mb-4 flex gap-4 justify-center">
            {post.tags.multi_select.map((tag) => (
              <ul
                key={tag.id}
                className={`p-1 bg-${tag.color}-600  rounded-md`}
              >
                <li>{tag.name}</li>
              </ul>
            ))}
          </div>

          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => (
                <h2 className="text-2xl text-blue-700" {...props} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>

      <div className="sm:hidden mt-20 flex flex-col text-center text-sm">
        <span>Ops!</span>
        <span>
          Essa página ainda não está acessível para o tamanho de tela do seu
          dispositivo!
        </span>
      </div>
    </>
  );
}
