"use client";

import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getCategoryStyles } from "./Blog";

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
                        className="p-6 md:p-7 rounded-2xl border border-border/50 dark:border-border/10 bg-card/30 backdrop-blur-md hover:bg-card/75 hover:border-primary/30 transition-all duration-500 group flex flex-col justify-between min-h-[300px] relative overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)] shadow-xs"
                    >
                        {/* Background gradient flare on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        {/* Top Glow Accent Line */}
                        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="space-y-4">
                            {/* Metadata */}
                            <div className="flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground">
                                <div className="flex flex-wrap gap-1">
                                    {post.categories.slice(0, 2).map((category) => {
                                        const style = getCategoryStyles(category);
                                        return (
                                            <span
                                                key={category}
                                                className={cn(
                                                    "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-medium border transition-all duration-300",
                                                    style.text,
                                                    style.bg,
                                                    style.border
                                                )}
                                            >
                                                <span className={cn("size-1 rounded-full animate-pulse", style.dot)} />
                                                {category}
                                            </span>
                                        );
                                    })}
                                </div>
                                <span className="flex items-center gap-0.5 ml-1 text-[11px] font-medium">
                                    <Calendar className="size-3 text-muted-foreground" />
                                    {post.date.split(",")[0]}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-base md:text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2">
                                {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                {post.excerpt}
                            </p>
                        </div>

                        {/* Bottom Button Layout */}
                        <div className="mt-6 flex items-center justify-between">
                            <span className="text-xs font-semibold text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out select-none">
                                Ler artigo
                            </span>
                            <div
                                className={cn(
                                    buttonVariants({ variant: "outline", size: "icon" }),
                                    "rounded-xl size-9 bg-card border-border/80 text-foreground shadow-xs transition-all duration-500 ease-out",
                                    "group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:scale-105 group-hover:shadow-[0_4px_12px_rgba(var(--primary),0.15)] cursor-pointer"
                                )}
                            >
                                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </div>
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
