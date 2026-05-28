import { getPostBySlug } from "@/lib/blog";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: "Artigo Não Encontrado",
        };
    }

    return {
        title: `${post.title} | Blog Pedro Casseb`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="relative max-w-4xl mx-auto min-h-screen border-x-2 border-dotted border-border/40 flex flex-col px-6 pt-24 pb-16 md:pt-32 md:pb-20">
            {/* Back Button */}
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground mb-8 transition-colors self-start group select-none"
            >
                <ArrowLeft className="size-3.5 group-hover:-translate-x-0.5 transition-transform duration-300" />
                Voltar para o blog
            </Link>

            {/* Article Header */}
            <header className="space-y-4 mb-8">
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    {post.categories.map((category) => (
                        <span key={category} className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground font-medium select-none">
                            {category}
                        </span>
                    ))}
                    <span className="flex items-center gap-1">
                        <Calendar className="size-3.5" />
                        {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="size-3.5" />
                        {post.readTime}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-linear-to-r from-neutral-950 via-neutral-700 to-neutral-500 dark:from-neutral-50 dark:via-neutral-300 dark:to-neutral-500 bg-clip-text text-transparent leading-tight">
                    {post.title}
                </h1>
            </header>

            <hr className="border-t-2 border-dotted border-border/40 mb-8" />

            {/* Article Content Area */}
            <article
                className="prose dark:prose-invert max-w-none w-full"
                dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
        </div>
    );
}
