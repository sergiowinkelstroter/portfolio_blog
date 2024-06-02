import { projects } from "@/src/constants/projects";
import { ProjectItem } from "./ProjectItem";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

export const Projects = () => {
  return (
    <section
      id="projetos"
      className="w-full flex flex-col justify-center text-center mt-10 bg-[#212e40]"
    >
      <div className="max-w-[1100px] flex flex-col m-auto py-16 w-full ">
        <h1 className="">Projetos</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 mb-6 justify-center items-center container">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              image={project.image}
              technologies={project.technologies}
              demo={project.demo}
              repo={project.repo}
              description={project.description}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 m-auto hover:text-blue-600 transition-colors">
          <Link href={"https://github.com/sergiowinkelstroter"} target="_blank">
            Ver mais projetos
          </Link>
          <ArrowRight />
        </div>
      </div>
    </section>
  );
};
