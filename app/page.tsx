import { Button } from "@/components/ui/button";
import logo from "../public/logoImg.jpg";
import amable from "../public/amable-comprobantes.webp";
import Image from "next/image";
import {
  ChevronDown,
  Code,
  Github,
  Link,
  Linkedin,
  Mail,
  Share2,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="py-8 px-10 md:px-20 space-y-24">
      <section>
        <div className="flex items-center justify-between flex-col-reverse gap-4 md:flex-row text-center md:text-left">
          <div className="space-y-6">
            <h1 className="md:text-3xl">
              Hola, soy Freddy,{" "}
              <span className="text-green-500">un desarrollador Web.</span>
            </h1>
            <p className="text-accent-foreground">
              Busco constantemente retos para crecer y ser mejor.
            </p>
            <Button className="flex items-center gap-1 rounded-md mx-auto md:mx-0 w-full">
              <ChevronDown className="h-4 w-4" />
              <span className="font-bold">VER MI CV</span>
            </Button>
            <div className="flex-col gap-2">
              <p>
                Puedes contactarme también a través de mi correo electrónico:
              </p>
              <a
                className="text-green-500"
                href="mailto:freddytomada7@gmail.com"
              >
                <div className="flex items-center gap-1 border-2 border-card-foreground p-2 rounded-md mt-4">
                  <Mail className="h-4 w-4" />
                  <span className="text-center md:text-left">
                    freddytomada7@gmail.com
                  </span>
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
          <h1 className="md:text-4xl font-bold">Social</h1>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <Button
              className="bg-blue-600 hover:scale-110 transition-all duration-200"
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
          <h1 className="md:text-4xl font-bold">Proyectos</h1>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="md:text-3xl text-green-500 font-bold">
              Amable Conti
            </h2>
            <Button>
              <a
                className="flex items-center gap-2"
                href="https://www.amableconti.com/"
                target="_blank"
              >
                <span className="font-bold">Link</span>
                <Link className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="space-y-4">
            <p className="mt-6 md:mt-0">
              Amable Conti es un software que permite a los contadores llevar la
              contabilidad de muchas empresas.
            </p>
            <div className="flex items-center gap-4">
              <Badge className="bg-blue-300">React</Badge>
              <Badge>Next.js</Badge>
              <Badge className="bg-blue-600 text-white hover:text-black">
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
      </section>
    </div>
  );
}
