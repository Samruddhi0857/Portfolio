import { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import portfolioimg1 from '../../assets/portfolioimg1.jpg';

const About = () => {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <section
      id="about"
      className="py-2 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-14 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 min-h-[320px] md:min-h-[400px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Samruddhi Garge
          </h2>

          {/* Typing Text Container with fixed height */}
          <div className="text-base sm:text-lg md:text-lg text-gray-400 mb-8 mt-8 leading-relaxed min-h-[160px]">
            {!typingDone ? (
              <ReactTypingEffect
                text={[
                  'A passionate web developer focused on building responsive, user-friendly websites with React, Tailwind CSS, and modern JavaScript. Always curious, always learning, always creating. Also an AI/ML enthusiast.'
                ]}
                speed={30}
                eraseSpeed={0}
                typingDelay={500}
                eraseDelay={999999999}
                cursorRenderer={() => null} // Fully remove cursor
                displayTextRenderer={(text) => <p>{text}</p>}
                onTypingDone={() => setTypingDone(true)}
              />
            ) : (
              <p>
                A passionate web developer focused on building responsive, user-friendly websites
                with React, Tailwind CSS, and modern JavaScript. Always curious, always learning,
                always creating. Also an AI/ML enthusiast.
              </p>
            )}
          </div>

        
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
          <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-[18rem] md:h-[18rem] rounded-full overflow-hidden transform transition-transform duration-500 hover:scale-105 ml-6">
            <img
              src={portfolioimg1}
              alt="Samruddhi Garge"
              className="w-full h-full object-cover rounded-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
