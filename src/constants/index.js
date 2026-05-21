const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 20, suffix: "+", label: "Skills acquired" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Vikas has brought dedication, strong learning enthusiasm, and excellent coordination to the team, delivering impactful contributions and showcasing passion for Machine Learning throughout his internship.",
    imgPath: "/images/Cognifyz Banner.png",
    logoPath: "/images/Cognifyz Banner.png",
    title: "Machine Learning Intern",
    date: "February 2026 - March 2026",
    responsibilities: [
      "Predict Aggregate rating from restaurant features using machine learning algorithms.",
      "Content-based restaurant recommender using TF-IDF + cosine similarity.",
      "Multi-Class Classification on primary cuisine types.",
      "City/Location/Geological analysis of restaurants using clustering algorithms.",
    ],
  },
  {
    review: "Vikas has brought dedication, analytical skills, and a strong learning attitude, making valuable contributions throughout the Data Science internship. Wishing continued success in future endeavors.",
    imgPath: "/images/CodTech Banner.png",
    logoPath: "/images/codtech_logo.png",
    title: "Data Scientist Intern",
    date: "March 2026 - April 2026",
    responsibilities: [
      "Data Pipeline (ETL).",
      "Deep Learning (NLP)",
      "End-to-End Deployment of ML Models.",
      "Optimization Modelling.",
    ],
  },
  {
    review: "As a GirlScript Summer of Code (GSSoC) 2026 contributor, he demonstrated dedication, strong technical skills, and a proactive learning attitude, contributing effectively through PRs, code reviews, and collaborative development, adding significant value to the program.",
    imgPath: "/images/GSSoC 2026 Banner.png",
    logoPath: "/images/circle-GSSoC logo (Canva).png",
    title: "GSSoC Contributor 2026",
    date: "May 2026 - Present",
    responsibilities: [
      "Contribution to open-source projects, enhancing functionality and fixing bugs.",
      "Development of AI agents for applications, including chatbots and automation tools.",
      "Open Source Track: Actively participated in open-source projects, collaborating with the community to improve software and contribute to the ecosystem.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/Cognifyz logo.png",
  },
  {
    name: "logo2",
    imgPath: "/images/codtech_logo.png",
  },
  {
    name: "logo3",
    imgPath: "/images/GSSoC logo 1.png",
  },
];

const testimonials = [
  {
    name: "Aarav Mehta",
    mentions: "@aaravmehta010",
    review:
      "Vikas demonstrated exceptional Machine Learning expertise throughout our project. He was able to understand complex requirements, build intelligent solutions efficiently, and turn challenging ideas into practical, high-performing results. His problem-solving skills, deep understanding of AI/ML concepts, and ability to optimize workflows truly stood out. Working with him was smooth, professional, and highly productive.",
    imgPath: "/images/client 1.png",
  },
  {
    name: "Zayn Kapoor",
    mentions: "@zaynkapoor123",
    review:
      "Vikas handled our project workflow exceptionally well using Git and version control best practices. From organized commits to smooth collaboration and efficient branch management, everything was managed professionally and without confusion. His ability to maintain clean project structure, track changes effectively, and coordinate updates made the entire development process seamless. A reliable developer who truly understands collaborative project management.",
    imgPath: "/images/client 2.png",
  },
  {
    name: "Rishit Malhotra",
    mentions: "@rishitmalhotra",
    review:
      "Working with Vikas on our data-driven project was an excellent experience. His Data Science expertise helped us turn raw, unstructured data into meaningful insights and efficient solutions. What impressed me most was his analytical thinking, attention to detail, and ability to deliver accurate, high-quality results consistently. He combines technical knowledge with professionalism, making collaboration smooth and productive. Highly recommended for any Data Science or AI-related work.",
    imgPath: "/images/client 3.png",
  },
  {
    name: "Vikram Sethi",
    mentions: "@vikramsethi",
    review:
      "Working with Vikas was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client 6.png",
  },
  {
    name: "Kiara Sharma",
    mentions: "@kiarasharma1601",
    review:
      "Watching Vikas complete his first Physics research paper in Quantum Mechanics blended with Nanotechnology was genuinely inspiring. His never-give-up attitude, dedication to research, and passion for learning truly stand out. No matter how challenging things became, he stayed focused and delivered exceptional work with confidence and determination.",
    imgPath: "/images/client 5.png",
  },
  {
    name: "Ananya Rao",
    mentions: "@ananyaRao",
    review:
      "Vikas was honestly wonderful to work with. Beyond being incredibly professional, he has a genuine passion for AI and it clearly reflects in the quality of his work. He approached every challenge with creativity, patience, and a problem-solving mindset that made the entire experience smooth and enjoyable. What I appreciated most was how he could simplify complex AI concepts while still delivering smart, efficient solutions. Reliable, talented, and easy to collaborate with — I’d gladly recommend him to anyone looking for strong AI expertise with a personal touch.",
    imgPath: "/images/client 4.png",
  },
];

const socialImgs = [
  {
    name: "Instagram",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/sai_vikas_18005/",
  },
  {
    name: "Facebook",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com",
  },
  {
    name: "Github",
    imgPath: "/images/github.png",
    url: "https://github.com/Vikas-AI968",
  },
  {
    name: "LinkedIn",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/sai-vikas-n-104296323",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
