"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    FolderGit2,
    Calendar,
    ArrowUpRight,
    Cpu,
    Monitor,
    Smartphone,
    Database,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ProjectData } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = ["Todos", "Frontend / Web", "Mobile", "Automação & IoT", "Backend / APIs"];

export function Projects({ projects }: { projects: ProjectData[] }) {
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [currentPage, setCurrentPage] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const PROJECTS_PER_PAGE = 6; // Fits all 5 current projects on a single page, ready to scale

    // Reset current page when active category changes
    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory]);

    // Scroll to top when page changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]);

    // Filter projects based on selected category
    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            return activeCategory === "Todos" || project.category === activeCategory;
        });
    }, [projects, activeCategory]);

    // Compute total pages
    const totalPages = useMemo(() => {
        return Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
    }, [filteredProjects]);

    // Slice projects for current page
    const paginatedProjects = useMemo(() => {
        const start = (currentPage - 1) * PROJECTS_PER_PAGE;
        const end = start + PROJECTS_PER_PAGE;
        return filteredProjects.slice(start, end);
    }, [filteredProjects, currentPage]);

    // Initial load animation for header and filter bar
    useEffect(() => {
        if (!containerRef.current) return;

        const badge = containerRef.current.querySelector(".animate-projects-badge");
        const title = containerRef.current.querySelector(".animate-projects-title");
        const desc = containerRef.current.querySelector(".animate-projects-desc");
        const filters = containerRef.current.querySelector(".animate-projects-filters");

        gsap.set([badge, title, desc, filters], { opacity: 0 });

        const headerTl = gsap.timeline({ defaults: { ease: "power4.out" } });
        headerTl.fromTo(
            badge,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.1 }
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
            )
            .fromTo(
                filters,
                { y: 15, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 },
                "-=0.5"
            );

        return () => {
            headerTl.kill();
        };
    }, []);

    // Stagger slide animation on list changes (pagination or filters)
    useEffect(() => {
        const cards = gridRef.current?.querySelectorAll(".animate-project-card");
        if (cards && cards.length > 0) {
            gsap.fromTo(
                cards,
                { y: 30, opacity: 0, scale: 0.98 },
                { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }
            );
        }
    }, [paginatedProjects]);

    // Get context Lucide icon for each filter tab
    const getCategoryIcon = (cat: string) => {
        switch (cat) {
            case "Frontend / Web":
                return <Monitor className="size-3.5" />;
            case "Mobile":
                return <Smartphone className="size-3.5" />;
            case "Automação & IoT":
                return <Cpu className="size-3.5" />;
            case "Backend / APIs":
                return <Database className="size-3.5" />;
            default:
                return <FolderGit2 className="size-3.5" />;
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative max-w-6xl mx-auto min-h-screen border-x-2 border-dotted border-border/40 flex flex-col px-6 pt-20 pb-24 md:pt-24 md:pb-32 overflow-hidden"
        >
            {/* Ambient background blur elements */}
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/2 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-primary/3 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Section Header */}
            <div className="flex flex-col justify-start items-center text-center max-w-4xl mx-auto mb-12 select-none relative pt-12">
                <div className="animate-projects-badge opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/60 text-xs font-medium text-muted-foreground mb-4 backdrop-blur-xs">
                    💼 Portfólio de Engenharia
                </div>
                <h1 className="animate-projects-title opacity-0 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-linear-to-r from-neutral-950 via-neutral-700 to-neutral-500 dark:from-neutral-50 dark:via-neutral-300 dark:to-neutral-500 bg-clip-text text-transparent leading-[1.15]">
                    Projetos & Aplicações
                </h1>
                <p className="animate-projects-desc opacity-0 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    Galeria de aplicações reais, integrações de IoT e APIs robustas que desenvolvi. 
                    Foco em código limpo, arquitetura sólida e alta performance de execução.
                </p>
            </div>

            {/* Filter Selector Bar */}
            <div className="animate-projects-filters opacity-0 flex flex-wrap items-center justify-center gap-2.5 mb-14 border border-border/50 rounded-2xl bg-card/20 backdrop-blur-xs p-2 max-w-3xl mx-auto z-10 select-none">
                {CATEGORIES.map((cat) => {
                    const active = activeCategory === cat;
                    return (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold rounded-xl border border-transparent transition-all duration-300 cursor-pointer select-none",
                                active
                                    ? "bg-primary text-primary-foreground border-primary shadow-xs"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                            )}
                        >
                            {getCategoryIcon(cat)}
                            {cat}
                        </button>
                    );
                })}
            </div>

            {/* Dynamic Grid list with stagger animations */}
            <div className="w-full flex-1 flex flex-col justify-between z-10">
                {paginatedProjects.length > 0 ? (
                    <div
                        ref={gridRef}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
                    >
                        {paginatedProjects.map((project) => (
                            <div
                                key={project.id}
                                className="animate-project-card opacity-0 p-6 md:p-8 rounded-2xl border border-border/60 bg-card/45 backdrop-blur-xs hover:bg-card/75 hover:border-border hover:shadow-xs transition-all duration-300 group flex flex-col justify-between min-h-[320px]"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[9px] font-semibold bg-secondary text-secondary-foreground select-none">
                                            {project.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-[11px] text-muted-foreground font-medium">
                                            <Calendar className="size-3.5" />
                                            {project.period}
                                        </span>
                                    </div>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-0.5 rounded-md border border-border bg-card text-muted-foreground text-[10px] font-semibold select-none"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base md:text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                                        {project.title}
                                    </h3>

                                    {/* Excerpt/Description */}
                                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Links */}
                                <div className="mt-8 flex items-center justify-between border-t border-border/40 pt-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground group/link transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="size-4 group-hover/link:scale-105 transition-transform duration-300"
                                        >
                                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                            <path d="M9 18c-4.51 2-5-2-7-2" />
                                        </svg>
                                        Ver Código-Fonte
                                    </a>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            buttonVariants({ variant: "default", size: "icon" }),
                                            "shrink-0"
                                        )}
                                    >
                                        <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 border border-dashed border-border/40 rounded-2xl bg-card/20">
                        <p className="text-sm text-muted-foreground">
                            Nenhum projeto encontrado para o filtro selecionado.
                        </p>
                    </div>
                )}

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="mt-14 flex items-center justify-center gap-2">
                        {/* Prev Button */}
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={cn(
                                "h-9 px-3 rounded-lg text-xs font-medium border transition-all duration-300 cursor-pointer select-none",
                                currentPage === 1
                                    ? "opacity-35 cursor-not-allowed border-border/20 text-muted-foreground"
                                    : "bg-card/45 border-border/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                        >
                            Anterior
                        </button>

                        {/* Page Numbers */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={cn(
                                    "h-9 w-9 rounded-lg text-xs font-medium border transition-all duration-300 cursor-pointer select-none",
                                    currentPage === page
                                        ? "bg-primary border-primary text-primary-foreground shadow-xs"
                                        : "bg-card/45 border-border/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                            >
                                {page}
                            </button>
                        ))}

                        {/* Next Button */}
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={cn(
                                "h-9 px-3 rounded-lg text-xs font-medium border transition-all duration-300 cursor-pointer select-none",
                                currentPage === totalPages
                                    ? "opacity-35 cursor-not-allowed border-border/20 text-muted-foreground"
                                    : "bg-card/45 border-border/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                        >
                            Próximo
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
