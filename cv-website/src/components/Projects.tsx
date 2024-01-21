import { Container } from "react-bootstrap";
import {
  FaAws,
  FaBootstrap,
  FaChevronLeft,
  FaChevronRight,
  FaCss3Alt,
  FaJava,
  FaJenkins,
  FaJs,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiStorybook } from "react-icons/si";
import SkillItem from "./SkillItem";
import { ReactNode, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ProjectBox from "./ProjectBox";

export interface projectInterface {
  name: string;
  summary: string;
  description: ReactNode;
  skills: (typeof skillsArray)[number]["name"][];
}

const projectsArray: projectInterface[] = [
  {
    name: "lc-computing.com",
    summary: "Personal portfolio website",
    skills: ["React", "JavaScript", "AWS", "CSS"],
    description: (
      <>
        <p>
          This website was a project born out of a hatred for boring CVs. I had
          no motivation to create one because there was no opportunity for
          creativity or expression. I found a website where I could play with
          techniques and utilise my favourite tools at any given time was a more
          appropriate route for me to follow.
        </p>
        <p>
          I ended up making a CV anyway because there it isn't really a choice.
          Oh well. Enjoy looking at some of the frontend techniques I am
          enjoying at the moment.
        </p>
        <p>
          The site is deployed as a static S3 site and utilises Route 53 for DNS
          routing from the registered domain name.
        </p>
      </>
    ),
  },
  {
    name: "StartupGradJobs",
    summary: "Jobseeking website for entry-level candidates",
    skills: ["React", "NodeJS", "CSS", "NextJS"],
    description: (
      <>
        <p>
          StartupGradJobs is a project I currently work on with fellow software
          engineer Cameron. It began as a side project of his which I joined to
          bring a student's perspective and to give myself some experience
          working directly with a more senior colleague.
        </p>
        <p>
          Since joining, I have taken on more development responsibilities as
          Cam focuses more on the business side of operations. This has allowed
          me to use my initiative to add and remove features where appropriate,
          but also forces me to manage the maintainability of the codebase.
        </p>
        <p>
          Currently at over 1,000 signups, we hope to continue growing the site
          to provide exciting roles for students and career switchers.
        </p>
      </>
    ),
  },
  {
    name: "Component library",
    summary: "Component library for internal use",
    skills: ["React", "JavaScript", "CSS", "Bootstrap", "Storybook"],
    description: (
      <>
        <p>
          During my part-time software developer role, I have taken on a
          front-end focus. Part of this focus includes collaborating in a small
          team to update and maintain the company's internal component library.
          The aim of this is to create a uniform identity for the organisation's
          different projects and increase development velocity through easily
          reusable building blocks.
        </p>
        <p>
          So far, I have been involved in adding features to components and
          upgrading from Storybook 6 to Storybook 7. The benefits of version 7
          are a more user-friendly layout, less boilerplate code and more
          maintainable docs. My work on upgrading has included:
          <ul>
            <li>
              Troubleshooting a broken codemod file to automate the migration
              process and save countless hours of work
            </li>
            <li>
              Updating existing syntax to match the new best-practice guidance
              for maintainability
            </li>
            <li>
              Converting to autodocs to reduce unnecessary codebase congestion
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    name: "Business excel tool",
    summary: "Internal tool to automate spreadsheet processes",
    skills: ["React", "JavaScript", "Java", "AWS", "CSS", "Jenkins"],
    description: (
      <>
        <p>
          During my 2023 summer internship, I joined a team of interns to create
          a tool which addressed a major business pain-point for multiple users.
          The existing system relied on manual copying and pasting of
          information between spreadsheets which introduced the risk of errors
          which would feed into numerous business pipelines which involved
          payment and scheduling at the busiest time for the company.
        </p>
        <p>
          Our solution was to design, create and deploy a web application
          composed of a user-friendly React frontend and an EC2-deployed Java
          Spring Boot backend. The software allowed the upload of spreadsheets
          from different business areas which would be combined and stored in an
          AWS RDS database. This could then be downloaded to a spreadsheet in a
          format which integrated with existing pipelines to allow for a
          seamless transition.
        </p>
      </>
    ),
  },
  {
    name: "University final project",
    summary: "Barcode scanner module and accompanying website",
    skills: ["React", "JavaScript", "Python", "CSS", "NextJS", "NodeJS"],
    description: (
      <>
        <p>
          My final year university project is a hardware and software solution
          designed for a client's pantry. The intention is to create a product
          which will allow him to scan products in and out and check stock
          levels through an accompanying website. The project involves
          interviewing, collaborating with and presenting a final product to a
          client within a strict timeframe.
        </p>
        <p>
          The solution is based around existing experience and the demands of
          the task. The hardware is created with Raspberry Pi components running
          a Python script to send barcode information to an API running on
          NodeJS. This API checks various databases for product information and
          updates the stored stock levels. The user can then access a NextJS
          website in order to check, change and add products as needed.
        </p>
      </>
    ),
  },
  {
    name: "University first year group project",
    summary: "Fantasy stock trading web application",
    skills: ["Python", "CSS", "Bootstrap"],
    description: (
      <>
        <p>
          During my first year at university, we were placed in groups of 6-ish
          with the freedom to create whatever application we wanted. This was
          definitely the deep end for me with no prior experience of team
          development.
        </p>
        <p>
          The project encompassed the entire process from discussing concepts to
          deploying the finished product, challenging us to collaborate and work
          together with vastly different experience levels. For me, I had never
          used Python Django to create a web application, leading to me reaching
          out for help from teammates who happily taught me what they knew. The
          final product was well received at the project fair, with numerous
          students creating accounts and using the game.
        </p>
      </>
    ),
  },
];

const skillsArray = [
  {
    icon: FaReact,
    name: "React",
  },
  {
    icon: FaNode,
    name: "NodeJS",
  },
  {
    icon: FaJs,
    name: "JavaScript",
  },
  {
    icon: FaJava,
    name: "Java",
  },
  {
    icon: FaPython,
    name: "Python",
  },
  {
    icon: FaAws,
    name: "AWS",
  },
  {
    icon: FaCss3Alt,
    name: "CSS",
  },
  {
    icon: FaBootstrap,
    name: "Bootstrap",
  },
  {
    icon: FaJenkins,
    name: "Jenkins",
  },
  {
    icon: SiStorybook,
    name: "Storybook",
  },
  {
    icon: SiNextdotjs,
    name: "NextJS",
  },
] as const;

const itemVariants = {
  visible: {
    opacity: 1,
    transform: "translateX(0px)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      duration: 500,
    },
  },
  hidden: {
    opacity: 0,
    transform: "translateX(-60px)",
  },
};

interface props {
  navbarHeight: number;
  mobile: boolean;
}

const Projects = ({ navbarHeight, mobile }: props) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const ref = useRef<any>(null);
  const isInView = useInView(ref, { once: true });

  const getProjectBoxPosition = (
    currentIndex: number,
    projectIndex: number
  ) => {
    if (currentIndex === projectIndex) return "0";
    else if (currentIndex > projectIndex) return "-100cqw";
    else return "100cqw";
  };

  return (
    <Container
      style={{
        alignItems: "center",
        display: "flex",
        position: "relative",
        paddingBottom: "10dvh",
        maxWidth: "1200px",
        flexDirection: "column",
        scrollSnapAlign: "center",
        height: "100dvh",
        paddingTop: -navbarHeight,
      }}
    >
      <h1 className="sectionTitle">
        <a style={{ top: navbarHeight, position: "absolute" }} id="skills"></a>
        Projects
      </h1>
      <motion.div
        ref={ref}
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          height: "100%",
          containerType: "size",
        }}
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.05,
            },
          },
          hidden: {},
        }}
      >
        <div className="projectsCarousel">
          <div className="carouselContent">
            {projectsArray.map((project, index) => (
              <ProjectBox
                project={project}
                position={getProjectBoxPosition(currentProjectIndex, index)}
                key={index}
              />
            ))}
            <div className="fadeBottom"></div>
          </div>
          <div className="carouselControls">
            <FaChevronLeft
              className="carouselControlButton"
              onClick={() =>
                setCurrentProjectIndex(Math.max(currentProjectIndex - 1, 0))
              }
              style={
                currentProjectIndex === 0
                  ? { opacity: 0, pointerEvents: "none" }
                  : {}
              }
            />
            <FaChevronRight
              className="carouselControlButton"
              onClick={() =>
                setCurrentProjectIndex(
                  Math.min(currentProjectIndex + 1, projectsArray.length - 1)
                )
              }
              style={
                currentProjectIndex === projectsArray.length - 1
                  ? { opacity: 0, pointerEvents: "none" }
                  : {}
              }
            />
          </div>
        </div>
        {skillsArray.map((skill, i) => (
          <SkillItem
            key={i}
            skill={skill}
            active={projectsArray[currentProjectIndex].skills.includes(
              skill.name
            )}
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </Container>
  );
};

export default Projects;
