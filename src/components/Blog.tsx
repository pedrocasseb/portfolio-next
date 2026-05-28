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
    category: string;
    slug: string;
};

const MOCK_POSTS: Post[] = [
    {
        id: 1,
        title: "Desvendando o Next.js 16 e React 19: O que há de novo?",
        excerpt: "Uma análise profunda das novas APIs do React 19, melhorias do compilador do Next.js e como preparar seu portfólio para o futuro.",
        date: "28 de Maio, 2026",
        readTime: "6 min de leitura",
        category: "Next.js",
        slug: "nextjs-16-react-19-novidades",
    },
    {
        id: 2,
        title: "GSAP + React: Guia definitivo para animações de alto desempenho",
        excerpt: "Aprenda a estruturar animações complexas, sequenciamento de timelines e controle de renderização no React sem perder performance.",
        date: "24 de Maio, 2026",
        readTime: "8 min de leitura",
        category: "Performance",
        slug: "gsap-react-guia-animacoes-suaves",
    },
    {
        id: 3,
        title: "TypeScript Avançado: Tipagens e Utilitários indispensáveis",
        excerpt: "Explore recursos avançados de tipagem, condicionais, tipos mapeados e genéricos que vão elevar o nível do seu código TypeScript.",
        date: "18 de Maio, 2026",
        readTime: "5 min de leitura",
        category: "TypeScript",
        slug: "typescript-avancado-utilitarios",
    },
    {
        id: 4,
        title: "Tailwind CSS v4: O futuro da estilização utilitária na Web",
        excerpt: "Entenda as mudanças arquiteturais do Tailwind CSS v4, suporte nativo a CSS variáveis e o novo motor de compilação ultra-rápido.",
        date: "12 de Maio, 2026",
        readTime: "4 min de leitura",
        category: "CSS",
        slug: "tailwind-css-v4-futuro",
    },
    {
        id: 5,
        title: "Otimizando Core Web Vitals em portfólios estáticos de desenvolvedores",
        excerpt: "Estratégias práticas de otimização de imagens, carregamento de fontes e eliminação de Javascript bloqueante para notas 100 no Lighthouse.",
        date: "05 de Maio, 2026",
        readTime: "7 min de leitura",
        category: "Performance",
        slug: "otimizando-core-web-vitals-performance",
    },
    {
        id: 6,
        title: "Como estruturar um projeto Next.js escalável usando App Router",
        excerpt: "Melhores práticas de organização de pastas, roteamento, modularização de componentes e uso estratégico de Server e Client Components.",
        date: "30 de Abril, 2026",
        readTime: "9 min de leitura",
        category: "Next.js",
        slug: "estruturando-projeto-nextjs-escalavel",
    },
    {
        id: 7,
        title: "Estado Global no React em 2026: Do Context API ao Zustand",
        excerpt: "Um comparativo detalhado sobre gerenciamento de estado no React moderno. Quando usar Context, Redux, Zustand ou Signals.",
        date: "22 de Abril, 2026",
        readTime: "7 min de leitura",
        category: "React",
        slug: "estado-global-react-zustand-context",
    },
    {
        id: 8,
        title: "A importância da acessibilidade (a11y) no desenvolvimento frontend",
        excerpt: "Como tornar suas aplicações acessíveis utilizando tags semânticas, leitores de tela ARIA e navegação simplificada por teclado.",
        date: "15 de Abril, 2026",
        readTime: "5 min de leitura",
        category: "CSS",
        slug: "acessibilidade-a11y-desenvolvimento-frontend",
    },
    {
        id: 9,
        title: "Construindo uma biblioteca de componentes agnóstica e performática",
        excerpt: "Aprenda os segredos por trás da criação de sistemas de design flexíveis, empacotamento NPM e suporte a múltiplos frameworks.",
        date: "08 de Abril, 2026",
        readTime: "8 min de leitura",
        category: "React",
        slug: "construindo-biblioteca-componentes-design-system",
    },
    {
        id: 10,
        title: "Segurança em APIs Node.js: Melhores práticas essenciais",
        excerpt: "Proteja seus endpoints de ataques comuns implementando rate limiting, sanitização de inputs, CORS seguro e autenticação JWT robusta.",
        date: "02 de Abril, 2026",
        readTime: "6 min de leitura",
        category: "TypeScript",
        slug: "seguranca-apis-nodejs-jwt",
    },
    {
        id: 11,
        title: "Aplicações Serverless com Next.js: Prós e Contras em produção",
        excerpt: "Analise os impactos de custos, cold starts e escalabilidade infinita de funções serverless rodando no Vercel, AWS e Netlify.",
        date: "25 de Março, 2026",
        readTime: "8 min de leitura",
        category: "Next.js",
        slug: "aplicacoes-serverless-nextjs-pros-contras",
    },
    {
        id: 12,
        title: "Guia de transição de CSS nativo para Nesting e Modern CSS em 2026",
        excerpt: "Descubra como o CSS moderno elimina a necessidade de pré-processadores como SASS usando CSS Nesting, variáveis locais e CSS grid avançado.",
        date: "18 de Março, 2026",
        readTime: "5 min de leitura",
        category: "CSS",
        slug: "guia-modern-css-nesting",
    },
];

const CATEGORIES = ["Todos", "Next.js", "React", "TypeScript", "Performance", "CSS"];

export function Blog() {
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
        return MOCK_POSTS.filter((post) => {
            const matchesCategory =
                activeCategory === "Todos" || post.category === activeCategory;
            const matchesSearch =
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.category.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [searchQuery, activeCategory]);

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
            </div>

            {/* Articles List / Grid */}
            <div className="animate-blog-list opacity-0 w-full max-w-4xl mx-auto z-10 flex-1 flex flex-col justify-between">
                {paginatedPosts.length > 0 ? (
                    <div className="space-y-6">
                        {paginatedPosts.map((post) => (
                            <article
                                key={post.id}
                                className="animate-blog-card opacity-0 p-6 rounded-xl border border-border/60 bg-card/40 backdrop-blur-xs hover:bg-card/85 hover:border-border hover:shadow-xs transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-6"
                            >
                                <div className="space-y-3 flex-1">
                                    {/* Metadata */}
                                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                                        <span className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground font-medium">
                                            {post.category}
                                        </span>
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
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className={
                                        buttonVariants({ variant: "default", size: "icon" }) +
                                        " group shrink-0"
                                    }
                                >
                                    <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                </Link>
                            </article>
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
