import "../globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <TooltipProvider>
                <Navbar />
                <div className="flex-1">{children}</div>
                <Footer />
            </TooltipProvider>
        </>
    );
}
