import Image from "next/image";
import Logo from "../../public/logo.png";

export default function Loading() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
            <Image src={Logo} alt="logo" className="size-24" />
            <h1 className="text-md">&gt;&gt; Loading...</h1>
        </div>
    );
}
