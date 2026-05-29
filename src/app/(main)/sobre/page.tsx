import { About } from "@/components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre | Pedro's Portfolio",
    description:
        "Saiba mais sobre a jornada acadêmica de engenharia de software, as experiências de estágio, as stacks de tecnologia e as certificações de Pedro Casseb.",
};

export default function Sobre() {
    return <About />;
}
