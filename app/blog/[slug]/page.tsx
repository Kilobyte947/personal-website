import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.meta.title} — Nick Wang` };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-10"
      >
        <ArrowLeft size={14} />
        Back to Blog
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-3">
          {post.meta.title}
        </h1>
        <div className="flex items-center gap-4">
          <time className="text-sm text-gray-400">{post.meta.date}</time>
          {post.meta.tags && post.meta.tags.length > 0 && (
            <div className="flex gap-2">
              {post.meta.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-md font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <article className="prose">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
