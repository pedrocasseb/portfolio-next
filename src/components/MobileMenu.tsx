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
            className={`
                fixed top-16 left-0 right-0 bottom-0 z-40 bg-background
                transition-transform duration-300 ease-in-out
                ${open ? "translate-y-0" : "translate-y-full"}
            `}
        >
            <div className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold">Menu</h2>
                    <button onClick={() => setOpen(false)}>
                        <X />
                    </button>
                </div>

                <div className="flex-1 flex items-start mt-12 justify-center">
                    <div className="grid grid-cols-3 gap-8">
                        {items.map((item) => {
                            const active = pathname === item.href;

                            return (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition
                                    ${
                                        active
                                            ? "bg-muted shadow-sm scale-105"
                                            : "opacity-70"
                                    }`}
                                >
                                    <item.icon />
                                    <span className="text-sm">{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
