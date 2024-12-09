import { blogPosts } from "@/app/data/blogPosts";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul className="space-y-4">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block p-4 bg-gray-400 rounded-lg hover:bg-gray-300 transition"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-600">{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
