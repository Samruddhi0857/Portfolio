// src/components/Work/Work.jsx

import { projects } from "../../constants";
import { useState } from "react";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 px-[8vw] md:px-[7vw] lg:px-[12vw] font-sans bg-[#0f0f1b]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="bg-[#1a1a2e] hover:bg-[#252541] border border-gray-700 rounded-2xl shadow-lg cursor-pointer transition-transform hover:-translate-y-2 hover:shadow-purple-500/50"
          >
            <img
              src={project.image}
              alt={project.title}
          className="w-full h-50 object-cover rounded-t-2xl border-b border-[#1a1a2e] p-7"

            />

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#3d2c8d] text-purple-300 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-4 text-white text-3xl font-bold hover:text-purple-500 z-50"
            >
              &times;
            </button>

            <div className="flex flex-col items-center px-6 pt-6 pb-10">
              <div className="w-full mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[400px] object-contain rounded-lg shadow-md"
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {selectedProject.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm text-center leading-relaxed">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#3d2c8d] text-purple-300 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-purple-800 text-gray-300 px-6 py-2 rounded-xl text-sm font-semibold"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-sm font-semibold"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
