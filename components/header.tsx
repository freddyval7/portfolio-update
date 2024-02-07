import Link from "next/link";
import Image from "next/image";
import logo from "../public/logoImg.jpg";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function Header() {
  return (
    <Sheet>
      <div className="flex z-50 items-center justify-between py-4 border-b-2 px-10 md:px-20 sticky top-0 text-green-600 bg-neutral-950">
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
            href="/"
          >
            Inicio
          </Link>
          <Link
            className="hover:font-bold hover:scale-105 transition-all duration-200"
            href="/about"
          >
            Acerca de Mí
          </Link>
          <Link
            className="hover:font-bold hover:scale-105 transition-all duration-200"
            href="/projects"
          >
            Proyectos
          </Link>
        </div>
        <SheetTrigger asChild className="cursor-pointer md:hidden">
          <Menu size={25} />
        </SheetTrigger>
        <SheetContent side={"right"}>
          <div className="items-center gap-8 flex-col">
            <Link
              className="hover:font-bold hover:scale-105 transition-all duration-200"
              href="/"
            >
              Inicio
            </Link>
            <Link
              className="hover:font-bold hover:scale-105 transition-all duration-200"
              href="/about"
            >
              Acerca de Mí
            </Link>
            <Link
              className="hover:font-bold hover:scale-105 transition-all duration-200"
              href="/projects"
            >
              Proyectos
            </Link>
          </div>
        </SheetContent>
      </div>
    </Sheet>
  );
}
