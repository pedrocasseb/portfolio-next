"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        const badge = containerRef.current.querySelector(".animate-hero-badge");
        const title = containerRef.current.querySelector(".animate-hero-title");
        const desc = containerRef.current.querySelector(".animate-hero-desc");
        const ctas = containerRef.current.querySelector(".animate-hero-ctas");
        const stats = containerRef.current.querySelector(".animate-hero-stats");
        const statItems =
            containerRef.current.querySelectorAll(".animate-stat-item");

        // Hide initially to prevent FOUC
        gsap.set([badge, title, desc, ctas, stats], { opacity: 0 });
        if (statItems.length > 0) gsap.set(statItems, { opacity: 0 });

        tl.fromTo(
            badge,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.2 },
        )
            .fromTo(
                title,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.6",
            )
            .fromTo(
                desc,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.7",
            )
            .fromTo(
                ctas,
                { y: 20, opacity: 0, scale: 0.98 },
                { y: 0, opacity: 1, scale: 1, duration: 0.8 },
                "-=0.7",
            )
            .fromTo(
                stats,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.6",
            );

        if (statItems.length > 0) {
            tl.fromTo(
                statItems,
                { y: 30, opacity: 0, scale: 0.96 },
                { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15 },
                "-=0.8",
            );
        }

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative max-w-6xl mx-auto min-h-screen border-x-2 border-dotted border-border/40 flex flex-col justify-center items-center px-6 pt-24 pb-16 md:pt-32 md:pb-20"
        >
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Glowing Badge */}
            <div className="animate-hero-badge opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/60 text-xs font-medium text-muted-foreground mb-6 backdrop-blur-xs select-none">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Disponível para novos projetos e parcerias
            </div>

            {/* Main Title */}
            <h1 className="animate-hero-title opacity-0 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center max-w-4xl leading-[1.15] mb-6">
                Criando{" "}
                <span className="bg-linear-to-r from-neutral-950 via-neutral-700 to-neutral-500 dark:from-neutral-50 dark:via-neutral-300 dark:to-neutral-500 bg-clip-text text-transparent">
                    experiências digitais
                </span>{" "}
                de alto impacto e performance
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="animate-hero-desc opacity-0 text-sm sm:text-base md:text-lg text-muted-foreground text-center max-w-2xl mb-10 leading-relaxed">
                Olá, eu sou o Pedro Casseb. Sou um desenvolvedor de software
                focado em construir aplicações web rápidas, interfaces fluidas e
                arquiteturas limpas usando Next.js, React, Node.js, TypeScript e
                Java.
            </p>

            {/* Call to Actions */}
            <div className="animate-hero-ctas opacity-0 flex flex-col lg:flex-row gap-4 mb-16 z-10 w-full lg:w-auto px-4 lg:px-0">
                <Link
                    href="/projetos"
                    className={
                        buttonVariants({ variant: "default", size: "lg" }) +
                        " w-full lg:w-auto justify-center text-sm font-medium"
                    }
                >
                    Ver Projetos
                </Link>
                <Link
                    href="/contatos"
                    className={
                        buttonVariants({ variant: "outline", size: "lg" }) +
                        " w-full lg:w-auto justify-center text-sm font-medium"
                    }
                >
                    Falar Comigo
                </Link>
            </div>

            {/* Stats Cards (Staggered with GSAP) */}
            <div className="animate-hero-stats opacity-0 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-12 md:mt-16 z-10">
                {/* Stat Card 1 */}
                <div className="animate-stat-item opacity-0 p-6 rounded-xl border border-border/60 bg-card/40 backdrop-blur-xs hover:bg-card/80 hover:border-border transition-all duration-300 hover:shadow-xs group">
                    <div className="h-10 w-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polygon points="12 2 2 22 22 22" />
                        </svg>
                    </div>
                    <h3 className="font-semibold text-base mb-1.5 text-foreground">
                        Frontend Premium
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        Interfaces ricas, responsivas e pixel-perfect com
                        animações fluidas focadas no usuário.
                    </p>
                </div>

                {/* Stat Card 2 */}
                <div className="animate-stat-item opacity-0 p-6 rounded-xl border border-border/60 bg-card/40 backdrop-blur-xs hover:bg-card/80 hover:border-border transition-all duration-300 hover:shadow-xs group">
                    <div className="h-10 w-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect
                                x="2"
                                y="2"
                                width="20"
                                height="8"
                                rx="2"
                                ry="2"
                            />
                            <rect
                                x="2"
                                y="14"
                                width="20"
                                height="8"
                                rx="2"
                                ry="2"
                            />
                            <line x1="6" y1="6" x2="6.01" y2="6" />
                            <line x1="6" y1="18" x2="6.01" y2="18" />
                        </svg>
                    </div>
                    <h3 className="font-semibold text-base mb-1.5 text-foreground">
                        Backend Robusto
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        Arquiteturas de servidor escaláveis, APIs REST bem
                        projetadas e bancos de dados seguros.
                    </p>
                </div>

                {/* Stat Card 3 */}
                <div className="animate-stat-item opacity-0 p-6 rounded-xl border border-border/60 bg-card/40 backdrop-blur-xs hover:bg-card/80 hover:border-border transition-all duration-300 hover:shadow-xs group">
                    <div className="h-10 w-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                    </div>
                    <h3 className="font-semibold text-base mb-1.5 text-foreground">
                        Performance & SEO
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        Código limpo otimizado para carregamento ultra-rápido e
                        ranqueamento superior em buscas.
                    </p>
                </div>
            </div>
        </div>
    );
}
