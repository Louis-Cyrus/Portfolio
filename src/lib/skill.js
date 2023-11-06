// il me faut les logos de chaque technos pour les afficher
import {SiNextdotjs, SiVercel, SiFigma, SiTailwindcss, SiCss3, SiJavascript, SiReact, SiGithub} from 'react-icons/si'


export const skills = [
  {
    category: "Design",
    list: [{
        name: "Figma",
        icon: <SiFigma />
    },
    {
        name: "SCSS",
        icon: <SiCss3 />
    },
    {
        name: "Tailwind",
        icon: <SiTailwindcss />
    }]
  },
  {
    category: "Front-end",
    list: [{
        name: "Javascript",
        icon: <SiJavascript />
    },
    {
        name: "React",
        icon: <SiReact />
    },
    {
        name: "Next",
        icon: <SiNextdotjs />
    }]
  },
  {
    category: "Other",
    list: [{
        name: "Git & Github",
        icon: <SiGithub />
    },
    {
        name: "Vercel",
        icon: <SiVercel />
    }]
  }
];
