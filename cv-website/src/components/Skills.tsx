import { Container } from "react-bootstrap";
import { FaAws, FaBootstrap, FaCss3Alt, FaJava, FaJenkins, FaJs, FaNode, FaPython, FaReact } from "react-icons/fa";
import SkillItem from "./SkillItem";
import { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { motion, useInView } from "framer-motion";

export interface skillInterface {
    icon: IconType;
    name: string;
    uses: string[];
}

const skillsArray: skillInterface[] = [
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
            "Personal + university projects"
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

interface props {
    navbarHeight: number;
    mobile: boolean;
}

const Skills = ({ navbarHeight, mobile }: props) => {
    const [next, setNext] = useState<skillInterface>(skillsArray[0]);
    const [current, setCurrent] = useState<skillInterface>(skillsArray[0]);
    const [transition, setTransition] = useState<boolean>(false);
    const ref = useRef<any>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        setTransition(true);
        setTimeout(() => {
            setCurrent(next);
            setTransition(false);
        }, 1100);
    }, [next]);

    return (
        <Container
            
            style={{ 
                alignItems: "center",
                display: "flex",
                position: "relative",
                paddingBottom: "10vh",
                maxWidth: "1200px",
                flexDirection: "column",
                scrollSnapAlign: "center",
                height: "100dvh",
                paddingTop: -navbarHeight
            }}
        >
            
            <h1 
                style={{ 
                    width: "100%", 
                    textAlign: "left", 
                    fontWeight: "bold", 
                    borderBottom: "2px solid", 
                    marginTop: "2rem", 
                    marginBottom: "2rem"
                }}
            >
                <a style={{ top: navbarHeight, position: "absolute" }} id="skills"></a>
                Skills
            </h1>
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
                    height: "100%",
                    containerType: "size",
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
                        skill={skill}
                        globalPopover={next}
                        setPopover={setNext}
                        variants={itemVariants}
                    />
                )}
                <motion.div
                    variants={itemVariants}
                    style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden"
                    }}
                >
                    <div
                        style={{
                            flexGrow: mobile ? 1 : 0,
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                position: "relative",
                                width: "max(20cqh, 14cqw)", 
                                height: "max(20cqh, 14cqw)",
                                marginRight: "max(2cqh, 5cqh)",
                                containerType: "size",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <motion.div
                                animate={transition ? "motion" : "static"}
                                variants={{
                                    motion: {
                                        top: 0,
                                        transition: {
                                            type: "spring",
                                            duration: "1s"
                                        }
                                    },
                                    static: {
                                        top: "-200cqh",
                                        transition: {
                                            duration: 0
                                        }
                                    }
                                }}
                                style={{
                                    position: "absolute",
                                    width: "90%", 
                                    height: "90%", 
                                }}
                            >
                                <next.icon 
                                    style={{ 
                                        width: "100%",
                                        height: "100%",
                                        cursor: "pointer", 
                                        color: "#bdc3c7"
                                    }}
                                />
                            </motion.div>
                            <motion.div
                                animate={transition ? "motion" : "static"}
                                variants={{
                                    motion: {
                                        top: "200cqh",
                                        transition: {
                                            type: "spring",
                                            duration: "1s"
                                        }
                                    },
                                    static: {
                                        top: 0,
                                        transition: {
                                            duration: 0
                                        }
                                    }
                                }}
                                style={{
                                    position: "absolute",
                                    width: "90%", 
                                    height: "90%", 
                                }}
                            >
                                <current.icon 
                                    style={{ 
                                        width: "100%",
                                        height: "100%",
                                        cursor: "pointer", 
                                        color: "#bdc3c7"
                                    }}
                                />
                            </motion.div>
                        </div>
                        <div
                            style={{
                                width: "max(26cqh, 30cqw)",
                                height: "max(35cqh, 25cqw)",
                                flexGrow: 1,
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                containerType: "size",
                                overflow: "hidden"
                            }}
                        >
                            <motion.div
                                id="nextInfo"
                                animate={transition ? "motion" : "static"}
                                variants={{
                                    motion: {
                                        left: 0,
                                        transition: {
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 20,
                                            duration: "1s"
                                        }
                                    },
                                    static: {
                                        left: "200cqw",
                                        transition: {
                                            duration: 0
                                        }
                                    }
                                }}
                                style={{
                                    width: "100%",
                                    position: "absolute"
                                }}
                            >
                                <h1
                                    style={{
                                        fontWeight: "bold"
                                    }}
                                >{next.name}</h1>
                                <ul>
                                    {next.uses.map((use, index) =>
                                        <li
                                            key={index}
                                        >
                                            {use}
                                        </li>
                                    )}
                                </ul>
                            </motion.div>
                            <motion.div
                                id="currentInfo"
                                animate={transition ? "motion" : "static"}
                                variants={{
                                    motion: {
                                        left: "-200cqw",
                                        transition: {
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 20,
                                            duration: "1s"
                                        }
                                    },
                                    static: {
                                        left: 0,
                                        transition: {
                                            duration: 0
                                        }
                                    }
                                }}
                                style={{
                                    width: "100%",
                                    position: "absolute"
                                }}
                            >
                                <h1
                                    style={{
                                        fontWeight: "bold"
                                    }}
                                >{current.name}</h1>
                                <ul>
                                    {current.uses.map((use, index) =>
                                        <li
                                            key={index}
                                        >
                                            {use}
                                        </li>
                                    )}
                                </ul>
                            </motion.div>
                        
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </Container>
    )
}

export default Skills;