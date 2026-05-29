"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, Code2, Briefcase } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function HomeAbout() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const badge = containerRef.current.querySelector(".animate-ha-badge");
        const title = containerRef.current.querySelector(".animate-ha-title");
        const desc = containerRef.current.querySelector(".animate-ha-desc");
        const cta = containerRef.current.querySelector(".animate-ha-cta");
        const items = containerRef.current.querySelectorAll(".animate-ha-item");

        gsap.set([badge, title, desc, cta], { opacity: 0 });
        if (items.length > 0) gsap.set(items, { opacity: 0 });

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
            { y: 0, opacity: 1, duration: 0.8 }
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
                cta,
                { y: 15, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                "-=0.5"
            );

        if (items.length > 0) {
            tl.fromTo(
                items,
                { x: 30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
                "-=0.8"
            );
        }

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-6xl mx-auto border-x-2 border-dotted border-border/40 px-6 py-16 md:py-24 overflow-hidden"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-10 w-[200px] h-[200px] bg-primary/2 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-10 relative">
                {/* Left Column (Core info) */}
                <div className="lg:col-span-7 space-y-6 text-left">
                    <div className="animate-ha-badge opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/60 text-xs font-medium text-muted-foreground backdrop-blur-xs">
                        👤 Conectando Lógica e Engenharia
                    </div>
                    
                    <h2 className="animate-ha-title opacity-0 text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.15]">
                        Muito além de linhas de código: Engenharia de Soluções
                    </h2>
                    
                    <p className="animate-ha-desc opacity-0 text-sm md:text-base text-muted-foreground leading-relaxed">
                        Sou estudante de Engenharia de Computação na UNAERP. Meu foco é entender o problema de ponta a ponta: desde os circuitos e a automação laboratorial via hardware/IoT, até o desenvolvimento de aplicações escaláveis em Next.js e microsserviços Spring Boot.
                    </p>
                    
                    <div className="animate-ha-cta opacity-0 pt-2">
                        <Link
                            href="/sobre"
                            className={buttonVariants({ variant: "default", size: "lg" }) + " group font-semibold text-sm cursor-pointer inline-flex items-center gap-1.5"}
                        >
                            Ver minha trajetória completa
                            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>

                {/* Right Column (Stat highlights list) */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                    {/* Highlight Item 1 */}
                    <div className="animate-ha-item opacity-0 p-5 rounded-2xl border border-border/60 bg-card/25 hover:bg-card/60 hover:border-border transition-all duration-300 flex items-start gap-4">
                        <div className="h-9 w-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                            <GraduationCap className="size-4.5" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-foreground">Engenharia de Computação</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">Formação teórica e prática estruturada na UNAERP (2025 - Presente).</p>
                        </div>
                    </div>

                    {/* Highlight Item 2 */}
                    <div className="animate-ha-item opacity-0 p-5 rounded-2xl border border-border/60 bg-card/25 hover:bg-card/60 hover:border-border transition-all duration-300 flex items-start gap-4">
                        <div className="h-9 w-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                            <Briefcase className="size-4.5" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-foreground">Estágios Práticos</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">Desenvolvimento de automações industriais, Flutter mobile e suporte a rádio web.</p>
                        </div>
                    </div>

                    {/* Highlight Item 3 */}
                    <div className="animate-ha-item opacity-0 p-5 rounded-2xl border border-border/60 bg-card/25 hover:bg-card/60 hover:border-border transition-all duration-300 flex items-start gap-4">
                        <div className="h-9 w-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                            <Code2 className="size-4.5" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-foreground">Stacks Técnicas</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">Especialidade em React/Next.js, Spring Boot, APIs REST, Docker e Flutter mobile.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
