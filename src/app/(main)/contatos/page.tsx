import { Contact } from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contatos | Pedro's Portfolio",
    description:
        "Entre em contato comigo para discutir projetos, ideias ou apenas dizer oi. Estou sempre aberto a novas oportunidades e colaborações.",
};

export default function Contatos() {
    return <Contact />;
}
