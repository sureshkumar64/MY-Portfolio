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
  code1,
  movie,
  shop,
  youtube,
  python,
  django,
  postgres,
  sql,
  next,
  vue,
  liveLink,
  portfolio15,
  portfolio16,
  portfolio17,
  linktree,
  tiktok,
  ig,
  beeclone,
  smartrep,
  matrixai,
  zapflow,
  notable,


} from "../assets";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";  
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
    title: "UI/UX Designer",
    icon: web,
  },
  {
    title: "Graphic Designer",
    icon: mobile,
  },
  {
    title: "Fullstack Developer",
    icon: backend,
  },
  {
    title: "ML Engineer",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "threejs",
    icon: threejs,
  },
  {
    name: "next",
    icon: next,
  },
];

const experiences = [
  {
    title: "Real Estate Website",
    company_name: "Trustwell Developers",
    icon: code1,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Trustwell Developers is a real estate company that provides property development and management services.",
      "Implemented a property listing feature with advanced search and filtering options."
    ],
  },
  {
    title: "Club website",
    company_name: "wcemlsc",
    icon: code1,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Club website MLSC WCE for students.",
      "Implemented a user-friendly interface for easy navigation.",
      "Ensured responsive design for optimal viewing on various devices.",
    ],
  },
  {
    title: "Product selling platform",
    company_name: "Nature Mandi",
    icon: code1,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Nature Mandi is an online platform dedicated to promoting and selling organic products sourced from local farmers.",
      "Implemented user-friendly features to enhance the shopping experience.",
      "Ensured secure payment processing for online transactions.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I can't say enough good things about Jeff. He's a true team player who always puts the needs of the project first. If you're looking for a software engineer who can deliver results, Jeff is your guy.",
    name: "Halley Bennett",
    designation: "",
    company: "Hack Reactor",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Jeff is an incredible problem solver. Whenever we ran into a roadblock on our project, he was always able to come up with creative solutions that kept us moving forward.",
    name: "Yishak Wesego",
    designation: "",
    company: "Hack Reactor",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've worked with a lot of engineers over the years, and Jeff is one of the best. His technical skills are top-notch, but what really sets him apart is his ability to communicate complex ideas in a way that everyone on the team can understand.",
    name: "Megan Stewart",
    designation: "",
    company: "Hack Reactor",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const imageProjects = [
  {
    id: 1,
    image: web1,
    url: "https://trustwelldevelopers.com/",
    title: "Trustwell Developers",
    description: "",
  },
  {
    id: 2,
    image: web2,
    url: "https://wcemlsc.org/",
    title: "club website",
    description: "",
  },
  {
    id: 3,
    image: web3,
    url: "https://naturemandi.com/",
    title: "Nature Mandi",
    description: "",
  }
];

const projects = [
  {
    name: "Trustwell Developers",
    description:
      "Trustwell Developers is a cutting-edge software development company specializing in building innovative solutions for businesses. Our team of experts is dedicated to delivering high-quality software that meets the unique needs of our clients.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
       {
        name: "firebase",
        color: "brown-text-gradient",
      },
    ],
    image: web1,
    source_code_link: "#",
    liveUrl: "https://trustwelldevelopers.com",
  },
  {
    name: "Club website MLSC WCE",
    description:
      "Experience unparalleled team collaboration with Club website MLSC WCE, a cutting-edge SaaS platform designed to enhance productivity dynamically. Built with Next.js 13 and adorned with the latest technologies like Stripe for secure payments, Drizzle ORM for efficient data management, Tailwind CSS for intuitive styling, Supabase for a scalable backend, and WebSockets for real-time interactions, Club website MLSC WCE offers a modern workspace for teams and individuals to thrive in real time. Perfect for startups and large enterprises alike, Club website MLSC WCE seamlessly integrates advanced collaboration tools into your daily operations, setting a new standard for what a collaborative platform can achieve.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      }
    ],
    image: web2,
    source_code_link: "#",
    liveUrl: "https://wcemlsc.org/",
  },
  {
    name: "Nature Mandi",
    description:
      "Nature Mandi is a SaaS Automation Builder, a powerful and versatile platform designed to automate and streamline your business processes. Built from the ground up without relying on integration libraries, this builder offers a seamless and customizable experience for creating automation flows. Whether you are a small business or a large enterprise, our builder has the features you need to connect various services and automate your workflows efficiently.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
    ],
    image: web3,
    source_code_link: "#",
    liveUrl: "https://naturemandi.com/",
  },

];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  imageProjects,
};
