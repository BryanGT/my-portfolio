import { blogPosts } from "@/app/data/blogPosts";
import { notFound } from "next/navigation";

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
 }) {

  const params = await props.params;
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-4">{post.date}</p>
      <div className="prose">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
