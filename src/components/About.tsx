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
    Boxes,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock/Template Data for easy customization by Pedro
const EDUCATION = [
    {
        title: "Graduação em Engenharia de Computação",
        institution: "UNAERP - Universidade de Ribeirão Preto",
        period: "2025 - Presente",
        description:
            "Foco em arquitetura de sistemas, algoritmos estruturados, engenharia de requisitos e metodologias ágeis.",
        tags: ["Engenharia", "Algoritmos", "Arquitetura"],
    },
];

const INTERNSHIPS = [
    {
        role: "Estagiário Laboratório Didático de Química",
        company: "UNAERP - Universidade de Ribeirão Preto",
        period: "MAI 2026 - ATUAL",
        description:
            "Atuação no desenvolvimento de soluções para otimização de processos laboratoriais, automação de tarefas e suporte tecnológico às atividades do laboratório.",
        achievements: [
            "Desenvolvimento e manutenção de planilhas automatizadas para otimização de processos internos",
            "Participação no desenvolvimento de automações para equipamentos laboratoriais",
            "Desenvolvimento de aplicação mobile utilizando Flutter",
        ],
        stack: ["Automação", "Flutter", "Google Sheets"],
    },
    {
        role: "Estágio Rádio Unaerp",
        company: "UNAERP - Universidade de Ribeirão Preto",
        period: "OUT 2025 - ABR 2026",
        description:
            "Fui responsável técnico pelas transmissões de áudio e vídeo da Rádio UNAERP. Realizava edição de material gravado, gestão do site e redes sociais da Rádio UNAERP e do curso de Jornalismo.",
        achievements: [
            "Trabalho colaborativo com equipes multidisciplinares para suporte às transmissões e produção de conteúdo",
            "Desenvolvimento de habilidades de comunicação, organização e resolução de problemas em ambientes dinâmicos",
        ],
        stack: [
            "Trabalho em equipe",
            "Comunicação interpessoal",
            "Organização",
            "Resolução de problemas",
        ],
    },
];

const COURSES = [
    {
        title: "CS50's Introduction to Computer Science",
        platform: "Harvard University (edX)",
        hours: "70+ horas",
        skills: "Algoritmos, estruturas de dados, lógica de programação, C, Python, SQL e fundamentos da ciência da computação.",
    },
    {
        title: "Curso de Extensão Universitária na modalidade de Difusão: INTRODUÇÃO AO MACHINE LEARNING COM PYTHON",
        platform: "USP",
        hours: "8 horas",
        skills: "Fundamentos de machine learning, manipulação de dados, treinamento de modelos e aplicações utilizando Python.",
    },
    {
        title: "Python para dados: do zero à análise completa",
        platform: "Asimov Academy",
        hours: "8 horas",
        skills: "Manipulação de dados, análise exploratória, visualização de dados e utilização de bibliotecas do ecossistema Python.",
    },
    {
        title: "Java Intermediário",
        platform: "Loiane Groner",
        hours: "9 horas",
        skills: "Programação orientada a objetos, herança, polimorfismo, encapsulamento, coleções e boas práticas em Java.",
    },
    {
        title: "Java Básico",
        platform: "Loiane Groner",
        hours: "30 horas",
        skills: "Sintaxe Java, lógica de programação, estruturas de controle, funções, arrays e fundamentos da linguagem.",
    },
    {
        title: "CURSO DE LÓGICA DE PROGRAMAÇÃO",
        platform: "Danki Code",
        hours: "5 horas",
        skills: "Lógica de programação, algoritmos, estruturas condicionais, repetição e resolução de problemas.",
    },
    {
        title: "CURSO FRONT-END COMPLETO 2.0",
        platform: "Danki Code",
        hours: "9 horas",
        skills: "HTML, CSS, JavaScript, responsividade, manipulação do DOM e fundamentos de desenvolvimento web.",
    },
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
            { name: "GSAP (Animações)", level: "Intermediário" },
        ],
    },
    {
        title: "Backend & Database",
        icon: Cpu,
        skills: [
            { name: "Java", level: "Avançado" },
            { name: "Spring Boot", level: "Intermediário" },
            { name: "Node.js", level: "Avançado" },
            { name: "SQL (PostgreSQL, MySQL)", level: "Avançado" },
            { name: "MongoDB", level: "Intermediário" },
            { name: "REST APIs", level: "Avançado" },
        ],
    },
    {
        title: "Ferramentas & DevOps",
        icon: Boxes,
        skills: [
            { name: "Git & GitHub", level: "Avançado" },
            { name: "Docker", level: "Intermediário" },
            { name: "CI/CD Actions", level: "Básico" },
            { name: "AWS Cloud", level: "Básico" },
            { name: "Figma (Design)", level: "Intermediário" },
            { name: "Clean Code / SOLID", level: "Básico" },
        ],
    },
];

export function About() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        const header = containerRef.current.querySelector(
            ".animate-about-header",
        );
        const timelineHeader = containerRef.current.querySelector(
            ".animate-timeline-header",
        );
        const educationColumn = containerRef.current.querySelector(
            ".animate-education-col",
        );
        const internshipColumn = containerRef.current.querySelector(
            ".animate-internship-col",
        );
        const skillsSection = containerRef.current.querySelector(
            ".animate-skills-section",
        );
        const skillsGrid = containerRef.current.querySelectorAll(
            ".animate-skill-card",
        );
        const coursesSection = containerRef.current.querySelector(
            ".animate-courses-section",
        );
        const coursesGrid = containerRef.current.querySelectorAll(
            ".animate-course-card",
        );

        // Set initial opacity to prevent FOUC
        gsap.set(
            [
                header,
                timelineHeader,
                educationColumn,
                internshipColumn,
                skillsSection,
                coursesSection,
            ],
            { opacity: 0 },
        );
        if (skillsGrid.length > 0) gsap.set(skillsGrid, { opacity: 0 });
        if (coursesGrid.length > 0) gsap.set(coursesGrid, { opacity: 0 });

        tl.fromTo(
            header,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.1 },
        )
            .fromTo(
                timelineHeader,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.5",
            )
            .fromTo(
                [educationColumn, internshipColumn],
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.15 },
                "-=0.5",
            )
            .fromTo(
                skillsSection,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6",
            );

        if (skillsGrid.length > 0) {
            tl.fromTo(
                skillsGrid,
                { y: 20, opacity: 0, scale: 0.97 },
                { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1 },
                "-=0.6",
            );
        }

        tl.fromTo(
            coursesSection,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.6",
        );

        if (coursesGrid.length > 0) {
            tl.fromTo(
                coursesGrid,
                { y: 20, opacity: 0, scale: 0.97 },
                { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1 },
                "-=0.6",
            );
        }

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative max-w-6xl mx-auto min-h-screen border-x-2 border-dotted border-border/40 flex flex-col px-6 pt-20 pb-24 md:pt-24 md:pb-32 overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/2 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-primary/3 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Header / Intro Hero Section */}
            <div className="animate-about-header opacity-0 flex flex-col justify-start items-center text-center max-w-4xl mx-auto min-h-[calc(100vh-140px)] md:min-h-[calc(100vh-180px)] select-none relative pt-14 md:pt-24 pb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/60 text-xs font-medium text-muted-foreground mb-4 backdrop-blur-xs">
                    👤 Quem é Pedro Casseb?
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-linear-to-r from-neutral-950 via-neutral-700 to-neutral-500 dark:from-neutral-50 dark:via-neutral-300 dark:to-neutral-500 bg-clip-text text-transparent leading-[1.15]">
                    Criando soluções eficientes por meio de engenharia e
                    inovação
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    Sou estudante de Engenharia de Computação na UNAERP e
                    desenvolvedor focado em criar produtos digitais
                    performáticos. Minha missão é traduzir problemas de negócios
                    complexos em linhas de código elegantes, limpas e
                    escaláveis.
                </p>

                {/* Location and Status info card */}
                <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground select-none">
                    <span className="flex items-center gap-1.5">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        Disponível para novos estágios & projetos
                    </span>
                    <span className="h-3 w-px bg-border/60 hidden md:inline" />
                    <span className="flex items-center gap-1">
                        <MapPin className="size-3.5" />
                        Ribeirão Preto, SP, Brasil
                    </span>
                </div>

                {/* Bouncing Scroll Down Indicator */}
                <div className="absolute bottom-8 md:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70">
                    <span className="text-[10px] tracking-wider uppercase font-semibold text-muted-foreground select-none">
                        Rolar para explorar
                    </span>
                    <svg
                        className="size-4 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>

            {/* Timeline Section (Faculdade e Estágios) */}
            <div className="pt-16 border-t border-border/40 mb-32 space-y-12 relative w-full">
                <div className="animate-timeline-header opacity-0 text-center select-none">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                        Trajetória de Aprendizado
                    </h2>
                    <p className="text-xs md:text-sm text-muted-foreground mt-2 max-w-lg mx-auto">
                        A união do conhecimento estruturado da universidade com
                        a prática do dia a dia corporativo nos estágios.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Education Column */}
                    <div className="animate-education-col opacity-0 space-y-6">
                        <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                            <GraduationCap className="size-5 text-primary" />
                            <h3 className="text-lg font-bold text-foreground">
                                Formação Acadêmica
                            </h3>
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
                            <h3 className="text-lg font-bold text-foreground">
                                Experiência Profissional (Estágios)
                            </h3>
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
                                            {intern.achievements.map(
                                                (ach, aIdx) => (
                                                    <li key={aIdx}>{ach}</li>
                                                ),
                                            )}
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
            <div className="animate-skills-section opacity-0 mb-32 space-y-12">
                <div className="text-center select-none">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                        Minhas Stacks Técnicas
                    </h2>
                    <p className="text-xs md:text-sm text-muted-foreground mt-2 max-w-lg mx-auto">
                        Tecnologias que estudo, utilizo e domino no meu dia a
                        dia de engenharia de software.
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
                                        <h3 className="font-bold text-sm text-foreground">
                                            {cat.title}
                                        </h3>
                                    </div>

                                    <div className="space-y-3.5">
                                        {cat.skills.map((skill, sIdx) => (
                                            <div
                                                key={sIdx}
                                                className="space-y-1.5"
                                            >
                                                <div className="flex justify-between text-xs font-semibold">
                                                    <span className="text-foreground">
                                                        {skill.name}
                                                    </span>
                                                    <span className="text-muted-foreground/85 text-[10px]">
                                                        {skill.level}
                                                    </span>
                                                </div>
                                                {/* Visual Experience Level indicator */}
                                                <div className="h-1 w-full bg-border/40 rounded-full overflow-hidden">
                                                    <div
                                                        className={cn(
                                                            "h-full bg-primary/70 rounded-full group-hover:bg-primary transition-all duration-500",
                                                            skill.level ===
                                                                "Avançado" &&
                                                                "w-full",
                                                            skill.level ===
                                                                "Intermediário" &&
                                                                "w-2/3",
                                                            skill.level ===
                                                                "Básico" &&
                                                                "w-1/3",
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
                        Estudos complementares, cursos de aperfeiçoamento e
                        especializações técnicas relevantes.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto border border-border/60 rounded-2xl bg-card/30 backdrop-blur-xs p-4 md:p-6 space-y-1">
                    {COURSES.map((course, idx) => (
                        <div
                            key={idx}
                            className="animate-course-card opacity-0 py-4 px-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/30 last:border-b-0 hover:bg-muted/40 dark:hover:bg-muted/15 rounded-xl transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-4 flex-1">
                                <div className="h-9 w-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300 shrink-0">
                                    <Award className="size-4.5" />
                                </div>
                                <div className="space-y-1 flex-1">
                                    <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                        {course.title}
                                    </h4>
                                    <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">
                                        {course.platform} • <span className="text-foreground/80 font-bold">{course.hours}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="md:w-1/2 text-left md:text-right md:pl-6">
                                <span className="text-xs text-muted-foreground font-medium leading-relaxed block">
                                    {course.skills}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
