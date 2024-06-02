import Image from "next/image";
import perfilImg from "/public/assets/home_img.png";

export const About = () => {
  return (
    <section
      id="about"
      className="w-full flex justify-center text-center mt-28 mb-6 md:mb-0 md:mt-0 md:h-screen"
    >
      <div className="max-w-[1100px] m-auto ">
        <div className="mb-12">
          <h1>Sobre mim</h1>
        </div>
        <div className="md:grid md:grid-cols-2">
          <div className="flex items-center justify-center">
            <Image
              src={perfilImg}
              alt=""
              width={300}
              height={200}
              className="rounded-md "
            />
          </div>
          <div className="mt-10 px-4 flex flex-col gap-6 items-center container">
            <p className="md:text-start text-sm md:text-base">
              Desenvolvedor <strong>back-end</strong>, utilizando tecnologias
              avançadas, notadamente <strong>Java</strong> e{" "}
              <strong>Spring Boot</strong>. Cursando Sistemas para Internet na
              UniCesumar. Em busca da minha primeira oportunidade profissional
              para aplicar e expandir meu conhecimento em um ambiente de
              trabalho dinâmico e desafiador.
            </p>
            <a
              download
              href="/curriculum_.pdf"
              className="mt-6 bg-blue-600 p-2 w-44 text-center font-semibold rounded-3xl border border-transparent hover:bg-[#1f2937] hover:transition-colors hover:border-blue-600"
            >
              Baixar curriculo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
