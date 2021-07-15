// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Tina Myers",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
   "Hello! I'm a SDE with previous experience in the medical field, specifically as a Physical Therapist Assistant. It really stretched my customer service (patient service) skills, ability to explain things in a non-technical manner, and to problem solve some of the toughest patients. These skills have served me well in Software Engineering: it has allowed me to connect to and understand clients, as well as help colleagues with concepts they don't have a full understanding of."
  };
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    faClass: "fab fa-node",
  },
  {
    name: "React",
    faClass: "fab fa-react",
  },
  {
    name: "Bootstrap",
    faClass: "fab fa-bootstrap",
  },
  {
    name: "Angular",
    faClass: "fab fa-angular",
  },
  {
    name: "MongoDB",
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    faClass: "fab fa-aws",
  },
  {
    name: "Markdown",
    faClass: "fab fa-markdown",
  },
  {
    name: "Git",
    faClass: "fab fa-git",
  },
  {
    name: "GitHub",
    faClass: "fab fa-github",
  },
  {
    name: "React Native",
    faClass: "fas fa-mobile-alt",
  },
  {
    name: "Socket.io",
    faClass: "far fa-comments",
  },
  {
    name: "iOS",
    faClass: "fas fa-laptop-code",
  },
  {
    name: "Windows",
    faClass: "far fa-keyboard",
  },
  {
    name: "DSA",
    faClass: "fas fa-code",
  },
  {
    name: "Python",
    faClass: "fab fa-python",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Tedashi Trained",
    skills: ["Node, React, MongoDB, SASS, CSS3, Bootstrap"],
    url: "https://github.com/myerstina515/tedashitrained",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "100 Days of Python",
    skills: ["React, SCSS, Python"],
    url: "https://tinamyers-python.netlify.app/",
  },

  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Shoppies",
    skills: ["React, CSS3, Bootstrap"],
    url: "https://github.com/myerstina515/shoppies",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Blackjack API",
    skills: ["Node, Express, MongoDB, Jest(>80% coverage)"],
    url: "https://github.com/tinamyers-401-advanced-javascript/blackjack",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Harry Potter Trivia",
    skills: ["React, Node, MongoDB, SASS, Material-UI, CSS3"],
    url: "https://github.com/Granger-Danger2021/trivia",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Parent Pick-up App",
    skills: ["Socket.io, Node, MongoDB, React, Redux,"],
    url: "https://github.com/parent-pickup-coordinator",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Salmon Cookies: Vanilla Javascript",
    url: "https://github.com/myerstina515/cookie-stand",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Salmon Cookies: Angular",
    url: "https://github.com/dinaayoub/salmon-cookies-angular/blob/main/REPORT.md",
  },
  // {
  //   // Add image in './styles/images.css' in #misc3
  //   id: "misc3",
  //   name: "Miscellaneous 3",
  //   url: "https://github.com/kaustubhai",
  // },
];
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "If you found my portfolio, I would love to hear from you! Let me know how you found me, how I can help you, and how I can get in touch! Thanks for taking time to see what I have to offer!",
  copyright: "Tina Myers",
  contactUrl: "https://formspree.io/f/mwkabqpy",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/myerstina515",
  linkedin: "http://linkedin.com/in/tinalmyers",
  resume: "https://docs.google.com/document/d/1QrYh8ivNetQ7v6kLGgoCxRTN-LuWp2YNBgPpFbaOt4U/edit?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
