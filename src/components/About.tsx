"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
    GraduationCap,
    Briefcase,
    Award,
    Code2,
    MapPin,
    Calendar,
    ArrowUpRight,
    Terminal,
    Cpu,
    Boxes
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock/Template Data for easy customization by Pedro
const EDUCATION = [
    {
        title: "Graduação em Engenharia de Software",
        institution: "Faculdade de Tecnologia (Ex: FIAP, USP, Mackenzie)",
        period: "2024 - Presente",
        description: "Foco em arquitetura de sistemas, algoritmos estruturados, engenharia de requisitos e metodologias ágeis.",
        tags: ["Engenharia", "Algoritmos", "Arquitetura"]
    },
    {
        title: "Técnico em Informática para Internet",
        institution: "Instituição de Ensino Tecnológico (Ex: ETEC / SENAI)",
        period: "2021 - 2023",
        description: "Fundamentos de desenvolvimento de sistemas, lógica de programação estruturada e bancos de dados relacionais.",
        tags: ["Lógica", "Bancos de Dados", "HTML/CSS"]
    }
];

const INTERNSHIPS = [
    {
        role: "Estágio em Desenvolvimento Full Stack",
        company: "Empresa de Tecnologia (Ex: Tech Solutions)",
        period: "Jan 2025 - Presente",
        description: "Desenvolvimento de APIs escaláveis com Spring Boot (Java) e Node.js. Criação de interfaces modernas e interativas com React e Next.js.",
        achievements: [
            "Otimização de rotas de banco de dados reduzindo latência em 20%",
            "Implementação de painéis web responsivos integrando APIs RESTful"
        ],
        stack: ["Java", "Spring Boot", "React", "Next.js", "PostgreSQL"]
    },
    {
        role: "Estagiário de Desenvolvimento Frontend",
        company: "Startup de Inovação (Ex: Innovate Lab)",
        period: "Jun 2024 - Dez 2024",
        description: "Criação de landing pages performáticas, refatoração de componentes legados para TypeScript e suporte ao time de design UX/UI.",
        achievements: [
            "Migração de fluxos legados de JavaScript para TypeScript estruturado",
            "Criação de biblioteca de componentes reutilizáveis baseada em Tailwind CSS"
        ],
        stack: ["React", "TypeScript", "Tailwind CSS", "Git", "Figma"]
    }
];

const COURSES = [
    {
        title: "Desenvolvimento Web Full Stack",
        platform: "Rocketseat / Alura (ou similar)",
        hours: "120 horas",
        skills: "Next.js, Node.js, Prisma, PostgreSQL, Docker e deploy escalável."
    },
    {
        title: "Java & Spring Boot Professional",
        platform: "Udemy / Nelio Alves (ou similar)",
        hours: "80 horas",
        skills: "JPA/Hibernate, Spring Security, arquitetura DDD e testes unitários."
    },
    {
        title: "Clean Code & Melhores Práticas",
        platform: "Alura (ou similar)",
        hours: "40 horas",
        skills: "Princípios SOLID, refatoração, design patterns e arquiteturas limpas."
    }
];

const SKILL_CATEGORIES = [
    {
        title: "Frontend Development",
        icon: Code2,
        skills: [
            { name: "Next.js", level: "Avançado" },
            { name: "React", level: "Avançado" },
            { name: "TypeScript", level: "Avançado" },
            { name: "JavaScript", level: "Avançado" },
            { name: "Tailwind CSS", level: "Avançado" },
            { name: "GSAP (Animações)", level: "Intermediário" }
        ]
    },
    {
        title: "Backend & Database",
        icon: Cpu,
        skills: [
            { name: "Java", level: "Avançado" },
            { name: "Spring Boot", level: "Intermediário" },
            { name: "Node.js", level: "Avançado" },
            { name: "SQL (PostgreSQL)", level: "Avançado" },
            { name: "MongoDB", level: "Intermediário" },
            { name: "REST APIs", level: "Avançado" }
        ]
    },
    {
        title: "Ferramentas & DevOps",
        icon: Boxes,
        skills: [
            { name: "Git & GitHub", level: "Avançado" },
            { name: "Docker", level: "Intermediário" },
            { name: "CI/CD Actions", level: "Intermediário" },
            { name: "AWS Cloud", level: "Básico" },
            { name: "Figma (Design)", level: "Intermediário" },
            { name: "Clean Code / SOLID", level: "Avançado" }
        ]
    }
];

export function About() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        const header = containerRef.current.querySelector(".animate-about-header");
        const timelineHeader = containerRef.current.querySelector(".animate-timeline-header");
        const educationColumn = containerRef.current.querySelector(".animate-education-col");
        const internshipColumn = containerRef.current.querySelector(".animate-internship-col");
        const skillsSection = containerRef.current.querySelector(".animate-skills-section");
        const skillsGrid = containerRef.current.querySelectorAll(".animate-skill-card");
        const coursesSection = containerRef.current.querySelector(".animate-courses-section");
        const coursesGrid = containerRef.current.querySelectorAll(".animate-course-card");

        // Set initial opacity to prevent FOUC
        gsap.set([header, timelineHeader, educationColumn, internshipColumn, skillsSection, coursesSection], { opacity: 0 });
        if (skillsGrid.length > 0) gsap.set(skillsGrid, { opacity: 0 });
        if (coursesGrid.length > 0) gsap.set(coursesGrid, { opacity: 0 });

        tl.fromTo(
            header,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.1 }
        )
            .fromTo(
                timelineHeader,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.5"
            )
            .fromTo(
                [educationColumn, internshipColumn],
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.15 },
                "-=0.5"
            )
            .fromTo(
                skillsSection,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            );

        if (skillsGrid.length > 0) {
            tl.fromTo(
                skillsGrid,
                { y: 20, opacity: 0, scale: 0.97 },
                { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1 },
                "-=0.6"
            );
        }

        tl.fromTo(
            coursesSection,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.6"
        );

        if (coursesGrid.length > 0) {
            tl.fromTo(
                coursesGrid,
                { y: 20, opacity: 0, scale: 0.97 },
                { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1 },
                "-=0.6"
            );
        }

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative max-w-6xl mx-auto min-h-screen border-x-2 border-dotted border-border/40 flex flex-col px-6 pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/2 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-primary/3 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Header Section */}
            <div className="animate-about-header opacity-0 text-center max-w-3xl mx-auto mb-16 select-none">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/60 text-xs font-medium text-muted-foreground mb-4 backdrop-blur-xs">
                    👤 Sobre Mim
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-linear-to-r from-neutral-950 via-neutral-700 to-neutral-500 dark:from-neutral-50 dark:via-neutral-300 dark:to-neutral-500 bg-clip-text text-transparent">
                    Minha História & Jornada
                </h1>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Sou o Pedro Casseb, desenvolvedor focado em criar produtos digitais robustos. 
                    Abaixo, apresento minha formação acadêmica, experiências de estágio, stacks técnicas e cursos complementares.
                </p>
                
                {/* Location and Status info card */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <MapPin className="size-3.5" />
                        São Paulo, Brasil
                    </span>
                    <span className="h-3 w-px bg-border/60" />
                    <span className="flex items-center gap-1.5">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        Aberto a novos estágios & projetos
                    </span>
                </div>
            </div>

            {/* Timeline Section (Faculdade e Estágios) */}
            <div className="mb-20 space-y-12">
                <div className="animate-timeline-header opacity-0 text-center select-none">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                        Trajetória de Aprendizado
                    </h2>
                    <p className="text-xs md:text-sm text-muted-foreground mt-2 max-w-lg mx-auto">
                        A união do conhecimento estruturado da universidade com a prática do dia a dia corporativo nos estágios.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Education Column */}
                    <div className="animate-education-col opacity-0 space-y-6">
                        <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                            <GraduationCap className="size-5 text-primary" />
                            <h3 className="text-lg font-bold text-foreground">Formação Acadêmica</h3>
                        </div>

                        <div className="relative border-l border-border/80 pl-6 ml-2 space-y-8">
                            {EDUCATION.map((edu, idx) => (
                                <div key={idx} className="relative group">
                                    {/* Line Bullet */}
                                    <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-border bg-card group-hover:border-primary transition-colors duration-300">
                                        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors duration-300" />
                                    </span>

                                    <div className="space-y-1.5">
                                        <span className="text-[10px] font-bold text-muted-foreground/80 tracking-wider uppercase">
                                            {edu.period}
                                        </span>
                                        <h4 className="text-base font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                                            {edu.title}
                                        </h4>
                                        <p className="text-xs font-semibold text-muted-foreground">
                                            {edu.institution}
                                        </p>
                                        <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                                            {edu.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 pt-2">
                                            {edu.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-[9px] font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Internship Column */}
                    <div className="animate-internship-col opacity-0 space-y-6">
                        <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                            <Briefcase className="size-5 text-primary" />
                            <h3 className="text-lg font-bold text-foreground">Experiência Profissional (Estágios)</h3>
                        </div>

                        <div className="relative border-l border-border/80 pl-6 ml-2 space-y-8">
                            {INTERNSHIPS.map((intern, idx) => (
                                <div key={idx} className="relative group">
                                    {/* Line Bullet */}
                                    <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-border bg-card group-hover:border-primary transition-colors duration-300">
                                        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors duration-300" />
                                    </span>

                                    <div className="space-y-2">
                                        <div className="flex flex-wrap justify-between items-start gap-1">
                                            <h4 className="text-base font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                                                {intern.role}
                                            </h4>
                                            <span className="text-[10px] font-bold text-muted-foreground/80 tracking-wider uppercase">
                                                {intern.period}
                                            </span>
                                        </div>
                                        <p className="text-xs font-semibold text-muted-foreground">
                                            {intern.company}
                                        </p>
                                        <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                                            {intern.description}
                                        </p>

                                        {/* Key achievements */}
                                        <ul className="list-disc pl-4 text-muted-foreground text-xs space-y-1 pt-1">
                                            {intern.achievements.map((ach, aIdx) => (
                                                <li key={aIdx}>{ach}</li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-1 pt-2">
                                            {intern.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-1.5 py-0.5 rounded-md border border-border bg-card text-muted-foreground text-[9px] font-semibold"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Skill Stack Grid */}
            <div className="animate-skills-section opacity-0 mb-20 space-y-12">
                <div className="text-center select-none">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                        Minhas Stacks Técnicas
                    </h2>
                    <p className="text-xs md:text-sm text-muted-foreground mt-2 max-w-lg mx-auto">
                        Tecnologias que estudo, utilizo e domino no meu dia a dia de engenharia de software.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {SKILL_CATEGORIES.map((cat, idx) => {
                        const Icon = cat.icon;
                        return (
                            <div
                                key={idx}
                                className="animate-skill-card opacity-0 p-6 rounded-2xl border border-border/60 bg-card/45 backdrop-blur-xs hover:bg-card/75 hover:border-border transition-all duration-300 group flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-2 mb-4 border-b border-border/40 pb-3">
                                        <div className="h-8 w-8 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                                            <Icon className="size-4" />
                                        </div>
                                        <h3 className="font-bold text-sm text-foreground">{cat.title}</h3>
                                    </div>

                                    <div className="space-y-3.5">
                                        {cat.skills.map((skill, sIdx) => (
                                            <div key={sIdx} className="space-y-1.5">
                                                <div className="flex justify-between text-xs font-semibold">
                                                    <span className="text-foreground">{skill.name}</span>
                                                    <span className="text-muted-foreground/85 text-[10px]">
                                                        {skill.level}
                                                    </span>
                                                </div>
                                                {/* Visual Experience Level indicator */}
                                                <div className="h-1 w-full bg-border/40 rounded-full overflow-hidden">
                                                    <div
                                                        className={cn(
                                                            "h-full bg-primary/70 rounded-full group-hover:bg-primary transition-all duration-500",
                                                            skill.level === "Avançado" && "w-full",
                                                            skill.level === "Intermediário" && "w-2/3",
                                                            skill.level === "Básico" && "w-1/3"
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Courses and Certifications grid */}
            <div className="animate-courses-section opacity-0 space-y-12">
                <div className="text-center select-none">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                        Cursos & Certificados Extra
                    </h2>
                    <p className="text-xs md:text-sm text-muted-foreground mt-2 max-w-lg mx-auto">
                        Estudos complementares, cursos de aperfeiçoamento e especializações técnicas relevantes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {COURSES.map((course, idx) => (
                        <div
                            key={idx}
                            className="animate-course-card opacity-0 p-6 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-xs hover:bg-card/80 hover:border-border hover:shadow-xs transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                <div className="flex items-start justify-between">
                                    <div className="h-8 w-8 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                                        <Award className="size-4.5" />
                                    </div>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[9px] font-bold bg-secondary text-secondary-foreground">
                                        {course.hours}
                                    </span>
                                </div>

                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                                        {course.title}
                                    </h4>
                                    <p className="text-[11px] font-semibold text-muted-foreground">
                                        {course.platform}
                                    </p>
                                </div>

                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    <strong className="text-foreground font-semibold">Tópicos:</strong> {course.skills}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
