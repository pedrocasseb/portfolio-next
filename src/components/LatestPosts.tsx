"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

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
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const badge = containerRef.current.querySelector(".animate-latest-badge");
        const title = containerRef.current.querySelector(".animate-latest-title");
        const desc = containerRef.current.querySelector(".animate-latest-desc");
        const cards = containerRef.current.querySelectorAll(".animate-latest-card");
        const cta = containerRef.current.querySelector(".animate-latest-cta");

        // Hide initially to prevent FOUC
        gsap.set([badge, title, desc, cta], { opacity: 0 });
        if (cards.length > 0) gsap.set(cards, { opacity: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power4.out" }
        });

        tl.fromTo(
            badge,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.05 }
        )
            .fromTo(
                title,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            )
            .fromTo(
                desc,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            );

        if (cards.length > 0) {
            tl.fromTo(
                cards,
                { y: 30, opacity: 0, scale: 0.98 },
                { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15 },
                "-=0.6"
            );
        }

        tl.fromTo(
            cta,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            "-=0.5"
        );

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    if (!posts || posts.length === 0) return null;

    const featuredPost = posts[0];
    const secondaryPosts = posts.slice(1, 3);

    return (
        <div
            ref={containerRef}
            className="relative max-w-6xl mx-auto border-x-2 border-dotted border-border/40 px-6 py-16 md:py-24 flex flex-col items-center overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute bottom-0 right-10 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-primary/3 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 select-none">
                <div className="animate-latest-badge opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/60 text-xs font-medium text-muted-foreground mb-4 backdrop-blur-xs">
                    📝 Escritos Recentes
                </div>
                <h2 className="animate-latest-title opacity-0 text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-linear-to-r from-neutral-950 via-neutral-700 to-neutral-500 dark:from-neutral-50 dark:via-neutral-300 dark:to-neutral-500 bg-clip-text text-transparent">
                    Últimas do Blog
                </h2>
                <p className="animate-latest-desc opacity-0 text-sm text-muted-foreground max-w-xl mx-auto">
                    Confira meus artigos mais recentes sobre arquiteturas de software, dicas de performance e tutoriais avançados.
                </p>
            </div>

            {/* Asymmetrical Editorial Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl z-10">
                {/* Large Featured Post Card (Left Column - Col Span 2 on desktop) */}
                {featuredPost && (
                    <Link
                        href={`/blog/${featuredPost.slug}`}
                        key={featuredPost.id}
                        className="animate-latest-card opacity-0 md:col-span-2 p-6 md:p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-xs hover:bg-card/85 hover:border-border hover:shadow-xs transition-all duration-300 group flex flex-col justify-between min-h-[340px]"
                    >
                        <div className="space-y-4">
                            {/* Featured Badge & Date */}
                            <div className="flex items-center justify-between">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-semibold tracking-wider uppercase bg-primary text-primary-foreground select-none">
                                    Destaque
                                </span>
                                <span className="flex items-center gap-1 text-[11px] text-muted-foreground font-medium">
                                    <Calendar className="size-3.5" />
                                    {featuredPost.date}
                                </span>
                            </div>

                            {/* Categories */}
                            <div className="flex flex-wrap gap-1.5">
                                {featuredPost.categories.map((category) => (
                                    <span
                                        key={category}
                                        className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-[10px] font-medium select-none"
                                    >
                                        {category}
                                    </span>
                                ))}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                                {featuredPost.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                {featuredPost.excerpt}
                            </p>
                        </div>

                        {/* Bottom Row */}
                        <div className="mt-8 flex items-center justify-between border-t border-border/40 pt-4">
                            <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                Ler artigo completo →
                            </span>
                            <div
                                className={
                                    buttonVariants({ variant: "default", size: "icon" }) +
                                    " shrink-0"
                                }
                            >
                                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </div>
                        </div>
                    </Link>
                )}

                {/* Secondary Cards (Right Column - Col Span 1 on desktop) */}
                {secondaryPosts.length > 0 && (
                    <div className="md:col-span-1 flex flex-col gap-6">
                        {secondaryPosts.map((post) => (
                            <Link
                                href={`/blog/${post.slug}`}
                                key={post.id}
                                className="animate-latest-card opacity-0 p-5 md:p-6 rounded-2xl border border-border/60 bg-card/20 backdrop-blur-xs hover:bg-card/60 hover:border-border hover:shadow-xs transition-all duration-300 group flex flex-col justify-between flex-1 min-h-[160px]"
                            >
                                <div className="space-y-3">
                                    {/* Metadata */}
                                    <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                                        <span className="flex items-center gap-0.5 font-medium">
                                            <Calendar className="size-3" />
                                            {post.date.split(",")[0]}
                                        </span>
                                        <span className="px-1.5 py-0.2 rounded-md bg-secondary text-secondary-foreground font-medium select-none truncate max-w-[100px]">
                                            {post.categories[0]}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-sm md:text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                </div>

                                {/* Bottom Button */}
                                <div className="mt-4 flex items-center justify-end">
                                    <div
                                        className={
                                            buttonVariants({ variant: "default", size: "icon" }) +
                                            " shrink-0"
                                        }
                                    >
                                        <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* CTA Button to Blog Page */}
            <div className="animate-latest-cta opacity-0 mt-12 z-10">
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
