"use client";

import Link from "next/link";
import { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

export const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="absolute w-full h-20 z-[100] bg-[#1f2937] text-white border-b-2 border-b-blue-600 top-0 right-0 left-0">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 md:items-center md:px-4">
        <>
          <Link
            href="/#home"
            className="uppercase text-2xl md:text-3xl font-bold "
          >
            <p>Sergio</p>
          </Link>
          <ul className="hidden md:flex md:items-center">
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:text-blue-600">
                Sobre mim
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:text-blue-600">
                Habilidades
              </li>
            </Link>
            <Link href="/#projetos">
              <li className="ml-10 text-sm uppercase hover:text-blue-600">
                Projetos
              </li>
            </Link>
            <Link href="/#contato">
              <li className="ml-10 text-sm uppercase hover:text-blue-600">
                contatos
              </li>
            </Link>
          </ul>
        </>

        <Link
          href="/blog"
          className="hidden md:block bg-blue-600 p-2 w-44 text-center font-semibold rounded-3xl border border-transparent  hover:bg-[#1f2937] hover:transition-colors hover:border-blue-600"
        >
          Acessar Blog
        </Link>

        <div className="md:hidden" onClick={handleNav}>
          <Menu size={28} />
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1f2937] p-10 ease-in duration-500 flex flex-col"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home" className="uppercase text-xl font-bold ">
                <p>Sergio</p>
              </Link>
              <button
                onClick={handleNav}
                className="rounded-full p-2 cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>
          </div>
          <div className="py-4 flex flex-col mt-6">
            <ul className="uppercase flex flex-col gap-4">
              <Link href="/#about">
                <li onClick={() => setNav(false)} className=" text-sm">
                  Sobre mim
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className=" text-sm">
                  Habilidades
                </li>
              </Link>
              <Link href="/#projetos">
                <li onClick={() => setNav(false)} className=" text-sm">
                  Projetos
                </li>
              </Link>
              <Link href="/#contato">
                <li onClick={() => setNav(false)} className=" text-sm">
                  contatos
                </li>
              </Link>
              <Link
                href="/blog"
                onClick={() => setNav(false)}
                className="bg-blue-600 p-2 w-40 text-sm text-center font-semibold rounded-md text-[#ecf0f3] hover:bg-[#1f2937] hover:transition-colors"
              >
                Acessar Blog
              </Link>
            </ul>
          </div>
          <div className="mt-12">
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://github.com/sergiowinkelstroter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={28} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sergio-winkelstroter/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={28} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
