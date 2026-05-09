"use client";

import { buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { BeerIcon, Mail } from "lucide-react";

export default function Contatos() {
    return (
        <div className="relative max-w-6xl -mt-10 mx-auto h-screen border-x-2 border-dotted border-border/40 flex flex-col justify-center items-center p-10">
            <h1 className="text-4xl font-bold mb-4">Vamos Conversar!</h1>
            <p className="text-sm text-muted-foreground text-center max-w-2xl">
                Se você tem um projeto em mente, uma ideia para discutir ou
                apenas quer dizer oi, sinta-se à vontade para entrar em contato
                comigo. Estou sempre aberto a novas oportunidades e
                colaborações.
            </p>
            <Card className="mt-18 w-full">
                <CardHeader>
                    <div className="flex justify-between">
                        <div>
                            <CardTitle className="text-xl">
                                Entre em Contato
                            </CardTitle>
                            <CardDescription>
                                Você pode me encontrar nas seguintes
                                plataformas:
                            </CardDescription>
                        </div>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="rounded-md border flex items-center justify-center h-10 w-10 border-border p-2 cursor-pointer">
                                    <BeerIcon />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Aceita uma ideia… ou uma cerveja? 🍺</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-md border border-border/60">
                        <div>
                            <div className="flex items-center gap-1">
                                <Mail className="size-4" />
                                <p className="text-sm font-medium">Email</p>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                casseb.phcc@gmail.com
                            </p>
                        </div>
                        <a
                            href="mailto:casseb.phcc@gmail.com"
                            className={buttonVariants({ variant: "default" })}
                        >
                            Enviar
                        </a>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-md border border-border/60">
                        <div>
                            <div className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                                <p className="text-sm font-medium">GitHub</p>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                meus projetos e código
                            </p>
                        </div>
                        <a
                            href="https://github.com/pedrocasseb"
                            target="_blank"
                            className={buttonVariants({ variant: "default" })}
                        >
                            Abrir
                        </a>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-md border border-border/60">
                        <div>
                            <div className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                                <p className="text-sm font-medium">LinkedIn</p>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                rede profissional
                            </p>
                        </div>
                        <a
                            href="https://www.linkedin.com/in/pedro-henrique-cardoso-casseb-871474347/"
                            target="_blank"
                            className={buttonVariants({ variant: "default" })}
                        >
                            Conectar
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
