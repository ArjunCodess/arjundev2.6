import Image from "next/image.js";
import { skills } from "../../constants/index.js";
import Navbar from "./Navbar";

const Skills = () => {
  return (
    <>
      <Navbar />
      <div id="skills" className="w-full lg:h-screen md:max-container lg:mt-[-80px]">
        <div className="p-4">
          <p className="uppercase block text-center text-3xl xs:text-4xl md:text-5xl italic p-5 font-bold">
            Skills & Tech
          </p>
          <p className="py-4 text-lg text-slate-600">
            These are the programming languages, frameworks, and technologies with which I am proficient:
          </p>
          <div className="mt-16 flex flex-wrap gap-12">
            {skills &&
              skills.map((skill) => (
                <div className="block-container w-20 h-20" key={skill.name}>
                  <div className="btn-back rounded-xl" />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <Image
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
