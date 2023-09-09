import { Container } from "react-bootstrap";
import { FaAws, FaCss3Alt, FaJava, FaJs, FaReact, FaTimes } from "react-icons/fa";
import SkillItem from "./SkillItem";
import { useRef, useState } from "react";

interface popover {
    name: string;
    uses: string[];
}

const skillsArray = [
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
        icon: FaJava,
        name: "Java",
        uses: [
            "Internship",
            "University projects"
        ]
    },
    {
        icon: FaJs,
        name: "JavaScript",
        uses: [
            "Personal projects",
            "University Projects"
        ]
    },
    {
        icon: FaAws,
        name: "Amazon Web Services",
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
]

const Skills = () => {
    const popoverRef = useRef<HTMLDivElement>(null);
    const [popover, setPopover] = useState<popover|null>(null);
    
    return (
        <Container
            style={{ 
                alignItems: "center",
                display: "flex",
                position: "relative",
                paddingBottom: "25vh",
                maxWidth: "1200px",
                flexDirection: "column"
            }}
        >
            <h1 style={{ width: "100%", textAlign: "left", fontWeight: "bold", borderBottom: "2px solid" }}>Skills</h1>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center"
            }}>
                <div
                    ref={popoverRef}
                    style={{
                        maxHeight: popover ? "100vh" : 0,
                        overflow: "hidden",
                        background: "#16181e",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        padding: popover ? "2em" : 0,
                        transitionDuration: "0.75s",
                        zIndex: 1,
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column"
                    }}
                    tabIndex={0}
                    onBlur={() => setPopover(null)}
                    onFocus={() => console.log("focused")}
                >
                    <FaTimes style={{ position: "absolute", right: "1em", top: "1em", cursor: "pointer"}} onClick={() => setPopover(null)}/>
                    <h2 style={{ fontWeight: "bold" }}>{popover?.name}</h2>
                    <ul style={{ textAlign: "left" }}>
                        {popover?.uses.map((use, i) => (
                            <li key={i}>{use}</li>
                        ))}
                    </ul>
                </div>
                {skillsArray.map((skill, i) => 
                    <SkillItem
                        key={i}
                        icon={<skill.icon style={{ width: "min(150px,15vw)", height: "min(150px,15vw)", cursor: "pointer" }} />}
                        popover={{ name: skill.name, uses: skill.uses }}
                        setPopover={setPopover}
                        popoverRef={popoverRef}
                    />
                )}
            </div>
        </Container>
    )
}

export default Skills;