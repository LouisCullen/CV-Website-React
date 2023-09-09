import { Container } from "react-bootstrap";
import { FaJava, FaReact } from "react-icons/fa";
import SkillItem from "./SkillItem";

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
    }
]

const Skills = () => {
    return (
        <Container
            fluid
            style={{ 
                alignItems: "center",
                display: "flex",
                position: "relative",
                paddingBottom: "25vh"
            }}
        >
            {skillsArray.map((skill, i) => 
                <SkillItem
                    key={i}
                    index={i}
                    icon={<skill.icon style={{ width: "10vw", height: "10vw", cursor: "pointer" }} />}
                    name={skill.name}
                    uses={skill.uses}
                    salt={(i+Math.floor(Math.random()*8))*10+5}
                />
            )}
        </Container>
    )
}

export default Skills;