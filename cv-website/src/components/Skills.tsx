import { Container } from "react-bootstrap";
import { FaAws, FaBootstrap, FaCss3Alt, FaJava, FaJenkins, FaJs, FaNode, FaPython, FaReact } from "react-icons/fa";
import SkillItem from "./SkillItem";
import { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { motion, useInView } from "framer-motion";

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

const itemVariants = {
    visible: { 
        opacity: 1, 
        x: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 24,
            duration: 1000
        }
    },
    hidden: { 
        opacity: 0, 
        x: -100 
    }
}

const Skills = () => {
    const [popover, setPopover] = useState<string|null>(null);
    const ref = useRef<any>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Container
            
            style={{ 
                alignItems: "center",
                display: "flex",
                position: "relative",
                paddingBottom: "10vh",
                maxWidth: "1200px",
                flexDirection: "column",
                scrollSnapAlign: "start",
                height: "100vh",
                paddingTop: "2rem"
            }}
        >
            <h1 style={{ width: "100%", textAlign: "left", fontWeight: "bold", borderBottom: "2px solid" }}>Skills</h1>
            <motion.div 
                ref={ref}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    width: "100%",
                    paddingTop: "5vh",
                    alignItems: "center",
                    height: "100%"
                    // opacity: visible ? 100 : 0,
                    // transitionDuration: "1.5s",
                    // transitionTimingFunction: "ease-in-out"
                }}
                animate={isInView ? "visible" : "hidden"}
                variants={{
                    visible: {
                        transition: {
                            delayChildren: 0.5,
                            staggerChildren: 0.1
                        }
                    },
                    hidden: {}
                }}
            >
                {skillsArray.map((skill, i) => 
                    <SkillItem
                        key={i}
                        icon={<skill.icon style={{ width: "100%", height: "100%", cursor: "pointer" }} />}
                        popover={{ name: skill.name, uses: skill.uses }}
                        globalPopover={popover}
                        setPopover={setPopover}
                        variants={itemVariants}
                    />
                )}
            </motion.div>
        </Container>
    )
}

export default Skills;