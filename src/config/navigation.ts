import { HomeIcon, User, Mail, FolderGit2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type NavItem = {
    id: number;
    name: string;
    href: `/${string}`;
    icon: LucideIcon;
};

export const navItems: NavItem[] = [
    { id: 1, name: "Início", href: "/", icon: HomeIcon },
    { id: 2, name: "Sobre", href: "/about", icon: User },
    { id: 3, name: "Projetos", href: "/projects", icon: FolderGit2 },
    { id: 4, name: "Contato", href: "/contact", icon: Mail },
];
