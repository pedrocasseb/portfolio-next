"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowUpRight, Search, Calendar, Clock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type Post = {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    categories: string[];
    slug: string;
};

const CATEGORIES = ["Todos", "Next.js", "React", "TypeScript", "Performance", "CSS", "Java"];

export const getCategoryStyles = (category: string) => {
    const styles: Record<string, { dot: string; text: string; bg: string; border: string }> = {
        "Next.js": { dot: "bg-neutral-950 dark:bg-white", text: "text-neutral-900 dark:text-neutral-100", bg: "bg-neutral-100/80 dark:bg-neutral-800/80", border: "border-neutral-200 dark:border-neutral-700/60" },
        "React": { dot: "bg-sky-450", text: "text-sky-600 dark:text-sky-400", bg: "bg-sky-50 dark:bg-sky-950/20", border: "border-sky-200 dark:border-sky-800/40" },
        "TypeScript": { dot: "bg-blue-500", text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-950/20", border: "border-blue-200 dark:border-blue-800/40" },
        "Performance": { dot: "bg-emerald-500", text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/20", border: "border-emerald-200 dark:border-emerald-800/40" },
        "CSS": { dot: "bg-pink-500", text: "text-pink-600 dark:text-pink-400", bg: "bg-pink-50 dark:bg-pink-950/20", border: "border-pink-200 dark:border-pink-800/40" },
        "Java": { dot: "bg-amber-600", text: "text-amber-600 dark:text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/20", border: "border-amber-200 dark:border-amber-800/40" },
    };
    return styles[category] || { dot: "bg-primary", text: "text-muted-foreground", bg: "bg-muted/50", border: "border-border/60" };
};

export function Blog({ posts }: { posts: Post[] }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [currentPage, setCurrentPage] = useState(1);

    const POSTS_PER_PAGE = 8;

    // Reset current page when query or category changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, activeCategory]);

    // Scroll to top when page changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]);

    // Filter posts based on category and search query
    const filteredPosts = useMemo(() => {
        return posts.filter((post) => {
            const matchesCategory =
                activeCategory === "Todos" || post.categories.includes(activeCategory);
            const matchesSearch =
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.categories.some((cat) => cat.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [posts, searchQuery, activeCategory]);

    // Compute total pages
    const totalPages = useMemo(() => {
        return Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    }, [filteredPosts]);

    // Slice posts for current page pagination
    const paginatedPosts = useMemo(() => {
        const start = (currentPage - 1) * POSTS_PER_PAGE;
        const end = start + POSTS_PER_PAGE;
        return filteredPosts.slice(start, end);
    }, [filteredPosts, currentPage]);

    // Initial page load GSAP animation
    useEffect(() => {
        if (!containerRef.current) return;

        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        const header = containerRef.current.querySelector(".animate-blog-header");
        const filters = containerRef.current.querySelector(".animate-blog-filters");
        const cardsContainer = containerRef.current.querySelector(".animate-blog-list");

        gsap.set([header, filters, cardsContainer], { opacity: 0 });

        tl.fromTo(
            header,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.1 }
        )
            .fromTo(
                filters,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            )
            .fromTo(
                cardsContainer,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            );

        return () => {
            tl.kill();
        };
    }, []);

    // Filter or Page stagger GSAP animation on list update
    useEffect(() => {
        const cards = containerRef.current?.querySelectorAll(".animate-blog-card");
        if (cards && cards.length > 0) {
            gsap.fromTo(
                cards,
                { y: 20, opacity: 0, scale: 0.98 },
                { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" }
            );
        }
    }, [paginatedPosts]);

    return (
        <div
            ref={containerRef}
            className="relative max-w-6xl mx-auto min-h-screen border-x-2 border-dotted border-border/40 flex flex-col px-6 pt-24 pb-16 md:pt-32 md:pb-20"
        >
            {/* Header Section */}
            <div className="animate-blog-header opacity-0 text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-linear-to-r from-neutral-950 via-neutral-700 to-neutral-500 dark:from-neutral-50 dark:via-neutral-300 dark:to-neutral-500 bg-clip-text text-transparent">
                    Meu Blog & Artigos
                </h1>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Compartilhando experiências, insights e tutoriais detalhados sobre desenvolvimento
                    web moderno, performance, clean code e arquiteturas escaláveis.
                </p>
            </div>

            {/* Filters Section (Search + Category Tabs) */}
            <div className="animate-blog-filters opacity-0 space-y-6 mb-12 z-10 w-full">
                {/* Search Bar */}
                <div className="relative max-w-md mx-auto group">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground transition-colors group-focus-within:text-foreground" />
                    <input
                        type="text"
                        placeholder="Buscar por artigos, temas..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-10 pl-10 pr-4 text-sm bg-card/45 hover:bg-card/85 focus:bg-card border border-border/60 focus:border-border rounded-xl outline-none transition-all duration-300 shadow-xs focus:ring-1 focus:ring-ring"
                    />
                </div>

                {/* Categories Tab selector */}
                <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto px-4">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`h-8 px-3 rounded-lg text-xs font-medium border transition-all duration-300 cursor-pointer ${
                                activeCategory === category
                                    ? "bg-primary border-primary text-primary-foreground shadow-xs"
                                    : "bg-card/40 border-border/40 text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>            {/* Articles List / Grid */}
            <div className="animate-blog-list opacity-0 w-full max-w-4xl mx-auto z-10 flex-1 flex flex-col justify-between">
                {paginatedPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {paginatedPosts.map((post) => (
                            <Link
                                href={`/blog/${post.slug}`}
                                key={post.id}
                                className="animate-blog-card opacity-0 p-6 md:p-7 rounded-2xl border border-border/50 dark:border-border/10 bg-card/30 backdrop-blur-md hover:bg-card/75 hover:border-primary/30 transition-all duration-500 group flex flex-col justify-between min-h-[260px] relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)] shadow-xs"
                            >
                                {/* Background gradient flare on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                {/* Top Glow Accent Line */}
                                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="space-y-4">
                                    {/* Metadata (Categories) */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {post.categories.map((category) => {
                                            const style = getCategoryStyles(category);
                                            return (
                                                <span
                                                    key={category}
                                                    className={cn(
                                                        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium border transition-all duration-300",
                                                        style.text,
                                                        style.bg,
                                                        style.border
                                                    )}
                                                >
                                                    <span className={cn("size-1.5 rounded-full animate-pulse", style.dot)} />
                                                    {category}
                                                </span>
                                            );
                                        })}
                                    </div>

                                    {/* Date & Time */}
                                    <div className="flex items-center gap-3 text-[11px] text-muted-foreground font-medium select-none">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="size-3.5" />
                                            {post.date}
                                        </span>
                                        <span className="h-3 w-px bg-border/60" />
                                        <span className="flex items-center gap-1">
                                            <Clock className="size-3.5" />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2">
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
                ) : (
                    <div className="text-center py-20 border border-dashed border-border/40 rounded-xl bg-card/20">
                        <p className="text-sm text-muted-foreground">
                            Nenhum artigo encontrado para a pesquisa selecionada.
                        </p>
                    </div>
                )}

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="animate-blog-pagination mt-12 flex items-center justify-center gap-2 z-10">
                        {/* Previous Page Button */}
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`h-9 px-3 rounded-lg text-xs font-medium border transition-all duration-300 cursor-pointer select-none ${
                                currentPage === 1
                                    ? "opacity-30 cursor-not-allowed border-border/20 text-muted-foreground"
                                    : "bg-card/45 border-border/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                        >
                            Anterior
                        </button>

                        {/* Page Numbers Buttons */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`h-9 w-9 rounded-lg text-xs font-medium border transition-all duration-300 cursor-pointer select-none ${
                                    currentPage === page
                                        ? "bg-primary border-primary text-primary-foreground shadow-xs"
                                        : "bg-card/45 border-border/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        {/* Next Page Button */}
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`h-9 px-3 rounded-lg text-xs font-medium border transition-all duration-300 cursor-pointer select-none ${
                                currentPage === totalPages
                                    ? "opacity-30 cursor-not-allowed border-border/20 text-muted-foreground"
                                    : "bg-card/45 border-border/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                        >
                            Próximo
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
