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
        <h1 className="mx-auto glitch shine text-2xl text-center md:text-5xl w-full md:mt-6 md:mb-14 text-green-600 font-bold">
          Acerca de Mi
        </h1>
        <div className="md:grid grid-cols-2 gap-4 flex flex-col-reverse justify-between text-center md:text-left">
          <div className="space-y-6">
            <h1 className="md:text-3xl font-bold difuminate">
              <span className="difuminate-span">Sin </span>
              <span className="difuminate-span">esfuerzo, </span>
              <span className="difuminate-span">no </span>
              <span className="difuminate-span">hay </span>
              <span className="difuminate-span">resultados </span>
            </h1>
            <p className="text-accent-foreground text-lg border p-5 bg-neutral-950 rounded-sm">
              Soy Freddy Tomada, un desarrollador web de Venezuela, desde
              pequeño apasionado por la tecnología. Me encanta aprender y
              enfrentar nuevos retos, siempre buscando la excelencia en cada
              proyecto. Me considero una persona de valores y principios, con
              una actitud positiva y siempre dispuesto a ayudar a los demás.
              Actualmente soy un estudiante de ingeniería Informática en la
              Universidad Politécnica Territorial Andrés Eloy Blanco (UPTAEB).
            </p>
            <div className="flex items-center gap-4">
              <Hammer className="h-12 w-12" />
              <h1 className="md:text-4xl font-bold">Skills</h1>
            </div>
            <div>
              <div className="grid grid-cols-3 md:flex md:items-center gap-4">
                <Button
                  className="bg-yellow-300 text-background font-bold flex items-center gap-2 hover:scale-110 transition-all duration-200"
                  variant={"outline"}
                >
                  Javascript
                </Button>
                <Button
                  className="bg-orange-500 flex items-center gap-2 hover:scale-110 transition-all duration-200"
                  variant={"outline"}
                >
                  HTML
                </Button>
                <Button
                  className="bg-sky-400 flex items-center gap-2 hover:scale-110 transition-all duration-200"
                  variant={"outline"}
                >
                  CSS
                </Button>
                <Button
                  className="bg-sky-600 flex items-center gap-2 hover:scale-110 transition-all duration-200"
                  variant={"outline"}
                >
                  React
                </Button>
                <Button
                  className="bg-foreground text-background font-bold flex items-center gap-2 hover:scale-110 transition-all duration-200"
                  variant={"outline"}
                >
                  NextJS
                </Button>
              </div>
            </div>
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
