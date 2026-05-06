import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
            <p className="text-[120px] font-medium leading-none tracking-tighter select-none opacity-[0.08]">
                404
            </p>

            <div className="-mt-10">
                <h1 className="text-2xl font-medium">Página não encontrada</h1>
                <p className="mt-2 mb-8 text-muted-foreground max-w-sm text-sm leading-relaxed">
                    A página que você está procurando não existe ou foi movida.
                </p>

                <Button variant="outline" asChild>
                    <Link href="/">
                        <ArrowLeft className="size-4" />
                        Voltar ao início
                    </Link>
                </Button>
            </div>
        </div>
    );
}
