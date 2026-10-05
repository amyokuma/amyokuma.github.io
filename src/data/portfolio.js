import Cloud1 from '../assets/clouds1.jpg';
import Cloud2 from '../assets/clouds2.jpg';
import hopscotch from '../assets/hopscotch.mp4';
import spiritOfPhuji from '../assets/spiritofphuji.mov';
import transit from '../assets/Transit.mov';

export const experiences = [
  {
    title: 'Software Engineering Intern',
    organization: 'Cadence Design Systems',
    location: 'San Jose, CA',
    dates: 'May 2026 – August 2026',
    description:
      'Built a multi-agent AI workflow for triaging customer-reported defects, reducing manual support steps by approximately 40%. Developed a C++ diagnostic plugin that identified state drift across 500+ optimization runs and resolved a hold-timing optimizer defect involving user-specified cells, improving investigation efficiency and product reliability.',
    skills: ['C++', 'AI Workflows', 'Debugging'],
    layoutClass: 'experience-item--first',
    skillClasses: [
      'px-6 min-[425px]:px-7 xl:px-8 2xl:px-10',
      'px-7 min-[425px]:px-8 xl:px-10 2xl:px-12',
      'px-3 min-[425px]:px-4 xl:px-5 2xl:px-5',
    ],
  },
  {
    title: 'AI Program Fellow',
    organization: 'Break Through Tech',
    location: 'Remote',
    dates: 'June 2025 – April 2026',
    description:
      'Selected from 3,000+ applicants for a year-long AI/ML fellowship with Cornell Tech. Partnered with Trufflow’s CEO and 4+ stakeholders to define product requirements and success metrics, translate business needs into measurable ML objectives, prioritize 10+ Agile features, and present recommendations to technical and non-technical stakeholders.',
    skills: ['AI/ML', 'Agile', 'Product Strategy', 'Stakeholder Communication'],
    layoutClass: 'experience-item--second',
    skillClasses: [
      'px-6 min-[425px]:px-7 xl:px-8 2xl:px-10',
      'px-3 min-[425px]:px-4 xl:px-5 2xl:px-5',
      'px-6 min-[425px]:px-7 xl:px-8 2xl:px-9',
      'px-4 min-[425px]:px-5 xl:px-6 2xl:px-7',
    ],
  },
];

export const projects = [
  {
    number: '01',
    imageSrc: Cloud1,
    videoSrc: transit,
    subject: 'User Research, Accessibility, Prototyping',
    title: 'Accessible Transit App (WIP)',
    description:
      'An accessible transit product shaped by user research and prototype testing.',
  },
  {
    number: '02',
    imageSrc: Cloud2,
    videoSrc: hopscotch,
    projectLink: 'https://devpost.com/software/hopscotch-7mvn65',
    subject: 'Next.js, Tailwind CSS, Python, Groq API',
    title: 'Hopscotch',
    description:
      'A full-stack AI planner that turns broad goals into actionable timelines.',
  },
  {
    number: '03',
    imageSrc: Cloud1,
    videoSrc: spiritOfPhuji,
    projectLink: 'https://github.com/hoethan231/SpiritOfPhujiWebsite',
    subject: 'Next.js, Tailwind CSS',
    title: 'Spirit of Phuji Game Website',
    description:
      'A responsive community website for discovering games and sharing feedback.',
  },
];
