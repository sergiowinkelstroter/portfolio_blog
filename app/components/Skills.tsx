import { skillsBE } from "@/constants/skills";
import { SkillComponent } from "./SkillComponent";
import * as Tabs from "@radix-ui/react-tabs";

export const Skills = () => {
  return (
    <div
      defaultValue="tab1"
      id="skills"
      className="TabsRoot w-full flex justify-center  text-center mt-28"
    >
      <div className="max-w-[1100px]  m-auto ">
        <div className="">
          <h1>Habilidades</h1>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-10 my-12 container">
          {skillsBE.map((skill) => (
            <SkillComponent
              title={skill.name}
              key={skill.name}
              image={skill.image}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
