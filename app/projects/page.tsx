import { Button } from "@/components/ui/button";
import amable from "@/public/amable-comprobantes.webp";
import space from "@/public/space-multipage.png";
import multistep from "@/public/multistep-form.png";
import ustore from "@/public/ustore.png";
import utask from "@/public/utask.png";
import ublog from "@/public/ublog.png";
import { Code2, LinkIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="py-8 px-10 md:px-20 space-y-24 mb-10">
      <section className="space-y-12">
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
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-3xl text-green-500 font-bold">
              Utask
            </h2>
            <div className="flex items-center gap-2">
              <Button>
                <a
                  className="flex items-center gap-2"
                  href="https://utask-app.vercel.app"
                  target="_blank"
                >
                  <span className="font-bold">Link</span>
                  <LinkIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button>
                <a
                  className="flex items-center gap-2"
                  href="https://github.com/freddyval7/utask-app"
                  target="_blank"
                >
                  <span className="font-bold">Código</span>
                  <Code2 className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <p className="mt-6 md:mt-0">
              Administrador de tareas inspirado en Trello, en donde el usuario
              puede autenticarse, tener sus propias organizaciones, crear sus
              tablas con listas y cartas, además de utilizar un sistema de
              planes pagos con Stripe.
            </p>
            <div className="flex items-center gap-4">
              <Badge>NextJS</Badge>
              <Badge className="bg-sky-600 text-white hover:text-black">
                Tailwind CSS
              </Badge>
              <Badge className="bg-green-500 text-white hover:text-black">
                Prisma
              </Badge>
              <Badge className="bg-blue-600 text-white hover:text-black">
                Clerk
              </Badge>
              <Badge className="bg-purple-500 text-white hover:text-black">
                Stripe
              </Badge>
            </div>
            <div>
              <Image
                className="rounded-md w-full bg-white"
                src={utask}
                alt="utask"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-3xl text-green-500 font-bold">
              U Blog
            </h2>
            <div className="flex items-center gap-2">
              <Button>
                <a
                  className="flex items-center gap-2"
                  href="https://ublog-two.vercel.app/"
                  target="_blank"
                >
                  <span className="font-bold">Link</span>
                  <LinkIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button>
                <a
                  className="flex items-center gap-2"
                  href="https://github.com/freddyval7/blog-pers"
                  target="_blank"
                >
                  <span className="font-bold">Código</span>
                  <Code2 className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <p className="mt-6 md:mt-0">
              Administrador de blogs que permite a los usuarios autenticarse,
              crear, leer, eliminar y modificar sus propios blogs.
            </p>
            <div className="flex items-center gap-4">
              <Badge>NextJS</Badge>
              <Badge className="bg-sky-600 text-white hover:text-black">
                Tailwind CSS
              </Badge>
              <Badge className="bg-green-500 text-white hover:text-black">
                Prisma
              </Badge>
              <Badge className="bg-purple-600 text-white hover:text-black">
                NextAuth
              </Badge>
            </div>
            <div>
              <Image
                className="rounded-md w-full bg-white"
                src={ublog}
                alt="u-blog"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-3xl text-green-500 font-bold">
              U Store
            </h2>
            <div className="flex items-center gap-2">
              <Button>
                <a
                  className="flex items-center gap-2"
                  href="https://u-store.vercel.app"
                  target="_blank"
                >
                  <span className="font-bold">Link</span>
                  <LinkIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button>
                <a
                  className="flex items-center gap-2"
                  href="https://github.com/freddyval7/fake-store"
                  target="_blank"
                >
                  <span className="font-bold">Código</span>
                  <Code2 className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <p className="mt-6 md:mt-0">
              Tienda online que permite a los usuarios ver productos, buscarlos,
              filtrarlos y agregarlos al carrito, utilizando el Fakestore API.
            </p>
            <div className="flex items-center gap-4">
              <Badge>NextJS</Badge>
              <Badge className="bg-sky-600 text-white hover:text-black">
                Tailwind CSS
              </Badge>
            </div>
            <div>
              <Image
                className="rounded-md w-full bg-white"
                src={ustore}
                alt="u-store"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-3xl text-green-500 font-bold">
              Multistep Form
            </h2>
            <div className="flex items-center gap-2">
              <Button>
                <a
                  className="flex items-center gap-2"
                  href="https://multistep-form-freddyval7.vercel.app"
                  target="_blank"
                >
                  <span className="font-bold">Link</span>
                  <LinkIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button>
                <a
                  className="flex items-center gap-2"
                  href="https://github.com/freddyval7/multistep-form"
                  target="_blank"
                >
                  <span className="font-bold">Código</span>
                  <Code2 className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <p className="mt-6 md:mt-0">
              Formulario dividido en pasos que permite al usuario colocar sus
              datos y escoger una subscripción acorde a sus necesidades.
            </p>
            <div className="flex items-center gap-4">
              <Badge className="bg-pink-400 text-white hover:text-black">
                React Hook Form
              </Badge>
              <Badge>NextJS</Badge>
              <Badge className="bg-sky-600 text-white hover:text-black">
                Tailwind CSS
              </Badge>
              <Badge>Jotai</Badge>
            </div>
            <div>
              <Image
                className="rounded-md w-full bg-white"
                src={multistep}
                alt="multistep-form"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-3xl text-green-500 font-bold">
              Multipage Space
            </h2>
            <div className="flex items-center gap-2">
              <Button>
                <a
                  className="flex items-center gap-2"
                  href="https://space-multipage.vercel.app/"
                  target="_blank"
                >
                  <span className="font-bold">Link</span>
                  <LinkIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button>
                <a
                  className="flex items-center gap-2"
                  href="https://github.com/freddyval7/space-multipage"
                  target="_blank"
                >
                  <span className="font-bold">Código</span>
                  <Code2 className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <p className="mt-6 md:mt-0">
              Multipage que permite a los usuarios conocer más sobre el espacio,
              tecnologías y tripulantes destacados.
            </p>
            <div className="flex items-center gap-4">
              <Badge className="bg-sky-300">React</Badge>
              <Badge>React-Router</Badge>
              <Badge className="bg-sky-600 text-white hover:text-black">
                Tailwind CSS
              </Badge>
            </div>
            <div>
              <Image
                className="rounded-md w-full bg-white"
                src={space}
                alt="space-multi-page"
              />
            </div>
          </div>
        </div>
        <h4 className="w-full text-center italic font-bold text-2xl mt-4">
          Próximamente Más...
        </h4>
      </section>
    </div>
  );
}
