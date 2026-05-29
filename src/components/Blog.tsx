"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowUpRight, Search, Calendar, Clock } from "lucide-react";
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

const CATEGORIES = ["Todos", "Next.js", "React", "TypeScript", "Performance", "CSS", "Java"];

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
            className="relative w-full max-w-6xl mx-auto min-h-screen border-x-2 border-dotted border-border/40 flex flex-col px-6 pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden"
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
            </div>

            {/* Articles List / Grid */}
            <div className="animate-blog-list opacity-0 w-full max-w-4xl mx-auto z-10 flex-1 flex flex-col justify-between">
                {paginatedPosts.length > 0 ? (
                    <div className="space-y-6">
                        {paginatedPosts.map((post) => (
                            <Link
                                href={`/blog/${post.slug}`}
                                key={post.id}
                                className="animate-blog-card opacity-0 p-6 rounded-xl border border-border/60 bg-card/40 backdrop-blur-xs hover:bg-card/85 hover:border-border hover:shadow-xs transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-6"
                            >
                                <div className="space-y-3 flex-1">
                                    {/* Metadata */}
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
                                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                </div>

                                {/* Minimal Square Arrow Button */}
                                <div
                                    className={
                                        buttonVariants({ variant: "default", size: "icon" }) +
                                        " shrink-0"
                                    }
                                >
                                    <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
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
