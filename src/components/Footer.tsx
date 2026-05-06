import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";

export function Footer() {
    return (
        <>
            <style>
                {`
                    @import url("https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap");
                    * {
                        font-family: "Geist", sans-serif;
                    }
                `}
            </style>
            <div className="pt-20 px-4">
                <footer className="bg-white w-full max-w-337.5 mx-auto text-black pt-8 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-28 rounded-tl-3xl rounded-tr-3xl overflow-hidden">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-12">
                        <div className="lg:col-span-3 space-y-6">
                            <Link
                                href="/"
                                className="flex items-center text-2xl font-bold"
                            >
                                <Image
                                    src={Logo}
                                    alt="PrebuiltUI Logo"
                                    className="size-16"
                                />
                                Pedro Casseb
                            </Link>
                            <p className="text-sm/6 text-neutral-600 -mt-4 max-w-96">
                                PrebuiltUI helps you build faster by
                                transforming your design vision into fully
                                functional, production-ready UI components.
                            </p>
                            <div className="flex gap-5 md:gap-6 order-1 md:order-2">
                                <a
                                    href="https://github.com/pedrocasseb"
                                    target="_blank"
                                    className="text-neutral-600 hover:text-neutral-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
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
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/pedro-henrique-cardoso-casseb-871474347/"
                                    target="_blank"
                                    className="text-neutral-600 hover:text-neutral-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect
                                            width="4"
                                            height="12"
                                            x="2"
                                            y="9"
                                        />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-28 items-start">
                            <div>
                                <h3 className="font-medium text-sm mb-4">
                                    Conteúdo
                                </h3>
                                <ul className="space-y-3 text-sm text-neutral-800">
                                    <li>
                                        <Link
                                            href="/"
                                            className="hover:text-neutral-700"
                                        >
                                            Início
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/sobre"
                                            className="hover:text-neutral-700"
                                        >
                                            Sobre
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/projetos"
                                            className="hover:text-neutral-700"
                                        >
                                            Projetos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contato"
                                            className="hover:text-neutral-700"
                                        >
                                            Contato
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium text-sm mb-4">B</h3>
                                <ul className="space-y-3 text-sm text-neutral-800">
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-neutral-700"
                                        >
                                            X
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-neutral-700"
                                        >
                                            X
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-neutral-700"
                                        >
                                            X
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-neutral-700"
                                        >
                                            X
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-neutral-700"
                                        >
                                            X
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-span-2 md:col-span-1">
                                <h3 className="font-medium text-sm mb-4">C</h3>
                                <ul className="space-y-3 text-sm text-neutral-800">
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-neutral-700"
                                        >
                                            X
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-neutral-700"
                                        >
                                            X
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <a
                                            href="#"
                                            className="hover:text-neutral-700"
                                        >
                                            X
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-neutral-700"
                                        >
                                            X
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-neutral-700"
                                        >
                                            X
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-neutral-300 flex justify-between items-center">
                        <p className="text-neutral-600 text-sm">
                            © 2025 PEDRO CASSEB
                        </p>
                        <p className="text-sm text-neutral-600">
                            All right reserved.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl h-full max-h-64 bg-slate-100 rounded-full blur-[100px] pointer-events-none" />
                        <h1 className=" text-center font-extrabold leading-[0.7] text-transparent text-[clamp(3rem,15vw,15rem)] [-webkit-text-stroke:1px_#D4D4D4] mt-6 uppercase">
                            engineer
                        </h1>
                    </div>
                </footer>
            </div>
        </>
    );
}
