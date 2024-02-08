import { Button } from "@/components/ui/button";
import logo from "../public/logoImg.jpg";
import amable from "../public/amable-comprobantes.webp";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Code,
  Github,
  LinkIcon,
  Linkedin,
  Mail,
  MousePointerClick,
  SendHorizonal,
  Share2,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="py-8 px-10 md:px-20 space-y-16 mb-5">
      <section>
        <div className="flex items-center justify-between flex-col-reverse gap-4 md:flex-row text-center md:text-left">
          <div className="space-y-6">
            <h1 className="text-xl md:text-3xl">
              Hola, soy Freddy,{" "}
              <span className="text-green-500 shine">
                un desarrollador Web.
              </span>
            </h1>
            <p className="text-accent-foreground">
              Busco constantemente retos para crecer y ser mejor.
            </p>
            <Button className="flex items-center hover:animate-bounce hover:direction-alternate gap-1 rounded-md mx-auto md:mx-0 w-full">
              <ChevronDown className="h-4 w-4" />
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1uqvVgMnyyLpiOlbUburtqBcvVe4TmYX4/view?usp=sharing"
              >
                <span className="font-bold">VER MI CV</span>
              </a>
            </Button>
            <div className="flex-col gap-2">
              <p>
                Puedes contactarme también a través de mi correo electrónico:
              </p>
              <a
                className="text-green-500"
                href="mailto:freddytomada7@gmail.com"
              >
                <div className="flex items-center group gap-2 border-2 border-card-foreground p-2 rounded-md mt-4">
                  <Mail className="h-4 w-4" />
                  <span className="text-center md:text-left flex-1">
                    freddytomada7@gmail.com
                  </span>
                  <SendHorizonal className="h-4 w-4 animate-in md:slide-in-from-left-6 repeat-infinite duration-1000 paused group-hover:running" />
                </div>
              </a>
            </div>
          </div>
          <div>
            <Image
              className="rounded-md w-full md:w-96 md:h-96"
              src={logo}
              alt="Logo"
            />
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <Share2 className="h-12 w-12" />
          <h1 className="text-2xl md:text-4xl font-bold">Social</h1>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <Button
              className="bg-sky-600 hover:scale-110 transition-all duration-200"
              variant={"outline"}
            >
              <a
                className="flex items-center gap-2"
                href="
              https://www.linkedin.com/in/freddytomada/"
                target="_blank"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              className="bg-gray-500 hover:scale-110 transition-all duration-200"
              variant={"outline"}
            >
              <a
                className="flex items-center gap-2"
                href="
                https://github.com/freddyval7"
                target="_blank"
              >
                <Github className="h-4 w-4" />
                Github
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <Star className="h-12 w-12" />
          <h1 className="text-2xl md:text-4xl font-bold">Proyectos</h1>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-3xl text-green-500 font-bold">
              Amable Conti
            </h2>
            <Button>
              <a
                className="flex items-center gap-2"
                href="https://www.amableconti.com/"
                target="_blank"
              >
                <span className="font-bold">Link</span>
                <LinkIcon className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="space-y-4">
            <p className="mt-6 md:mt-0">
              Amable Conti es un software que permite a los contadores llevar la
              contabilidad de muchas empresas.
            </p>
            <div className="flex items-center gap-4">
              <Badge className="bg-sky-300">React</Badge>
              <Badge>Next.js</Badge>
              <Badge className="bg-sky-600 text-white hover:text-black">
                Typescript
              </Badge>
            </div>
            <div>
              <Image
                className="rounded-md w-full bg-white"
                src={amable}
                alt="amable-conti"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Button
            size={"lg"}
            className="duration-200 transition-all mt-4 hover:scale-110 group"
          >
            <Link className="flex items-center gap-2" href="/projects">
              <span className="font-bold">Ver más</span>
              <MousePointerClick className="h-4 w-4 group-hover:animate-pulse group-hover:scale-110" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
