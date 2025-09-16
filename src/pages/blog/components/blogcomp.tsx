// src/pages/Blog.tsx
import React from "react";
import discount from "../../../assets/discount.png";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building a Modern E-Commerce Store with 3Legant",
    excerpt:
      "Learn how the 3Legant UI design template can help you launch an online store quickly and beautifully...",
    date: "September 15, 2025",
    image: discount,
  },
  {
    id: 2,
    title: "Minimalism: A New Standard in User Experience",
    excerpt:
      "Discover how minimalist interfaces can increase conversions and improve user satisfaction...",
    date: "September 10, 2025",
    image: discount,
  },
  {
    id: 3,
    title: "Designing for Mobile Shoppers",
    excerpt:
      "Why mobile-first design matters and how to implement it effectively in your store...",
    date: "September 5, 2025",
    image: discount,
  },
];

const BlogComp: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">3Legant Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <div className="text-sm text-gray-500 mb-1">{post.date}</div>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <a
              href={`/blog/${post.id}`}
              className="inline-block px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComp;
