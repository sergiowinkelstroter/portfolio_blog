import { Github, Linkedin } from "lucide-react";

export const Main = () => {
  return (
    <section id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
        <div className="mb-14 ">
          <h1 className="mb-1 font-mono text-3xl  md:text-6xl">
            Olá, eu <br className="block md:hidden" />
            <span>sou o Sergio 👋</span>
          </h1>
          <div className="text-lg font-semibold md:text-3xl">
            Desenvolvedor <span className="text-blue-600">Back-stack</span>
          </div>
        </div>
        <div>
          <ul className="flex gap-4 container">
            <li className="hover:text-blue-600">
              <a
                href="https://github.com/sergiowinkelstroter"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={32} />
              </a>
            </li>
            <li className="hover:text-blue-600">
              <a
                href="https://www.linkedin.com/in/sergio-winkelstroter/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
