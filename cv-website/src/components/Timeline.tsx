import { Container } from "react-bootstrap";
import TimelineItem from "./TimelineItem";

export interface position {
    company: string;
    role: string;
    startDate: Date;
    endDate?: Date;
    details?: string[];
}

const timelineArray: position[] = [
    {
        company: "StartupGradJobs",
        role: "Founding Engineer",
        startDate: new Date(2023, 2, 1),
        endDate: new Date(),
        details: [
            "Acted as primary developer on a ground-up job website",
            "Utilised UX research tools to increase signup conversion rate",
            "Worked under pressure to hotfix bugs soon after launch",
            "Discussed business plans to maximise early growth"
        ]
    },
    {
        company: "Pearson",
        role: "Software Developer Intern",
        startDate: new Date(2023, 5, 1),
        endDate: new Date(2023, 7, 1),
        details: [
            "Negotiated with key stakeholders to develop an internal tooling web app",
            "Acted on user feedback to ensure the product met requirements",
            "Communicated with project managers to discuss development progress/issues",
            "Presented my contributions to upper management with positive reception"
        ]
    },
    {
        company: "Auto Trader",
        role: "Work Experience",
        startDate: new Date(2023, 3, 1),
        details: [
            "Held meetings across different departments to cover many disciplines",
            "Discussed the importance of data-driven design choices",
            "Participated in pair-programming to develop a component for production",
            "Gained first-hand experience of the importance of team meetings"
        ]
    },
    {
        company: "Diebold Nixdorf",
        role: "Shadow Cloud Architect",
        startDate: new Date(2023, 4, 1),
        endDate: new Date(2023, 10, 1),
        details: [
            "Worked with a senior cloud architect to see how cloud services are utilised in financial transactions",
            "Encountered CI/CD technologies such as Jenkins and Terraform",
            "Expanded my understanding of the benefits of cloud services beyond the curriculum"
        ]
    },
]

const Timeline = () => {
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
            <h1 style={{ width: "100%", textAlign: "left", fontWeight: "bold", borderBottom: "2px solid" }}>My journey</h1>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "10vh",
                borderLeft: "5px solid #bdc3c7",
            }}>
                {timelineArray.map((position, i) => 
                    <TimelineItem 
                        position={position}
                        // placement={(new Date().getDate() - timelineArray[timelineArray.length-1].endDate.getDate())}
                    />
                )}
                {/* {skillsArray.map((skill, i) => 
                    <SkillItem
                        key={i}
                        icon={<skill.icon style={{ width: "100%", height: "100%", cursor: "pointer" }} />}
                        popover={{ name: skill.name, uses: skill.uses }}
                        globalPopover={popover}
                        setPopover={setPopover}
                    />
                )} */}
            </div>
        </Container>
    )
}

export default Timeline;