import { HomeIcon, User, Mail, FolderGit2, Library } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type NavItem = {
    id: number;
    name: string;
    href: `/${string}`;
    icon: LucideIcon;
};

export const navItems: NavItem[] = [
    { id: 1, name: "Início", href: "/", icon: HomeIcon },
    { id: 2, name: "Sobre", href: "/sobre", icon: User },
    { id: 3, name: "Blog", href: "/blog", icon: Library },
    { id: 4, name: "Projetos", href: "/projetos", icon: FolderGit2 },
    { id: 5, name: "Contatos", href: "/contatos", icon: Mail },
];
