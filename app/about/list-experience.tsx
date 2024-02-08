import { Sofia_Sans } from "next/font/google";

const font = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export function ExperienceList() {
  return (
    <ul className={font.className}>
      <li className="list-disc text-xl">
        <h3>Soluciones Contables LMV (2023-2024)</h3>
        <p className="pl-8">
          Desempeñé mi rol de programador front end para la creación del home
          page y funcionalidades internas del software
        </p>
      </li>
    </ul>
  );
}
