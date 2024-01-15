import Java_SpringImage from "/public/assets/java_spring.jpg";

import { v4 as uuid } from "uuid";

export const projects = [
  {
    id: uuid(),
    title: "Gestão de Vagas",
    image: Java_SpringImage,
    description:
      "Uma API REST abrangendo o controle de empresas, vagas de emprego e aplicações. O projeto faz uso dos principais pacotes do Spring Boot para persistência de dados, implementação de segurança e autorização. A aplicação permite a criação, leitura, atualização e exclusão de registros relacionados a empresas, vagas de emprego e candidaturas, proporcionando uma solução completa para o gerenciamento de recursos humanos.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "PostGreSQL",
      "Swagger",
    ],
    repo: "https://github.com/sergiowinkelstroter/gestao_vagas_api",
    demo: "",
  },
  {
    id: uuid(),
    title: "Todo List API",
    image: Java_SpringImage,
    description: "API para gerenciar tarefas (CRUD)",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "PostGreSQL",
      "Swagger",
    ],
    repo: "https://github.com/sergiowinkelstroter/api_todo_list",
    demo: "",
  },
  {
    id: uuid(),
    title: "File Storage API",
    image: Java_SpringImage,
    description: "API para upload e download e arquivos",
    technologies: ["Java", "Spring Boot", "Spring MVC"],
    repo: "https://github.com/sergiowinkelstroter/file_storage_api",
    demo: "",
  },
];
