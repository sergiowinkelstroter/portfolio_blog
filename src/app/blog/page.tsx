import Link from "next/link";
import { PostCard } from "./components/PostCard";
import { getPosts } from "../_services/notion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Empty from "../../public/empty-folder.png";

export default async function Blog() {
  const posts = await getPosts();
  const fixedPosts = posts.filter((post) => post.fixed === true);
  const otherPosts = posts.filter((post) => post.fixed === false);

  return (
    <div className="px-14 py-4">
      <header className="flex items-center justify-between">
        <Link href={"/"} className="hover:opacity-75">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl uppercase">meu blog</h1>
        <div></div>
      </header>
      <div className="w-full mt-20">
        {posts.length === 0 ? (
          <div className="w-max-2xl m-auto flex flex-col items-center">
            <Image alt="" src={Empty} width={70} height={70} />
            <p className="text-lg">Ainda não fiz nenhum post.</p>
            <p>Volte mais tarde!</p>
          </div>
        ) : (
          <main className="">
            <div>
              {fixedPosts.length > 0 && (
                <h2 className="text-xl">Principais posts:</h2>
              )}
              <ul className="grid md:grid-cols-4 gap-8 mt-4">
                {fixedPosts.map((post) => (
                  <li key={post.id}>
                    <PostCard
                      createdAt={post.createdAt}
                      id={post.id}
                      title={post.title}
                      slug={post.slug}
                      fixed={post.fixed}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              {fixedPosts.length > 0 && <h2 className="text-xl">Outros:</h2>}
              <ul className="grid md:grid-cols-4 gap-8 mt-4">
                {otherPosts.map((post) => (
                  <li key={post.id}>
                    <PostCard
                      createdAt={post.createdAt}
                      id={post.id}
                      title={post.title}
                      slug={post.slug}
                      fixed={post.fixed}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
