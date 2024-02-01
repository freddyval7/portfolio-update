import Link from "next/link";
import Image from "next/image";
import logo from "../public/logoImg.jpg";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between py-4 border-b-2 px-10 md:px-20 sticky top-0 text-green-600 bg-background">
      <div>
        <Image
          className="rounded-full"
          src={logo}
          alt="Logo"
          width={25}
          height={25}
        />
      </div>
      <div className="items-center gap-8 hidden md:flex">
        <Link
          className="hover:font-bold hover:scale-105 transition-all duration-200"
          href="/about"
        >
          Acerca de Mí
        </Link>
        <Link
          className="hover:font-bold hover:scale-105 transition-all duration-200"
          href="/proyects"
        >
          Proyectos
        </Link>
        <Link
          className="hover:font-bold hover:scale-105 transition-all duration-200"
          href="/experience"
        >
          Experiencia
        </Link>
      </div>
      <Menu className="cursor-pointer md:hidden" size={25} />
    </div>
  );
}
