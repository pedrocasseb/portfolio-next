import { Blog } from "@/components/Blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Pedro's Portfolio",
    description:
        "Artigos, tutoriais e reflexões de Pedro Casseb sobre desenvolvimento web moderno, Next.js, React, TypeScript e performance.",
};

export default function BlogPage() {
    return <Blog />;
}
