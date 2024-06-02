import Image from "next/image";

import ContactImage from "/public/contact.jpg";
import { Mails, MapPin, Smartphone } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contato"
      className="w-full flex flex-col justify-center  text-center mt-10 "
    >
      <div className="max-w-[1100px] m-auto px-2 py-16 w-full ">
        <h1>Contato</h1>

        <div className="flex flex-col  md:grid md:grid-cols-2 mt-12">
          <Image src={ContactImage} className="rounded-lg" alt="" />
          <ul className="flex flex-col items-center justify-center mt-10 md:mt-0 container">
            <li className="w-[250px] flex items-center mb-12">
              <Smartphone size={28} />
              <div className="ml-4 text-start">
                <p className="text-xl font-black">Telefone</p>
                <p>(99) 99152-9825</p>
              </div>
            </li>
            <li className="w-[250px] flex items-center mb-12">
              <Mails size={28} />
              <div className="ml-4 text-start">
                <p className="text-xl font-black">Email</p>
                <p>winksousa0@gmail.com</p>
              </div>
            </li>
            <li className="w-[250px] flex items-center ">
              <MapPin size={28} />
              <div className="ml-4 text-start">
                <p className="text-xl font-black">Localização</p>
                <p>Brasil - Açailandia, Maranhão</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
