"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight, Cpu, Smartphone, Layout } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function HomeProjects() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const badge = containerRef.current.querySelector(".animate-hp-badge");
        const title = containerRef.current.querySelector(".animate-hp-title");
        const desc = containerRef.current.querySelector(".animate-hp-desc");
        const cta = containerRef.current.querySelector(".animate-hp-cta");
        const items = containerRef.current.querySelectorAll(".animate-hp-item");

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
                { x: -30, opacity: 0 },
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
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 right-10 w-[200px] h-[200px] bg-primary/2 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-10 relative">
                {/* Left Column (Stat highlights list - Inverted visual structure) */}
                <div className="lg:col-span-5 flex flex-col gap-4 order-2 lg:order-1">
                    {/* Project Highlight Item 1 */}
                    <div className="animate-hp-item opacity-0 p-5 rounded-2xl border border-border/60 bg-card/25 hover:bg-card/60 hover:border-border transition-all duration-300 flex items-start gap-4">
                        <div className="h-9 w-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                            <Cpu className="size-4.5" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-foreground">Automação & IoT</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">Sistemas embarcados, sensores integrados e controle inteligente de hardware.</p>
                        </div>
                    </div>

                    {/* Project Highlight Item 2 */}
                    <div className="animate-hp-item opacity-0 p-5 rounded-2xl border border-border/60 bg-card/25 hover:bg-card/60 hover:border-border transition-all duration-300 flex items-start gap-4">
                        <div className="h-9 w-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                            <Smartphone className="size-4.5" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-foreground">Aplicações Mobile</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">Desenvolvimento multiplataforma escalável com Flutter para gestão de processos.</p>
                        </div>
                    </div>

                    {/* Project Highlight Item 3 */}
                    <div className="animate-hp-item opacity-0 p-5 rounded-2xl border border-border/60 bg-card/25 hover:bg-card/60 hover:border-border transition-all duration-300 flex items-start gap-4">
                        <div className="h-9 w-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                            <Layout className="size-4.5" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-foreground">Sistemas Web & APIs</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">Aplicações completas com Next.js e backends resilientes estruturados em Spring Boot.</p>
                        </div>
                    </div>
                </div>

                {/* Right Column (Core info) */}
                <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
                    <div className="animate-hp-badge opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/60 text-xs font-medium text-muted-foreground backdrop-blur-xs">
                        💻 Soluções Reais Prontas para Produção
                    </div>
                    
                    <h2 className="animate-hp-title opacity-0 text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.15]">
                        Do hardware à nuvem: Projetos de Ponta a Ponta
                    </h2>
                    
                    <p className="animate-hp-desc opacity-0 text-sm md:text-base text-muted-foreground leading-relaxed">
                        Coloco a engenharia em prática construindo aplicações completas. Explore minha galeria de projetos, contendo painéis de monitoramento IoT integrados com Google Sheets API, microsserviços Java robustos e experiências web modernas e responsivas.
                    </p>
                    
                    <div className="animate-hp-cta opacity-0 pt-2">
                        <Link
                            href="/projetos"
                            className={buttonVariants({ variant: "default", size: "lg" }) + " group font-semibold text-sm cursor-pointer inline-flex items-center gap-1.5"}
                        >
                            Explorar meu catálogo de projetos
                            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
