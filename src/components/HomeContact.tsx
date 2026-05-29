"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function HomeContact() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const badge = containerRef.current.querySelector(".animate-hc-badge");
        const title = containerRef.current.querySelector(".animate-hc-title");
        const desc = containerRef.current.querySelector(".animate-hc-desc");
        const cta = containerRef.current.querySelector(".animate-hc-cta");
        const items = containerRef.current.querySelectorAll(".animate-hc-item");

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
            className="relative w-full max-w-6xl mx-auto border-x-2 border-dotted border-border/40 px-6 py-16 md:py-24 overflow-hidden border-b-2 border-dotted border-border/40"
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-10 w-[200px] h-[200px] bg-primary/2 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-10 relative">
                {/* Left Column (Core info) */}
                <div className="lg:col-span-7 space-y-6 text-left">
                    <div className="animate-hc-badge opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/60 text-xs font-medium text-muted-foreground backdrop-blur-xs">
                        🤝 Vamos Criar Algo Juntos?
                    </div>
                    
                    <h2 className="animate-hc-title opacity-0 text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.15]">
                        Pronto para transformar sua ideia em realidade digital?
                    </h2>
                    
                    <p className="animate-hc-desc opacity-0 text-sm md:text-base text-muted-foreground leading-relaxed">
                        Tem um projeto desafiador, uma vaga de estágio ou simplesmente quer bater um papo sobre engenharia de computação e desenvolvimento de software? Estou sempre aberto a novas oportunidades e conexões profissionais.
                    </p>
                    
                    <div className="animate-hc-cta opacity-0 pt-2">
                        <Link
                            href="/contatos"
                            className={buttonVariants({ variant: "default", size: "lg" }) + " group font-semibold text-sm cursor-pointer inline-flex items-center gap-1.5"}
                        >
                            Entrar em contato
                            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>

                {/* Right Column (Quick contact methods list) */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                    {/* Method 1: Email */}
                    <a
                        href="mailto:casseb.phcc@gmail.com"
                        className="animate-hc-item opacity-0 p-5 rounded-2xl border border-border/60 bg-card/25 hover:bg-card/60 hover:border-border transition-all duration-300 flex items-start gap-4 group"
                    >
                        <div className="h-9 w-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                            <Mail className="size-4.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-bold text-foreground flex items-center gap-1">
                                Enviar um Email
                                <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                            </h3>
                            <p className="text-xs text-muted-foreground mt-0.5 truncate">casseb.phcc@gmail.com</p>
                        </div>
                    </a>

                    {/* Method 2: LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/pedro-henrique-cardoso-casseb-871474347/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="animate-hc-item opacity-0 p-5 rounded-2xl border border-border/60 bg-card/25 hover:bg-card/60 hover:border-border transition-all duration-300 flex items-start gap-4 group"
                    >
                        <div className="h-9 w-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-bold text-foreground flex items-center gap-1">
                                Conectar no LinkedIn
                                <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                            </h3>
                            <p className="text-xs text-muted-foreground mt-0.5">Rede profissional e novidades</p>
                        </div>
                    </a>

                    {/* Method 3: GitHub */}
                    <a
                        href="https://github.com/pedrocasseb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="animate-hc-item opacity-0 p-5 rounded-2xl border border-border/60 bg-card/25 hover:bg-card/60 hover:border-border transition-all duration-300 flex items-start gap-4 group"
                    >
                        <div className="h-9 w-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-bold text-foreground flex items-center gap-1">
                                Explorar repositórios
                                <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                            </h3>
                            <p className="text-xs text-muted-foreground mt-0.5">@pedrocasseb no GitHub</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
