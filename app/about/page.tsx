import { Button } from "@/components/ui/button";
import {
  BookOpenText,
  ChevronDown,
  Github,
  Hammer,
  Linkedin,
  Mail,
} from "lucide-react";
import yo from "@/public/yo.jpeg";
import Image from "next/image";
import ExperienceList from "@/app/about/list-experience";

export default function Page() {
  return (
    <div className="py-8 px-10 md:px-20 space-y-24 mb-10">
      <section>
        <h1 className="mx-auto text-2xl text-center md:text-5xl w-full pb-6">
          Acerca de Mi
        </h1>
        <div className="md:grid grid-cols-2 gap-4 flex flex-col-reverse justify-between text-center md:text-left">
          <div className="space-y-6">
            <h1 className="md:text-3xl">Sin esfuerzo, no hay resultados</h1>
            <p className="text-accent-foreground">
              Soy Freddy Tomada, un desarrollador web de Venezuela, desde
              pequeño apasionado por la tecnología. Me encanta aprender y
              enfrentar nuevos retos, siempre buscando la excelencia en cada
              proyecto. Me considero una persona de valores y principios, con
              una actitud positiva y siempre dispuesto a ayudar a los demás.
              Actualmente soy un estudiante de ingeniería Informática en la
              Universidad Politécnica Territorial Andrés Eloy Blanco (UPTAEB).
            </p>
          </div>
          <div>
            <Image
              className="rounded-md w-1/2 mx-auto object-cover md:w-96 md:h-96"
              src={yo}
              alt="fotoPersonal"
            />
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <Hammer className="h-12 w-12" />
          <h1 className="md:text-4xl font-bold">Skills</h1>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <Button
              className="bg-blue-600 flex items-center gap-2 hover:scale-110 transition-all duration-200"
              variant={"outline"}
            >
              <Linkedin className="h-4 w-4" />
              Javascript
            </Button>
            <Button
              className="bg-gray-500 flex items-center gap-2 hover:scale-110 transition-all duration-200"
              variant={"outline"}
            >
              <Github className="h-4 w-4" />
              HTML
            </Button>
            <Button
              className="bg-gray-500 flex items-center gap-2 hover:scale-110 transition-all duration-200"
              variant={"outline"}
            >
              <Github className="h-4 w-4" />
              CSS
            </Button>
            <Button
              className="bg-gray-500 flex items-center gap-2 hover:scale-110 transition-all duration-200"
              variant={"outline"}
            >
              <Github className="h-4 w-4" />
              React
            </Button>
            <Button
              className="bg-gray-500 flex items-center gap-2 hover:scale-110 transition-all duration-200"
              variant={"outline"}
            >
              <Github className="h-4 w-4" />
              NextJS
            </Button>
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <BookOpenText className="h-12 w-12" />
          <h1 className="md:text-4xl font-bold">Experiencia</h1>
        </div>
        <div>
          <ExperienceList />
        </div>
      </section>
    </div>
  );
}
