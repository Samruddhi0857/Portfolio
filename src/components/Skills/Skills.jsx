// src/components/Skills/Skills.jsx

import { SkillsInfo } from "../../constants";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[8vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-8 justify-center py-10">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className=" backdrop-blur-md px-6 py-6 w-full sm:w-[90%] md:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] bg-[#161b22]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
            {category.title}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-6 justify-items-center">
            {category.skills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex items-center space-x-2 bg-[#161b22] border border-gray-600 rounded-2xl py-2 px-3 shadow-md animate-float min-w-[7.5rem] max-w-[10rem] justify-start"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />
                <span
                  className={`text-sm sm:text-base text-gray-300 ${
                    skill.name.length > 6 ? "truncate" : ""
                  }`}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
