import { Projects } from "@/components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projetos | Pedro's Portfolio",
    description:
        "Explore o portfólio de projetos de Pedro Casseb, incluindo sistemas de automação IoT, aplicativos móveis desenvolvidos em Flutter, plataformas de streaming e APIs REST escaláveis.",
};

export default function Projetos() {
    return <Projects />;
}
