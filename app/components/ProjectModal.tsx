"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Computer, Github, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ProjectModalProps {
  title: string;
  description: string;
  technologies: string[];
  repo: string;
  image: StaticImageData;
  demo: string;
}

export const ProjectModal = ({
  demo,
  image,
  repo,
  technologies,
  title,
  description,
}: ProjectModalProps) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed w-[350px] md:w-[700px] bg-[#1f2937]  py-6  px-5 md:px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25 my-4">
        <div className="flex justify-between">
          <div></div>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Close>
            <X size={25} />
          </Dialog.Close>
        </div>
        <div className="flex items-center justify-center gap-6 my-8 ">
          <Dialog.Description className="flex-1 flex flex-col gap-2">
            <p className="text-sm"> {description}</p>

            <p className="font-semibold text-sm">
              Tecnologias usadas: {technologies.join(", ")}
            </p>

            <div className="flex gap-6 mt-2 text-base">
              <div className="flex gap-1 items-center hover:text-blue-600 hover:transition-colors">
                <Github />
                <a href={repo} target="_blank">
                  Ver código
                </a>
              </div>
            </div>
          </Dialog.Description>
          <div className="hidden md:block">
            <Image alt="" src={image} width={300} height={300} />
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
