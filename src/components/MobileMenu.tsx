"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { NavItem } from "@/config/navigation";

type Props = {
    open: boolean;
    setOpen: (value: boolean) => void;
    items: NavItem[];
    pathname: string;
};

export function MobileMenu({ open, setOpen, items, pathname }: Props) {
    return (
        <div
            className={`fixed top-16 left-0 right-0 bottom-0 z-40 bg-white/80 backdrop-blur-md text-neutral-900 md:hidden transition-all duration-300 ease-in-out ${
                open
                    ? "translate-y-0 opacity-100 pointer-events-auto"
                    : "translate-y-full opacity-0 pointer-events-none"
            }`}
        >
            <div className="p-6 h-full flex flex-col">
                <div className="flex-1 flex items-start mt-12 justify-center">
                    <div className="grid grid-cols-3 gap-8">
                        {items.map((item) => {
                            const active = pathname === item.href;

                            return (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-200
                                    ${
                                        active
                                            ? "bg-neutral-100 shadow-xs scale-105 text-neutral-900"
                                            : "text-neutral-500 hover:text-neutral-900"
                                    }`}
                                >
                                    <item.icon className="size-6" />
                                    <span className="text-xs font-medium">{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
