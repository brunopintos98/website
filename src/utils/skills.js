import dayjs from "dayjs";

import {
  Bitbucket,
  Electron as ElectronImage,
  Figma,
  Git,
  Github,
  Gitlab,
  Java,
  Javascript,
  Jira,
  Node,
  Phaser,
  Rails,
  ReactLogo,
  Sketch,
  Trello,
  Typescript,
  Zeplin,
} from "assets";

export const findByKey = (key) => skills[key - 1];

const skills = [
  {
    name: "React / ReactNative",
    description1: `I've been part of different projects with React and React Native for the past ${
      dayjs().year() - 2019
    }+ years, and I have the ability to operate effortlessly with this technologies. I am familiar with concepts such as virtual DOM, JSX, functional components, hooks, Redux, components lifecycle, custom hooks, HOCs, etc.`,
    images: [
      {
        image: ReactLogo,
        alt: "React",
        key: "1-1",
      },
    ],
    key: "1",
  },
  {
    name: "Version Control",
    description1:
      "I have been working with Git since college, and I am really used to the tool. Regarding online repositories, I've been part of projects stored on Github, Bitbucket, and Gitlab. I'm really familiar with concepts such as commits, pull/push, stash, rebase, merge, pull requests, reviews, approvals, and more.",
    images: [
      {
        image: Git,
        alt: "Git",
        key: "2-1",
      },
      {
        image: Github,
        alt: "Github",
        key: "2-2",
      },
      {
        image: Gitlab,
        alt: "Gitlab",
        key: "2-3",
      },
      {
        image: Bitbucket,
        alt: "Bitbucket",
        key: "2-4",
      },
    ],
    key: "2",
  },
  {
    name: "Management Tools",
    description1:
      "As a really important part of the software development process, the management tools were always there for me. I used others, but on most projects, I have been working with Jira or Trello and consider them the best. Allowing many integrations (time-tracking apps, design tools, online repositories, etc.) makes them great management tools.",
    images: [
      {
        image: Jira,
        alt: "Jira",
        key: "3-1",
      },
      {
        image: Trello,
        alt: "Trello",
        key: "3-2",
      },
    ],
    key: "3",
  },
  {
    name: "Design Tools",
    description1:
      "I have been part of several projects with design tools such as Figma, Sketch, and Zeplin. I am used to its interface, which makes it easy for me to export files, navigate through the screens' flow, and comment on parts of the design to discuss different approaches with the project designers.",
    images: [
      {
        image: Figma,
        alt: "Figma",
        key: "4-1",
      },
      {
        image: Sketch,
        alt: "Sketch",
        key: "4-2",
      },
      {
        image: Zeplin,
        alt: "Zeplin",
        key: "4-3",
      },
    ],
    key: "4",
  },
  {
    name: "Languages",
    description1:
      "React and React Native are javascript-based, so my preferred languages are Javascript and Typescript. I usually prefer to work with the last one, because of the additional typing, generics, interfaces, etc, which makes it a more robust language in my opinion.",
    images: [
      {
        image: Javascript,
        alt: "Javascript",
        key: "5-1",
      },
      {
        image: Typescript,
        alt: "Typescript",
        key: "5-2",
      },
    ],
    key: "5",
  },
  {
    name: "Backend",
    description1:
      "For back-end or full-stack projects, I have experience working with Node or Java, creating, in most cases, desktop apps. I also took part as a front-end developer in many projects that had a Ruby on Rails back-end, so I have some basic knowledge of that language too.",
    images: [
      {
        image: Node,
        alt: "Node",
        key: "6-1",
      },
      {
        image: Java,
        alt: "Java",
        key: "6-2",
      },
      {
        image: Rails,
        alt: "Rails",
        key: "6-3",
      },
    ],
    key: "6",
  },
  {
    name: "Other frameworks",
    description1:
      "I also had the opportunity to work with Electron, a cross-platform desktop application framework based on Node. And with Phaser, which is a Javascript game framework.",
    images: [
      {
        image: ElectronImage,
        alt: "Electron",
        key: "7-1",
      },
      {
        image: Phaser,
        alt: "Phaser",
        key: "7-2",
      },
    ],
    key: "7",
  },
];

export default skills;
