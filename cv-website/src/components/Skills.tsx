import { Container } from "react-bootstrap";
import { FaAws, FaCss3Alt, FaJava, FaJs, FaReact } from "react-icons/fa";
import SkillItem from "./SkillItem";
import { useState } from "react";

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
            "University projects"
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
    const [popover, setPopover] = useState<string|null>(null);
    
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
                {skillsArray.map((skill, i) => 
                    <SkillItem
                        key={i}
                        icon={<skill.icon style={{ width: "min(150px,15vw,100%)", height: "100%", cursor: "pointer" }} />}
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