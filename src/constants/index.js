import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  logo,
  weather,
  br,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "User Interface Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Synctecho Soft",
    icon: logo,
    iconBg: "#383E56",
    date: "Aug 2024 - Present",
    points: [
      "Leveraged ReactJS, TypeScript, Tailwind CSS, Material UI to create dynamic and responsive user interfaces, ensuring cross-device compatibility.",
      "Developed and maintained core modules of the company's ERP system.",
      "Optimized application performance, leading to faster load times and smoother user interactions.",
      "Implemented API integration for seamless communication between front-end and backend systems.",
    ],
  },
  {
    title: "React.js internship",
    company_name: "Interactive Tech Solutions",
    icon: logo,
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: [
      "Gained experience with core React concepts: components, JSX, state management, props, routing, and Material UI.",
      "Developed a responsive, cross-browser GPT-4 OpenAI website UI using React, HTML, CSS, and React Icons.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Built an AI chatbot dashboard UI in React, applying key front-end concepts.",
    ],
  },
  {
    title: "Frontend Development Intern(ReactJS)",
    company_name: "House of Professionals",
    icon: logo,
    iconBg: "#383E56",
    date: "Feb 2024 - May 2024",
    points: [
      "Gained hands-on experience with HTML, CSS/SCSS, JavaScript (core, advanced concepts, and asynchronous operations), and jQuery.",
      "Developed responsive websites Bootstrap for improved user experience.",
      "Proactively explored fundamentals of ReactJS like Components, JSX, Props, State Management using Context Api, Folder Structure and react-router DOM.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tax Management System",
    description:
      "Developed Tax Management System using React, TypeScript, and Vite, featuring modules for WHT statements, CPR transactions, and certificate management.  Designed responsive UI/UX with Tailwind CSS, integrating Material UI components and lucide-react icons.  Implemented client-side form validation using react-hook-form with comprehensive error handling.  Integrated framer-motion animations to enhance user interaction and interface responsiveness.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Vite",
        color: "white-text-gradient",
      },
      {
        name: "framermotion",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/usamashoaib87/Tax-Management",
  },
  {
    name: "Fees Management System",
    description:
      "Developed Fee Management System using React, TypeScript, Vite and tailwind CSS featuring financial tracking and analytics. Designed responsive dashboards with Tailwind CSS and Recharts, implementing dynamic data visualization for fee distribution metrics. Built streamlined navigation architecture using react-router-dom, optimizing user workflow and system performance. Integrated form validation using react-hook-form.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
      {
        name: "framermotion",
        color: "white-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/usamashoaib87/Fees-Management-System",
  },
  {
    name: "GPT-4 OpenAI Website",
    description:
      "Developed a responsive GPT-4 OpenAI Website UI using ReactJS. Leveraged HTML, CSS, and JavaScript to build a user-friendly and visually appealing interface. Implemented React Icons for a consistent and scalable iconography system.Ensured cross-browser compatibility and responsiveness across all devices for optimal user experience.  Integrated framer-motion animations to enhance user interaction and interface responsiveness.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "white-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "react-icons",
        color: "pink-text-gradient",
      },
      {
        name: "figma",
        color: "white-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/usamashoaib87/GPT-4-OpenAI-Website",
  },
  {
    name: "Weather App",
    description:
      "Created a weather application using ReactJS to display real-time weather data. Utilized the Fetch API to retrieve data from a weather API. This weather app is made with reactJS where you can get weather data of any city in world with a single click. The data is fetched from weather Api. Integrated React-feather for weather icons and Dateformat library for date presentation. ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "white-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "react-icons",
        color: "pink-text-gradient",
      },
      {
        name: "fetchapi",
        color: "green-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/usamashoaib87/Weather-App",
  },
  {
    name: "BR Architects",
    description:
      "Created BR Architects website using HTML, CSS, Javascript and Bootstrap. Make sure that the website is fully functional and responsive on all devices and on all platforms that support the browser and web browsers and that the website is available on all platforms. The website is also live.",
    tags: [
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "white-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: br,
    source_code_link: "https://github.com/usamashoaib87/BR-Architects",
  },
];

export { services, technologies, experiences, testimonials, projects };
