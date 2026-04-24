import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata = {
  title: "Blog — Nick Wang",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">
        Writing
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Blog</h1>
      <p className="text-gray-500 mb-12">
        Notes on distributed systems, machine learning, and quantitative finance.
      </p>

      {posts.length === 0 ? (
        <p className="text-gray-400">No posts yet.</p>
      ) : (
        <div>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
