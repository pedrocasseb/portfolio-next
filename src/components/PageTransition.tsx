"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="sync" initial={false}>
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                }}
                className="flex flex-col flex-1"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
