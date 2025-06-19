
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects"
import Education from "./components/Education/Education";

import Footer from "./components/Footer/Footer";
import Purpleflash from './components/Purpleflash';

const App = () => {
  return (
    <div className="bg-[#0d1117]">

       <Purpleflash position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] 	bg-[#0d1117]"></div>
      
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        < Projects />
        <Education />
        <Footer />
      </div>

    </div>
  );
};

export default App;
