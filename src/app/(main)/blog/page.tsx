import { Blog } from "@/components/Blog";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Pedro's Portfolio",
    description:
        "Artigos, tutoriais e reflexões de Pedro Casseb sobre desenvolvimento web moderno, Next.js, React, TypeScript e performance.",
};

export default function BlogPage() {
    const posts = getAllPosts();
    const formattedPosts = posts.map((post, idx) => ({
        id: idx + 1,
        ...post,
    }));

    return <Blog posts={formattedPosts} />;
}
