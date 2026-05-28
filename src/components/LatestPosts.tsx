"use client";

import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export type Post = {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    categories: string[];
    slug: string;
};

export function LatestPosts({ posts }: { posts: Post[] }) {
    if (!posts || posts.length === 0) return null;

    return (
        <div className="relative max-w-6xl mx-auto border-x-2 border-dotted border-border/40 px-6 py-16 md:py-24 flex flex-col items-center">
            {/* Background elements */}
            <div className="absolute bottom-0 right-10 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-primary/3 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 select-none">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/60 text-xs font-medium text-muted-foreground mb-4 backdrop-blur-xs">
                    📝 Escritos Recentes
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-linear-to-r from-neutral-950 via-neutral-700 to-neutral-500 dark:from-neutral-50 dark:via-neutral-300 dark:to-neutral-500 bg-clip-text text-transparent">
                    Últimas do Blog
                </h2>
                <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                    Confira meus artigos mais recentes sobre arquiteturas de software, dicas de performance e tutoriais avançados.
                </p>
            </div>

            {/* Grid layout of 3 latest posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl z-10">
                {posts.map((post) => (
                    <Link
                        href={`/blog/${post.slug}`}
                        key={post.id}
                        className="p-6 rounded-xl border border-border/60 bg-card/40 backdrop-blur-xs hover:bg-card/85 hover:border-border hover:shadow-xs transition-all duration-300 group flex flex-col justify-between min-h-[280px]"
                    >
                        <div className="space-y-3">
                            {/* Metadata */}
                            <div className="flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground">
                                {post.categories.slice(0, 2).map((category) => (
                                    <span
                                        key={category}
                                        className="px-1.5 py-0.5 rounded-md bg-secondary text-secondary-foreground font-medium select-none"
                                    >
                                        {category}
                                    </span>
                                ))}
                                <span className="flex items-center gap-0.5 ml-1">
                                    <Calendar className="size-3" />
                                    {post.date.split(",")[0]}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 leading-tight line-clamp-2">
                                {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                                {post.excerpt}
                            </p>
                        </div>

                        {/* Minimal Square Arrow Button */}
                        <div
                            className={
                                buttonVariants({ variant: "default", size: "icon" }) +
                                " mt-6 self-end shrink-0"
                            }
                        >
                            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </div>
                    </Link>
                ))}
            </div>

            {/* CTA Button to Blog Page */}
            <div className="mt-12 z-10">
                <Link
                    href="/blog"
                    className={buttonVariants({ variant: "outline", size: "lg" }) + " text-sm font-medium"}
                >
                    Ver todos os artigos
                </Link>
            </div>
        </div>
    );
}
