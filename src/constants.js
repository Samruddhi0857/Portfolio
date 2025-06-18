// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

import RLogo from './assets/tech_logo/RLogo.jpeg';
import pandasLogo from './assets/tech_logo/pandasLogo.png';
import numpyLogo from './assets/tech_logo/numpyLogo.png';
import scikitLogo from './assets/tech_logo/scikitLogo.jpeg';
import matplotlibLogo from './assets/tech_logo/mtlogo.png';
import seabornLogo from './assets/tech_logo/seabornLogo.png';
import tableauLogo from './assets/tech_logo/tableauLogo.png';


// Experience Section Logo's
import ourlib from './assets/company_logo/ourlib.png';


// Education Section Logo's
import  abaLogo from './assets/education_logo/abaLogo.jpg';
import pvgLogo from './assets/education_logo/pvgLogo.png';

// Project Section Logo's
import recipeapp from './assets/work_logo/recipeapp.png';
import cee from './assets/work_logo/cee.png';
import bookrecom from './assets/work_logo/bookrecom.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo:figmaLogo },

    ],
  },

{
  title: 'Data & Machine Learning',
  skills: [
    { name: 'R', logo: RLogo },
    { name: 'Pandas', logo: pandasLogo },
    { name: 'NumPy', logo: numpyLogo },
    { name: 'scikit-learn', logo: scikitLogo },
    { name: 'Matplotlib', logo: matplotlibLogo },
    { name: 'Seaborn', logo: seabornLogo },
    { name: 'Tableau', logo: tableauLogo },
  ],
}


];

  export const experiences = [
    {
      id: 0,
      img: ourlib,
      role: "Web Developer Intern",
      company: "Speech Markers Pvt Ltd",
      date: "Jan 2025 - Feb 2025",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap.  Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Github"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
        img: pvgLogo,
      school: "Pune Vidyarthi Griha's College of Engineering & Technology Pune",
      date: "Nov 2022 - June 2026",
      grade: "9.57/10",
      desc: "",
      degree: "Bachelor of Engineering (Information Technology",
    },
    {
      id: 1,
    img: abaLogo,
      school: "Abasaheb Garware Junior College  ",
      date: "May 2022",
      grade: "83.8 %",
      desc: "",
      degree: "12th HSC",
    }
  ];
  
  export const projects = [
    {
      id: 0,
      title: "College Event Explorer",
      description:
        "A platform that allows students to explore and stay updated on upcoming college events.Developed backend APIs using Node.js and Express.js to handle event creation and retrieval.Stored and managed event data in MongoDB for dynamic updates.Built a responsive frontend using HTML, CSS, and JavaScript for seamless user experience..",
      image: cee,
      tags: ["Full Stack" , " Node.js","Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "",
    },
    
    {
      id: 1,
      title: "Book Recommender System",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: bookrecom,
      tags: ["Machine Learning", "Collaborative Filtering", "scikit-learn", "pandas", "flask","pickle"],
      github: "https://github.com/codingmastr/Movie-Recommenhttps://github.com/Samruddhi0857/Book-Recommender-Systemdation-App",
      webapp: "",
    },
    {
      id: 2,
      title: "Recipe Share",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: recipeapp,
      tags: ["MongoDB", "Express", "React", "NodeJS"],
      github: "https://github.com/Samruddhi0857/Food-Recipe-App.git",
      webapp: "",
    },
    
  ];  