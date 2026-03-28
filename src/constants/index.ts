// Contains constant data for using in website
// ! Don't remove anything from here if not sure
// Add this import at the top with other imports
// Add this import with the other imports
import appIcon from "../assets/company/appicon.png";
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
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "React Native Developers",
    company_name: "Chit Fund Mobile App | React Native",
    icon: appIcon, // Changed from starbucks
    iconBg: "#383E56",
    date: "Dec 2025 - April 2026",
    points: [
      "Built and deployed a production-ready cross-platform app for Android (Play Store) and iOS (App Store) using React Native.",
      "Collaborated with designers and product managers to deliver a high-quality, responsive UI on both platforms.",
      "Ensured cross-device compatibility and platform-specific optimizations.",
      "Participated in code reviews and maintained clean, scalable code.",
    ],
  },
  {
    title: "Web Application (React.js)",
    company_name: "Manikya Chits – Web + Mobile Ecosystem",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed and maintained a responsive React.js website with cross-browser compatibility",
      "Collaborated with designers and product managers to create high-quality user interfaces",
      "Participated in code reviews and maintained clean, scalable code architecture",
      "Implemented responsive, native-like UI with platform-specific optimizations",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
] as const;
// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Mrs Sunitha",
    designation: "CFO",
    company: "Ideal Manglore",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Mr. Ram Hunsur",
    designation: "Director",
    company: "Manikya Chits",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Anil",
    designation: "CTO",
    company: "Studio",
    image: user3,
  },
] as const;

// Replace the PROJECTS array with this:
export const TEAM_MEMBERS = [
  {
    name: "Mr. Mohan Kumar",
    description: "Managing Director of Manikya Chits Pvt Ltd, rapidly growing in chit fund business. Helping DWW with collecting customers and clients.",
    tags: [
      { name: "Leadership", color: "blue-text-gradient" },
      { name: "Business Strategy", color: "green-text-gradient" },
      { name: "Client Management", color: "pink-text-gradient" }
    ],
    image: "",
    github_link: "https://github.com/mohankumar",
    instagram_link: "https://instagram.com/mohankumar",
    linkedin_link: "https://linkedin.com/in/mohankumar"
  },
  {
    name: "Mr. Ram Hunsur",
    description: "Director of Manikya Chits. Helping DWW as a Contact Manager, handling client relationships and business development.",
    tags: [
      { name: "Business Development", color: "blue-text-gradient" },
      { name: "Client Relations", color: "green-text-gradient" },
      { name: "Management", color: "pink-text-gradient" }
    ],
    image: "",
    github_link: "https://github.com/ramhunsur",
    instagram_link: "https://instagram.com/ramhunsur",
    linkedin_link: "https://linkedin.com/in/ramhunsur"
  },
  {
    name: "Harish Patil",
    description: "Backend developer skilled in Python, Java, Node.js, and PHP. Pursuing 3rd year Engineering at St Joseph Engineering College, Mangalore.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Java", color: "pink-text-gradient" },
      { name: "PHP", color: "blue-text-gradient" }
    ],
    image: "",
    github_link: "https://github.com/HarishPatil20",
    instagram_link: "https://www.instagram.com/harish__patil____?igsh=ZXFuaHU3NzVyOWox",
    linkedin_link: "https://linkedin.com/in/harishpatil"
  },
  {
    name: "Sharanya S",
    description: "Frontend developer skilled in React, Vue.js, and Tailwind CSS. 3rd year CSE student at Srinivas Institute of Technology, Mangalore.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Vue.js", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "UI/UX", color: "blue-text-gradient" }
    ],
    image: "",
    github_link: "https://github.com/sharanya",
    instagram_link: "https://instagram.com/sharanya",
    linkedin_link: "https://linkedin.com/in/sharanya"
  },
  {
    name: "Pruthvi G",
    description: "Full-stack developer skilled in MERN stack and mobile apps. 3rd year Engineering student at St Joseph Engineering College, Mangalore.",
    tags: [
      { name: "MERN Stack", color: "blue-text-gradient" },
      { name: "React Native", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" }
    ],
    image: "",
    github_link: "https://github.com/pruthvimax",
    instagram_link: "https://www.instagram.com/pruthvee_0106?igsh=MXV6d29heWJvejc4ag==",
    linkedin_link: "https://linkedin.com/in/pruthvig"
  },
  {
    name: "Nithin H M",
    description: "Research & Hardware Manager skilled in IoT and embedded systems. 3rd year Engineering student at St Joseph Engineering College, Mangalore.",
    tags: [
      { name: "IoT", color: "blue-text-gradient" },
      { name: "Embedded Systems", color: "green-text-gradient" },
      { name: "Hardware", color: "pink-text-gradient" },
      { name: "Research", color: "blue-text-gradient" }
    ],
    image: "",
    github_link: "https://github.com/Nithin2129",
    instagram_link: "https://www.instagram.com/nithin__.21?igsh=NDZuMXY0cjJvMmh3",
    linkedin_link: "https://www.linkedin.com/in/nithin-h-m-0a022921a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  }
];
export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
   // link: "https://www.youtube.com/@OPGAMER.",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    //link: "https://www.linkedin.com/in/sanidhyy",
  },
  {
    name: "Twitter",
    icon: twitter,
    //link: "https://twitter.com/TechnicalShubam",
  },
  {
    name: "GitHub",
    icon: github,
   // link: "https://github.com/sanidhyy",
  },
] as const;
