"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.png";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { navItems } from "@/config/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { motion } from "framer-motion";

export function Navbar() {
    const pathname = usePathname();
    const items = navItems;

    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-card/80 border-b-2 py-1 border-dotted border-border/40 backdrop-blur-md">
                <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
                    <Link href="/">
                        <Image src={logo} alt="Logo" width={70} height={70} />
                    </Link>

                    <nav className="hidden md:flex items-center">
                        <div className="mx-2 flex max-w-full items-center relative">
                            <div className="mx-auto flex gap-2 bg-card/80 border border-border/30 backdrop-blur-sm px-3 py-2 relative transition-all duration-500 ease-out rounded-2xl">
                                {items.map((item) => {
                                    const active = pathname === item.href;

                                    return (
                                        <Tooltip key={item.id}>
                                            <TooltipTrigger asChild>
                                                <div className="relative flex items-center justify-center h-10 rounded-lg group shrink-0 transition-all duration-500 ease-out w-auto">
                                                    {active && (
                                                        <motion.div
                                                            layoutId="active-nav-pill"
                                                            className="absolute inset-0 bg-background border border-border/40 rounded-lg shadow-xs -z-10"
                                                            transition={{
                                                                type: "spring",
                                                                stiffness: 380,
                                                                damping: 30,
                                                            }}
                                                        />
                                                    )}
                                                    <Link
                                                        href={item.href}
                                                        className={`
                                            group flex items-center gap-2
                                            h-9 py-2
                                            text-sm font-medium text-foreground
                                            transition-all duration-300 ease-out
                                            hover:text-accent-foreground
                                            focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-2
                                            disabled:pointer-events-none disabled:opacity-50
                                            overflow-hidden relative z-10
                                            ${
                                                active
                                                    ? "px-4 justify-start scale-105 rounded-lg text-accent-foreground"
                                                    : "px-2.5 rounded-md justify-center hover:bg-muted/50"
                                            }
                                        `}
                                                    >
                                                        <item.icon className="size-4" />
                                                        {active && (
                                                            <span className="text-sm font-medium whitespace-nowrap overflow-hidden transition-[max-width,margin] duration-500 ease-out opacity-100 max-w-20 ml-1 relative">
                                                                {item.name}
                                                            </span>
                                                        )}
                                                    </Link>
                                                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-50 -translate-x-full animate-[shine_2s_ease-in-out_infinite]" />
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent side="bottom">
                                                <p>{item.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    );
                                })}
                            </div>
                        </div>
                    </nav>
                    <button
                        onClick={() => setOpen(!open)}
                        className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground cursor-pointer rounded-md text-xs md:hidden h-9 w-9 p-0 hover:bg-muted/50"
                    >
                        <span
                            className={`transition-transform duration-300 ${open ? "rotate-90" : ""}`}
                        >
                            {open ? <X /> : <Menu />}
                        </span>
                    </button>
                </div>
            </header>
            <MobileMenu
                open={open}
                setOpen={setOpen}
                items={navItems}
                pathname={pathname}
            />
        </>
    );
}
