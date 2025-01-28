export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize clear communication and collaboration with clients.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    // img: "/b1.svg",
    img:"/laptop.jpeg"
  },
  {
    id: 2,
    title: "I'm adaptable to different time zones for effective collaboration.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
    
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I continually enhance my skills and expertise.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for developing fun and user-friendly websites.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently exploring cloud computing and back-end tools.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Travel Log",
    des: "A Full-Stack MERN app for documenting travel experiences with map-based location selection and interactive markers.",
    img: "/p1.svg",
    imgClassName: "w-full h-full",
    iconLists: ["/re.svg", "/node.svg", "/mongo.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/abelaleb/travel-log",
  },
  {
    id: 2,
    title: "CV Maker",
    des: "A React web app designed to create professional resumes with a user-friendly interface.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    // link: "https://github.com/abelaleb/CV-Builder",
    link: "https://cv-builder-ruddy.vercel.app/"
  },
  {
    id: 3,
    title: "Todo App",
    des: "A feature-rich To-Do List app using HTML, CSS, and JavaScript with local storage for data persistence.",
    img: "/p3.svg",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    // link: "https://github.com/abelaleb/Todo-List",
    link:"https://abelaleb.github.io/Todo-List/"
  },
  {
    id: 4,
    title: "Cinema App",
    des: "Browse movies, TV shows, and actors using a React, TypeScript, and Tailwind CSS stack.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg"],
    link: "https://github.com/abelaleb/CineAtlas",
  },
];

export const companies = [
  {
    id: 1,
    name: "Azure",
    img: "/azure.svg",
    nameImg: "/azureName.svg",
  },
  {
    id: 2,
    name: "React",
    img: "/react.svg",
    nameImg: "/reactName.svg",
  },
  {
    id: 3,
    name: "MongoDB",
    img: "/mongo.svg",
    nameImg: "/mongoName.svg",
  },
  {
    id: 4,
    name: "GitHub",
    img: "/github.svg",
    nameImg: "/githubName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Open-Source Front-End Developer",
    desc: "Contributed to open-source projects with a focus on user-friendly front-end development using React, HTML, CSS, and Tailwind CSS.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    desc: "worked on front-end applications, from concept to deployment, ensuring seamless user experiences.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  // {
  //   id: 3,
  //   title: "Biomedical Engineering Student",
  //   desc: "Leveraged engineering and software skills to create practical, innovative applications.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp3.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/abelaleb",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/sometimesabel",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/abel-alebachew-2b8420229/",
  },
];
