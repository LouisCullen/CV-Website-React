import { Container } from "react-bootstrap";
import { FaAws, FaBootstrap, FaCss3Alt, FaJava, FaJenkins, FaJs, FaNode, FaPython, FaReact } from "react-icons/fa";
import SkillItem from "./SkillItem";
import { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";

export interface skill {
    icon: IconType;
    name: string;
    uses: string[];
}

const skillsArray: skill[] = [
    {
        icon: FaReact,
        name: "React",
        uses: [
            "7-month part-time role",
            "Internship",
            "Personal projects"
        ]
    },
    {
        icon: FaNode,
        name: "NodeJS",
        uses: [
            "7-month part-time role",
            "Personal projects"
        ]
    },
    {
        icon: FaJs,
        name: "JavaScript",
        uses: [
            "Personal projects",
            "University projects"
        ]
    },
    {
        icon: FaJava,
        name: "Java",
        uses: [
            "Internship",
            "University projects"
        ]
    },
    {
        icon: FaPython,
        name: "Python",
        uses: [
            "Personal projects",
            "University projects"
        ]
    },
    {
        icon: FaAws,
        name: "AWS",
        uses: [
            "Internship",
            "Personal projects"
        ]
    },
    {
        icon: FaCss3Alt,
        name: "CSS",
        uses: [
            "7-month part-time role",
            "Internship",
            "Personal projects",
            "University projects"
        ]
    },
    {
        icon: FaBootstrap,
        name: "Bootstrap",
        uses: [
            "Personal projects",
            "University projects"
        ]
    },
    {
        icon: FaJenkins,
        name: "Jenkins",
        uses: [
            "Internship",
            "University projects",
            "Shadow cloud architect"
        ]
    },
]

const Skills = () => {
    const [popover, setPopover] = useState<string|null>(null);

    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const ref = useRef<any>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          },
          { rootMargin: "-30%" }
        );
        console.log(isIntersecting);
        observer.observe(ref.current);
        return () => observer.disconnect();
      }, []);

      useEffect(() => {
        if (isIntersecting) {
            setVisible(true);
        }
        console.log(isIntersecting);
      }, [isIntersecting]);

    return (
        <Container
            
            style={{ 
                alignItems: "center",
                display: "flex",
                position: "relative",
                paddingBottom: "10vh",
                maxWidth: "1200px",
                flexDirection: "column"
            }}
        >
            <h1 style={{ width: "100%", textAlign: "left", fontWeight: "bold", borderBottom: "2px solid" }}>Skills</h1>
            <div 
                ref={ref}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    width: "100%",
                    paddingTop: "5vh",
                    opacity: visible ? 100 : 0,
                    transitionDuration: "1.5s",
                    transitionTimingFunction: "ease-in-out"
                }}
            >
                {skillsArray.map((skill, i) => 
                    <SkillItem
                        key={i}
                        icon={<skill.icon style={{ width: "100%", height: "100%", cursor: "pointer" }} />}
                        popover={{ name: skill.name, uses: skill.uses }}
                        globalPopover={popover}
                        setPopover={setPopover}
                    />
                )}
            </div>
        </Container>
    )
}

export default Skills;