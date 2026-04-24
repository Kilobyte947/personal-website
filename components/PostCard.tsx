import Link from "next/link";
import { tagColor } from "@/lib/tagColor";

type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="py-6 border-b border-gray-100 last:border-0 pl-4 border-l-2 border-l-transparent group-hover:border-l-blue-400 transition-all">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{post.description}</p>
            {post.tags && (
              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2 py-0.5 rounded-md font-medium ${tagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <time className="text-xs text-gray-400 shrink-0 mt-0.5">{post.date}</time>
        </div>
      </article>
    </Link>
  );
}
